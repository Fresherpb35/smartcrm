// src/pages/BusinessAnalytics.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  Download,
  TrendingUp,
  DollarSign,
  Briefcase,
  Package,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const BusinessAnalytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 Days');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample data for top employees
  const topEmployees = [
    { id: 1, name: 'Employee 1', trend: 'up' },
    { id: 2, name: 'Employee 2', trend: 'down' },
    { id: 3, name: 'Employee 3', trend: 'up' }
  ];

  // Sample data for top clients
  const topClients = [
    { id: 1, name: "Client's Name", phone: '+91 9876451230', trend: 'up' },
    { id: 2, name: "Client's Name", phone: '+91 9876451230', trend: 'up' },
    { id: 3, name: "Client's Name", phone: '+91 9876451230', trend: 'down' }
  ];

  // Sample data for revenue trends (bar chart)
  const revenueTrends = [20, 45, 28, 80, 55, 35, 85];

  // Sample data for cash flow (line chart)
  const cashFlowData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 55 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 75 },
    { month: 'May', value: 45 },
    { month: 'Jun', value: 85 },
    { month: 'Jul', value: 40 }
  ];

  const maxCashFlow = Math.max(...cashFlowData.map(d => d.value));

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Mobile Header */}
       

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <button 
                onClick={() => navigate('/manufacturer/dashboard')}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <span>/</span>
              <span className="hidden sm:inline">Dashboard</span>
              <span className="hidden sm:inline">/</span>
              <span className="text-gray-900 font-medium">Analysis</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
                  Business Analytics
                </h1>
                <p className="text-sm text-gray-500">
                  Comprehensive Insights Into Your Business Performance
                </p>
              </div>
              <div className="flex gap-3">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option>Last 30 Days</option>
                  <option>Last 60 Days</option>
                  <option>Last 90 Days</option>
                </select>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Export</span>
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Total Revenue */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 border-2 border-blue-600">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">Total Revenue</p>
                <p className="text-3xl font-bold mb-1">₹0</p>
                <p className="text-xs opacity-75">16% More Than Last Month</p>
              </div>

              {/* Net Profit */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 border-2 border-green-600">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">Net Profit</p>
                <p className="text-3xl font-bold mb-1">₹0</p>
                <p className="text-xs opacity-75">Net Margin</p>
              </div>

              {/* Business Valuation */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 border-2 border-purple-600">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">Business Valuation</p>
                <p className="text-3xl font-bold mb-1">₹0</p>
                <p className="text-xs opacity-75">Yearly Standard</p>
              </div>

              {/* Inventory Value */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-6 border-2 border-orange-600">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">Inventory Value</p>
                <p className="text-3xl font-bold mb-1">₹0</p>
                <p className="text-xs opacity-75">Current Stock Value</p>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Revenue Trends */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-gray-600" />
                    <h2 className="text-lg font-semibold text-gray-900">Revenue Trends</h2>
                  </div>
                  <span className="text-sm text-gray-500">Weekly Average: ₹0</span>
                </div>
                
                {/* Bar Chart */}
                <div className="h-64 flex items-end justify-between gap-2">
                  {revenueTrends.map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-indigo-600 rounded-t-lg hover:bg-indigo-700 transition-colors cursor-pointer"
                        style={{ height: `${(value / 100) * 100}%` }}
                        title={`₹${value}`}
                      ></div>
                      <span className="text-xs text-gray-500 mt-2">W{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cash Flow */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-gray-600" />
                    <h2 className="text-lg font-semibold text-gray-900">Cash Flow</h2>
                  </div>
                  <span className="text-sm text-gray-500">(Monthly) Net Flow: ₹0</span>
                </div>
                
                {/* Line Chart */}
                <div className="h-64 relative">
                  <svg className="w-full h-full" viewBox="0 0 700 250" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 25, 50, 75, 100].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={250 - (y * 2.5)}
                        x2="700"
                        y2={250 - (y * 2.5)}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />
                    ))}
                    
                    {/* Line path */}
                    <polyline
                      points={cashFlowData.map((d, i) => 
                        `${(i * 100) + 50},${250 - (d.value / maxCashFlow * 220)}`
                      ).join(' ')}
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Points */}
                    {cashFlowData.map((d, i) => (
                      <circle
                        key={i}
                        cx={(i * 100) + 50}
                        cy={250 - (d.value / maxCashFlow * 220)}
                        r="4"
                        fill="#6366f1"
                      />
                    ))}
                  </svg>
                  
                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
                    {cashFlowData.map((d, i) => (
                      <span key={i}>{d.month}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Rankings Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Employees */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Top Employees</h2>
                </div>
                
                <div className="space-y-3">
                  {topEmployees.map((employee, index) => (
                    <div
                      key={employee.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">{index + 1}</span>
                        </div>
                        <span className="font-medium text-gray-900">{employee.name}</span>
                      </div>
                      {employee.trend === 'up' ? (
                        <ChevronUp className="w-5 h-5 text-green-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Clients */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Top Clients</h2>
                </div>
                
                <div className="space-y-3">
                  {topClients.map((client, index) => (
                    <div
                      key={client.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{client.name}</p>
                          <p className="text-sm text-gray-500">{client.phone}</p>
                        </div>
                      </div>
                      {client.trend === 'up' ? (
                        <ChevronUp className="w-5 h-5 text-green-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessAnalytics;