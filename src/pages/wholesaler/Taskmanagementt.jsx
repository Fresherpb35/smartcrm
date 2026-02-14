// src/pages/TaskManagement.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  X,
  Calendar,
  ChevronDown
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import WholesalerSidebar from '../../components/WholesalerSidebar';

const TaskManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('January 2026');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [priorityFilter, setPriorityFilter] = useState('All Priority');
  const [categoryFilter, setCategoryFilter] = useState('All Category');
  const navigate = useNavigate();

  const [newTask, setNewTask] = useState({
    taskName: '',
    dueDate: '',
    category: 'percentage',
    assignedTo: '',
    description: '',
    priority: 'High'
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAssignTask = () => {
    console.log('Assigning task:', newTask);
    // Add your API call here
    setShowAddModal(false);
    setNewTask({
      taskName: '',
      dueDate: '',
      category: 'percentage',
      assignedTo: '',
      description: '',
      priority: 'High'
    });
  };

  const handleTaskClick = (taskId) => {
    navigate(`/tasks/${taskId}`);
  };

  // Sample task data
  const tasks = [
    {
      id: 1,
      name: 'Task Name',
      assignedTo: 'Assigned To',
      dueDate: 'dd/mm/yyyy',
      priority: 'Urgent',
      status: 'Overdue',
      priorityColor: 'text-red-600 border-red-600',
      statusColor: 'text-red-600 border-red-600'
    },
    {
      id: 2,
      name: 'Task Name',
      assignedTo: 'Assigned To',
      dueDate: 'dd/mm/yyyy',
      priority: 'High',
      status: 'Pending',
      priorityColor: 'text-blue-600 border-blue-600',
      statusColor: 'text-orange-600 border-orange-600'
    },
    {
      id: 3,
      name: 'Task Name',
      assignedTo: 'Assigned To',
      dueDate: 'dd/mm/yyyy',
      priority: 'Medium',
      status: 'Pending',
      priorityColor: 'text-orange-600 border-orange-600',
      statusColor: 'text-orange-600 border-orange-600'
    },
    {
      id: 4,
      name: 'Task Name',
      assignedTo: 'Assigned To',
      dueDate: 'dd/mm/yyyy',
      priority: 'Low',
      status: 'Pending',
      priorityColor: 'text-green-600 border-green-600',
      statusColor: 'text-orange-600 border-orange-600'
    },
    {
      id: 5,
      name: 'Task Name',
      assignedTo: 'Assigned To',
      dueDate: 'dd/mm/yyyy',
      priority: 'Medium',
      status: 'Completed',
      priorityColor: 'text-orange-600 border-orange-600',
      statusColor: 'text-green-600 border-green-600'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <WholesalerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

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
                             <Header onToggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="mt-14 p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-4">
              <button 
                onClick={() => navigate('//wholesaler/dashboard')}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <span className="text-gray-600">/</span>
              <span className="text-purple-600 font-medium underline">/wholesaler/dashboard</span>
              <span className="text-gray-600">/</span>
              <span className="text-gray-900 font-medium">Task Management</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
                  Task Management
                </h1>
                <p className="text-sm text-gray-500">
                  Assign, Track, And Manage Team Tasks
                </p>
              </div>
              <div className="flex gap-3">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option>January 2026</option>
                  <option>December 2025</option>
                  <option>November 2025</option>
                </select>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm whitespace-nowrap"
                >
                  Assign Task
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg border-2 border-gray-300 p-6">
                <p className="text-4xl font-bold text-gray-900 mb-2">5</p>
                <p className="text-sm text-gray-600">Assigned</p>
              </div>
              <div className="bg-white rounded-lg border-2 border-orange-300 p-6">
                <p className="text-4xl font-bold text-gray-900 mb-2">3</p>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
              <div className="bg-white rounded-lg border-2 border-green-300 p-6">
                <p className="text-4xl font-bold text-gray-900 mb-2">1</p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
              <div className="bg-white rounded-lg border-2 border-red-300 p-6">
                <p className="text-4xl font-bold text-gray-900 mb-2">1</p>
                <p className="text-sm text-gray-600">Overdue</p>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Assigned Tasks</h2>
                <div className="flex flex-col sm:flex-row gap-3">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Overdue</option>
                  </select>
                  <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option>All Priority</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option>All Category</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Production</option>
                  </select>
                </div>
              </div>

              {/* Task List */}
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => handleTaskClick(task.id)}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-700 font-semibold text-lg">X.</span>
                    </div>

                    {/* Task Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">{task.name}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span>Assigned To: {task.assignedTo}</span>
                        <span>•</span>
                        <span>Due Date: {task.dueDate}</span>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex gap-2">
                      <span className={`px-4 py-1.5 rounded-full text-sm font-medium border-2 bg-white ${task.priorityColor}`}>
                        {task.priority}
                      </span>
                      <span className={`px-4 py-1.5 rounded-full text-sm font-medium border-2 bg-white ${task.statusColor}`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-900">Add New Task</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="space-y-5">
                {/* Task Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Task Name
                  </label>
                  <input
                    type="text"
                    name="taskName"
                    value={newTask.taskName}
                    onChange={handleInputChange}
                    placeholder="Enter Task Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* Due Date and Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Due Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="dueDate"
                        value={newTask.dueDate}
                        onChange={handleInputChange}
                        placeholder="dd-mm-yyyy"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={newTask.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none bg-white"
                    >
                      <option value="percentage">percentage</option>
                      <option value="sales">Sales</option>
                      <option value="marketing">Marketing</option>
                      <option value="production">Production</option>
                    </select>
                  </div>
                </div>

                {/* Assigned To */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Assigned To
                  </label>
                  <input
                    type="text"
                    name="assignedTo"
                    value={newTask.assignedTo}
                    onChange={handleInputChange}
                    placeholder="Enter Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* Add Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Add Description
                  </label>
                  <textarea
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                    placeholder="Xyz"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  />
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Priority
                  </label>
                  <select
                    name="priority"
                    value={newTask.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none bg-white"
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                    <option>Urgent</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={handleAssignTask}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
              >
                Assign Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManagement;