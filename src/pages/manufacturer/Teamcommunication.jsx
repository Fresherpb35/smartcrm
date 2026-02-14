import { useState } from 'react';
import { Search, Settings } from 'lucide-react';

const TeamCommunication = ({ onChatSelect, onSettingsClick }) => {
  const [activeTab, setActiveTab] = useState('Direct Chats');
  const [searchQuery, setSearchQuery] = useState('');

  const directChats = [
    { id: 1, name: 'Person One', message: 'The message looks like this...', time: '9:58 AM', avatar: 'P1', type: 'direct' },
    { id: 2, name: 'Person Two', message: 'The message looks like this...', time: '10:58 AM', avatar: 'P2', type: 'direct' },
    { id: 3, name: 'Person Three', message: 'The message looks like this...', time: '11:58 AM', avatar: 'P3', type: 'direct' }
  ];

  const groupChats = [
    { id: 4, name: 'Channel One', message: 'The message looks like this...', time: '9:58 AM', avatar: 'C1', type: 'group' },
    { id: 5, name: 'Channel Two', message: 'The message looks like this...', time: '10:58 AM', avatar: 'C2', type: 'group' },
    { id: 6, name: 'Channel Three', message: 'The message looks like this...', time: '11:58 AM', avatar: 'C3', type: 'group' }
  ];

  const announcements = [
    { id: 7, name: 'Channel Name', message: 'Announcement text', time: '9:58 AM', avatar: 'CN', type: 'announcement' }
  ];

  const getChatsToDisplay = () => {
    switch (activeTab) {
      case 'Direct Chats':
        return directChats;
      case 'Group Chats':
        return groupChats;
      case 'Announcements':
        return announcements;
      default:
        return directChats;
    }
  };

  const chats = getChatsToDisplay();

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search chat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-4 py-3 border-b border-gray-200 overflow-x-auto">
        {['Direct Chats', 'Group Chats', 'Announcements'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onChatSelect(chat)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
              {chat.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-gray-900 text-sm truncate">{chat.name}</h4>
                <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Settings Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onSettingsClick}
          className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <Settings className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TeamCommunication;