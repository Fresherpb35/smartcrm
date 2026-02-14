// src/pages/ProductionPlanning.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  Package,
  TrendingUp,
  AlertTriangle,
  Calendar,
  Search,
  Filter,
  Grid3x3,
  ChevronDown
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const ProductionPlanning = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('Priority');
  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [selectedFilter, setSelectedFilter] = useState('All Lines');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Production orders data
  const productionOrders = [
    {
      orderId: 'PO-1054',
      product: 'T-Shirt',
      quantity: 1000,
      priority: 'High',
      startDate: '25 Jan',
      dueDate: '30 Jan',
      status: 'Delayed',
      assignedLine: 'A'
    },
    {
      orderId: 'PO-1055',
      product: 'Tea Box',
      quantity: 500,
      priority: 'Medium',
      startDate: '26 Jan',
      dueDate: '1 Feb',
      status: 'Planned',
      assignedLine: 'B'
    },
    {
      orderId: 'PO-1056',
      product: 'Earphones',
      quantity: 200,
      priority: 'Low',
      startDate: '26 Jan',
      dueDate: '8 Feb',
      status: 'Planned',
      assignedLine: 'A'
    }
  ];

  // Work progress data
  const workProgress = [
    {
      orderId: 'PO-1054',
      product: 'T-Shirt',
      stage: 'Stitching',
      operator: 'Ajay',
      progress: '85%'
    },
    {
      orderId: 'PO-1055',
      product: 'Tea Box',
      stage: 'Packing',
      operator: 'Neha',
      progress: '20%'
    },
    {
      orderId: 'PO-1056',
      product: 'Earphones',
      stage: 'Assembly',
      operator: 'Ravi',
      progress: '42%'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delayed':
        return 'text-red-700 bg-red-50';
      case 'Planned':
        return 'text-blue-700 bg-blue-50';
      case 'In Progress':
        return 'text-orange-700 bg-orange-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-red-700 bg-red-50';
      case 'Medium':
        return 'text-orange-700 bg-orange-50';
      case 'Low':
        return 'text-green-700 bg-green-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
<Header onToggleSidebar={toggleSidebar} />
      <div className="mt-16 flex-1 flex flex-col lg:ml-64">
    

        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-end mb-6">
              <button
                onClick={() => navigate('/order-management')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm cursor-pointer"
              >
                Order Management
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <p className="text-4xl font-bold text-gray-900 mb-2">2000 Units</p>
                <p className="text-sm text-gray-600">Today's Production Target</p>
              </div>

              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <p className="text-4xl font-bold text-gray-900 mb-2">1,540 Units</p>
                <p className="text-sm text-gray-600">Produced Today</p>
              </div>

              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <p className="text-4xl font-bold text-green-600 mb-2">92%</p>
                <p className="text-sm text-gray-600">On-Time Completion Rate</p>
              </div>

              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <p className="text-4xl font-bold text-gray-900 mb-2">14</p>
                <p className="text-sm text-gray-600">Active Production Orders</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <p className="text-4xl font-bold text-gray-900 mb-2">3</p>
                <p className="text-sm text-gray-600">Material Shortage Alerts</p>
              </div>

              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <p className="text-4xl font-bold text-orange-600 mb-2">4.8%</p>
                <p className="text-sm text-gray-600">Wastage Rate (This Week)</p>
              </div>
            </div>

            {/* Production Orders Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-start gap-3 mb-6">
                <Package className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Production Orders</h2>
                  <p className="text-sm text-gray-600">Manage all production orders derived from sales or internal planning</p>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 mb-6">
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                >
                  <option>Priority</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                >
                  <option>Status</option>
                  <option>Planned</option>
                  <option>In Progress</option>
                  <option>Delayed</option>
                  <option>Completed</option>
                </select>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                >
                  <option>All Lines</option>
                  <option>Line A</option>
                  <option>Line B</option>
                  <option>Line C</option>
                </select>
              </div>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Order ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Product</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Quantity</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Priority</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Start Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Due Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Assigned Line</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {productionOrders.map((order) => (
                      <tr key={order.orderId} className="hover:bg-gray-50 cursor-pointer transition-colors">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">{order.orderId}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{order.product}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{order.quantity}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(order.priority)}`}>
                            {order.priority}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-900">{order.startDate}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{order.dueDate}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-900">{order.assignedLine}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {productionOrders.map((order) => (
                  <div key={order.orderId} className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-900">{order.orderId}</p>
                        <p className="text-sm text-gray-600">{order.product}</p>
                      </div>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                      <div>
                        <p className="text-xs text-gray-500">Quantity</p>
                        <p className="font-medium text-gray-900">{order.quantity}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Priority</p>
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(order.priority)}`}>
                          {order.priority}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Start Date</p>
                        <p className="font-medium text-gray-900">{order.startDate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Due Date</p>
                        <p className="font-medium text-gray-900">{order.dueDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center gap-2 mb-6">
                <Grid3x3 className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => navigate('/create-production-plan')}
                  className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all cursor-pointer text-left font-medium shadow-md"
                >
                  Create Production Plan
                </button>
                <button
                  onClick={() => navigate('/bom-management')}
                  className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all cursor-pointer text-left font-medium shadow-md"
                >
                  BOM Management
                </button>
                <button
                  onClick={() => navigate('/raw-material-planning')}
                  className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all cursor-pointer text-left font-medium shadow-md"
                >
                  Raw Material Planning
                </button>
                <button
                  onClick={() => navigate('/wastage-tracking')}
                  className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all cursor-pointer text-left font-medium shadow-md"
                >
                  Wastage Tracking
                </button>
              </div>
            </div>

            {/* Work Progress */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Work Progress</h2>
              <p className="text-sm text-gray-600 mb-6">Track real-time production status by order, stage, and worker.</p>

              {/* Desktop Table */}
              <div className="hidden sm:block overflow-x-auto mb-6">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Order ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Product</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Stage</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Operator</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {workProgress.map((work) => (
                      <tr key={work.orderId} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">{work.orderId}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{work.product}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{work.stage}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{work.operator}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{work.progress}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="sm:hidden space-y-3 mb-6">
                {workProgress.map((work) => (
                  <div key={work.orderId} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900">{work.orderId}</p>
                      <span className="text-sm font-medium text-blue-600">{work.progress}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{work.product}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Stage: {work.stage}</span>
                      <span className="text-gray-500">Operator: {work.operator}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline View */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Timeline View</h3>
                <div className="flex items-center gap-2 overflow-x-auto pb-4">
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <span className="text-sm text-gray-700">Raw Material</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-sm text-gray-700">Production</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-sm text-gray-700">Quality Check</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-sm text-gray-700">Packing</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-sm text-gray-700">Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductionPlanning;