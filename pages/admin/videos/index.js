import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AdminLayout from "../../components/AdminLayout";
import { FaVideo, FaTrash, FaEdit, FaEye, FaPlay, FaYoutube, FaTimes } from "react-icons/fa";
import { videosAPI } from "../../../lib/adminAPI";
import AdminAuth from "../../components/AdminAuth";

const VideosAdmin = () => {
  const [videos, setVideos] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoId: "",
    thumbnail: "",
    category: "Tutorial"
  });

  // Fetch videos from Supabase
  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const data = await videosAPI.getAll();
      setVideos(data);
    } catch (error) {
      console.error('Error loading videos:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
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

      if (editingVideo) {
        await videosAPI.update(editingVideo.id, videoData);
      } else {
        await videosAPI.create(videoData);
      }

      await loadVideos(); // Reload videos after update
      setShowUploadForm(false);
      setEditingVideo(null);
      setFormData({
        title: "",
        description: "",
        videoId: "",
        thumbnail: "",
        category: "Tutorial"
      });
    } catch (error) {
      console.error('Error saving video:', error);
    }
  };

  const handleEdit = (video) => {
    setEditingVideo(video);
    setFormData({
      title: video.title,
      description: video.description,
      videoId: video.videoId,
      thumbnail: video.thumbnail,
      category: video.category
    });
    setShowUploadForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this video?")) {
      try {
        await videosAPI.delete(id);
        await loadVideos(); // Reload videos after deletion
      } catch (error) {
        console.error('Error deleting video:', error);
        alert('Error deleting video. Please try again.');
      }
    }
  };

  const getVideoEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <AdminLayout title="Videos Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Videos Management</h1>
            <p className="text-gray-600 mt-1">Manage YouTube video content</p>
          </div>
          <button
            onClick={() => setShowUploadForm(true)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
          >
            <FaVideo className="w-4 h-4" />
            <span>Add Video</span>
          </button>
        </div>

        {/* Upload Form Modal */}
        {showUploadForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  {editingVideo ? "Edit Video" : "Add New Video"}
                </h2>
                <button
                  onClick={() => {
                    setShowUploadForm(false);
                    setEditingVideo(null);
                    setFormData({
                      title: "",
                      description: "",
                      videoId: "",
                      thumbnail: "",
                      category: "Tutorial"
                    });
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Video Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter YouTube video ID or full URL
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="Tutorial">Tutorial</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Project">Project</option>
                    <option value="Review">Review</option>
                    <option value="News">News</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowUploadForm(false);
                      setEditingVideo(null);
                    }}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    {editingVideo ? "Update Video" : "Add Video"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <FaPlay className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-red-600 text-white rounded">
                    {video.category}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-black bg-opacity-75 text-white rounded">
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                  <span>{video.views} views</span>
                  <span>{new Date(video.created_at).toLocaleDateString()}</span>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => window.open(`https://youtube.com/watch?v=${video.videoId}`, '_blank')}
                      className="text-red-600 hover:text-red-700"
                      title="View on YouTube"
                    >
                      <FaYoutube className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleEdit(video)}
                      className="text-blue-600 hover:text-blue-700"
                      title="Edit"
                    >
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(video.id)}
                      className="text-red-600 hover:text-red-700"
                      title="Delete"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      // Preview video in modal
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
                      modal.innerHTML = `
                        <div class="bg-white rounded-lg p-4 w-full max-w-4xl mx-4">
                          <div class="flex justify-between items-center mb-4">
                            <h3 class="text-lg font-semibold">${video.title}</h3>
                            <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            </button>
                          </div>
                          <div class="aspect-video">
                            <iframe src="${getVideoEmbedUrl(video.videoId)}" class="w-full h-full rounded" frameborder="0" allowfullscreen></iframe>
                          </div>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className="text-green-600 hover:text-green-700"
                    title="Preview"
                  >
                    <FaEye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Videos Table View (Alternative) */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">All Videos ({videos.length})</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Video
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Upload Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {videos.map((video) => (
                  <tr key={video.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-20">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="h-12 w-20 object-cover rounded"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {video.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {video.duration}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        {video.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {video.views}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(video.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => window.open(`https://youtube.com/watch?v=${video.videoId}`, '_blank')}
                          className="text-red-600 hover:text-red-900"
                          title="View on YouTube"
                        >
                          <FaYoutube className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(video)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit"
                        >
                          <FaEdit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(video.id)}
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
      </div>
    </AdminLayout>
  );
};

const VideosAdminWithAuth = () => {
  return (
    <AdminAuth>
      <VideosAdmin />
    </AdminAuth>
  );
};

export default VideosAdminWithAuth;
