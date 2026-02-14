// src/pages/wholesaler/BulkInventoryManagement.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu,
  Search,
  Bell,
  LogOut,
  TrendingUp,
  Package,
  Filter,
  MoreVertical,
  Star,
  Trash2,
  Copy,
  X,
  Upload,
  Plus,
  Calendar
} from 'lucide-react';
import WholesalerSidebar from '../../components/WholesalerSidebar';
import Header from '../../components/Header';

const BulkInventoryManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: '',
      sku: '',
      category: '',
      brand: '',
      supplierName: '',
      supplierCode: '',
      qtyOrdered: '',
      qtyReceived: '',
      unit: 'Pieces',
      unitCost: '',
      sellingPrice: '',
      moq: '1',
      leadTime: '',
      warehouse: 'Main Warehouse',
      qualityGrade: 'A',
      batchLotNumber: '',
      manufactureDate: '',
      expiryDate: ''
    }
  ]);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, {
      id: products.length + 1,
      productName: '',
      sku: '',
      category: '',
      brand: '',
      supplierName: '',
      supplierCode: '',
      qtyOrdered: '',
      qtyReceived: '',
      unit: 'Pieces',
      unitCost: '',
      sellingPrice: '',
      moq: '1',
      leadTime: '',
      warehouse: 'Main Warehouse',
      qualityGrade: 'A',
      batchLotNumber: '',
      manufactureDate: '',
      expiryDate: ''
    }]);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleDuplicateProduct = (index) => {
    const productToDuplicate = { ...products[index], id: products.length + 1 };
    setProducts([...products, productToDuplicate]);
  };

  const handleSaveProducts = () => {
    console.log('Saving products:', products);
    setShowAddModal(false);
  };

  const productInventoryItems = [
    {
      name: 'Name of the Product',
      sku: 'SKU NOP-101',
      brand: 'Brand: N',
      warehouse: 'Warehouse: A',
      stock: 'Stock: -'
    },
    {
      name: 'Name of the Product',
      sku: 'SKU NOP-101',
      brand: 'Brand: N',
      warehouse: 'Warehouse: B',
      stock: 'Stock: -'
    }
  ];

  const recentMovements = [
    {
      name: 'Name of the Product',
      sku: '#0222016',
      brand: 'Brand: N',
      warehouse: 'In: Warehouse A',
      quantity: '+100 pieces',
      by: 'by: System'
    }
  ];

  const calculateTotals = () => {
    let totalQty = 0;
    let totalCost = 0;
    let totalValue = 0;
    let totalProfits = 0;

    products.forEach(product => {
      const qty = parseFloat(product.qtyOrdered) || 0;
      const cost = parseFloat(product.unitCost) || 0;
      const price = parseFloat(product.sellingPrice) || 0;

      totalQty += qty;
      totalCost += qty * cost;
      totalValue += qty * price;
      totalProfits += qty * (price - cost);
    });

    const avgMargin = totalValue > 0 ? ((totalProfits / totalValue) * 100).toFixed(1) : 0;

    return { totalQty, totalCost, totalValue, totalProfits, avgMargin };
  };

  const totals = calculateTotals();

  return (
    <div className="flex h-screen bg-gray-50">
      <WholesalerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="mt-12 flex-1 flex flex-col lg:ml-64">
        {/* Header */}
          <Header onToggleSidebar={toggleSidebar} />


        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Bulk Inventory Management</h1>
                <p className="text-sm text-gray-600">Manage Wholesale Inventory Across Multiple Warehouses And Suppliers</p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm cursor-pointer flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Bulk Products
              </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              {/* Inventory Summary */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Inventory Summary</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Products</p>
                    <p className="text-2xl font-bold text-gray-900">0</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Stock Value</p>
                    <p className="text-2xl font-bold text-gray-900">₹0</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">In Stock</p>
                    <p className="text-2xl font-bold text-gray-900">0</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Low Stock</p>
                    <p className="text-2xl font-bold text-orange-600">0</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Out Of Stock</p>
                    <p className="text-2xl font-bold text-red-600">0</p>
                  </div>
                </div>
              </div>

              {/* Movement Summary */}
              <div className="bg-white rounded-lg border-2 border-blue-500 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Movement Summary</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Movements (This Month)</p>
                    <p className="text-2xl font-bold text-gray-900">0</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Purchases</p>
                    <p className="text-2xl font-bold text-gray-900">0</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Sales</p>
                    <p className="text-2xl font-bold text-gray-900">0</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Transfers</p>
                    <p className="text-2xl font-bold text-orange-600">0</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Adjustments</p>
                    <p className="text-2xl font-bold text-gray-900">0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Inventory */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Product Inventory</h2>
                </div>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm cursor-pointer">
                  Export
                </button>
              </div>

              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products by name, SKU, or brand..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded cursor-pointer">
                  <Filter className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="space-y-3">
                {productInventoryItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-600 mt-1">
                        <span>{item.sku}</span>
                        <span>•</span>
                        <span>{item.brand}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-600 mt-1">
                        <span>{item.warehouse}</span>
                        <span>•</span>
                        <span>{item.stock}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                        <Star className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Movements */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Recent Movements</h2>
              </div>

              <div className="space-y-3">
                {recentMovements.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-900 text-white rounded-lg">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <div className="flex flex-wrap gap-2 text-xs opacity-90 mt-1">
                        <span>{item.sku}</span>
                        <span>•</span>
                        <span>{item.brand}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs opacity-90 mt-1">
                        <span>{item.warehouse}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-green-400 font-semibold text-sm">{item.quantity}</p>
                      <p className="text-xs opacity-75 mt-1">{item.by}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add Bulk Products Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Bulk Add Products</h2>
                  <p className="text-sm text-gray-600 mt-1">Add multiple products at once with comprehensive details for wholesale inventory management</p>
                </div>
                <button onClick={() => setShowAddModal(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="flex gap-3 mt-4">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm cursor-pointer flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Import CSV
                </button>
                <button onClick={handleAddProduct} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm cursor-pointer flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Product
                </button>
              </div>
            </div>

            {/* Summary Bar */}
            <div className="bg-blue-50 border-2 border-blue-500 p-4 mx-6 mt-6 rounded-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Products</p>
                  <p className="text-lg font-bold text-gray-900">{products.length > 0 && products[0].productName ? products.length : 'X'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Total Qty</p>
                  <p className="text-lg font-bold text-gray-900">{totals.totalQty > 0 ? totals.totalQty : 'X'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Total Cost</p>
                  <p className="text-lg font-bold text-gray-900">₹{totals.totalCost > 0 ? totals.totalCost.toLocaleString() : '0'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Total Value</p>
                  <p className="text-lg font-bold text-gray-900">₹{totals.totalValue > 0 ? totals.totalValue.toLocaleString() : '0'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Profits</p>
                  <p className="text-lg font-bold text-green-600">₹{totals.totalProfits > 0 ? totals.totalProfits.toLocaleString() : '0'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Avg Margin</p>
                  <p className="text-lg font-bold text-gray-900">{totals.avgMargin}%</p>
                </div>
              </div>
            </div>

            {/* Products Form */}
            <div className="p-6 space-y-6">
              {products.map((product, index) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Product #{index + 1}</h3>
                    <div className="flex gap-2">
                      <button onClick={() => handleDuplicateProduct(index)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer" title="Duplicate">
                        <Copy className="w-4 h-4 text-gray-600" />
                      </button>
                      {products.length > 1 && (
                        <button onClick={() => handleDeleteProduct(index)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer" title="Delete">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Product Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Product Name *</label>
                      <input type="text" value={product.productName} onChange={(e) => handleProductChange(index, 'productName', e.target.value)} placeholder="X/x" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* SKU */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">SKU</label>
                      <input type="text" value={product.sku} onChange={(e) => handleProductChange(index, 'sku', e.target.value)} placeholder="x" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Category *</label>
                      <select value={product.category} onChange={(e) => handleProductChange(index, 'category', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white cursor-pointer">
                        <option value="">Select</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Food">Food</option>
                      </select>
                    </div>

                    {/* Brand */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Brand</label>
                      <input type="text" value={product.brand} onChange={(e) => handleProductChange(index, 'brand', e.target.value)} placeholder="X/x" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* Supplier Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Supplier Name *</label>
                      <input type="text" value={product.supplierName} onChange={(e) => handleProductChange(index, 'supplierName', e.target.value)} placeholder="X/x" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* Supplier Code */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Supplier Code</label>
                      <input type="text" value={product.supplierCode} onChange={(e) => handleProductChange(index, 'supplierCode', e.target.value)} placeholder="Xxx" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* Qty Ordered */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Qty Ordered *</label>
                      <input type="number" value={product.qtyOrdered} onChange={(e) => handleProductChange(index, 'qtyOrdered', e.target.value)} placeholder="X/x" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* Qty Received */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Qty Received</label>
                      <input type="number" value={product.qtyReceived} onChange={(e) => handleProductChange(index, 'qtyReceived', e.target.value)} placeholder="x" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* Unit */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Unit</label>
                      <select value={product.unit} onChange={(e) => handleProductChange(index, 'unit', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white cursor-pointer">
                        <option>Pieces</option>
                        <option>Kg</option>
                        <option>Liters</option>
                      </select>
                    </div>

                    {/* Unit Cost */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Unit Cost (₹) *</label>
                      <input type="number" value={product.unitCost} onChange={(e) => handleProductChange(index, 'unitCost', e.target.value)} placeholder="X/x" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* Selling Price */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Selling Price (₹) *</label>
                      <input type="number" value={product.sellingPrice} onChange={(e) => handleProductChange(index, 'sellingPrice', e.target.value)} placeholder="Xyz" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* MOQ */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">MOQ *</label>
                      <input type="number" value={product.moq} onChange={(e) => handleProductChange(index, 'moq', e.target.value)} placeholder="1" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* Lead Time */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Lead Time (Days) *</label>
                      <input type="number" value={product.leadTime} onChange={(e) => handleProductChange(index, 'leadTime', e.target.value)} placeholder="x" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* Warehouse */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Warehouse</label>
                      <select value={product.warehouse} onChange={(e) => handleProductChange(index, 'warehouse', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white cursor-pointer">
                        <option>Main Warehouse</option>
                        <option>Warehouse A</option>
                        <option>Warehouse B</option>
                      </select>
                    </div>

                    {/* Quality Grade */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Quality Grade</label>
                      <select value={product.qualityGrade} onChange={(e) => handleProductChange(index, 'qualityGrade', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white cursor-pointer">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>

                    {/* Batch/Lot Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Batch/Lot Number</label>
                      <input type="text" value={product.batchLotNumber} onChange={(e) => handleProductChange(index, 'batchLotNumber', e.target.value)} placeholder="X/x" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    {/* Manufacture Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Manufacture Date</label>
                      <input type="date" value={product.manufactureDate} onChange={(e) => handleProductChange(index, 'manufactureDate', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer" />
                    </div>

                    {/* Expiry Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Expiry Date</label>
                      <input type="date" value={product.expiryDate} onChange={(e) => handleProductChange(index, 'expiryDate', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex justify-end">
              <button onClick={handleSaveProducts} className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer">
                Save {products.length} Product(s)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BulkInventoryManagement;