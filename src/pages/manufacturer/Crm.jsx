import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Users, TrendingUp, DollarSign, ShoppingCart,
  Search, Download, Phone, Mail, X
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const CRM = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    gstNumber: ''
  });

  const stats = [
    { title: 'Total Customers', value: 'XX', subtitle: '0 Active', icon: Users, bgColor: 'from-cyan-400 to-cyan-500', iconBg: 'bg-cyan-600' },
    { title: 'VIP Customers', value: 'XX', subtitle: 'High Value Customers', icon: TrendingUp, bgColor: 'from-green-400 to-green-500', iconBg: 'bg-green-600' },
    { title: 'Total Revenue', value: '₹0', subtitle: 'From All Customers', icon: DollarSign, bgColor: 'from-purple-400 to-purple-500', iconBg: 'bg-purple-600' },
    { title: 'Avg Order Value', value: '₹0', subtitle: 'Across All Customers', icon: ShoppingCart, bgColor: 'from-orange-400 to-orange-500', iconBg: 'bg-orange-600' },
  ];

  const customers = [
    { id: 1, name: 'Rakesh Kumar', initials: 'RK', phone: '+91 9874563210', email: 'rakesh@work.com', bgColor: 'bg-indigo-500' },
    { id: 2, name: 'Meena Morgan', initials: 'MM', phone: '+91 9874563210', email: 'meena@work.com', bgColor: 'bg-purple-500' },
    // ... other dummy customers
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAddModal(false);
    setFormData({ name: '', phone: '', email: '', address: '', gstNumber: '' });
  };

  const filteredCustomers = customers.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.phone.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate('/manufacturer/dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span
                onClick={() => navigate('/manufacturer/dashboard')}
                className="hover:text-gray-900 cursor-pointer"
              >
                Dashboard
              </span>
              <span>›</span>
              <span className="text-gray-900 font-medium">CRM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Customer Relationship Management
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Manage Customer Information, History, And Relationships
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 text-sm sm:text-base">
                <Download size={16} />
                Export
              </button>
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm sm:text-base"
              >
                + Add Customer
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`bg-gradient-to-br ${stat.bgColor} rounded-xl sm:rounded-2xl p-5 sm:p-6 text-white shadow-md hover:shadow-lg transition-all`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-white/90 text-xs sm:text-sm font-medium mb-1">{stat.title}</p>
                    <p className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-white/80 text-xs">{stat.subtitle}</p>
                  </div>
                  <div className={`${stat.iconBg} p-3 rounded-xl hidden sm:block`}>
                    <Icon size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customer List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">Customer List</h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, phone or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 text-sm whitespace-nowrap">
                <Download size={16} />
                Export All
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredCustomers.length === 0 ? (
              <div className="py-16 text-center text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>No customers found</p>
              </div>
            ) : (
              filteredCustomers.map((customer) => (
                <div
                  key={customer.id}
                  className="p-4 sm:p-5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col xs:flex-row xs:items-center gap-4">
                    {/* Avatar + Name */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`${customer.bgColor} w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg flex-shrink-0`}
                      >
                        {customer.initials}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
                          {customer.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 truncate xs:hidden">
                          {customer.phone}
                        </p>
                      </div>
                    </div>

                    {/* Contact info - hidden on very small screens, shown otherwise */}
                    <div className="hidden xs:flex xs:items-center xs:gap-4 flex-1 min-w-0">
                      <div className="min-w-0">
                        <p className="text-sm text-gray-600 truncate">{customer.phone}</p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-gray-600 truncate">{customer.email}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 xs:gap-2 ml-auto xs:ml-0">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Phone className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Mail className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                      </button>
                    </div>
                  </div>

                  {/* Extra info row on small screens */}
                  <div className="xs:hidden mt-2 pl-[3.25rem] text-xs text-gray-600 space-y-0.5">
                    <p>{customer.phone}</p>
                    <p>{customer.email}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Add Customer Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-5 sm:px-6 py-4 flex items-center justify-between z-10">
                <h2 className="text-xl font-bold text-gray-900">Add New Customer</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1.5">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="customer@example.com"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1.5">Address</label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street, City, PIN"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1.5">GST Number</label>
                  <input
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleInputChange}
                    placeholder="22AAAAA0000A1Z5"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-end pt-3">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium min-w-[120px]"
                  >
                    Add Customer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CRM;