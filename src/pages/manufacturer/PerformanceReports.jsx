// src/pages/PerformanceReports.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  Users,
  TrendingUp,
  Target,
  Star,
  ChevronDown,
  Package,
  UserCheck,
  Activity
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const PerformanceReports = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('January 2026');
  const [selectedFilter, setSelectedFilter] = useState('All Roles');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleViewSalesReport = () => {
    navigate('/performance-reports/sales');
  };

  const handleViewInventoryReport = () => {
    navigate('/performance-reports/inventory');
  };

  const handleViewAttendanceReport = () => {
    navigate('/performance-reports/attendance');
  };

  const handleViewProductionReport = () => {
    navigate('/performance-reports/production');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <span>/</span>
              <span className="hidden sm:inline">Dashboard</span>
              <span className="hidden sm:inline">/</span>
              <span className="text-gray-900 font-medium">Performance Reports</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
                  Performance Reports
                </h1>
                <p className="text-sm text-gray-500">
                  Track Staff Productivity And Performance Metrics
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option>January 2026</option>
                  <option>December 2025</option>
                  <option>November 2025</option>
                </select>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option>All Roles</option>
                  <option>Sales</option>
                  <option>Manager</option>
                  <option>Staff</option>
                </select>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Team Size */}
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 text-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">Team Size</p>
                <p className="text-3xl font-bold mb-1">0</p>
                <p className="text-xs opacity-75">0 Active This Week</p>
              </div>

              {/* Avg Productivity */}
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">Avg Productivity</p>
                <p className="text-3xl font-bold mb-1">0.0%</p>
                <p className="text-xs opacity-75">0 Hours Completed</p>
              </div>

              {/* Sales Achieved */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">Sales Achieved</p>
                <p className="text-3xl font-bold mb-1">₹0</p>
                <p className="text-xs opacity-75">0 Commission Paid</p>
              </div>

              {/* Customer Satisfaction */}
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">Customer Satisfaction</p>
                <p className="text-3xl font-bold mb-1">0.0%</p>
                <p className="text-xs opacity-75">0 Recent Feedback</p>
              </div>
            </div>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sales Reports Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Sales Reports</h2>
                  <span className="ml-auto text-xs text-gray-500">Weekly</span>
                </div>

                <div className="space-y-4">
                  {/* Total Sales Revenue */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Total Sales Revenue</p>
                      <p className="text-sm text-gray-500">8.5% more than last week</p>
                    </div>
                    <p className="text-xl font-bold text-green-600">₹12,45,000</p>
                  </div>

                  {/* Total Orders */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Total Orders</p>
                      <p className="text-sm text-gray-500">+3 more than last week</p>
                    </div>
                    <p className="text-xl font-bold text-blue-600">1,240 Orders</p>
                  </div>

                  {/* Average Order Value */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Average Order Value</p>
                      <p className="text-sm text-gray-500">+32 orders every week</p>
                    </div>
                    <p className="text-xl font-bold text-gray-900">₹998</p>
                  </div>

                  {/* Top-Selling Product */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Top-Selling Product</p>
                      <p className="text-sm text-gray-500">342 ordered</p>
                    </div>
                    <p className="text-lg font-semibold text-orange-600">Cotton T-Shirt</p>
                  </div>

                  {/* Best Sales Executive */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Best Sales Executive</p>
                      <p className="text-sm text-gray-500">95% attendance and 89% Performance</p>
                    </div>
                    <p className="text-lg font-semibold text-orange-600">Rahul Verma</p>
                  </div>
                </div>

                {/* View Full Report Button */}
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={handleViewSalesReport}
                    className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    View Full Report
                  </button>
                </div>
              </div>

              {/* Inventory Reports Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Package className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Inventory Reports</h2>
                  <span className="ml-auto text-xs text-gray-500">Weekly</span>
                </div>

                <div className="space-y-4">
                  {/* Total Inventory Items */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Total Inventory Items</p>
                      <p className="text-sm text-gray-500">30% Less than last week</p>
                    </div>
                    <p className="text-xl font-bold text-blue-600">3948 SKUs</p>
                  </div>

                  {/* Total Stock Value */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Total Stock Value</p>
                      <p className="text-sm text-gray-500">5.1% More than last week</p>
                    </div>
                    <p className="text-xl font-bold text-green-600">₹24,48,000</p>
                  </div>

                  {/* Low Stock Items */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Low Stock Items</p>
                      <p className="text-sm text-gray-500">Demand not increased</p>
                    </div>
                    <p className="text-xl font-bold text-red-600">18 Items</p>
                  </div>

                  {/* Out of Stock */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Out of Stock</p>
                      <p className="text-sm text-gray-500">Some not restocked</p>
                    </div>
                    <p className="text-xl font-bold text-red-600">6 Items</p>
                  </div>

                  {/* Fast-Moving Items */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Fast-Moving Items</p>
                      <p className="text-sm text-gray-500">Restocking 100% faster</p>
                    </div>
                    <p className="text-lg font-semibold text-orange-600">22 Products</p>
                  </div>
                </div>

                {/* View Full Report Button */}
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={handleViewInventoryReport}
                    className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    View Full Report
                  </button>
                </div>
              </div>

              {/* Attendance Reports Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Attendance Reports</h2>
                  <span className="ml-auto text-xs text-gray-500">Daily</span>
                </div>

                <div className="space-y-4">
                  {/* Total Employees */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Total Employees</p>
                      <p className="text-sm text-gray-500">2 new hires this month</p>
                    </div>
                    <p className="text-xl font-bold text-blue-600">156</p>
                  </div>

                  {/* Present Today */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Present Today</p>
                      <p className="text-sm text-gray-500">Good attendance rate</p>
                    </div>
                    <p className="text-xl font-bold text-green-600">112</p>
                  </div>

                  {/* Absent */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Absent</p>
                      <p className="text-sm text-gray-500">5 on authorized leave</p>
                    </div>
                    <p className="text-xl font-bold text-red-600">10</p>
                  </div>

                  {/* On Leave */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">On Leave</p>
                      <p className="text-sm text-gray-500">Planned absences</p>
                    </div>
                    <p className="text-xl font-bold text-gray-900">8</p>
                  </div>

                  {/* Average Working Hours */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Average Working Hours</p>
                      <p className="text-sm text-gray-500">Per employee this week</p>
                    </div>
                    <p className="text-lg font-semibold text-orange-600">8.3hrs</p>
                  </div>
                </div>

                {/* View Full Report Button */}
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={handleViewAttendanceReport}
                    className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    View Full Report
                  </button>
                </div>
              </div>

              {/* Production Reports Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Production Reports</h2>
                  <span className="ml-auto text-xs text-gray-500">Monthly</span>
                </div>

                <div className="space-y-4">
                  {/* Total Production Output */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Total Production Output</p>
                      <p className="text-sm text-gray-500">12% increase from last month</p>
                    </div>
                    <p className="text-xl font-bold text-green-600">5,850 Units</p>
                  </div>

                  {/* Production Target */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Production Target</p>
                      <p className="text-sm text-gray-500">Monthly goal</p>
                    </div>
                    <p className="text-xl font-bold text-blue-600">6,000 Units</p>
                  </div>

                  {/* Efficiency Rate */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Efficiency Rate</p>
                      <p className="text-sm text-gray-500">Above industry standard</p>
                    </div>
                    <p className="text-xl font-bold text-green-600">93.8%</p>
                  </div>

                  {/* Downtime */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Downtime</p>
                      <p className="text-sm text-gray-500">Maintenance related</p>
                    </div>
                    <p className="text-xl font-bold text-orange-600">6.2 Hours</p>
                  </div>

                  {/* Defect Rate */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-2">
                    <div>
                      <p className="font-medium text-gray-900">Defect Rate</p>
                      <p className="text-sm text-gray-500">Quality control metrics</p>
                    </div>
                    <p className="text-lg font-semibold text-green-600">1.2%</p>
                  </div>
                </div>

                {/* View Full Report Button */}
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={handleViewProductionReport}
                    className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    View Full Report
                  </button>
                </div>
              </div>
            </div>

            {/* Profit and Loss Summary */}
            <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Profit And Loss Summary</h2>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Export
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Chart Placeholder */}
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Chart visualization area</p>
                </div>

                {/* Key Metrics */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Revenue</span>
                    <span className="font-semibold text-gray-900">₹49.5L</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Cost of Goods sold (COGS)</span>
                    <span className="font-semibold text-gray-900">₹27.5L</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Expenses</span>
                    <span className="font-semibold text-gray-900">₹15.4L</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-green-50 px-4 rounded-lg">
                    <span className="text-gray-900 font-medium">Net Profit</span>
                    <span className="font-bold text-green-600">₹6.6L</span>
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    ⚠️ Net Margin of 16.2%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PerformanceReports;