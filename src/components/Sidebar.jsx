
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  User,
  Award,
  BookOpen,
  Grid3X3,
  ClipboardList,
  Menu,
  X
} from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: Grid3X3 },
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'Results', path: '/results', icon: ClipboardList },
    { name: 'Student Profile', path: '/profile', icon: User },
    { name: 'Attendance', path: '/attendance', icon: Award },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button - FIXED POSITION */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg border border-gray-200"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar - FIXED POSITION */}
      <div className={`
        fixed left-0 top-0 h-full bg-white shadow-lg border-r border-gray-200 z-40
        w-64 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Branding */}
        <div className="px-4 py-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#66C5A0' }}
            >
              <span className="text-white font-bold text-lg">DX</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">Internship</h1>
              <p className="text-xs sm:text-sm text-gray-600">Student Portal</p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="mt-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 140px)' }}>
          <div className="px-2 sm:px-4 space-y-1 sm:space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-gray-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={isActive ? { color: '#66C5A0' } : {}}
                >
                  <div className="flex items-center">
                    <Icon className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    {item.name}
                  </div>
                  {isActive && (
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: '#66C5A0' }}
                    ></div>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[10px] sm:text-xs text-gray-400 text-center">
            Developed By DevXcript
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;