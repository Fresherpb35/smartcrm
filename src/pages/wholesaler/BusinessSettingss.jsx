import { useState } from 'react';
import { 
  Building2, 
  Globe, 
  Shield, 
  Database, 
  Bell, 
  RefreshCw,
  Download,
  Upload,
  RotateCcw,
  Info,
  Menu
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Toggle from '../../components/Toggle';
import SettingCard from '../../components/SettingCard';
import Button from '../../components/Button';
import Header from '../../components/Header';
import WholesalerSidebar from '../../components/WholesalerSidebar';

const BusinessSettings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Business Information State
  const [businessName, setBusinessName] = useState('Tech Hd Pvt. Ltd.');
  const [ownerName, setOwnerName] = useState('John Doe');
  const [email, setEmail] = useState('cg@example.com');
  const [businessType, setBusinessType] = useState('Manufacturer');
  const [gstNumber, setGstNumber] = useState('xxx-xxx-xxx');
  const [phoneNumber, setPhoneNumber] = useState('9876543210');

  // Regional Settings State
  const [location, setLocation] = useState('Indian Rupee');
  const [language, setLanguage] = useState('English');
  const [timeZone, setTimeZone] = useState('IST (Indian Standard Time)');

  // Security Settings State
  const [ownerPassword, setOwnerPassword] = useState('');
  const [staffPassword, setStaffPassword] = useState('');

  // Notifications State
  const [notifications, setNotifications] = useState({
    newOrders: true,
    lowStockAlerts: true,
    paymentUpdates: true,
    systemUpdates: true
  });

  // Auto Backup State
  const [autoBackup, setAutoBackup] = useState(true);
  const [backupFrequency, setBackupFrequency] = useState('Daily');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <WholesalerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
<Header onToggleSidebar={toggleSidebar} />


      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Mobile Header
        <header className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-gray-800">Name</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </header> */}
                             
        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="mt-16 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Business Settings</h1>
                <p className="text-sm sm:text-base text-gray-600 mt-1">Configure Your Business Preferences And System Settings</p>
              </div>
              <Button variant="primary">
                Save Changes
              </Button>
            </div>

            <div className="space-y-6">
              {/* Business Information */}
              <SettingCard
                icon={<Building2 className="w-6 h-6" />}
                title="Business Information"
                subtitle="Update Your Business Information And Contact Information"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Business Name"
                    placeholder="Enter business name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                  <Input
                    label="Business Type"
                    placeholder="e.g., Manufacturer"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                  />
                  <Input
                    label="Owner Name"
                    placeholder="Enter owner name"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                  />
                  <Input
                    label="GST Number"
                    placeholder="Enter GST number"
                    value={gstNumber}
                    onChange={(e) => setGstNumber(e.target.value)}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </SettingCard>

              {/* Regional Settings */}
              <SettingCard
                icon={<Globe className="w-6 h-6" />}
                title="Regional Settings"
                subtitle="Configure Currency, Language, And Location Preferences"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Select
                    label="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    options={[
                      { value: 'Indian Rupee', label: 'Indian Rupee' },
                      { value: 'US Dollar', label: 'US Dollar' },
                      { value: 'Euro', label: 'Euro' },
                      { value: 'British Pound', label: 'British Pound' }
                    ]}
                  />
                  <Select
                    label="Language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    options={[
                      { value: 'English', label: 'English' },
                      { value: 'Hindi', label: 'Hindi' },
                      { value: 'Spanish', label: 'Spanish' },
                      { value: 'French', label: 'French' }
                    ]}
                  />
                  <Select
                    label="Time Zone"
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    options={[
                      { value: 'IST (Indian Standard Time)', label: 'IST (Indian Standard Time)' },
                      { value: 'EST (Eastern Standard Time)', label: 'EST (Eastern Standard Time)' },
                      { value: 'PST (Pacific Standard Time)', label: 'PST (Pacific Standard Time)' },
                      { value: 'GMT (Greenwich Mean Time)', label: 'GMT (Greenwich Mean Time)' }
                    ]}
                  />
                </div>
              </SettingCard>

              {/* Security Settings */}
              <SettingCard
                icon={<Shield className="w-6 h-6" />}
                title="Security Settings"
                subtitle="Manage Passwords And Security Preferences"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Owner Password"
                    type="password"
                    placeholder="Change Password"
                    value={ownerPassword}
                    onChange={(e) => setOwnerPassword(e.target.value)}
                  />
                  <Input
                    label="Staff Password"
                    type="password"
                    placeholder="Change Password"
                    value={staffPassword}
                    onChange={(e) => setStaffPassword(e.target.value)}
                  />
                </div>
              </SettingCard>

              {/* Data Management and Notifications Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Data Management */}
                <SettingCard
                  icon={<Database className="w-6 h-6" />}
                  title="Data Management"
                >
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      fullWidth
                      icon={<Download className="w-4 h-4" />}
                    >
                      Export Business Data
                    </Button>
                    <Button 
                      variant="outline" 
                      fullWidth
                      icon={<Upload className="w-4 h-4" />}
                    >
                      Import Data
                    </Button>
                    <Button 
                      variant="outline" 
                      fullWidth
                      icon={<RotateCcw className="w-4 h-4" />}
                    >
                      Backup And Restore
                    </Button>
                  </div>
                </SettingCard>

                {/* Notifications */}
                <SettingCard
                  icon={<Bell className="w-6 h-6" />}
                  title="Notifications"
                >
                  <div className="space-y-4">
                    {[
                      { key: 'newOrders', label: 'New Orders' },
                      { key: 'lowStockAlerts', label: 'Low Stock Alerts' },
                      { key: 'paymentUpdates', label: 'Payment Updates' },
                      { key: 'systemUpdates', label: 'System Updates' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        <Toggle
                          enabled={notifications[item.key]}
                          onChange={(value) =>
                            setNotifications({ ...notifications, [item.key]: value })
                          }
                        />
                      </div>
                    ))}
                  </div>
                </SettingCard>
              </div>

              {/* Auto Backup and Version Information Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Auto Backup */}
                <SettingCard
                  icon={<RefreshCw className="w-6 h-6" />}
                  title="Auto Backup"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Enable Auto Backup</span>
                      <Toggle enabled={autoBackup} onChange={setAutoBackup} />
                    </div>
                    
                    <Select
                      label="Backup Frequency"
                      value={backupFrequency}
                      onChange={(e) => setBackupFrequency(e.target.value)}
                      options={[
                        { value: 'Daily', label: 'Daily' },
                        { value: 'Weekly', label: 'Weekly' },
                        { value: 'Monthly', label: 'Monthly' }
                      ]}
                    />

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-xs text-gray-600">
                        Last backup: Jan 30 2026 At 3:30 AM
                        <br />
                        Next backup: Feb 06, 2026
                      </p>
                    </div>
                  </div>
                </SettingCard>

                {/* Version Information */}
                <SettingCard
                  icon={<Info className="w-6 h-6" />}
                  title="Version Information"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Version</span>
                      <span className="text-sm font-semibold text-gray-800">2.3.0</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Build</span>
                      <span className="text-sm font-semibold text-gray-800">#2026.01.26</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Database</span>
                      <span className="text-sm font-semibold text-green-600">Connected</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-600">Storage Used</span>
                      <span className="text-sm font-semibold text-gray-800">5.6 MB</span>
                    </div>
                  </div>
                </SettingCard>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessSettings;