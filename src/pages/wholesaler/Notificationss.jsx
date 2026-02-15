import { useState } from 'react';
import { X, CheckCheck, Circle } from 'lucide-react';

const Notifications = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Production Delay Alert',
      message: 'Line 3 is running 2 hours behind schedule due to a machine fault. Estimated recovery at 3:30 PM',
      read: false,
      type: 'alert'
    },
    {
      id: 2,
      title: 'Inventory Threshold Reached',
      message: 'Raw material "Aluminum Sheets" stock has fallen below the reorder level. Create a purchase order now',
      read: false,
      type: 'warning'
    },
    {
      id: 3,
      title: 'Preventive Maintenance Due',
      message: 'CNC Machine #12 is scheduled for service today. Log maintenance completion to avoid downtime.',
      read: false,
      type: 'info'
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Notifications Panel */}
      <div className={`
        fixed top-0 right-0 h-full bg-white shadow-2xl z-50
        w-full sm:w-96 md:w-[420px]
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Notifications</h2>
            {unreadCount > 0 && (
              <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={markAllAsRead}
              className="px-3 py-1.5 text-xs sm:text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
            >
              Mark as Read
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="overflow-y-auto h-[calc(100vh-73px)]">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center px-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <CheckCheck className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
              <p className="text-sm text-gray-500">You have no new notifications</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`
                    p-4 sm:p-5 cursor-pointer transition-colors
                    ${notification.read ? 'bg-white' : 'bg-blue-50 hover:bg-blue-100'}
                    hover:bg-gray-50
                  `}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Unread Indicator */}
                    <div className="flex-shrink-0 mt-1">
                      {notification.read ? (
                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                        {notification.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notifications;