// src/components/WholesalerSidebar.jsx
import { NavLink } from 'react-router-dom';
import { 
  Building2, 
  LayoutDashboard, 
  Package, 
  FileText, 
  Users, 
  Percent, 
  ClipboardCheck, 
  BarChart3, 
  MessageSquare, 
  TrendingUp, 
  User, 
  X 
} from 'lucide-react';

const WholesalerSidebar = ({ isOpen, toggleSidebar }) => {
  const menuSections = [
    {
      title: 'WHOLESALER',
      items: [
        { name: 'Business Profile', icon: Building2, path: '/wholesaler/business-setting' },
        { name: 'Dashboard', icon: LayoutDashboard, path: '/wholesaler/dashboard' },
        { name: 'Bulk Inventory Management', icon: Package, path: '/wholesaler/bulk-inventory' },
        { name: 'Inventory Management', icon: Package, path: '/wholesaler/inventory-management' },
        { name: 'Party Ledger & Receivables', icon: FileText, path: '/wholesaler/party-ledger' },
      ]
    },
    {
      title: 'STAFF MANAGEMENT',
      items: [
        { name: 'Staff Directory', icon: Users, path: '/wholesaler/staff-directory' },
        { name: 'Sales Commission', icon: Percent, path: '/wholesaler/sales-commission' },
        { name: 'Attendance Tracker', icon: ClipboardCheck, path: '/wholesaler/attendance' },
        { name: 'Staff Leaderboard', icon: BarChart3, path: '/wholesaler/leaderboard' },
        { name: 'Task Assignment', icon: ClipboardCheck, path: '/wholesaler/tasks' },
        { name: 'CRM', icon: MessageSquare, path: '/wholesaler/crm' },
        { name: 'Internal Chat', icon: MessageSquare, path: '/wholesaler/team-communication' },
        { name: 'Performance Reports', icon: TrendingUp, path: '/wholesaler/performance-reports' },
        { name: 'Account', icon: User, path: '/wholesaler/account' },
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
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-semibold text-gray-800">Wholesaler</span>
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

export default WholesalerSidebar;
