// src/pages/CommissionDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  Calendar,
  Package,
  Eye,
  Download
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const CommissionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [staffCommission, setStaffCommission] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Fetch staff commission data based on id
    const sampleData = {
      1: {
        id: 1,
        staffName: 'Anmol Sharma',
        employeeId: 'EMP-001',
        totalSales: 25000,
        totalCommission: 5000,
        pendingCommission: 500,
        paidCommission: 4500,
        transactions: 25,
        commissionRate: '20%',
        joinDate: '15 Jan 2024',
        salesHistory: [
          {
            id: 'SD001',
            date: '20 Jan 2026',
            product: 'Product A',
            saleAmount: 5000,
            commissionRate: '20%',
            commission: 1000,
            status: 'Paid'
          },
          {
            id: 'SD002',
            date: '18 Jan 2026',
            product: 'Product B',
            saleAmount: 3500,
            commissionRate: '20%',
            commission: 700,
            status: 'Paid'
          },
          {
            id: 'SD003',
            date: '15 Jan 2026',
            product: 'Product C',
            saleAmount: 2500,
            commissionRate: '20%',
            commission: 500,
            status: 'Pending'
          }
        ]
      },
      2: {
        id: 2,
        staffName: 'Rahul Verma',
        employeeId: 'EMP-002',
        totalSales: 35000,
        totalCommission: 6000,
        pendingCommission: 800,
        paidCommission: 10200,
        transactions: 34,
        commissionRate: '18%',
        joinDate: '10 Feb 2024',
        salesHistory: [
          {
            id: 'SD004',
            date: '22 Jan 2026',
            product: 'Product X',
            saleAmount: 8000,
            commissionRate: '18%',
            commission: 1440,
            status: 'Paid'
          },
          {
            id: 'SD005',
            date: '19 Jan 2026',
            product: 'Product Y',
            saleAmount: 4500,
            commissionRate: '18%',
            commission: 810,
            status: 'Pending'
          }
        ]
      }
    };

    setStaffCommission(sampleData[id] || sampleData[1]);
  }, [id]);

  const getStatusStyle = (status) => {
    return status === 'Paid'
      ? 'bg-green-50 text-green-700 border-green-200'
      : 'bg-orange-50 text-orange-700 border-orange-200';
  };

  if (!staffCommission) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Mobile Header */}
     

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <button
                onClick={() => navigate('/sales-commission')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Sales Commission</span>
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>

            {/* Staff Info Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                    {staffCommission.staffName}
                  </h1>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Employee ID: {staffCommission.employeeId}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Joined: {staffCommission.joinDate}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                  <span className="text-sm text-gray-600">Commission Rate:</span>
                  <span className="text-lg font-semibold text-blue-600">
                    {staffCommission.commissionRate}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Total Sales */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{staffCommission.totalSales.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Total Sales</p>
                <p className="text-xs text-gray-500">
                  {staffCommission.transactions} Transactions
                </p>
              </div>

              {/* Total Commission */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{staffCommission.totalCommission.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Total Commission</p>
                <p className="text-xs text-gray-500">All Time Earnings</p>
              </div>

              {/* Pending Commission */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{staffCommission.pendingCommission.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Pending</p>
                <p className="text-xs text-gray-500">Awaiting Payment</p>
              </div>

              {/* Paid Commission */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{staffCommission.paidCommission.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Paid</p>
                <p className="text-xs text-gray-500">Total Disbursed</p>
              </div>
            </div>

            {/* Sales History Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Sales History</h2>
              </div>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Sales ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Product/Service
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Sale Amount (₹)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Commission Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Commission (₹)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {staffCommission.salesHistory.map((sale) => (
                      <tr key={sale.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {sale.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {sale.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {sale.product}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{sale.saleAmount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {sale.commissionRate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          ₹{sale.commission.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyle(sale.status)}`}>
                            {sale.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden divide-y divide-gray-200">
                {staffCommission.salesHistory.map((sale) => (
                  <div key={sale.id} className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{sale.id}</h3>
                        <p className="text-sm text-gray-500">{sale.date}</p>
                      </div>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyle(sale.status)}`}>
                        {sale.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Product</p>
                        <p className="font-medium text-gray-900">{sale.product}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Sale Amount</p>
                        <p className="font-medium text-gray-900">₹{sale.saleAmount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Rate</p>
                        <p className="font-medium text-gray-900">{sale.commissionRate}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Commission</p>
                        <p className="font-medium text-green-600">₹{sale.commission.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CommissionDetail;