import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Bell } from 'lucide-react';

function Header() {
  const location = useLocation();
  const { currentUser } = useAuth();

  const getPageTitle = () => {
    return <span className="text-[#5db694]">Dashboard</span>;
  };

  const getUserInitials = () => {
    if (currentUser?.displayName) {
      return currentUser.displayName.split(' ').map(name => name[0]).join('').toUpperCase();
    }
    if (currentUser?.email) {
      return currentUser.email.substring(0, 2).toUpperCase();
    }
    return 'BA';
  };

  const getUserName = () => {
    return currentUser?.displayName || 'User Email';
  };

  const getUserEmail = () => {
    return currentUser?.email || 'sufiyan@devxcript.com';
  };

  return (
    <header className="bg-white border-b border-gray-200 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 md:py-5 lg:py-6">
      <div className="flex items-center justify-between w-full">
        {/* Left side - Page Title */}
        <div className="flex-1 min-w-0 pr-4">
          <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-800 truncate text-center sm:text-left">
            {getPageTitle()}
          </h2>

        </div>

        {/* Right side - Notifications and User Profile */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
          {/* Notification Bell */}
          <div className="relative p-1 sm:p-2 hover:bg-gray-50 rounded-full transition-colors duration-200">
            <Bell className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 text-gray-600 hover:text-gray-800 transition-colors" />
            <div
              className="absolute top-0 right-0 sm:top-1 sm:right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ring-2 ring-white"
              style={{ backgroundColor: '#66C5A0' }}
            ></div>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-3 lg:space-x-4">
            {/* Avatar */}
            <div
              className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white border-2 rounded-full flex items-center justify-center hover:shadow-md transition-shadow duration-200 cursor-pointer flex-shrink-0"
              style={{ borderColor: '#66C5A0' }}
            >
              <span
                className="font-semibold text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base select-none"
                style={{ color: '#66C5A0' }}
              >
                {getUserInitials()}
              </span>
            </div>

            {/* User Info - Hidden on very small screens, shown on sm+ */}
            <div className="hidden xs:hidden sm:block min-w-0 flex-1">
              <p className="text-xs sm:text-sm md:text-base lg:text-base font-medium text-gray-900 truncate max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48">
                {getUserName()}
              </p>
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-500 truncate max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48">
                {getUserEmail()}
              </p>
            </div>

            {/* Mobile User Info - Shows on hover/tap for xs screens */}
            <div className="xs:block sm:hidden group relative">
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-max">
                <p className="text-sm font-medium text-gray-900 whitespace-nowrap">
                  {getUserName()}
                </p>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  {getUserEmail()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile User Info Bar - Alternative approach for very small screens */}
      <div className="block xs:hidden sm:hidden mt-2 pt-2 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 truncate">
              {getUserName()}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {getUserEmail()}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;