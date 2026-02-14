import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  ArrowLeft,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  Download,
  X,
  ChevronDown,
  Eye
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const SalesCommission = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('January 2026');
  const [selectedStaff, setSelectedStaff] = useState('All Staff');
  const [showAddModal, setShowAddModal] = useState(false);
  const navigate = useNavigate();

  const [newCommission, setNewCommission] = useState({
    staffName: '',
    salesId: '',
    salesDate: '',
    product: '',
    salesAmount: '',
    commissionType: 'percentage',
    commissionRate: ''
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCommission(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddCommission = () => {
    console.log('Adding new commission:', newCommission);
    setShowAddModal(false);
    setNewCommission({
      staffName: '',
      salesId: '',
      salesDate: '',
      product: '',
      salesAmount: '',
      commissionType: 'percentage',
      commissionRate: ''
    });
  };

  const handleStaffClick = (staffId) => {
    navigate(`/sales-commission/${staffId}`);
  };

  const commissionData = [
    {
      id: 1,
      staffMember: 'Anmol Sharma',
      totalSales: '₹25,000',
      totalCommission: '₹5,000',
      pending: '₹500',
      paid: '₹4,500',
      transactions: 25,
      actions: 'View'
    },
    {
      id: 2,
      staffMember: 'Rahul Verma',
      totalSales: '₹35,000',
      totalCommission: '₹6,000',
      pending: '₹800',
      paid: '₹10,200',
      transactions: 34,
      actions: 'View'
    },
    {
      id: 3,
      staffMember: 'Noor Oazel',
      totalSales: '₹28,795',
      totalCommission: '₹2,800',
      pending: '₹500',
      paid: '₹30,000',
      transactions: 45,
      actions: 'View'
    },
    {
      id: 4,
      staffMember: 'Aman Mittal',
      totalSales: '₹28,795',
      totalCommission: '₹3,770',
      pending: '₹300',
      paid: '₹10,770',
      transactions: 17,
      actions: 'View'
    },
    {
      id: 5,
      staffMember: 'David singh',
      totalSales: '₹45,000',
      totalCommission: '₹7,000',
      pending: '₹500',
      paid: '₹24,500',
      transactions: 32,
      actions: 'View'
    }
  ];

  const filteredData = commissionData.filter(item =>
    item.staffMember.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col lg:ml-64">
        <Header onToggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto">
          <div className="mt-14 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-4">
              <button 
                onClick={() => navigate('/manufacturer/dashboarda')}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Dashboard</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">Sales Commission</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  Sales Commission
                </h1>
                <p className="text-sm text-gray-600">
                  Track And Manage Sales Staff Commission Earnings
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => console.log('Export report')}
                  className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export Report
                </button>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex items-center justify-center gap-2"
                >
                  + Add Commission
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Revenue</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">₹0</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Commissions</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">₹0</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Pending Commissions</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">₹0</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm col-span-2 lg:col-span-1">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Paid Commissions</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">₹0</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search staff by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              <div className="flex gap-3">
                <div className="relative flex-1 sm:flex-none sm:w-40">
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full appearance-none pl-3 pr-10 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                  >
                    <option>January 2026</option>
                    <option>December 2025</option>
                    <option>November 2025</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <div className="relative flex-1 sm:flex-none sm:w-32">
                  <select
                    value={selectedStaff}
                    onChange={(e) => setSelectedStaff(e.target.value)}
                    className="w-full appearance-none pl-3 pr-10 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                  >
                    <option>All Staff</option>
                    <option>Anmol Sharma</option>
                    <option>Rahul Verma</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Commission Table/Cards */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                  Commission Summary By Staff
                </h2>
              </div>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Staff Member
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Total Sales
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Total Commission
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Pending
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Paid
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Transactions
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.staffMember}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.totalSales}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.totalCommission}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.pending}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.paid}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.transactions}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            onClick={() => handleStaffClick(item.id)}
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                          >
                            <Eye className="w-4 h-4" />
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile/Tablet Cards */}
              <div className="lg:hidden divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <div key={item.id} className="p-4 sm:p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.staffMember}</h3>
                      <button
                        onClick={() => handleStaffClick(item.id)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 flex-shrink-0"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Total Sales</p>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.totalSales}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Commission</p>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.totalCommission}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Pending</p>
                        <p className="font-semibold text-orange-600 text-sm sm:text-base">{item.pending}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Paid</p>
                        <p className="font-semibold text-green-600 text-sm sm:text-base">{item.paid}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-500 text-xs mb-1">Transactions</p>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.transactions}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredData.length === 0 && (
                  <div className="p-12 text-center">
                    <p className="text-gray-500">No commission data found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add Commission Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Add Sales Commission
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-4">
                {/* Sales Staff Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Sales Staff Name
                  </label>
                  <input
                    type="text"
                    name="staffName"
                    value={newCommission.staffName}
                    onChange={handleInputChange}
                    placeholder="Enter Full Name"
                    className="w-full px-4 py-2.5 sm:py-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* Sales ID and Sales Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Sales ID
                    </label>
                    <input
                      type="text"
                      name="salesId"
                      value={newCommission.salesId}
                      onChange={handleInputChange}
                      placeholder="e.g SD12X0"
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Sales Date
                    </label>
                    <input
                      type="date"
                      name="salesDate"
                      value={newCommission.salesDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                {/* Product/Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Product/Service
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={newCommission.product}
                    onChange={handleInputChange}
                    placeholder="Productxyz"
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* Sales Amount */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Sales Amount
                  </label>
                  <input
                    type="number"
                    name="salesAmount"
                    value={newCommission.salesAmount}
                    onChange={handleInputChange}
                    placeholder="0"
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* Commission Type and Rate */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Commission Type
                    </label>
                    <select
                      name="commissionType"
                      value={newCommission.commissionType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="percentage">Percentage</option>
                      <option value="fixed">Fixed Amount</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Commission Rate
                    </label>
                    <input
                      type="text"
                      name="commissionRate"
                      value={newCommission.commissionRate}
                      onChange={handleInputChange}
                      placeholder="x%"
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={handleAddCommission}
                className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
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

export default SalesCommission;