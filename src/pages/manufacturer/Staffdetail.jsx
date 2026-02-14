// src/pages/StaffDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  TrendingUp,
  Clock,
  CheckCircle2,
  DollarSign,
  Award,
  Target,
  Edit2,
  Trash2,
  MoreVertical
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const StaffDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [staff, setStaff] = useState(null);
  const [showActions, setShowActions] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Fetch staff data based on id
    // This is sample data - replace with actual API call
    const sampleStaff = {
      1: {
        id: 1,
        name: 'Rahul Mishra',
        role: 'Training Officer',
        initials: 'RM',
        bgColor: 'bg-blue-500',
        email: 'rahul.mishra@company.com',
        phone: '+91 98765 43210',
        joiningDate: '15 Jan 2024',
        employeeId: 'EMP-001',
        department: 'Training & Development',
        attendance: {
          percentage: '97%',
          present: 145,
          absent: 5,
          leaves: 3
        },
        performance: {
          percentage: '87%',
          rating: 4.5,
          tasksCompleted: 45,
          tasksPending: 5
        },
        sales: {
          total: '₹2,45,000',
          commission: '₹12,250',
          deals: 23
        },
        recentTasks: [
          { id: 1, title: 'Complete Training Module', status: 'Completed', date: '20 Jan 2026' },
          { id: 2, title: 'Review Performance Reports', status: 'In Progress', date: '22 Jan 2026' },
          { id: 3, title: 'Conduct Team Meeting', status: 'Pending', date: '25 Jan 2026' }
        ]
      },
      2: {
        id: 2,
        name: 'Sangeet Goyal',
        role: 'Security Manager',
        initials: 'SG',
        bgColor: 'bg-blue-600',
        email: 'sangeet.goyal@company.com',
        phone: '+91 98765 43211',
        joiningDate: '10 Feb 2024',
        employeeId: 'EMP-002',
        department: 'Security',
        attendance: {
          percentage: '88%',
          present: 132,
          absent: 10,
          leaves: 8
        },
        performance: {
          percentage: '85%',
          rating: 4.2,
          tasksCompleted: 38,
          tasksPending: 7
        },
        sales: {
          total: '₹1,80,000',
          commission: '₹9,000',
          deals: 18
        },
        recentTasks: [
          { id: 1, title: 'Security Audit', status: 'Completed', date: '18 Jan 2026' },
          { id: 2, title: 'Update Security Protocols', status: 'In Progress', date: '21 Jan 2026' },
          { id: 3, title: 'Staff Training Session', status: 'Pending', date: '24 Jan 2026' }
        ]
      },
      3: {
        id: 3,
        name: 'Dev Pal',
        role: 'HR',
        initials: 'DP',
        bgColor: 'bg-blue-700',
        email: 'dev.pal@company.com',
        phone: '+91 98765 43212',
        joiningDate: '05 Mar 2024',
        employeeId: 'EMP-003',
        department: 'Human Resources',
        attendance: {
          percentage: '91%',
          present: 137,
          absent: 8,
          leaves: 5
        },
        performance: {
          percentage: '94%',
          rating: 4.7,
          tasksCompleted: 52,
          tasksPending: 3
        },
        sales: {
          total: '₹3,20,000',
          commission: '₹16,000',
          deals: 28
        },
        recentTasks: [
          { id: 1, title: 'Recruitment Drive', status: 'Completed', date: '19 Jan 2026' },
          { id: 2, title: 'Employee Onboarding', status: 'In Progress', date: '23 Jan 2026' },
          { id: 3, title: 'Policy Update Review', status: 'Pending', date: '26 Jan 2026' }
        ]
      }
    };

    setStaff(sampleStaff[id]);
  }, [id]);

  const handleEdit = () => {
    console.log('Edit staff:', id);
    // Navigate to edit page or open edit modal
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to remove this staff member?')) {
      console.log('Delete staff:', id);
      navigate('/staff-directory');
    }
  };

  const getTaskStatusStyle = (status) => {
    switch(status) {
      case 'Completed':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'In Progress':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Pending':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  if (!staff) {
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
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-6xl mx-auto">
            {/* Back Button & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <button
                onClick={() => navigate('/staff-directory')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Staff Directory</span>
              </button>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleEdit}
                  className="p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  title="Edit"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={handleDelete}
                  className="p-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShowActions(!showActions)}
                    className="p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {showActions && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                        View Performance Report
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                        Send Message
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                        Assign Task
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Staff Profile Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Avatar */}
                <div className={`w-20 h-20 sm:w-24 sm:h-24 ${staff.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-2xl sm:text-3xl">
                    {staff.initials}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                        {staff.name}
                      </h1>
                      <p className="text-gray-600 mb-3">{staff.role}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-2 text-gray-600">
                          <Briefcase className="w-4 h-4" />
                          {staff.employeeId}
                        </span>
                        <span className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          Joined {staff.joiningDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <a href={`mailto:${staff.email}`} className="text-blue-600 hover:underline">
                        {staff.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <a href={`tel:${staff.phone}`} className="text-gray-900">
                        {staff.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Attendance */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    {staff.attendance.percentage}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Attendance</p>
                <p className="text-xs text-gray-500">
                  {staff.attendance.present} Present · {staff.attendance.absent} Absent
                </p>
              </div>

              {/* Performance */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    {staff.performance.percentage}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Performance</p>
                <p className="text-xs text-gray-500">
                  Rating: {staff.performance.rating}/5.0
                </p>
              </div>

              {/* Total Sales */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    {staff.sales.total}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Total Sales</p>
                <p className="text-xs text-gray-500">
                  {staff.sales.deals} Deals Closed
                </p>
              </div>

              {/* Commission */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    {staff.sales.commission}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Commission</p>
                <p className="text-xs text-gray-500">
                  Total Earned
                </p>
              </div>
            </div>

            {/* Tasks & Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Tasks */}
              <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Recent Tasks
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {staff.recentTasks.map((task) => (
                    <div key={task.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">
                            {task.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Due: {task.date}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTaskStatusStyle(task.status)}`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Additional Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Department</p>
                    <p className="font-medium text-gray-900">{staff.department}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Tasks Completed</p>
                    <p className="font-medium text-gray-900">
                      {staff.performance.tasksCompleted}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Tasks Pending</p>
                    <p className="font-medium text-gray-900">
                      {staff.performance.tasksPending}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Leaves Taken</p>
                    <p className="font-medium text-gray-900">
                      {staff.attendance.leaves} days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StaffDetail;