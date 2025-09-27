import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AdminLayout from "../../components/AdminLayout";
import { FaUpload, FaFile, FaTrash, FaEdit, FaEye, FaDownload, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { materialsAPI, fileAPI } from "../../../lib/adminAPI";
import { supabase } from "../../../lib/supabase";
import AdminAuth from "../../components/AdminAuth";

const MaterialsAdmin = () => {
  const [materials, setMaterials] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "PDF",
    file: null,
    imageFile: null,
    previewFile: null
  });

  // Load materials from Supabase
  useEffect(() => {
    loadMaterials();
    
    // Set up real-time subscription
    const subscription = supabase
      .from('materials')
      .on('*', (payload) => {
        console.log('Material change received!', payload);
        loadMaterials(); // Reload materials when changes occur
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

  const loadMaterials = async () => {
    try {
      const data = await materialsAPI.getAll();
      setMaterials(data);
    } catch (error) {
      console.error('Error loading materials:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let fileUrl = "";
      let imageUrl = "";
      let previewUrl = "";
      let fileName = "";
      let fileSize = 0;

      // Upload files if provided
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
        file_url: fileUrl || editingMaterial?.file_url,
        file_name: fileName || editingMaterial?.file_name,
        file_size: fileSize || editingMaterial?.file_size,
        image_url: imageUrl || editingMaterial?.image_url,
        preview_url: previewUrl || editingMaterial?.preview_url,
        is_active: true
      };

      if (editingMaterial) {
        await materialsAPI.update(editingMaterial.id, materialData);
      } else {
        await materialsAPI.create(materialData);
      }

      await loadMaterials(); // Reload materials after update
      setEditingMaterial(null);
      setFormData({
        title: "",
        description: "",
        type: "PDF",
        file: null,
        imageFile: null,
        previewFile: null
      });
      setShowUploadForm(false);
    } catch (error) {
      console.error('Error saving material:', error);
      alert('Error saving material. Please try again.');
    }
  };

  const handleEdit = (material) => {
    setEditingMaterial(material);
    setFormData({
      title: material.title,
      description: material.description,
      type: material.type,
      file: null,
      imageFile: null,
      previewFile: null
    });
    setShowUploadForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this material?")) {
      try {
        await materialsAPI.delete(id);
        await loadMaterials(); // Reload materials after deletion
      } catch (error) {
        console.error('Error deleting material:', error);
        alert('Error deleting material. Please try again.');
      }
    }
  };

  return (
    <AdminLayout title="Materials Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Materials Management</h1>
            <p className="text-gray-600 mt-1">Upload and manage learning materials</p>
          </div>
          <button
            onClick={() => setShowUploadForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <FaUpload className="w-4 h-4" />
            <span>Upload Material</span>
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
                  {editingMaterial ? "Edit Material" : "Upload New Material"}
                </h2>
                <button
                  onClick={() => {
                    setShowUploadForm(false);
                    setEditingMaterial(null);
                    setFormData({
                      title: "",
                      description: "",
                      type: "PDF",
                      file: null,
                      imageFile: null,
                      previewFile: null
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    File Type
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
                    required={!editingMaterial}
                  />
                </div>

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
                    required={!editingMaterial}
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

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowUploadForm(false);
                      setEditingMaterial(null);
                    }}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {editingMaterial ? "Update Material" : "Upload Material"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Materials List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">All Materials ({materials.length})</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Material
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Downloads
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
                {materials.map((material) => (
                  <tr key={material.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <FaFile className="w-6 h-6 text-gray-500" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {material.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {material.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {material.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {material.downloads}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(material.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(material)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FaEdit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(material.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrash className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <FaEye className="w-4 h-4" />
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

const MaterialsAdminWithAuth = () => {
  return (
    <AdminAuth>
      <MaterialsAdmin />
    </AdminAuth>
  );
};

export default MaterialsAdminWithAuth;
