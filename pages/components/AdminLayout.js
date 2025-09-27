import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaFileUpload,
  FaVideo,
  FaBlog,
  FaChartBar,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaHome,
  FaBars,
  FaTimes
} from "react-icons/fa";

const AdminLayout = ({ children, title = "Admin Panel" }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const adminMenuItems = [
    {
      id: "dashboard",
      title: "Content Management",
      icon: FaChartBar,
      href: "/admin",
    }
  ];

  const isActive = (href) => router.pathname === href;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-6">
          <div className="px-6 mb-6">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm"
            >
              <FaHome className="w-4 h-4" />
              <span>Back to Site</span>
            </Link>
          </div>

          <div className="px-3">
            {adminMenuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 mb-1 rounded-lg transition-colors ${isActive(item.href)
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
            <button className="flex items-center space-x-2 text-red-600 hover:text-red-700 w-full">
              <FaSignOutAlt className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <FaBars className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                Admin
              </span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
