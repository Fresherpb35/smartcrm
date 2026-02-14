// src/pages/TeamCommunication.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  Search, 
  ArrowLeft,
  Settings,
  MessageSquare
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import WholesalerSidebar from '../../components/WholesalerSidebar';

const TeamCommunication = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('direct'); // 'direct', 'group', 'announcements'
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample chat data
  const directChats = [
    {
      id: 1,
      name: 'Person One',
      initials: 'P1',
      preview: 'The message looks like this...',
      time: '9:58 AM',
      bgColor: 'bg-indigo-500'
    },
    {
      id: 2,
      name: 'Person Two',
      initials: 'P2',
      preview: 'The message looks like this...',
      time: '10:58 AM',
      bgColor: 'bg-indigo-600'
    },
    {
      id: 3,
      name: 'Person Three',
      initials: 'P3',
      preview: 'The message looks like this...',
      time: '11:58 AM',
      bgColor: 'bg-indigo-700'
    }
  ];

  const groupChats = [
    {
      id: 1,
      name: 'Channel One',
      initials: '1',
      preview: 'The message looks like this...',
      time: '9:58 AM',
      bgColor: 'bg-indigo-500'
    },
    {
      id: 2,
      name: 'Channel Two',
      initials: '2',
      preview: 'The message looks like this...',
      time: '10:58 AM',
      bgColor: 'bg-indigo-600'
    },
    {
      id: 3,
      name: 'Channel Three',
      initials: '3',
      preview: 'The message looks like this...',
      time: '11:58 AM',
      bgColor: 'bg-indigo-700'
    }
  ];

  const handleChatClick = (chatId, type) => {
    if (type === 'direct' || type === 'group') {
      navigate(`/wholesaler/team-communication/chat/${chatId}`, { state: { type } });
    }
  };

  const handleAnnouncementsClick = () => {
    navigate('/wholesaler/team-communication/announcements');
  };

  const filteredChats = (activeTab === 'direct' ? directChats : groupChats).filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <WholesalerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
      

        {/* Page Content */}
        <main className="flex-1 overflow-hidden">
          <div className="h-full flex">
            {/* Left Sidebar - Chat List */}
            <div className="w-full lg:w-80 xl:w-96 bg-white border-r border-gray-200 flex flex-col">
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200">
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
                  <span className="text-gray-900 font-medium">Team Communication</span>
                </div>

                {/* Title */}
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                  Team Communication
                </h1>

                {/* Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search chat"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* Tabs */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('direct')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === 'direct'
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Direct Chats
                  </button>
                  <button
                    onClick={() => setActiveTab('group')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === 'group'
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Group Chats
                  </button>
                  <button
                    onClick={handleAnnouncementsClick}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === 'announcements'
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Announcements
                  </button>
                </div>
              </div>

              {/* Chat List */}
              <div className="flex-1 overflow-y-auto">
                {filteredChats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => handleChatClick(chat.id, activeTab)}
                    className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${chat.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-semibold text-sm">
                          {chat.initials}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {chat.name}
                          </h3>
                          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                            {chat.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">
                          {chat.preview}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Settings Button */}
              <div className="p-4 border-t border-gray-200">
                <button
                  onClick={() => setShowSettings(true)}
                  className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Settings className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Right Side - Empty State */}
            <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">
                  Choose a chat to start a conversation
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Chat Settings</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Message Retention Period */}
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">Message Retention Period</span>
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>30 Days</option>
                  <option>60 Days</option>
                  <option>90 Days</option>
                </select>
              </div>

              {/* Chat Notifications */}
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">Chat Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* Channel Notifications */}
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">Channel Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* Mention Alerts */}
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">Mention Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* Create New Channel */}
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">Create New Channel</span>
                <button 
                  onClick={() => {
                    setShowSettings(false);
                    navigate('/wholesaler/team-communication/announcements');
                  }}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  Create
                </button>
              </div>

              {/* Export Chat Data */}
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">Export Chat Data</span>
                <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCommunication;