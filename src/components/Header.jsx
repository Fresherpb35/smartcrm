// src/components/layout/Header.jsx  (or wherever your Header is)
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, LogOut } from 'lucide-react';

const Header = ({ onToggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth data if needed
    // localStorage.removeItem('authToken');
    // sessionStorage.clear();
    
    navigate('/');
  };

  const handleNotificationsClick = () => {
    navigate('/notifications');   // ← redirects to notifications page
    // Alternative routes you might use:
    // navigate('/app/notifications');
    // navigate('/alerts');
    // navigate('/messages');
  };

  return (
    <header
      className="
        bg-white border-b border-gray-200
        fixed top-0 left-0 right-0
        z-30 lg:left-64
      "
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Hamburger - mobile only */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg focus:outline-none transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>

        {/* Search bar - hidden on mobile */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <input
            type="text"
            placeholder="Search anything..."
            className="
              w-full px-4 py-2 border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition-all duration-200
            "
          />
        </div>

        {/* Right-side icons */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Notifications - now clickable */}
          <button
            onClick={handleNotificationsClick}
            className="
              p-2 hover:bg-gray-100 rounded-lg relative 
              transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            aria-label="View notifications"
          >
            <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            {/* Red dot indicator */}
            <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="
              p-2 hover:bg-gray-100 rounded-lg 
              transition-colors focus:outline-none focus:ring-2 focus:ring-red-500
            "
            aria-label="Logout"
          >
            <LogOut className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;