import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const Layout = ({ children, activeItem, setActiveItem }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Top Navigation Bar - Fixed at top */}
        <Header onToggleSidebar={toggleSidebar} />

        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto">
          <div className="min-h-full p-4 mt-14 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              {/* Welcome Header */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Welcome, User!</h1>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">Monday, January 26, 2026</p>
                </div>
                <button 
                  onClick={() => navigate('/analytics')}
                  className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm whitespace-nowrap"
                >
                  Analysis
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm opacity-90">Total Revenue</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold">₹0.00</p>
                  <p className="text-xs opacity-75 mt-1">Last updated today</p>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm opacity-90">Active Orders</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold">0</p>
                  <p className="text-xs opacity-75 mt-1">Pending</p>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm opacity-90">Team Members</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold">0</p>
                  <p className="text-xs opacity-75 mt-1">Total staff</p>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm opacity-90">Active Tasks</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold">0</p>
                  <p className="text-xs opacity-75 mt-1">In progress</p>
                </div>
              </div>

              {/* Manufacturing Section */}
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">Manufacturing</h2>
                  <div className="flex gap-4">
                    <button className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                      Production
                    </button>
                    <button className="text-sm font-medium text-blue-600">
                      Recipe
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">Plan Production</h3>
                      <p className="text-sm text-gray-600">
                        Create Production Orders, Assign Staff, And Estimate Costs
                      </p>
                    </div>
                    <button className="w-full sm:w-auto bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap text-sm font-medium">
                      Open Production
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-50 hover:border-blue-300 cursor-pointer transition-all">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Start Production</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Initiate production Order</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-50 hover:border-blue-300 cursor-pointer transition-all">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Calculate Cost</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Calculate unit cost</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Recent Activities</h2>
                <div className="space-y-3">
                  {[
                    {
                      title: 'New order received',
                      description: 'Recent order completed',
                      time: '2 minutes ago',
                      color: 'bg-blue-100 text-blue-600',
                      badge: 'New'
                    },
                    {
                      title: 'Inventory updated',
                      description: 'Products updated in Inventory',
                      time: '1 hour ago',
                      color: 'bg-green-100 text-green-600',
                      badge: 'Inventory'
                    },
                    {
                      title: 'Team member joined',
                      description: 'Team member joined',
                      time: '3 hours ago',
                      color: 'bg-purple-100 text-purple-600',
                      badge: 'Team'
                    },
                    {
                      title: 'Task completed',
                      description: 'Monthly report generated',
                      time: '5 hours ago',
                      color: 'bg-orange-100 text-orange-600',
                      badge: 'Tasks'
                    },
                    {
                      title: 'Commission earned',
                      description: 'Commission processed for sales team',
                      time: '1 day ago',
                      color: 'bg-blue-100 text-blue-600',
                      badge: 'Commission'
                    }
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors gap-3"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{activity.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 truncate">{activity.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 justify-between sm:justify-end flex-shrink-0">
                        <span className="text-xs sm:text-sm text-gray-500">{activity.time}</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {activity.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Children content (if any additional content is passed) */}
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;