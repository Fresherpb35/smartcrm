// src/pages/wholesaler/WholesalerDashboard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu,
  Search,
  Bell,
  LogOut,
  TrendingUp,
  ShoppingCart,
  Users,
  CheckCircle,
  FileText,
  BookOpen,
  Package,
  UserPlus,
  Star,
  DollarSign,
  BarChart2
} from 'lucide-react';
import WholesalerSidebar from '../../components/WholesalerSidebar';
import Header from '../../components/Header';

const WholesalerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Stats data
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹0.00',
      subtitle: 'Track your Revenue Growth',
      icon: <TrendingUp className="w-5 h-5" />,
      bgColor: 'bg-blue-500',
      textColor: 'text-white'
    },
    {
      title: 'Active Orders',
      value: '0',
      subtitle: 'No orders yet',
      icon: <ShoppingCart className="w-5 h-5" />,
      bgColor: 'bg-green-500',
      textColor: 'text-white'
    },
    {
      title: 'Team Members',
      value: '0',
      subtitle: 'No staff added yet',
      icon: <Users className="w-5 h-5" />,
      bgColor: 'bg-purple-500',
      textColor: 'text-white'
    },
    {
      title: 'Active Tasks',
      value: '0',
      subtitle: 'No Active Tasks',
      icon: <CheckCircle className="w-5 h-5" />,
      bgColor: 'bg-orange-500',
      textColor: 'text-white'
    }
  ];

  // Quick actions
  const quickActions = [
    {
      title: 'Bulk Order',
      subtitle: 'Create Bulk Order',
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Party Ledger',
      subtitle: 'View Party Accounts',
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      bgColor: 'bg-blue-50'
    }
  ];

  // Recent activities
  const recentActivities = [
    {
      title: 'New order received',
      subtitle: 'Recent order completed',
      time: '2 minutes ago',
      icon: <ShoppingCart className="w-5 h-5" />,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      badge: 'New',
      badgeColor: 'bg-white text-gray-700'
    },
    {
      title: 'Inventory updated',
      subtitle: 'Products updated in inventory',
      time: '1 hour ago',
      icon: <Package className="w-5 h-5" />,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      badge: 'Inventory',
      badgeColor: 'bg-white text-gray-700'
    },
    {
      title: 'Team member joined',
      subtitle: 'Team member joined',
      time: '3 hours ago',
      icon: <UserPlus className="w-5 h-5" />,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      badge: 'HR',
      badgeColor: 'bg-white text-gray-700'
    },
    {
      title: 'Task completed',
      subtitle: 'Monthly report generated',
      time: '5 hours ago',
      icon: <Star className="w-5 h-5" />,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      badge: 'Task',
      badgeColor: 'bg-white text-gray-700'
    },
    {
      title: 'Commission earned',
      subtitle: 'Commission processed for sales team',
      time: '1 day ago',
      icon: <DollarSign className="w-5 h-5" />,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      badge: 'Commission',
      badgeColor: 'bg-white text-gray-700'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <WholesalerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="mt-12 flex-1 flex flex-col lg:ml-64">
        <Header onToggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 italic">Welcome User!</h1>
                <p className="text-sm text-gray-600">Monday, January 28, 2028</p>
              </div>
             <button
  onClick={() => navigate('/wholesaler/analytics')}
  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
>
  <BarChart2 className="w-4 h-4" />
  Analysis
</button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bgColor} ${stat.textColor} rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm opacity-90">{stat.title}</span>
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm opacity-80">{stat.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`${action.bgColor} w-12 h-12 rounded-lg flex items-center justify-center`}>
                        {action.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-600">{action.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className={`${activity.bgColor} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <div className={activity.iconColor}>
                          {activity.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{activity.title}</h3>
                        <p className="text-sm text-gray-600">{activity.subtitle}</p>
                      </div>

                      {/* Time and Badge */}
                      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
                        <span className={`${activity.badgeColor} px-3 py-1 rounded-full text-xs font-medium border border-gray-200`}>
                          {activity.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WholesalerDashboard;