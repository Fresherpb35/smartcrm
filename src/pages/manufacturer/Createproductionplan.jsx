// src/pages/CreateProductionPlan.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  Calendar,
  X
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const CreateProductionPlan = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    planId: 'Auto-generated',
    product: '',
    orderReference: '',
    targetQuantity: '',
    plannedStartDate: '',
    expectedCompletion: '',
    productionLine: 'Line A',
    shift: 'Morning',
    priority: 'High',
    supervisor: '',
    workersAssigned: ''
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreatePlan = () => {
    console.log('Creating plan:', formData);
    navigate('/production-planning');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col lg:ml-64">
   

        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-4xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={() => navigate('/production-planning')}
              className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg mb-6 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            {/* Page Title */}
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-4 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center">Create Production Plan</h1>
              </div>
            </div>

            {/* Basic Details Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Basic Details</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Plan ID</label>
                    <input
                      type="text"
                      name="planId"
                      value={formData.planId}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-lg text-sm text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Product</label>
                    <input
                      type="text"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      placeholder="Enter Product name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Order Reference</label>
                    <input
                      type="text"
                      name="orderReference"
                      value={formData.orderReference}
                      onChange={handleInputChange}
                      placeholder="e.g. PO-1024"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Target Quantity</label>
                    <input
                      type="text"
                      name="targetQuantity"
                      value={formData.targetQuantity}
                      onChange={handleInputChange}
                      placeholder="1000 Units"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Planned Start Date</label>
                    <input
                      type="date"
                      name="plannedStartDate"
                      value={formData.plannedStartDate}
                      onChange={handleInputChange}
                      placeholder="Auto-generated"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Expected Completion</label>
                    <input
                      type="date"
                      name="expectedCompletion"
                      value={formData.expectedCompletion}
                      onChange={handleInputChange}
                      placeholder="Enter Product name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Resource Allocation Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Resource Allocation</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Production Line</label>
                    <select
                      name="productionLine"
                      value={formData.productionLine}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer bg-white"
                    >
                      <option>Line A</option>
                      <option>Line B</option>
                      <option>Line C</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Shift</label>
                    <select
                      name="shift"
                      value={formData.shift}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer bg-white"
                    >
                      <option>Morning</option>
                      <option>Evening</option>
                      <option>Night</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Priority</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer bg-white"
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Supervisor</label>
                    <input
                      type="text"
                      name="supervisor"
                      value={formData.supervisor}
                      onChange={handleInputChange}
                      placeholder="Rajesh Goyal"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Workers Assigned</label>
                    <input
                      type="number"
                      name="workersAssigned"
                      value={formData.workersAssigned}
                      onChange={handleInputChange}
                      placeholder="12"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Create Button */}
            <div className="flex justify-end">
              <button
                onClick={handleCreatePlan}
                className="px-12 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer"
              >
                Create Plan
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateProductionPlan;