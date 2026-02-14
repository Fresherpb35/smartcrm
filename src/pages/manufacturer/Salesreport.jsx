// src/pages/reports/SalesReport.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, TrendingUp } from 'lucide-react';
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

const SalesReport = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('Weekly Average: ₹6');

  // Sample data for the chart
  const chartData = [
    { name: 'Jan 1', Revenue: 45, Customers: 68 },
    { name: 'Jan 5', Revenue: 52, Customers: 48 },
    { name: 'Jan 9', Revenue: 98, Customers: 85 },
    { name: 'Jan 13', Revenue: 90, Customers: 78 },
    { name: 'Jan 17', Revenue: 85, Customers: 72 },
    { name: 'Jan 21', Revenue: 68, Customers: 55 },
    { name: 'Jan 25', Revenue: 90, Customers: 82 },
    { name: 'Jan 29', Revenue: 72, Customers: 62 }
  ];

  const salesPeople = [
    { name: 'Rahul Verma', orders: 42, revenue: '4,26,000', conversionRate: '28%' },
    { name: 'Neha Gupta', orders: 35, revenue: '3,80,000', conversionRate: '24%' },
    { name: 'Ananya Sharma', orders: 30, revenue: '3,10,000', conversionRate: '22%' },
    { name: 'Saurabh Singh', orders: 28, revenue: '2,45,000', conversionRate: '18%' }
  ];

  const salesDetails = [
    { orderId: 'ORD-1010', date: '12 Jan 2026', customer: 'Abc', product: 'T-shirt', salesRep: 'Rahul V.', quantity: 'XX', amount: '18,800', paymentStatus: 'Paid' },
    { orderId: 'ORD-1011', date: '12 Jan 2026', customer: 'Abc', product: 'T-shirt', salesRep: 'Neha G.', quantity: 'XX', amount: '12,500', paymentStatus: 'Pending' },
    { orderId: 'ORD-1010', date: '12 Jan 2026', customer: 'Abc', product: 'T-shirt', salesRep: 'Ananya S.', quantity: 'XX', amount: '6,000', paymentStatus: 'Paid' },
    { orderId: 'ORD-1010', date: '12 Jan 2026', customer: 'Abc', product: 'T-shirt', salesRep: 'Saurabh S.', quantity: 'XX', amount: '17,600', paymentStatus: 'Overdue' },
    { orderId: 'ORD-1010', date: '12 Jan 2026', customer: 'Abc', product: 'T-shirt', salesRep: 'xyz', quantity: 'XX', amount: '10,000', paymentStatus: 'Paid' },
    { orderId: 'ORD-1010', date: '12 Jan 2026', customer: 'Abc', product: 'T-shirt', salesRep: 'xyz', quantity: 'XX', amount: '10,000', paymentStatus: 'Pending' },
    { orderId: 'ORD-1010', date: '12 Jan 2026', customer: 'Abc', product: 'T-shirt', salesRep: 'xyz', quantity: 'XX', amount: '10,000', paymentStatus: 'Pending' },
    { orderId: 'ORD-1010', date: '12 Jan 2026', customer: 'Abc', product: 'T-shirt', salesRep: 'xyz', quantity: 'XX', amount: '10,000', paymentStatus: 'Paid' }
  ];

  const insights = [
    "Revenue Increased By 14% After Weekend Promotions",
    "Product X Demand is Highest Between 6-9 PM",
    "Customer Repeat Purchase Rate Improved By 9%"
  ];

  const alerts = [
    "3 Large Orders Pending Since Last Week",
    "Sales Dropped in North Region This Week",
    "Inventory Low - Need Restock",
    "Product Y Sales Spiked By 18%"
  ];

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'text-green-600';
      case 'Pending':
        return 'text-orange-600';
      case 'Overdue':
        return 'text-red-600';
      default:
        return 'text-gray-600';
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
              <h1 className="text-3xl sm:text-4xl font-bold text-white bg-blue-600 px-6 py-3 rounded-lg inline-block">
                SALES REPORT
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts and Tables */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sales Trends Chart */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                <h2 className="text-lg font-semibold text-gray-900">Sales Trends Over Time</h2>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Weekly Average: ₹6</option>
                  <option>Monthly Average: ₹24</option>
                  <option>Yearly Average: ₹288</option>
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
                    <Bar dataKey="Revenue" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="Customers" fill="#60a5fa" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Salesperson Performance */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Salesperson Performance Section</h2>
                <button className="text-blue-600 text-sm hover:underline">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Sales Person</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Orders</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Revenue (₹)</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Conversion Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesPeople.map((person, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2 text-sm font-medium text-gray-900">{person.name}</td>
                        <td className="py-3 px-2 text-sm text-gray-600">{person.orders}</td>
                        <td className="py-3 px-2 text-sm text-gray-600">{person.revenue}</td>
                        <td className="py-3 px-2 text-sm text-gray-600">{person.conversionRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sales Details Table */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Sales Details Table</h2>
                <button className="text-blue-600 text-sm hover:underline">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Order id</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Date</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Customer</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Product</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Sales Rep.</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Quantity</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Amount (₹)</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Payment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesDetails.map((sale, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2">{sale.orderId}</td>
                        <td className="py-3 px-2">{sale.date}</td>
                        <td className="py-3 px-2">{sale.customer}</td>
                        <td className="py-3 px-2">{sale.product}</td>
                        <td className="py-3 px-2">{sale.salesRep}</td>
                        <td className="py-3 px-2">{sale.quantity}</td>
                        <td className="py-3 px-2">{sale.amount}</td>
                        <td className={`py-3 px-2 font-medium ${getPaymentStatusColor(sale.paymentStatus)}`}>
                          {sale.paymentStatus}
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
            {/* Sales Insights */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Insights</h2>
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
                        <span className="text-red-600">📉</span>
                      ) : index === 2 ? (
                        <span className="text-yellow-600">⚠</span>
                      ) : (
                        <span className="text-green-600">📈</span>
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

export default SalesReport;