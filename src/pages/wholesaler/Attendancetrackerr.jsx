// src/pages/AttendanceTracker.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  Users,
  UserX,
  AlertCircle,
  Clock,
  ChevronDown,
  Download,
  Plus,
  X
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import WholesalerSidebar from '../../components/WholesalerSidebar';

const AttendanceTracker = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('26 January 2026');
  const [selectedShift, setSelectedShift] = useState('All Shifts');
  const [selectedPresent, setSelectedPresent] = useState('Only Present');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedLeaveDate, setSelectedLeaveDate] = useState('26 January 2026');
  const [selectedLeaveDept, setSelectedLeaveDept] = useState('All Departments');
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Attendance data
  const attendanceData = [
    {
      empId: 'EMP-014',
      name: 'Rahul Verma',
      department: 'Sales',
      date: '26 Jan 2026',
      checkIn: '09:10',
      checkOut: '17:45',
      workingHours: 8.5,
      status: 'Present'
    },
    {
      empId: 'EMP-009',
      name: 'Neha Sharma',
      department: 'Sales',
      date: '26 Jan 2026',
      checkIn: '09:25',
      checkOut: '17:40',
      workingHours: 7.4,
      status: 'Present'
    },
    {
      empId: 'EMP-021',
      name: 'Arjun Gupta',
      department: 'Marketing',
      date: '26 Jan 2026',
      checkIn: '09:26',
      checkOut: '17:40',
      workingHours: 7.5,
      status: 'On Leave'
    },
    {
      empId: 'EMP-017',
      name: 'Pooja Mehta',
      department: 'Production',
      date: '26 Jan 2026',
      checkIn: '09:05',
      checkOut: '17:40',
      workingHours: 8,
      status: 'Absent'
    },
    {
      empId: 'EMP-008',
      name: 'Arun Singh',
      department: 'Sales',
      date: '26 Jan 2026',
      checkIn: '09:02',
      checkOut: '18:10',
      workingHours: 8.5,
      status: 'Present'
    },
    {
      empId: 'EMP-023',
      name: 'Riya Kapoor',
      department: 'Production',
      date: '26 Jan 2026',
      checkIn: '09:15',
      checkOut: '17:20',
      workingHours: 7.6,
      status: 'Present'
    },
    {
      empId: 'EMP-025',
      name: 'Karan Jain',
      department: 'Logistics',
      date: '26 Jan 2026',
      checkIn: '09:05',
      checkOut: '18:10',
      workingHours: 8.5,
      status: 'Present'
    },
    {
      empId: 'EMP-011',
      name: 'Shreya Iyer',
      department: 'HR',
      date: '26 Jan 2026',
      checkIn: '-',
      checkOut: '-',
      workingHours: 0,
      status: 'On Leave'
    }
  ];

  // Leave requests data
  const leaveRequests = [
    {
      empId: 'EMP-014',
      name: 'Rahul Verma',
      leaveDays: 2
    },
    {
      empId: 'EMP-009',
      name: 'Neha Sharma',
      leaveDays: 1
    },
    {
      empId: 'EMP-021',
      name: 'Arjun Gupta',
      leaveDays: 1
    },
    {
      empId: 'EMP-017',
      name: 'Pooja Mehta',
      leaveDays: 3
    },
    {
      empId: 'EMP-008',
      name: 'Arun Singh',
      leaveDays: 2
    },
    {
      empId: 'EMP-023',
      name: 'Riya Kapoor',
      leaveDays: 1
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present':
        return 'text-green-700 bg-green-50';
      case 'On Leave':
        return 'text-orange-700 bg-orange-50';
      case 'Absent':
        return 'text-red-700 bg-red-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  const handleViewRequest = (leave) => {
    setSelectedLeave(leave);
    setShowApprovalModal(true);
  };

  const handleApproveAll = () => {
    setSelectedLeave({ empId: 'ALL', name: 'All Employees' });
    setShowApprovalModal(true);
  };

  const handleReject = () => {
    console.log('Rejected:', selectedLeave);
    setShowApprovalModal(false);
    setSelectedLeave(null);
  };

  const handleApprove = () => {
    console.log('Approved:', selectedLeave);
    setShowApprovalModal(false);
    setSelectedLeave(null);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <WholesalerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">


        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <button 
                onClick={() => navigate('/wholesaler/dashboard')}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <span>/</span>
              <span className="hidden sm:inline">Dashboard</span>
              <span className="hidden sm:inline">/</span>
              <span className="text-gray-900 font-medium">Attendance Tracker</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
                  Attendance Tracker
                </h1>
                <p className="text-sm text-gray-500">
                  Monitor Attendance, Punctuality And Workforce Presence
                </p>
              </div>
              <div className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm cursor-pointer hover:bg-blue-700 transition-colors">
                Total Employees: 128
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Present Today */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <p className="text-4xl font-bold text-gray-900 mb-2">112</p>
                <p className="text-sm text-gray-600">Present Today</p>
              </div>

              {/* On Leave */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <p className="text-4xl font-bold text-orange-600 mb-2">6</p>
                <p className="text-sm text-gray-600">On Leave</p>
              </div>

              {/* Absent */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <p className="text-4xl font-bold text-red-600 mb-2">10</p>
                <p className="text-sm text-gray-600">Absent</p>
              </div>

              {/* Avg Working Hours */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow">
                <p className="text-4xl font-bold text-gray-900 mb-2">8.5 Hrs/Day</p>
                <p className="text-sm text-gray-600">Avg. Working Hours</p>
              </div>
            </div>

            {/* Employee Attendance Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Employee Attendance</h2>
                <div className="flex flex-wrap gap-3">
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                  >
                    <option>26 January 2026</option>
                    <option>25 January 2026</option>
                    <option>24 January 2026</option>
                  </select>
                  <select
                    value={selectedShift}
                    onChange={(e) => setSelectedShift(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                  >
                    <option>All Shifts</option>
                    <option>Morning</option>
                    <option>Evening</option>
                  </select>
                  <select
                    value={selectedPresent}
                    onChange={(e) => setSelectedPresent(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                  >
                    <option>Only Present</option>
                    <option>All Status</option>
                    <option>Only Absent</option>
                  </select>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                  >
                    <option>All Departments</option>
                    <option>Sales</option>
                    <option>Production</option>
                    <option>HR</option>
                  </select>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Emp ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Employee Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Department</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Check-in</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Check-out</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Working Hours</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attendanceData.map((attendance, index) => (
                      <tr key={index} className="hover:bg-gray-50 cursor-pointer transition-colors">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">{attendance.empId}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{attendance.name}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{attendance.department}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{attendance.date}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{attendance.checkIn}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{attendance.checkOut}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{attendance.workingHours}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(attendance.status)}`}>
                            {attendance.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {attendanceData.map((attendance, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-900">{attendance.name}</p>
                        <p className="text-sm text-gray-500">{attendance.empId}</p>
                      </div>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(attendance.status)}`}>
                        {attendance.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Department</p>
                        <p className="font-medium text-gray-900">{attendance.department}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Date</p>
                        <p className="font-medium text-gray-900">{attendance.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Check-in</p>
                        <p className="font-medium text-gray-900">{attendance.checkIn}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Check-out</p>
                        <p className="font-medium text-gray-900">{attendance.checkOut}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-500 text-xs mb-1">Working Hours</p>
                        <p className="font-medium text-gray-900">{attendance.workingHours} hrs</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer">
                  <Download className="w-4 h-4" />
                  Edit Logs
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer">
                  <Plus className="w-4 h-4" />
                  Add Remark
                </button>
              </div>
            </div>

            {/* Leave Requests Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Leave Requests</h2>
                <div className="flex gap-3">
                  <select
                    value={selectedLeaveDate}
                    onChange={(e) => setSelectedLeaveDate(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                  >
                    <option>26 January 2026</option>
                    <option>25 January 2026</option>
                    <option>24 January 2026</option>
                  </select>
                  <select
                    value={selectedLeaveDept}
                    onChange={(e) => setSelectedLeaveDept(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                  >
                    <option>All Departments</option>
                    <option>Sales</option>
                    <option>Production</option>
                    <option>HR</option>
                  </select>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden sm:block overflow-x-auto mb-6">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Emp ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Employee Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Leave Days</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {leaveRequests.map((leave, index) => (
                      <tr key={index} className="hover:bg-gray-50 cursor-pointer transition-colors">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">{leave.empId}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{leave.name}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{leave.leaveDays}</td>
                        <td className="px-4 py-4">
                          <button
                            onClick={() => handleViewRequest(leave)}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer"
                          >
                            View Request
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="sm:hidden space-y-3 mb-6">
                {leaveRequests.map((leave, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{leave.name}</p>
                        <p className="text-sm text-gray-500">{leave.empId}</p>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{leave.leaveDays} days</span>
                    </div>
                    <button
                      onClick={() => handleViewRequest(leave)}
                      className="w-full mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium text-center cursor-pointer"
                    >
                      View Request
                    </button>
                  </div>
                ))}
              </div>

              {/* Approve All Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleApproveAll}
                  className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer"
                >
                  Approve All
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Leave Approval Modal */}
      {showApprovalModal && selectedLeave && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">
                Leave Request - {selectedLeave.name}
              </h2>
              <button
                onClick={() => setShowApprovalModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="space-y-4">
                {/* From */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    From
                  </label>
                  <input
                    type="date"
                    defaultValue="2026-01-27"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm cursor-pointer"
                  />
                </div>

                {/* To */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    To
                  </label>
                  <input
                    type="date"
                    defaultValue="2026-01-27"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm cursor-pointer"
                  />
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Reason
                  </label>
                  <textarea
                    rows="4"
                    defaultValue="Due To Unforeseen Circumstances"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none cursor-text"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 p-6 border-t border-gray-200">
              <button
                onClick={handleReject}
                className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer"
              >
                Reject
              </button>
              <button
                onClick={handleApprove}
                className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm cursor-pointer"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceTracker;