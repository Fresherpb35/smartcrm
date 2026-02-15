// src/pages/Leaderboard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  TrendingUp,
  Award,
  Target,
  Trophy,
  Star,
  ChevronDown
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const Leaderboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('January 2026');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Employee performance data
  const employees = [
    {
      rank: 1,
      empId: 'EMP-014',
      name: 'Rahul Verma',
      department: 'Sales',
      target: '₹6,00,000',
      achievement: '₹6,60,000',
      attendance: '95%',
      incentive: '₹3,000',
      performance: 5
    },
    {
      rank: 2,
      empId: 'EMP-004',
      name: 'Neha Sharma',
      department: 'Sales',
      target: '₹4,50,000',
      achievement: '₹5,00,000',
      attendance: '88%',
      incentive: '₹2,500',
      performance: 4
    },
    {
      rank: 3,
      empId: 'EMP-021',
      name: 'Arjun Kumar',
      department: 'Marketing',
      target: '₹3,20,000',
      achievement: '₹3,85,000',
      attendance: '93%',
      incentive: '₹1,800',
      performance: 5
    },
    {
      rank: 4,
      empId: 'EMP-017',
      name: 'Pooja Mehta',
      department: 'Production',
      target: '1200 Units',
      achievement: '1350 Units',
      attendance: '97%',
      incentive: '₹6,000',
      performance: 3
    },
    {
      rank: 5,
      empId: 'EMP-008',
      name: 'Arun Singh',
      department: 'Sales',
      target: '₹4,00,000',
      achievement: '₹3,60,000',
      attendance: '92%',
      incentive: '₹4,000',
      performance: 2
    },
    {
      rank: 6,
      empId: 'EMP-023',
      name: 'Kavita Roy',
      department: 'Production',
      target: '1000 Units',
      achievement: '980 Units',
      attendance: '94%',
      incentive: '₹3,500',
      performance: 4
    },
    {
      rank: 7,
      empId: 'EMP-025',
      name: 'Karan Jain',
      department: 'Logistics',
      target: '500 Orders',
      achievement: '270 Orders',
      attendance: '80%',
      incentive: '₹2,000',
      performance: 3
    },
    {
      rank: 8,
      empId: 'EMP-011',
      name: 'Shreya Iyer',
      department: 'HR',
      target: '-',
      achievement: '-',
      attendance: '89%',
      incentive: '₹1,500',
      performance: 4
    }
  ];

  // Sales Leaderboard data
  const salesLeaders = [
    { name: 'Neha S.', position: 2, color: 'bg-purple-600', height: 180, medal: '🥈' },
    { name: 'Rahul V.', position: 1, color: 'bg-blue-500', height: 220, medal: '🥇' },
    { name: 'Arjun S.', position: 3, color: 'bg-orange-500', height: 160, medal: '🥉' }
  ];

  // Production Leaderboard data
  const productionLeaders = [
    { name: 'Riya K.', position: 2, color: 'bg-purple-600', height: 180, medal: '🥈' },
    { name: 'Pooja M.', position: 1, color: 'bg-green-500', height: 220, medal: '🥇' },
    { name: 'Shweta G.', position: 3, color: 'bg-yellow-400', height: 160, medal: '🥉' }
  ];

  const renderStars = (count) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">


        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <button 
                onClick={() => navigate('/manufacturer/dashboard')}
                className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <span>/</span>
              <span className="hidden sm:inline">Dashboard</span>
              <span className="hidden sm:inline">/</span>
              <span className="text-gray-900 font-medium">Leader Board</span>
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
                Leaderboard
              </h1>
              <p className="text-sm text-gray-500">
                Examine Staff Productivity And Performance
              </p>
            </div>

            {/* Performance Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 text-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">Name</p>
                <p className="text-3xl font-bold mb-1">Emp ID</p>
                <p className="text-xs opacity-75">Top Performer - Sales</p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">Name</p>
                <p className="text-3xl font-bold mb-1">Emp ID</p>
                <p className="text-xs opacity-75">Top Performer - Production</p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">Name</p>
                <p className="text-3xl font-bold mb-1">Emp ID</p>
                <p className="text-xs opacity-75">Sales Achieved</p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-1">88%</p>
                <p className="text-3xl font-bold mb-1"></p>
                <p className="text-xs opacity-75">Target Achieved</p>
              </div>
            </div>

            {/* Employee Performance Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Employee Performance</h2>
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
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Rank</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Emp ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Employee Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Department</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Target</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Achievement</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Attendance</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Incentive</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {employees.map((emp) => (
                      <tr key={emp.rank} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">{emp.rank}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{emp.empId}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{emp.name}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{emp.department}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{emp.target}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{emp.achievement}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{emp.attendance}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{emp.incentive}</td>
                        <td className="px-4 py-4">{renderStars(emp.performance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {employees.map((emp) => (
                  <div key={emp.rank} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {emp.rank}
                        </span>
                        <div>
                          <p className="font-semibold text-gray-900">{emp.name}</p>
                          <p className="text-sm text-gray-500">{emp.empId}</p>
                        </div>
                      </div>
                      {renderStars(emp.performance)}
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Department</p>
                        <p className="font-medium text-gray-900">{emp.department}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Attendance</p>
                        <p className="font-medium text-gray-900">{emp.attendance}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Target</p>
                        <p className="font-medium text-gray-900">{emp.target}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Achievement</p>
                        <p className="font-medium text-gray-900">{emp.achievement}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-500 text-xs mb-1">Incentive</p>
                        <p className="font-medium text-green-600">{emp.incentive}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sales Leaderboard */}
              <div className="bg-white rounded-lg border-2 border-blue-500 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">Sales Leaderboard</h2>
                
                <div className="flex items-end justify-center gap-4 h-64">
                  {salesLeaders.map((leader, index) => (
                    <div key={index} className="flex flex-col items-center" style={{ width: '33%' }}>
                      <div className="text-center mb-2">
                        <p className="text-sm font-medium text-gray-900">{leader.name}</p>
                        <div className="text-2xl mt-1">{leader.medal}</div>
                      </div>
                      <div 
                        className={`w-full ${leader.color} rounded-t-lg flex items-center justify-center relative`}
                        style={{ height: `${leader.height}px` }}
                      >
                        <span className="text-4xl">🏆</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Leaderboard */}
              <div className="bg-white rounded-lg border-2 border-blue-500 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">Production Leaderboard</h2>
                
                <div className="flex items-end justify-center gap-4 h-64">
                  {productionLeaders.map((leader, index) => (
                    <div key={index} className="flex flex-col items-center" style={{ width: '33%' }}>
                      <div className="text-center mb-2">
                        <p className="text-sm font-medium text-gray-900">{leader.name}</p>
                        <div className="text-2xl mt-1">{leader.medal}</div>
                      </div>
                      <div 
                        className={`w-full ${leader.color} rounded-t-lg flex items-center justify-center relative`}
                        style={{ height: `${leader.height}px` }}
                      >
                        <span className="text-4xl">🏆</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Leaderboard;