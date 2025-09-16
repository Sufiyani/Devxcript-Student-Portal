
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - Fixed positioned */}
      <Sidebar />
      
      {/* Main content area - Push content to the right on desktop */}
      <div className="lg:ml-64 min-h-screen">
        {/* Header - Normal positioning */}
        <Header />
        
        {/* Main content */}
        <main className="p-0">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
