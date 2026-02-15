// src/pages/reports/AttendanceReport.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const AttendanceReport = () => {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState('January 2026');
  const [selectedRole, setSelectedRole] = useState('All Department');

  const attendanceSummary = [
    { employeeId: 'EMP101', employeeName: 'A', present: 22, absent: 1, onLeave: 3, department: 'Sales', shift: 'Morning' },
    { employeeId: 'EMP101', employeeName: 'B', present: 12, absent: 2, onLeave: 1, department: 'Production', shift: 'Morning' },
    { employeeId: 'EMP101', employeeName: 'C', present: 18, absent: 10, onLeave: 0, department: 'Operations', shift: 'Night' },
    { employeeId: 'EMP101', employeeName: 'D', present: 18, absent: 4, onLeave: 0, department: 'HR', shift: 'Night' },
    { employeeId: 'EMP101', employeeName: 'E', present: 23, absent: 5, onLeave: 2, department: 'Production', shift: 'Morning' },
    { employeeId: 'EMP101', employeeName: 'F', present: 18, absent: 5, onLeave: 3, department: 'Sales', shift: 'Night' },
    { employeeId: 'EMP101', employeeName: 'G', present: 26, absent: 2, onLeave: 3, department: 'HR', shift: 'Night' },
    { employeeId: 'EMP101', employeeName: 'H', present: 14, absent: 3, onLeave: 7, department: 'Operations', shift: 'Night' }
  ];

  const insights = [
    "Late Arrivals Increased by 12% This Month",
    "Production Team Has The Highest Average Working Hours",
    "3 Employees Exceeded Allowed Late Marks"
  ];

  const alerts = [
    "5 Employees Marked Late Today",
    "Attendance Missing For 2 Employees",
    "Absenteeism Higher On Mondays"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/wholesaler/performance-reports')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-white bg-blue-600 px-6 py-3 rounded-lg inline-block">
                ATTENDANCE REPORT
              </h1>
            </div>
            
            <div className="flex gap-3 flex-wrap">
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
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>All Department</option>
                <option>Sales</option>
                <option>Production</option>
                <option>HR</option>
                <option>Operations</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Table */}
          <div className="lg:col-span-2 space-y-6">
            {/* Attendance Summary Table */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Attendance Summary</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Employee ID</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Employee Name</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Present</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Absent</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">On leave</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Department</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Shift</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceSummary.map((record, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2 text-gray-900">{record.employeeId}</td>
                        <td className="py-3 px-2 text-gray-900">{record.employeeName}</td>
                        <td className="py-3 px-2 text-gray-600">{record.present}</td>
                        <td className="py-3 px-2 text-gray-600">{record.absent}</td>
                        <td className="py-3 px-2 text-gray-600">{record.onLeave}</td>
                        <td className="py-3 px-2 text-gray-600">{record.department}</td>
                        <td className="py-3 px-2 text-gray-600">{record.shift}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Insights and Alerts */}
          <div className="space-y-6">
            {/* Smart Insights */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Smart Insights</h2>
              <div className="space-y-3">
                {insights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-1.5 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts & Highlights */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Alerts & Highlights</h2>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="flex-shrink-0">
                      {index === 0 ? (
                        <span className="text-red-600">⚠</span>
                      ) : index === 1 ? (
                        <span className="text-orange-600">⚠</span>
                      ) : (
                        <span className="text-blue-600">📊</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700">{alert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Report */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                <span>Download Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReport;