import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter,
  Users,
  Plus,
  TrendingUp,
  CheckSquare,
  ArrowLeft,
  X
} from 'lucide-react';
import Header from '../../components/Header';
import WholesalerSidebar from '../../components/WholesalerSidebar';

const StaffDirectory = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const navigate = useNavigate();

  const [newMember, setNewMember] = useState({
    fullName: '',
    role: '',
    phoneNumber: '',
    emailAddress: '',
    joiningDate: ''
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleStaffClick = (staffId) => {
    navigate(`//wholesaler/staff-directory/${staffId}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddMember = () => {
    console.log('Adding new member:', newMember);
    setShowAddModal(false);
    setNewMember({
      fullName: '',
      role: '',
      phoneNumber: '',
      emailAddress: '',
      joiningDate: ''
    });
  };

  const staffMembers = [
    {
      id: 1,
      name: 'Rahul Mishra',
      role: 'Training Officer',
      initials: 'RM',
      attendance: '97%',
      performance: '87%',
      bgColor: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Sangeet Goyal',
      role: 'Security Manager',
      initials: 'SG',
      attendance: '88%',
      performance: '85%',
      bgColor: 'bg-blue-600'
    },
    {
      id: 3,
      name: 'Dev Pal',
      role: 'HR',
      initials: 'DP',
      attendance: '91%',
      performance: '94%',
      bgColor: 'bg-blue-700'
    }
  ];

  const filteredStaff = staffMembers.filter(staff =>
    staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <WholesalerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col lg:ml-64">
        <Header onToggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto">
          <div className="mt-14 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-4">
              <button 
                onClick={() => navigate('/wholesaler/dashboard')}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Dashboard</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">Staff Directory</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  Staff Management
                </h1>
                <p className="text-sm text-gray-600">
                  Manage Your Team Members And Their Performance
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex items-center justify-center gap-2 flex-shrink-0"
              >
                <Plus className="w-4 h-4" />
                Add New Member
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Active Staff</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">12</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Commission</p>
                <p className="text-xl sm:text-2xl font-bold text-green-600">₹0.00</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Team Sales</p>
                <p className="text-xl sm:text-2xl font-bold text-purple-600">₹0.00</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Completed Tasks</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">45</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search staff by name, phone, email or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <button className="w-full sm:w-auto px-4 py-2.5 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="sm:hidden">Filter</span>
              </button>
            </div>

            {/* Staff Members List */}
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200 shadow-sm">
              {filteredStaff.map((staff) => (
                <div
                  key={staff.id}
                  onClick={() => handleStaffClick(staff.id)}
                  className="p-4 sm:p-5 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${staff.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-semibold text-base sm:text-lg">
                        {staff.initials}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 truncate">
                        {staff.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {staff.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                      <div className="text-right">
                        <p className="text-base sm:text-lg font-bold text-gray-900">
                          {staff.attendance}
                        </p>
                        <p className="text-xs text-gray-500 whitespace-nowrap">Attendance</p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="text-base sm:text-lg font-bold text-gray-900">
                          {staff.performance}
                        </p>
                        <p className="text-xs text-gray-500 whitespace-nowrap">Performance</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Performance Row */}
                  <div className="sm:hidden mt-3 pt-3 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Performance</span>
                      <span className="text-base font-bold text-gray-900">{staff.performance}</span>
                    </div>
                  </div>
                </div>
              ))}

              {filteredStaff.length === 0 && (
                <div className="p-12 text-center">
                  <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No staff members found
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Try adjusting your search terms
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Add New Staff Member
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Enter Staff Member Details To Add Them To Your Team
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={newMember.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <select
                    name="role"
                    value={newMember.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">Select Role</option>
                    <option value="manager">Manager</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="officer">Officer</option>
                    <option value="staff">Staff</option>
                    <option value="hr">HR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={newMember.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+91 9876541230"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={newMember.emailAddress}
                    onChange={handleInputChange}
                    placeholder="x@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Joining Date
                  </label>
                  <input
                    type="date"
                    name="joiningDate"
                    value={newMember.joiningDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setShowAddModal(false)}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-colors font-medium text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMember}
                className="w-full sm:w-auto px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Member
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDirectory;