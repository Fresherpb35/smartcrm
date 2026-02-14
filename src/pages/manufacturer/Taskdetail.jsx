// src/pages/TaskDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [task, setTask] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Sample task data - replace with API call
    const sampleTasks = {
      1: {
        id: 1,
        name: 'TASK NAME',
        date: 'dd/mm/yyyy',
        dueDate: 'dd/mm/yyyy',
        assignedTo: 'Employee/Team Name',
        category: 'e.g. Sales',
        priority: 'Medium',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      2: {
        id: 2,
        name: 'TASK NAME',
        date: 'dd/mm/yyyy',
        dueDate: 'dd/mm/yyyy',
        assignedTo: 'Employee/Team Name',
        category: 'e.g. Sales',
        priority: 'High',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
    };

    setTask(sampleTasks[id] || sampleTasks[1]);
  }, [id]);

  const handleMarkComplete = () => {
    console.log('Marking task as complete:', id);
    // Add your API call here
    navigate('/tasks');
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High':
      case 'Urgent':
        return 'text-red-600';
      case 'Medium':
        return 'text-orange-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  if (!task) {
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
                                  <Header onToggleSidebar={toggleSidebar} />


        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-4xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={() => navigate('/tasks')}
              className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            {/* Task Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Task Name Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 sm:p-8 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  {task.name}
                </h1>
              </div>

              {/* Task Details */}
              <div className="p-6 sm:p-8">
                {/* Date and Priority Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Date: <span className="text-gray-900">{task.date}</span></p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Due Date: <span className="text-gray-900">{task.dueDate}</span>
                    </p>
                  </div>
                </div>

                {/* Assigned To and Priority Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Assigned to: <span className="text-gray-900">{task.assignedTo}</span>
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Priority: <span className={`font-semibold ${getPriorityColor(task.priority)}`}>{task.priority}</span>
                    </p>
                  </div>
                </div>

                {/* Category */}
                <div className="mb-8">
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Category: <span className="text-gray-900">{task.category}</span>
                  </p>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-base font-bold text-gray-900 mb-3">Description Added:</h2>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-[150px]">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {task.description}
                    </p>
                  </div>
                </div>

                {/* Mark Complete Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleMarkComplete}
                    className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
                  >
                    Mark Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TaskDetail;