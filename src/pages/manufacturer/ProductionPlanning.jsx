// src/pages/ProductionPlanning.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Grid3x3 } from 'lucide-react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const ProductionPlanning = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('Priority');
  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [selectedFilter, setSelectedFilter] = useState('All Lines');

  const navigate = useNavigate();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const productionOrders = [
    { orderId: 'PO-1054', product: 'T-Shirt', quantity: 1000, priority: 'High', startDate: '25 Jan', dueDate: '30 Jan', status: 'Delayed', assignedLine: 'A' },
    { orderId: 'PO-1055', product: 'Tea Box', quantity: 500, priority: 'Medium', startDate: '26 Jan', dueDate: '1 Feb', status: 'Planned', assignedLine: 'B' },
    { orderId: 'PO-1056', product: 'Earphones', quantity: 200, priority: 'Low', startDate: '26 Jan', dueDate: '8 Feb', status: 'Planned', assignedLine: 'A' },
  ];

  const workProgress = [
    { orderId: 'PO-1054', product: 'T-Shirt', stage: 'Stitching', operator: 'Ajay', progress: '85%' },
    { orderId: 'PO-1055', product: 'Tea Box', stage: 'Packing', operator: 'Neha', progress: '20%' },
    { orderId: 'PO-1056', product: 'Earphones', stage: 'Assembly', operator: 'Ravi', progress: '42%' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      Delayed: 'text-red-700 bg-red-50',
      Planned: 'text-blue-700 bg-blue-50',
      'In Progress': 'text-orange-700 bg-orange-50',
    };
    return colors[status] || 'text-gray-700 bg-gray-50';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      High: 'text-red-700 bg-red-50',
      Medium: 'text-orange-700 bg-orange-50',
      Low: 'text-green-700 bg-green-50',
    };
    return colors[priority] || 'text-gray-700 bg-gray-50';
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col lg:ml-64 transition-all duration-300">
        <Header onToggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto pb-6 sm:pb-10">
          <div className="px-4 sm:px-5 md:px-6 lg:px-8 py-5 max-w-7xl mx-auto space-y-5 sm:space-y-6 lg:space-y-8">

            {/* Order Management Button */}
            <div className="flex justify-end">
              <button
                onClick={() => navigate('/manufacturer/order-management')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors whitespace-nowrap"
              >
                Order Management
              </button>
            </div>

            {/* Stats - Top row */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {[
                { value: '2000 Units', label: "Today's Production Target", color: 'text-gray-900' },
                { value: '1,540 Units', label: 'Produced Today', color: 'text-gray-900' },
                { value: '92%', label: 'On-Time Completion Rate', color: 'text-green-600' },
                { value: '14', label: 'Active Production Orders', color: 'text-gray-900' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow transition-shadow"
                >
                  <p className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold ${stat.color} mb-1.5 truncate`}>
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Stats - Bottom row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              <div className="bg-white border border-red-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow transition-shadow">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-1.5">3</p>
                <p className="text-xs sm:text-sm text-gray-600">Material Shortage Alerts</p>
              </div>
              <div className="bg-white border border-orange-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow transition-shadow">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600 mb-1.5">4.8%</p>
                <p className="text-xs sm:text-sm text-gray-600">Wastage Rate (This Week)</p>
              </div>
            </div>

            {/* Production Orders */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 sm:p-5 lg:p-6 border-b border-gray-200">
                <div className="flex items-start gap-3 mb-4 sm:mb-5">
                  <Package className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900">Production Orders</h2>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Manage all production orders derived from sales or internal planning
                    </p>
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  {[
                    { value: selectedPriority, onChange: setSelectedPriority, options: ['Priority', 'High', 'Medium', 'Low'] },
                    { value: selectedStatus, onChange: setSelectedStatus, options: ['Status', 'Planned', 'In Progress', 'Delayed', 'Completed'] },
                    { value: selectedFilter, onChange: setSelectedFilter, options: ['All Lines', 'Line A', 'Line B', 'Line C'] },
                  ].map(({ value, onChange, options }, i) => (
                    <select
                      key={i}
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      className="w-full sm:w-auto min-w-[130px] px-3 sm:px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                    >
                      {options.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  ))}
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Order ID</th>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Qty</th>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Priority</th>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Start</th>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Due</th>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                      <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Line</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {productionOrders.map((order) => (
                      <tr key={order.orderId} className="hover:bg-gray-50/70">
                        <td className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.orderId}</td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-900">{order.quantity}</td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getPriorityColor(order.priority)}`}>
                            {order.priority}
                          </span>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-900">{order.startDate}</td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-900">{order.dueDate}</td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-900">Line {order.assignedLine}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden divide-y divide-gray-200">
                {productionOrders.map((order) => (
                  <div key={order.orderId} className="p-4 sm:p-5 hover:bg-gray-50">
                    <div className="flex justify-between items-start gap-3 mb-3">
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 truncate">{order.orderId}</p>
                        <p className="text-sm text-gray-600 truncate mt-0.5">{order.product}</p>
                      </div>
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full flex-shrink-0 ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                      <div>
                        <p className="text-xs text-gray-500">Qty</p>
                        <p className="font-medium">{order.quantity}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Priority</p>
                        <span className={`px-2 py-0.5 text-xs rounded-full mt-0.5 inline-block ${getPriorityColor(order.priority)}`}>
                          {order.priority}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Start</p>
                        <p className="font-medium">{order.startDate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Due</p>
                        <p className="font-medium">{order.dueDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <Grid3x3 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Create Production Plan', path: '/manufacturer/create-production-plan' },
                  { label: 'BOM Management', path: '/manufacturer/bom-management' },
                  { label: 'Raw Material Planning', path: '/manufacturer/raw-material-planning' },
                  { label: 'Wastage Tracking', path: '/manufacturer/wastage-tracking' },
                ].map((action, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(action.path)}
                    className="p-4 sm:p-5 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl border border-blue-200 text-left transition-all hover:shadow active:scale-[0.98]"
                  >
                    <div className="font-medium text-blue-900 text-sm sm:text-base">{action.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Work Progress */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Work Progress</h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5">
                Track real-time production status by order, stage, and worker.
              </p>

              {/* Desktop / Tablet Table */}
              <div className="hidden sm:block overflow-x-auto mb-5 sm:mb-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Order</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Stage</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Operator</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {workProgress.map((item) => (
                      <tr key={item.orderId} className="hover:bg-gray-50">
                        <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">{item.orderId}</td>
                        <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-900">{item.product}</td>
                        <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-900">{item.stage}</td>
                        <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-900">{item.operator}</td>
                        <td className="px-4 py-3.5 whitespace-nowrap text-sm font-semibold text-blue-600">
                          {item.progress}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="sm:hidden space-y-4">
                {workProgress.map((item) => (
                  <div key={item.orderId} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start gap-3 mb-3">
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 truncate">{item.orderId}</p>
                        <p className="text-sm text-gray-600 truncate mt-0.5">{item.product}</p>
                      </div>
                      <span className="font-semibold text-blue-600 flex-shrink-0">{item.progress}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <div>Stage: <span className="font-medium">{item.stage}</span></div>
                      <div>Operator: <span className="font-medium">{item.operator}</span></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Process Timeline</h3>
                <div className="overflow-x-auto pb-2 -mx-1 px-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
                    {['Raw Material', 'Production', 'Quality Check', 'Packing', 'Dispatch'].map((step, i) => (
                      <div key={step} className="flex items-center gap-1.5 sm:gap-2">
                        <span className="px-3 py-1.5 bg-gray-100 rounded text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                          {step}
                        </span>
                        {i < 4 && <span className="text-gray-400 text-lg sm:text-xl">→</span>}
                      </div>
                    ))}
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