// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { 
  Building2, 
  LayoutDashboard, 
  FileText, 
  Package, 
  BookOpen, 
  FileCheck, 
  Users, 
  Percent, 
  ClipboardCheck, 
  BarChart3, 
  MessageSquare, 
  TrendingUp, 
  User, 
  X 
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuSections = [
    {
      title: 'MANUFACTURER',
      items: [
        { name: 'Business Profile', icon: Building2, path: '/manufacturer/business-setting' },
        { name: 'Dashboard', icon: LayoutDashboard, path: '/manufacturer/dashboard' },
        { name: 'Production Planning', icon: LayoutDashboard, path: '/manufacturer/production-planning' },
        { name: 'Add Sale & Invoice', icon: FileText, path: '/manufacturer/addsaleinvoice' },
        { name: 'Inventory Management', icon: Package, path: '/manufacturer/inventory-management' },
        { name: 'Recipe', icon: BookOpen, path: '/manufacturer/recipe' },
        { name: 'Sales Documents', icon: FileCheck, path: '/manufacturer/sales-document' },
      ]
    },
    {
      title: 'STAFF MANAGEMENT',
      items: [
        { name: 'Staff Directory', icon: Users, path: '/manufacturer/staff-directory' },
        { name: 'Sales Commission', icon: Percent, path: '/manufacturer/sales-commission' },
        { name: 'Attendance Tracker', icon: ClipboardCheck, path: '/manufacturer/attendance' },
        { name: 'Staff Leaderboard', icon: BarChart3, path: '/manufacturer/leaderboard' },
        { name: 'Task Assignment', icon: ClipboardCheck, path: '/manufacturer/tasks' },
        { name: 'CRM', icon: MessageSquare, path: '/manufacturer/tickets' }, // if this page exists
        { name: 'Internal Chat', icon: MessageSquare, path: '/manufacturer/team-communication' },
        { name: 'Performance Reports', icon: TrendingUp, path: '/manufacturer/performance-reports' },
        { name: 'Account', icon: User, path: '/manufacturer/account' },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 w-64 overflow-y-auto`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-gray-800">Name</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Menu Sections with Links */}
        <nav className="p-4">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 mb-3 px-2 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      onClick={() => {
                        // Close sidebar on mobile after navigation
                        if (window.innerWidth < 1024) {
                          toggleSidebar();
                        }
                      }}
                      className={({ isActive }) => `
                        w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                        ${isActive 
                          ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }
                      `}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
