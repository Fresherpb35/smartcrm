// src/pages/reports/InventoryReport.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const InventoryReport = () => {
  const navigate = useNavigate();
  const [selectedData, setSelectedData] = useState('4-Month Data');

  // Sample data for the chart
  const chartData = [
    { name: 'Jan', 'In Stock': 85, 'Stock Out': 72 },
    { name: 'Feb', 'In Stock': 78, 'Stock Out': 68 },
    { name: 'Mar', 'In Stock': 72, 'Stock Out': 88 },
    { name: 'Apr', 'In Stock': 88, 'Stock Out': 95 },
    { name: 'May', 'In Stock': 82, 'Stock Out': 78 }
  ];

  const inventoryAging = [
    { ageRange: '0-30 Days', items: 620, stockValue: '₹18,40,000' },
    { ageRange: '31-60 Days', items: 360, stockValue: '₹7,20,000' },
    { ageRange: '61-90 Days', items: 180, stockValue: '₹3,10,000' },
    { ageRange: '90+ Days', items: 104, stockValue: '₹2,45,000' }
  ];

  const inventoryDetails = [
    { itemCode: 'IM-101', itemName: 'A', category: 'Fabric', openingStock: 600, stockIn: 300, stockOut: 320, closingStock: 580, unit: 'kg', amount: '64,500', status: 'In Stock' },
    { itemCode: 'IM-101', itemName: 'B', category: 'Consumable', openingStock: 130, stockIn: 60, stockOut: 150, closingStock: 30, unit: 'kg', amount: '21,000', status: 'Low Stock' },
    { itemCode: 'IM-101', itemName: 'C', category: 'Electronics', openingStock: 60, stockIn: 20, stockOut: 68, closingStock: 6, unit: 'kg', amount: '75,000', status: 'Reorder' },
    { itemCode: 'IM-101', itemName: 'D', category: 'Stationery', openingStock: 25, stockIn: 150, stockOut: 170, closingStock: 12, unit: 'kg', amount: '17,500', status: 'Reorder' },
    { itemCode: 'IM-101', itemName: 'E', category: 'Y', openingStock: 210, stockIn: 110, stockOut: 70, closingStock: 40, unit: 'kg', amount: '10,000', status: 'In Stock' },
    { itemCode: 'IM-101', itemName: 'F', category: 'Z', openingStock: 165, stockIn: 70, stockOut: 90, closingStock: 33, unit: 'kg', amount: '10,000', status: 'Low Stock' },
    { itemCode: 'IM-101', itemName: 'G', category: 'Z', openingStock: 40, stockIn: 80, stockOut: 100, closingStock: 20, unit: 'kg', amount: '10,000', status: 'In Stock' },
    { itemCode: 'IM-101', itemName: 'H', category: 'Y', openingStock: 100, stockIn: 150, stockOut: 80, closingStock: 40, unit: 'kg', amount: '10,000', status: 'In Stock' }
  ];

  const insights = [
    "6 Items Are Below Reorder Level And May Impact Production",
    "Z Product Demand Has Increased By 18% This Month",
    "Raw Cotton Consumption Increased By 18% This Month",
    "₹2.3L Worth of Stock Has Not Moved in 90+ days"
  ];

  const alerts = [
    "Green Tea Leaves Stock Below Minimum Level",
    "15 Items Nearing Expiry",
    "Stock Mismatch Detected During Last Audit",
    "3 Items With Detected Damage During Transit"
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock':
        return 'text-green-600 bg-green-50';
      case 'Low Stock':
        return 'text-orange-600 bg-orange-50';
      case 'Reorder':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/performance-reports')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-white bg-purple-600 px-6 py-3 rounded-lg inline-block">
                INVENTORY REPORT
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts and Tables */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stock In Vs Stock Out Chart */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                <h2 className="text-lg font-semibold text-gray-900">Stock In Vs Stock Out</h2>
                <select
                  value={selectedData}
                  onChange={(e) => setSelectedData(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option>4-Month Data</option>
                  <option>6-Month Data</option>
                  <option>12-Month Data</option>
                </select>
              </div>

              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="In Stock" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="Stock Out" fill="#60a5fa" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Inventory Aging Summary */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Inventory Aging Summary</h2>
                <button className="text-purple-600 text-sm hover:underline">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Age Range</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Items</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Stock Value (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryAging.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2 text-sm font-medium text-gray-900">{item.ageRange}</td>
                        <td className="py-3 px-2 text-sm text-gray-600">{item.items}</td>
                        <td className="py-3 px-2 text-sm text-gray-600">{item.stockValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inventory Details Table */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Inventory Details Table</h2>
                <button className="text-purple-600 text-sm hover:underline">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Item Code</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Item Name</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Category</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Opening Stock</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Stock In</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Stock Out</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Closing Stock</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Unit</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Amount (₹)</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryDetails.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2">{item.itemCode}</td>
                        <td className="py-3 px-2">{item.itemName}</td>
                        <td className="py-3 px-2">{item.category}</td>
                        <td className="py-3 px-2">{item.openingStock}</td>
                        <td className="py-3 px-2">{item.stockIn}</td>
                        <td className="py-3 px-2">{item.stockOut}</td>
                        <td className="py-3 px-2">{item.closingStock}</td>
                        <td className="py-3 px-2">{item.unit}</td>
                        <td className="py-3 px-2">{item.amount}</td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Insights and Alerts */}
          <div className="space-y-6">
            {/* Smart Insights */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Smart Insights</h2>
              <div className="space-y-3">
                {insights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-1.5 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts & Highlights */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Alerts & Highlights</h2>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="flex-shrink-0">
                      {index === 0 ? (
                        <span className="text-red-600">⚠</span>
                      ) : index === 1 ? (
                        <span className="text-yellow-600">⚠</span>
                      ) : index === 2 ? (
                        <span className="text-orange-600">⚠</span>
                      ) : (
                        <span className="text-red-600">⚠</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700">{alert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Report */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                <span>Download Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryReport;