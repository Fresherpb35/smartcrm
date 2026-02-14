// src/pages/WastageTracking.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  Download,
  AlertCircle,
  TrendingDown,
  Package,
  DollarSign,
  Lightbulb,
  Shield,
  Camera,
  X
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const WastageTracking = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('30 days');
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportData, setReportData] = useState({
    productName: '',
    stage: '',
    quantityWasted: '',
    reason: '',
    costImpact: '',
    photo: null
  });
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleReportInputChange = (e) => {
    const { name, value } = e.target;
    setReportData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReportData(prev => ({
        ...prev,
        photo: file
      }));
    }
  };

  const handleSubmitReport = () => {
    console.log('Submitting wastage report:', reportData);
    setShowReportModal(false);
    setReportData({
      productName: '',
      stage: '',
      quantityWasted: '',
      reason: '',
      costImpact: '',
      photo: null
    });
  };

  const wastageLogs = [
    {
      product: 'Cotton T-Shirt',
      stage: 'Stitching',
      quantityWasted: '18 units',
      reason: 'Fabric Tear',
      costImpact: '₹3,600'
    },
    {
      product: 'Headphone Set',
      stage: 'Assembly',
      quantityWasted: '5 units',
      reason: 'PCB Fault',
      costImpact: '₹6,250'
    },
    {
      product: 'Green Tea Box',
      stage: 'Packing',
      quantityWasted: '12 units',
      reason: 'Box Damage',
      costImpact: '₹720'
    }
  ];

  const correctiveActions = [
    { issue: 'Fabric Tear', action: 'Replace worn needle' },
    { issue: 'PCB Fault', action: 'Change supplier batch' },
    { issue: 'Box Damage', action: 'Add corner protectors' }
  ];

  const smartSuggestions = [
    'Replace Supplier to reduce defects by ~16%',
    'Recalibrate Line B cut stitching wastage by ~3%',
    'Introduce Operator Workshop For Mach Skill'
  ];

  const controlsApprovals = [
    'Require Manager Approval For Wastage Above ₹5,000',
    'Lock Records After 48 Hours',
    'Add Photo Evidence For High-Cost Wastage'
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
                onClick={() => navigate('/production-planning')}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <span>/</span>
              <span>Production Planning</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">Wastage Tracking</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
                  Wastage Tracking
                </h1>
                <p className="text-sm text-gray-500">
                  Reduce Cost Leakage And Improve Production Quality.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm cursor-pointer">
                  Export Report
                </button>
                <button 
                  onClick={() => setShowReportModal(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm cursor-pointer"
                >
                  Report Wastage
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <p className="text-sm text-gray-600 mb-2">Today's Wastage</p>
                <p className="text-3xl font-bold text-gray-900">3.1%</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <p className="text-sm text-gray-600 mb-2">Monthly Wastage Cost</p>
                <p className="text-3xl font-bold text-orange-600">₹48,500</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <p className="text-sm text-gray-600 mb-2">Top Wastage Reason</p>
                <p className="text-lg font-bold text-gray-900">Defective Material</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <p className="text-sm text-gray-600 mb-2">Most Affected Product</p>
                <p className="text-lg font-bold text-gray-900">Cotton T-Shirt</p>
              </div>
            </div>

            {/* Wastage Logs */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Wastage Logs</h2>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                >
                  <option>30 days</option>
                  <option>60 days</option>
                  <option>90 days</option>
                </select>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Product</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Stage</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Quantity Wasted</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Reason</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Cost Impact</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {wastageLogs.map((log, index) => (
                      <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                        <td className="px-4 py-4 text-sm text-gray-900">{log.product}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{log.stage}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{log.quantityWasted}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{log.reason}</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">{log.costImpact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-3">
                {wastageLogs.map((log, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">{log.product}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs">Stage</p>
                        <p className="font-medium text-gray-900">{log.stage}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Wasted</p>
                        <p className="font-medium text-gray-900">{log.quantityWasted}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Reason</p>
                        <p className="font-medium text-gray-900">{log.reason}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Cost</p>
                        <p className="font-medium text-orange-600">{log.costImpact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Current Month Vs Last Month Chart */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Month Vs Last Month</h2>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <p className="text-gray-500 text-sm">Chart visualization area</p>
                </div>
              </div>

              {/* Corrective & Preventive Actions */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Corrective & Preventive Actions</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Issue</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Action Taken</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {correctiveActions.map((action, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 text-sm text-gray-900">{action.issue}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{action.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
                    <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-sm text-gray-900">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls & Approvals */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Controls & Approvals</h2>
                </div>

                <div className="space-y-3">
                  {controlsApprovals.map((control, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-sm text-gray-900">{control}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Report Wastage Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-900">Report Wastage</h2>
              <button
                onClick={() => setShowReportModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={reportData.productName}
                    onChange={handleReportInputChange}
                    placeholder="Enter Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* Stage and Quantity Wasted */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Stage
                    </label>
                    <input
                      type="text"
                      name="stage"
                      value={reportData.stage}
                      onChange={handleReportInputChange}
                      placeholder="e.g SD12X0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Quantity Wasted
                    </label>
                    <input
                      type="text"
                      name="quantityWasted"
                      value={reportData.quantityWasted}
                      onChange={handleReportInputChange}
                      placeholder="dd-mm-yyyy"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Reason
                  </label>
                  <input
                    type="text"
                    name="reason"
                    value={reportData.reason}
                    onChange={handleReportInputChange}
                    placeholder="Xyz"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* Cost Impact */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Cost Impact
                  </label>
                  <input
                    type="number"
                    name="costImpact"
                    value={reportData.costImpact}
                    onChange={handleReportInputChange}
                    placeholder="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* Add Photos */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Add Photos (If High Cost)
                  </label>
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Camera className="w-12 h-12 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">
                        {reportData.photo ? reportData.photo.name : 'Click to upload photo'}
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={handleSubmitReport}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer"
              >
                + Add Commission
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WastageTracking;