// src/pages/InventoryManagement.jsx
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Package, 
  TrendingDown, 
  AlertTriangle, 
  DollarSign,
  FileDown,
  Download,
  RefreshCw,
  Star,
  MoreVertical,
  Circle,
  X,
  Menu
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const InventoryManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [activeTab, setActiveTab] = useState('finished'); // 'finished' or 'raw'

  const [newProduct, setNewProduct] = useState({
    name: '',
    sku: '',
    category: '',
    orderQuantity: '',
    totalCost: '',
    costPerUnit: '',
    unit: '',
    expiryDate: ''
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-calculate cost per unit
    if (name === 'orderQuantity' || name === 'totalCost') {
      const quantity = name === 'orderQuantity' ? parseFloat(value) : parseFloat(newProduct.orderQuantity);
      const total = name === 'totalCost' ? parseFloat(value) : parseFloat(newProduct.totalCost);
      
      if (quantity && total && quantity > 0) {
        setNewProduct(prev => ({
          ...prev,
          [name]: value,
          costPerUnit: (total / quantity).toFixed(2)
        }));
      } else {
        setNewProduct(prev => ({
          ...prev,
          [name]: value
        }));
      }
    }
  };

  const handleAddProduct = () => {
    console.log('Adding product:', newProduct);
    // Add your API call here
    setShowAddModal(false);
    setNewProduct({
      name: '',
      sku: '',
      category: '',
      orderQuantity: '',
      totalCost: '',
      costPerUnit: '',
      unit: '',
      expiryDate: ''
    });
  };

  const products = [
    {
      id: 1,
      name: 'Name of the Product',
      sku: 'SKU NOP-121',
      category: 'Category: NOP-01',
      price: 70000,
      stock: 'In Stock'
    },
    {
      id: 2,
      name: 'Name of the Product',
      sku: 'SKU NOP-121',
      category: 'Category: NOP-01',
      price: 70000,
      stock: 'In Stock'
    },
    {
      id: 3,
      name: 'Name of the Product',
      sku: 'SKU NOP-121',
      category: 'Category: NOP-01',
      price: 70000,
      stock: 'In Stock'
    }
  ];

  const rawMaterials = [
    {
      id: 'M-001',
      name: 'Rice Vermicelli',
      available: 1000,
      unit: 'kg',
      reorderLevel: 85,
      unitCost: 36000,
      supplier: 'Star Corner',
      status: 'In Stock'
    },
    {
      id: 'M-002',
      name: 'Property Thread',
      available: 900,
      unit: 'Goods',
      reorderLevel: 120,
      unitCost: 36000,
      supplier: 'Sun',
      status: 'Low'
    },
    {
      id: 'M-003',
      name: 'Shirt Buttons',
      available: 8500,
      unit: 'Pieces',
      reorderLevel: 5,
      unitCost: 96000,
      supplier: 'Icon',
      status: 'In Stock'
    },
    {
      id: 'M-004',
      name: 'Fabric Rolls',
      available: 45,
      unit: 'L*W%',
      reorderLevel: 650,
      unitCost: 75000,
      supplier: 'Jaz',
      status: 'Re-order'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'in stock':
        return 'text-green-600 bg-green-50';
      case 'low':
        return 'text-yellow-600 bg-yellow-50';
      case 're-order':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusDot = (status) => {
    switch (status.toLowerCase()) {
      case 'in stock':
        return 'text-green-500';
      case 'low':
        return 'text-yellow-500';
      case 're-order':
        return 'text-orange-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="mt-14 flex-1 flex flex-col lg:ml-64">
        {/* Mobile Header */}

<Header onToggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Inventory Management</h1>
                <p className="text-sm text-gray-600 mt-1">Manage Stock levels, Add Orders and Supplier Alerts</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                  Batch Tracking
                </button>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex items-center justify-center gap-2"
                >
                  <Package className="w-4 h-4" />
                  Add Product
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600">Total Products</span>
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Package className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">8</div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600">Low Stock</span>
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">3</div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600">Out Of Stock</span>
                  <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">1</div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600">Total Value</span>
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">₹1,81,322</div>
              </div>
            </div>

            {/* Product Inventory Section */}
            <div className="bg-white rounded-xl border border-gray-200 mb-6 shadow-sm">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg font-semibold text-gray-900">Product Inventory</h2>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage your finished product and stock</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm flex items-center gap-2">
                      <FileDown className="w-4 h-4" />
                      <span className="hidden sm:inline">Smart Import</span>
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">Export</span>
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      <span className="hidden sm:inline">Refresh</span>
                    </button>
                  </div>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products by name, SKU, or tags..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <button className="w-full sm:w-auto px-4 py-2 sm:py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Filter className="w-4 h-4" />
                    <span className="sm:hidden">Filter</span>
                  </button>
                </div>
              </div>

              {/* Product List */}
              <div className="p-4 sm:p-6">
                <div className="space-y-3">
                  {products.map((product) => (
                    <div 
                      key={product.id}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Package className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base mb-1">{product.name}</h3>
                          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500">
                            <span>{product.sku}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{product.category}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs sm:text-sm">
                            <span className="font-medium text-gray-900">Price ₹{product.price.toLocaleString()}</span>
                            <span>•</span>
                            <span className="text-gray-500">Stock: {product.stock}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 sm:flex-shrink-0">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Star className="w-5 h-5 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Raw Material Inventory Section */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900">Raw Material Inventory</h2>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Track and manage raw materials and stock</p>
                  </div>
                </div>
              </div>

              {/* Mobile Cards View */}
              <div className="lg:hidden p-4 space-y-4">
                {rawMaterials.map((material) => (
                  <div key={material.id} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm mb-1">{material.name}</div>
                        <div className="text-xs text-gray-500">ID: {material.id}</div>
                      </div>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(material.status)}`}>
                        <Circle className={`w-2 h-2 fill-current ${getStatusDot(material.status)}`} />
                        {material.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-gray-500 text-xs mb-1">Available</div>
                        <div className="font-medium text-gray-900">{material.available.toLocaleString()} {material.unit}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-1">Unit Cost</div>
                        <div className="font-medium text-gray-900">₹{material.unitCost.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-1">Reorder Level</div>
                        <div className="font-medium text-gray-900">{material.reorderLevel}%</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-1">Supplier</div>
                        <div className="font-medium text-gray-900">{material.supplier}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Material ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Material Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Available
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Unit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Reorder Level (%)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Unit Cost (₹)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Supplier
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {rawMaterials.map((material) => (
                      <tr key={material.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {material.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {material.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {material.available.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {material.unit}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {material.reorderLevel}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {material.unitCost.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {material.supplier}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(material.status)}`}>
                            <Circle className={`w-2 h-2 fill-current ${getStatusDot(material.status)}`} />
                            {material.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Add New Inventory Item</h2>
                <p className="text-sm text-gray-500 mt-1">Choose What You Want To Add And Fill In Details. Unit Costs Auto-Calculate.</p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 px-6">
              <button
                onClick={() => setActiveTab('finished')}
                className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'finished'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Finished Product
              </button>
              <button
                onClick={() => setActiveTab('raw')}
                className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'raw'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Raw Material
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Name of the Product */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Name of the Product
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Chocobar"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* SKU and Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      SKU
                    </label>
                    <input
                      type="text"
                      name="sku"
                      value={newProduct.sku}
                      onChange={handleInputChange}
                      placeholder="e.g. CB-001"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={newProduct.category}
                      onChange={handleInputChange}
                      placeholder="e.g. Confectionary"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Order Quantity, Total Cost, Cost per unit */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Order Quantity
                    </label>
                    <input
                      type="number"
                      name="orderQuantity"
                      value={newProduct.orderQuantity}
                      onChange={handleInputChange}
                      placeholder="00"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Total Cost
                    </label>
                    <input
                      type="number"
                      name="totalCost"
                      value={newProduct.totalCost}
                      onChange={handleInputChange}
                      placeholder="00.00"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Cost per unit (Auto)
                    </label>
                    <input
                      type="text"
                      name="costPerUnit"
                      value={newProduct.costPerUnit}
                      readOnly
                      placeholder="Auto-calculated"
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-lg text-sm text-gray-600"
                    />
                  </div>
                </div>

                {/* Unit and Expiry Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Unit
                    </label>
                    <input
                      type="text"
                      name="unit"
                      value={newProduct.unit}
                      onChange={handleInputChange}
                      placeholder="x"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      name="expiryDate"
                      value={newProduct.expiryDate}
                      onChange={handleInputChange}
                      placeholder="dd-mm-yyyy"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-center p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={handleAddProduct}
                className="px-12 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryManagement;