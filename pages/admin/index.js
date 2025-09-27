import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AdminLayout from "../components/AdminLayout";
import { FaUpload, FaTrash, FaEdit, FaEye, FaSave, FaTimes, FaBlog, FaVideo, FaFile } from "react-icons/fa";
import Image from "next/image";
import { blogAPI, materialsAPI, videosAPI, fileAPI } from "../../lib/adminAPI";
import { supabase, isSupabaseConfigured } from "../../lib/supabase";
import AdminAuth from "../components/AdminAuth";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('blog');
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    imageFile: null,
    slug: "",
    published: false,
    featured: false,
    tags: "",
    type: "PDF",
    file: null,
    previewFile: null,
    videoId: "",
    category: "Tutorial"
  });

  useEffect(() => {
    loadItems();
    
    // Set up real-time subscription only if Supabase is configured
    if (isSupabaseConfigured && supabase) {
      const tableName = activeTab === 'blog' ? 'blog_posts' : activeTab === 'materials' ? 'materials' : 'videos';
      
      const subscription = supabase
        .channel(`${activeTab}-changes`)
        .on('postgres_changes', 
          { 
            event: '*', 
            schema: 'public', 
            table: tableName 
          }, 
          (payload) => {
            console.log(`${activeTab} change received!`, payload);
            loadItems();
          })
        .subscribe();

      return () => {
        subscription.unsubscribe();
      };
    }
  }, [activeTab]);

  const loadItems = async () => {
    setLoading(true);
    try {
      let data = [];
      if (activeTab === 'blog') {
        data = await blogAPI.getAll();
      } else if (activeTab === 'materials') {
        data = await materialsAPI.getAll();
      } else if (activeTab === 'videos') {
        data = await videosAPI.getAll();
      }
      setItems(data);
    } catch (error) {
      console.error(`Error loading ${activeTab}:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (files ? files[0] : value)
    }));

    // Auto-generate slug from title for blog posts
    if (name === 'title' && activeTab === 'blog') {
      const slug = value.toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (activeTab === 'blog') {
        let imageUrl = formData.image;
        
        if (formData.imageFile) {
          const { publicUrl } = await fileAPI.uploadFile(formData.imageFile, 'blog-images');
          imageUrl = publicUrl;
        }

        const postData = {
          title: formData.title,
          excerpt: formData.description,
          content: formData.content,
          image: imageUrl,
          slug: formData.slug,
          published: formData.published,
          featured: formData.featured,
          tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
          publish_date: formData.published ? new Date().toISOString() : null
        };

        if (editingItem) {
          await blogAPI.update(editingItem.id, postData);
        } else {
          await blogAPI.create(postData);
        }
      } else if (activeTab === 'materials') {
        let fileUrl = "";
        let imageUrl = "";
        let previewUrl = "";
        let fileName = "";
        let fileSize = 0;

        if (formData.file) {
          const fileResult = await fileAPI.uploadFile(formData.file, 'materials');
          fileUrl = fileResult.publicUrl;
          fileName = fileResult.fileName;
          fileSize = formData.file.size;
        }

        if (formData.imageFile) {
          const imageResult = await fileAPI.uploadFile(formData.imageFile, 'material-images');
          imageUrl = imageResult.publicUrl;
        }

        if (formData.previewFile) {
          const previewResult = await fileAPI.uploadFile(formData.previewFile, 'material-images');
          previewUrl = previewResult.publicUrl;
        }

        const materialData = {
          title: formData.title,
          description: formData.description,
          type: formData.type,
          file_url: fileUrl || editingItem?.file_url,
          file_name: fileName || editingItem?.file_name,
          file_size: fileSize || editingItem?.file_size,
          image_url: imageUrl || editingItem?.image_url,
          preview_url: previewUrl || editingItem?.preview_url,
          is_active: true
        };

        if (editingItem) {
          await materialsAPI.update(editingItem.id, materialData);
        } else {
          await materialsAPI.create(materialData);
        }
      } else if (activeTab === 'videos') {
        let videoId = formData.videoId;
        if (formData.videoId.includes('youtube.com') || formData.videoId.includes('youtu.be')) {
          const url = new URL(formData.videoId);
          videoId = url.searchParams.get('v') || url.pathname.split('/').pop();
        }

        const videoData = {
          title: formData.title,
          description: formData.description,
          videoId: videoId,
          thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          category: formData.category,
          is_active: true
        };

        if (editingItem) {
          await videosAPI.update(editingItem.id, videoData);
        } else {
          await videosAPI.create(videoData);
        }
      }

      await loadItems();
      resetForm();
    } catch (error) {
      console.error(`Error saving ${activeTab}:`, error);
      
      // Show specific error message
      let errorMessage = `Error saving ${activeTab}. `;
      
      if (error.message.includes('Supabase not configured')) {
        errorMessage += 'Please configure your Supabase environment variables.';
      } else if (error.message.includes('permission denied')) {
        errorMessage += 'Permission denied. Check your database policies.';
      } else if (error.message.includes('duplicate key')) {
        errorMessage += 'This item already exists. Try a different title or slug.';
      } else if (error.message.includes('violates foreign key')) {
        errorMessage += 'Invalid reference. Please check your data.';
      } else if (error.message.includes('Could not find the') && error.message.includes('column')) {
        errorMessage += 'Database schema is missing columns. Run the migration script in Supabase SQL Editor.';
      } else if (error.message.includes('relation') && error.message.includes('does not exist')) {
        errorMessage += 'Database tables are missing. Run the database schema script.';
      } else {
        errorMessage += `Details: ${error.message}`;
      }
      
      alert(errorMessage);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    if (activeTab === 'blog') {
      setFormData({
        title: item.title,
        description: item.excerpt,
        content: item.content,
        image: item.image,
        imageFile: null,
        slug: item.slug,
        published: item.published,
        featured: item.featured,
        tags: Array.isArray(item.tags) ? item.tags.join(', ') : item.tags || ''
      });
    } else if (activeTab === 'materials') {
      setFormData({
        title: item.title,
        description: item.description,
        type: item.type,
        file: null,
        imageFile: null,
        previewFile: null
      });
    } else if (activeTab === 'videos') {
      setFormData({
        title: item.title,
        description: item.description,
        videoId: item.videoId,
        thumbnail: item.thumbnail,
        category: item.category
      });
    }
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm(`Are you sure you want to delete this ${activeTab.slice(0, -1)}?`)) {
      try {
        if (activeTab === 'blog') {
          await blogAPI.delete(id);
        } else if (activeTab === 'materials') {
          await materialsAPI.delete(id);
        } else if (activeTab === 'videos') {
          await videosAPI.delete(id);
        }
        await loadItems();
      } catch (error) {
        console.error(`Error deleting ${activeTab}:`, error);
        alert(`Error deleting ${activeTab}. Please try again.`);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      content: "",
      image: "",
      imageFile: null,
      slug: "",
      published: false,
      featured: false,
      tags: "",
      type: "PDF",
      file: null,
      previewFile: null,
      videoId: "",
      category: "Tutorial"
    });
    setShowForm(false);
    setEditingItem(null);
  };

  const tabs = [
    { id: 'blog', label: 'Blog Posts', icon: FaBlog },
    { id: 'materials', label: 'Materials', icon: FaFile },
    { id: 'videos', label: 'Videos', icon: FaVideo }
  ];

  return (
    <AdminLayout title="Content Management">
      <div className="space-y-6">
        {/* Configuration Warning */}
        {!isSupabaseConfigured && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Supabase Not Configured
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Please configure your Supabase environment variables in <code>.env.local</code>:
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    <li>NEXT_PUBLIC_SUPABASE_URL</li>
                    <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
                    <li>SUPABASE_SERVICE_ROLE_KEY</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {activeTab === 'blog' ? 'Blog Posts' : activeTab === 'materials' ? 'Materials' : 'Videos'}
            </h1>
            <p className="text-gray-600 mt-1">
              Manage your {activeTab === 'blog' ? 'blog posts' : activeTab === 'materials' ? 'learning materials' : 'video content'}
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <FaUpload className="w-4 h-4" />
            <span>Add {activeTab === 'blog' ? 'Post' : activeTab === 'materials' ? 'Material' : 'Video'}</span>
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  {editingItem ? `Edit ${activeTab.slice(0, -1)}` : `Add New ${activeTab === 'blog' ? 'Blog Post' : activeTab === 'materials' ? 'Material' : 'Video'}`}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Common fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {activeTab === 'blog' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Slug
                      </label>
                      <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  )}

                  {activeTab === 'materials' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="PDF">PDF</option>
                        <option value="ZIP">ZIP</option>
                        <option value="DOC">DOC</option>
                        <option value="PPT">PPT</option>
                      </select>
                    </div>
                  )}

                  {activeTab === 'videos' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Tutorial">Tutorial</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Project">Project</option>
                        <option value="Review">Review</option>
                        <option value="News">News</option>
                      </select>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {activeTab === 'blog' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Content
                      </label>
                      <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        rows={10}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your blog post content here..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tags (comma-separated)
                      </label>
                      <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        placeholder="e.g., PCB, electronics, beginner"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </>
                )}

                {activeTab === 'videos' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      YouTube Video ID or URL
                    </label>
                    <input
                      type="text"
                      name="videoId"
                      value={formData.videoId}
                      onChange={handleInputChange}
                      placeholder="e.g., MsdJgEinb34 or https://youtube.com/watch?v=MsdJgEinb34"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Enter YouTube video ID or full URL
                    </p>
                  </div>
                )}

                {/* File uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(activeTab === 'blog' || activeTab === 'materials') && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cover Image
                      </label>
                      <input
                        type="file"
                        name="imageFile"
                        onChange={handleInputChange}
                        accept="image/*"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required={!editingItem}
                      />
                    </div>
                  )}

                  {activeTab === 'materials' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Material File
                        </label>
                        <input
                          type="file"
                          name="file"
                          onChange={handleInputChange}
                          accept=".pdf,.zip,.doc,.docx,.ppt,.pptx"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required={!editingItem}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preview Image (Optional)
                        </label>
                        <input
                          type="file"
                          name="previewFile"
                          onChange={handleInputChange}
                          accept="image/*"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </>
                  )}
                </div>

                {activeTab === 'blog' && (
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="published"
                        checked={formData.published}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm font-medium text-gray-700">Published</span>
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm font-medium text-gray-700">Featured</span>
                    </label>
                  </div>
                )}

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                  >
                    <FaSave className="w-4 h-4" />
                    <span>{editingItem ? 'Update' : 'Create'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Items List */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-semibold">
                All {activeTab === 'blog' ? 'Blog Posts' : activeTab === 'materials' ? 'Materials' : 'Videos'} ({items.length})
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {activeTab === 'blog' ? 'Post' : activeTab === 'materials' ? 'Material' : 'Video'}
                    </th>
                    {activeTab === 'blog' && (
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    )}
                    {activeTab === 'materials' && (
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                    )}
                    {activeTab === 'videos' && (
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                    )}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {activeTab === 'blog' ? 'Views' : activeTab === 'materials' ? 'Downloads' : 'Views'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-16">
                            {activeTab === 'blog' && (
                              <Image
                                src={item.image || "/M1.png"}
                                alt={item.title}
                                width={64}
                                height={48}
                                className="h-12 w-16 object-cover rounded"
                              />
                            )}
                            {activeTab === 'materials' && (
                              <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
                                <FaFile className="w-6 h-6 text-gray-500" />
                              </div>
                            )}
                            {activeTab === 'videos' && (
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="h-12 w-20 object-cover rounded"
                              />
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {activeTab === 'blog' ? item.slug : activeTab === 'materials' ? item.description : item.duration}
                            </div>
                          </div>
                        </div>
                      </td>
                      {activeTab === 'blog' && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              item.published 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {item.published ? 'Published' : 'Draft'}
                            </span>
                            {item.featured && (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Featured
                              </span>
                            )}
                          </div>
                        </td>
                      )}
                      {activeTab === 'materials' && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {item.type}
                          </span>
                        </td>
                      )}
                      {activeTab === 'videos' && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            {item.category}
                          </span>
                        </td>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {activeTab === 'blog' ? item.views : activeTab === 'materials' ? item.downloads : item.views}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(item.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="text-blue-600 hover:text-blue-900"
                            title="Edit"
                          >
                            <FaEdit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

const AdminDashboardWithAuth = () => {
  return (
    <AdminAuth>
      <AdminDashboard />
    </AdminAuth>
  );
};

export default AdminDashboardWithAuth;