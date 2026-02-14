// src/pages/reports/ProductionReport.jsx
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

const ProductionReport = () => {
  const navigate = useNavigate();
  const [selectedData, setSelectedData] = useState('4-Month Data');

  // Sample data for the chart
  const chartData = [
    { name: 'Jan', Target: 85, Output: 95 },
    { name: 'Feb', Target: 75, Output: 82 },
    { name: 'Mar', Target: 90, Output: 88 },
    { name: 'Apr', Target: 80, Output: 75 },
    { name: 'May', Target: 95, Output: 88 }
  ];

  const downtimeBreakdown = [
    { reason: 'Machine Maintenance', duration: '2.6' },
    { reason: 'Power Failure', duration: '1.1' },
    { reason: 'Material Shortage', duration: '1.6' },
    { reason: 'Quality Checks', duration: '1.1' }
  ];

  const productionDetails = [
    { batchId: 'IM-101', product: 'A', productionLine: 'Line A', plannedQty: 400, actualQty: 76, defects: 18, efficiency: '95.3%', status: 'Completed' },
    { batchId: 'IM-101', product: 'B', productionLine: 'Line B', plannedQty: 120, actualQty: 111, defects: 20, efficiency: '83.8%', status: 'Completed' },
    { batchId: 'IM-101', product: 'C', productionLine: 'Line C', plannedQty: 92, actualQty: 36, defects: 22, efficiency: '83.8%', status: 'Delayed' },
    { batchId: 'IM-101', product: 'D', productionLine: 'Line D', plannedQty: 170, actualQty: 150, defects: 16, efficiency: '83.8%', status: 'Delayed' },
    { batchId: 'IM-101', product: 'E', productionLine: 'Line A', plannedQty: 210, actualQty: 195, defects: 22, efficiency: '83.8%', status: 'Completed' },
    { batchId: 'IM-101', product: 'F', productionLine: 'Line B', plannedQty: 165, actualQty: 111, defects: 46, efficiency: '83.8%', status: 'Completed' },
    { batchId: 'IM-101', product: 'G', productionLine: 'Line C', plannedQty: 340, actualQty: 200, defects: 13, efficiency: '83.8%', status: 'Completed' },
    { batchId: 'IM-101', product: 'H', productionLine: 'Line A', plannedQty: 300, actualQty: 264, defects: 11, efficiency: '83.8%', status: 'Delayed' }
  ];

  const insights = [
    "Line C Efficiency Dropped Due To Machine Maintenance",
    "Green Tea Production Exceeded Target By 2.5%",
    "Material Shortages Caused 26% Of Downtime"
  ];

  const alerts = [
    "Production Delayed In Line B Due To Material Shortage",
    "Maintenance Overdue For Machine #12",
    "Defect Rate Increased For Headphones"
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600 bg-green-50';
      case 'Delayed':
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
              <h1 className="text-3xl sm:text-4xl font-bold text-white bg-blue-600 px-6 py-3 rounded-lg inline-block">
                PRODUCTION REPORT
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts and Tables */}
          <div className="lg:col-span-2 space-y-6">
            {/* Production Output Vs Target Chart */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                <h2 className="text-lg font-semibold text-gray-900">Production Output Vs Target</h2>
                <select
                  value={selectedData}
                  onChange={(e) => setSelectedData(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <Bar dataKey="Target" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="Output" fill="#60a5fa" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Downtime Breakdown */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Downtime Breakdown</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Reason</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Duration (hrs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {downtimeBreakdown.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2 text-sm font-medium text-gray-900">{item.reason}</td>
                        <td className="py-3 px-2 text-sm text-gray-600">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Production Details Table */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Production Details Table</h2>
                <button className="text-blue-600 text-sm hover:underline">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Batch id</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Product</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Production Line</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Planned Qty.</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Actual Qty.</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Defects</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Efficiency</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productionDetails.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2">{item.batchId}</td>
                        <td className="py-3 px-2">{item.product}</td>
                        <td className="py-3 px-2">{item.productionLine}</td>
                        <td className="py-3 px-2">{item.plannedQty}</td>
                        <td className="py-3 px-2">{item.actualQty}</td>
                        <td className="py-3 px-2">{item.defects}</td>
                        <td className="py-3 px-2">{item.efficiency}</td>
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
                        <span className="text-orange-600">⚠</span>
                      ) : (
                        <span className="text-red-600">📊</span>
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

export default ProductionReport;