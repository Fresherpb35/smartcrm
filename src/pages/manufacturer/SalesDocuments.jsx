// src/pages/SalesDocuments.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  Search, 
  Filter,
  FileText,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Clock
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const SalesDocuments = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

//   const handleInvoiceClick = (invoiceId) => {
//     navigate(`/sales-documents/${invoiceId}`);
//   };

  // Sample invoice data
  const invoices = [
    {
      id: 'IVN-123',
      customerName: 'Customer Name',
      status: 'Pending',
      statusColor: 'orange',
      time: '24:00, 27 Jan 2026'
    },
    {
      id: 'IVN-123',
      customerName: 'Customer Name',
      status: 'Overdue',
      statusColor: 'red',
      time: '24:00, 27 Jan 2026'
    },
    {
      id: 'IVN-123',
      customerName: 'Customer Name',
      status: 'Paid',
      statusColor: 'blue',
      time: '24:00, 27 Jan 2026'
    }
  ];

  const getStatusBadgeStyle = (color) => {
    const styles = {
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
      red: 'bg-red-50 text-red-600 border-red-200',
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200'
    };
    return styles[color] || styles.blue;
  };

  const getStatusIcon = (color) => {
    switch(color) {
      case 'green':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'red':
        return <AlertCircle className="w-4 h-4" />;
      case 'orange':
        return <Clock className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    
    <div className="flex h-screen bg-gray-50">
                     <Header onToggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Mobile Header */}
     


        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="mt-14 p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                Sales Documents
              </h1>
              <p className="text-sm text-gray-500">
                Manage Invoices, Drafts, And Sales Documents
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {/* Total Sales */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Sales</p>
                    <p className="text-lg sm:text-xl font-semibold text-gray-900">₹0.00</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Pending Amount */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Pending Amount</p>
                    <p className="text-lg sm:text-xl font-semibold text-gray-900">₹0.00</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                  </div>
                </div>
              </div>

              {/* Paid Invoices */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Paid Invoices</p>
                    <p className="text-lg sm:text-xl font-semibold text-gray-900">0</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Overdue */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Overdue</p>
                    <p className="text-lg sm:text-xl font-semibold text-gray-900">0</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Invoices Section */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Section Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <h2 className="text-lg font-semibold text-gray-900">Invoices</h2>
                  </div>
                  <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                    See Drafts
                  </button>
                </div>

                {/* Search Bar */}
                <div className="flex gap-2 sm:gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products by customer name, or invoice number..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <button className="p-2 sm:p-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex-shrink-0">
                    <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Invoice Cards Grid */}
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {invoices.map((invoice, index) => (
                    <div
                      key={index}
                      onClick={() => handleInvoiceClick(invoice.id)}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group bg-white"
                    >
                      <div className="flex items-start gap-3">
                        {/* Icon */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors truncate">
                            {invoice.customerName}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2 truncate">
                            Invoice No.: {invoice.id}
                          </p>
                          <p className="text-xs text-gray-500 mb-3">
                            Time: {invoice.time}
                          </p>

                          {/* Status Badge */}
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeStyle(invoice.statusColor)}`}>
                            {getStatusIcon(invoice.statusColor)}
                            {invoice.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Empty State (Optional) */}
                {invoices.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No invoices yet</h3>
                    <p className="text-gray-500 text-sm">
                      Create your first invoice to get started
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SalesDocuments;