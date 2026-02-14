// src/pages/AccountSetup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  User,
  Camera,
  Key,
  Download,
  Upload,
  Filter,
  ChevronDown
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const AccountSetup = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [autoSync, setAutoSync] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('All Types');
  const [selectedModule, setSelectedModule] = useState('All Module');
  const [selectedDepartment, setSelectedDepartment] = useState('All Department');
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    adminName: '',
    role: '',
    phone: '',
    email: ''
  });

  const [apiKeys, setApiKeys] = useState({
    apiKey: '••••••••••••',
    secretKey: '••••••••••••'
  });

  const [syncSettings, setSyncSettings] = useState({
    syncFrequency: 'Every 5 minutes',
    dataScope: 'Orders, Inventory, Customers'
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saving profile changes:', profileData);
  };

  const connectedServices = [
    {
      name: 'Payment Gateway (Razorpay)',
      status: 'Connected',
      lastSync: '2 Hrs ago',
      statusColor: 'text-green-600 bg-green-50',
      action: 'Disconnect'
    },
    {
      name: 'Delivery EMS',
      status: 'Connected',
      lastSync: '5 hrs ago',
      statusColor: 'text-green-600 bg-green-50',
      action: 'Resync'
    },
    {
      name: 'Shopify API',
      status: 'Not Connected',
      lastSync: '--',
      statusColor: 'text-red-600 bg-red-50',
      action: 'Connect'
    },
    {
      name: 'Analytics Power BI',
      status: 'Connected',
      lastSync: '1 day ago',
      statusColor: 'text-green-600 bg-green-50',
      action: 'Resync'
    }
  ];

  const systemLogs = [
    {
      timestamp: '29 Jan 2026, 16:23',
      user: 'Admin X',
      action: 'Modified User Permissions',
      module: 'Accounts',
      status: 'Success',
      ipAddress: '--'
    },
    {
      timestamp: '28 Jan 2026, 15:10',
      user: 'Rahul V.',
      action: 'Exported Sales Report',
      module: 'Sales',
      status: 'Success',
      ipAddress: '49.254.11.31'
    },
    {
      timestamp: '28 Jan 2026, 16:45',
      user: 'System',
      action: 'Inventory Sync Failed',
      module: 'API',
      status: 'Failed',
      ipAddress: '--'
    },
    {
      timestamp: '28 Jan 2026, 09:02',
      user: 'Neha S.',
      action: 'Changed Profile Info',
      module: 'Accounts',
      status: 'Success',
      ipAddress: '122.160.56.4'
    },
    {
      timestamp: '27 Jan 2026, 19:20',
      user: 'System',
      action: 'Multiple Login Attempts',
      module: 'Security',
      status: 'Warning',
      ipAddress: '43.78.23.19'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success':
        return 'text-green-600 bg-green-50';
      case 'Failed':
        return 'text-red-600 bg-red-50';
      case 'Warning':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-gray-800">Name</span>
          </div>
          <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <span>/</span>
              <span>Dashboard</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">Accounts</span>
            </div>

            {/* Profile Setup Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Profile Setup</h2>
              <p className="text-sm text-gray-500 mb-6">Configure Admin Account Details</p>

              <div className="flex flex-col sm:flex-row gap-6">
                {/* Profile Image */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-700 mb-2 cursor-pointer">
                    Change/Upload Profile Image
                  </button>
                  <button className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                    Remove Profile Image
                  </button>
                </div>

                {/* Profile Form */}
                <div className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Admin Name
                      </label>
                      <input
                        type="text"
                        name="adminName"
                        value={profileData.adminName}
                        onChange={handleProfileChange}
                        placeholder="AAS Ventures"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={profileData.role}
                        onChange={handleProfileChange}
                        placeholder="Super Admin"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleProfileChange}
                        placeholder="91-93464820"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                        placeholder="x@Abmax.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={handleSaveChanges}
                      className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* API Integration Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">API Integration</h2>
              <p className="text-sm text-gray-500 mb-6">Connect CRM With External Systems</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    API Key
                  </label>
                  <input
                    type="text"
                    value={apiKeys.apiKey}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Secret Key
                  </label>
                  <input
                    type="text"
                    value={apiKeys.secretKey}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Connected Services Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Connected Services</h2>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Service</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Last Sync</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {connectedServices.map((service, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm text-gray-900">{service.name}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${service.statusColor}`}>
                            {service.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-900">{service.lastSync}</td>
                        <td className="px-4 py-4">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                            {service.action}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-3">
                {connectedServices.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold text-gray-900 text-sm">{service.name}</p>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${service.statusColor}`}>
                        {service.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Last Sync: {service.lastSync}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                        {service.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sync Settings Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Sync Settings</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Auto Sync</p>
                  </div>
                  <button
                    onClick={() => setAutoSync(!autoSync)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                      autoSync ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        autoSync ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Sync Frequency
                    </label>
                    <select
                      value={syncSettings.syncFrequency}
                      onChange={(e) => setSyncSettings(prev => ({ ...prev, syncFrequency: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white cursor-pointer"
                    >
                      <option>Every 5 minutes</option>
                      <option>Every 15 minutes</option>
                      <option>Every 30 minutes</option>
                      <option>Every hour</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Data Scope
                    </label>
                    <input
                      type="text"
                      value={syncSettings.dataScope}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download API Logs
                  </button>
                </div>
              </div>
            </div>

            {/* System Logs Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">System Logs</h2>
                  <p className="text-sm text-gray-500 mt-1">Track Activity, Debug Security Events, And System Operations For Audits And Debugging.</p>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 mb-6">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                >
                  <option>All Types</option>
                  <option>Success</option>
                  <option>Failed</option>
                  <option>Warning</option>
                </select>
                <select
                  value={selectedModule}
                  onChange={(e) => setSelectedModule(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                >
                  <option>All Module</option>
                  <option>Accounts</option>
                  <option>Sales</option>
                  <option>API</option>
                  <option>Security</option>
                </select>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                >
                  <option>All Department</option>
                  <option>Admin</option>
                  <option>Sales</option>
                  <option>System</option>
                </select>
              </div>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto mb-4">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Timestamp</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Action</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Module</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">IP Address</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {systemLogs.map((log, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm text-gray-900">{log.timestamp}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{log.user}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{log.action}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{log.module}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(log.status)}`}>
                            {log.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-900">{log.ipAddress}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-3 mb-4">
                {systemLogs.map((log, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{log.action}</p>
                        <p className="text-xs text-gray-500">{log.timestamp}</p>
                      </div>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(log.status)}`}>
                        {log.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs">User</p>
                        <p className="font-medium text-gray-900">{log.user}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Module</p>
                        <p className="font-medium text-gray-900">{log.module}</p>
                      </div>
                      {log.ipAddress !== '--' && (
                        <div className="col-span-2">
                          <p className="text-gray-500 text-xs">IP Address</p>
                          <p className="font-medium text-gray-900">{log.ipAddress}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Clear Logs
                </button>
                <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer flex items-center justify-center gap-2">
                  <Upload className="w-4 h-4" />
                  Export Logs
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AccountSetup;