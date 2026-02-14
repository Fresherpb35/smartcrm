// src/pages/BOMManagement.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  Plus,
  Edit
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const BOMManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('Cotton T-Shirt');
  const [componentName, setComponentName] = useState('');
  const [componentQuantity, setComponentQuantity] = useState('');
  const [productName, setProductName] = useState('');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const bomList = [
    {
      product: 'Cotton T-Shirt',
      version: 'v.01',
      components: 'Fabric, Thread, Label',
      costPerUnit: '₹220',
      status: 'Active'
    },
    {
      product: 'Green Tea Box',
      version: 'v.21',
      components: 'Tea Leaves, Box, Wrapper...',
      costPerUnit: '₹85',
      status: 'Active'
    },
    {
      product: 'Headphone Set',
      version: 'v.2.0',
      components: 'PCB, Speaker, Cable, Case',
      costPerUnit: '₹1,050',
      status: 'Draft'
    }
  ];

  const productDetails = {
    'Cotton T-Shirt': {
      Fabric: '0.5 Meters',
      Thread: '0.02 Kg',
      Label: '1 Units',
      Packaging: '1 Box'
    }
  };

  const handleAddComponent = () => {
    console.log('Adding component:', componentName, componentQuantity);
    setComponentName('');
    setComponentQuantity('');
  };

  const handleCreateBOM = () => {
    console.log('Creating BOM for:', productName);
    setProductName('');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col lg:ml-64">
      

        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <button 
                onClick={() => navigate('/production-planning')}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <span>/</span>
              <span>Production Planning</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">BOM Management</span>
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
                BOM Management
              </h1>
              <p className="text-sm text-gray-500">
                Define Components Required To Produce Each Product.
              </p>
            </div>

            {/* BOM List */}
            <div className="bg-white rounded-lg border-2 border-blue-500 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">BOM List</h2>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Product</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Version</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Components</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Cost per Unit</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bomList.map((bom, index) => (
                      <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                        <td className="px-4 py-4 text-sm text-gray-900">{bom.product}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{bom.version}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{bom.components}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{bom.costPerUnit}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            bom.status === 'Active' ? 'text-green-700 bg-green-50' : 'text-gray-700 bg-gray-50'
                          }`}>
                            {bom.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-3">
                {bomList.map((bom, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900">{bom.product}</p>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        bom.status === 'Active' ? 'text-green-700 bg-green-50' : 'text-gray-700 bg-gray-50'
                      }`}>
                        {bom.status}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">Version: {bom.version}</p>
                      <p className="text-gray-600">Components: {bom.components}</p>
                      <p className="font-medium text-gray-900">Cost: {bom.costPerUnit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Create A BOM */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Create A BOM</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Product Name</label>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      placeholder="Enter Product Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Component</label>
                      <input
                        type="text"
                        value={componentName}
                        onChange={(e) => setComponentName(e.target.value)}
                        placeholder="X"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Quantity</label>
                      <input
                        type="text"
                        value={componentQuantity}
                        onChange={(e) => setComponentQuantity(e.target.value)}
                        placeholder="5 meters"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleAddComponent}
                    className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm cursor-pointer"
                  >
                    + Add Component
                  </button>

                  <button
                    onClick={handleCreateBOM}
                    className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer"
                  >
                    Create
                  </button>
                </div>
              </div>

              {/* See Details */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    See Details <span className="text-sm font-normal text-gray-500">(Select a product to see expandable BOM)</span>
                  </h2>
                </div>

                <div className="mb-4">
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer bg-white"
                  >
                    <option>Cotton T-Shirt</option>
                    <option>Green Tea Box</option>
                    <option>Headphone Set</option>
                  </select>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-gray-900 mb-3">{selectedProduct}</h3>
                  <div className="space-y-2">
                    {Object.entries(productDetails[selectedProduct] || {}).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-700">{key}</span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BOMManagement;