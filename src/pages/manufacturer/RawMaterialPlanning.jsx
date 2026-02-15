// src/pages/RawMaterialPlanning.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const RawMaterialPlanning = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const planningData = [
    {
      material: 'Cotton Fabric',
      requirement: '520 m',
      inStock: '480 m',
      shortage: '40 m',
      eta: '2 days',
      status: 'Short',
      statusIcon: <AlertTriangle className="w-4 h-4" />
    },
    {
      material: 'Tea Leaves',
      requirement: '25 kg',
      inStock: '40 kg',
      shortage: '0',
      eta: '--',
      status: 'OK',
      statusIcon: <CheckCircle className="w-4 h-4" />
    },
    {
      material: 'PCB Boards',
      requirement: '200',
      inStock: '180',
      shortage: '20',
      eta: '1 day',
      status: 'Short',
      statusIcon: <AlertTriangle className="w-4 h-4" />
    }
  ];

  const smartSuggestions = [
    'Place Purchase Order For 40 M Cotton Fabric',
    'Reschedule PO-1044 By 1 Day To Avoid Delay',
    'Alternate Supplier Available With 1-Day Delivery'
  ];

  const supplierPerformance = [
    {
      label: 'Fastest Supplier',
      name: 'Shree Textiles',
      metric: '(Avg Lead Time: 1.2 Days)'
    },
    {
      label: 'Most Reliable',
      name: 'TechParts India',
      metric: '(98.6% On-Time)'
    },
    {
      label: 'Highest Defect Rate',
      name: 'Vendor X',
      metric: '(6.2%)'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col lg:ml-64">
      

        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <button 
                onClick={() => navigate('/manufacturer/production-planning')}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <span>/</span>
              <span>Production Planning</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">Raw Material Planning</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
                  Raw Material Planning
                </h1>
                <p className="text-sm text-gray-500">
                  Ensure Materials Are Available Before Production Starts.
                </p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm cursor-pointer">
                <RefreshCw className="w-4 h-4" />
                Sync With Inventory
              </button>
            </div>

            {/* Planning Summary */}
            <div className="bg-white rounded-lg border-2 border-blue-500 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Planning Summary</h2>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Material</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Requirement</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">In Stock</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Shortage</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">ETA</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {planningData.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm text-gray-900">{item.material}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{item.requirement}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{item.inStock}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{item.shortage}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{item.eta}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === 'OK' ? 'text-green-700 bg-green-50' : 'text-orange-700 bg-orange-50'
                          }`}>
                            {item.statusIcon}
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-3">
                {planningData.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold text-gray-900">{item.material}</p>
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'OK' ? 'text-green-700 bg-green-50' : 'text-orange-700 bg-orange-50'
                      }`}>
                        {item.statusIcon}
                        {item.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs">Requirement</p>
                        <p className="font-medium text-gray-900">{item.requirement}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">In Stock</p>
                        <p className="font-medium text-gray-900">{item.inStock}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Shortage</p>
                        <p className="font-medium text-gray-900">{item.shortage}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">ETA</p>
                        <p className="font-medium text-gray-900">{item.eta}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Smart Suggestions */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-purple-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Smart Suggestions</h2>
                </div>

                <div className="space-y-3">
                  {smartSuggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-sm text-gray-900">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supplier Performance Panel */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Supplier Performance Panel</h2>
                </div>

                <div className="space-y-3">
                  {supplierPerformance.map((supplier, index) => (
                    <div key={index} className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900 mb-1">{supplier.label}: {supplier.name}</p>
                          <p className="text-xs text-gray-600">{supplier.metric}</p>
                        </div>
                      </div>
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

export default RawMaterialPlanning;