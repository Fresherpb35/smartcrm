// src/pages/Announcements.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  Search, 
  ArrowLeft,
  Settings
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const Announcements = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [announcement, setAnnouncement] = useState('');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample channel data
  const channels = [
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

  const filteredChannels = channels.filter(channel =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChannelClick = (channel) => {
    setSelectedChannel(channel);
  };

  const handleMakeAnnouncement = () => {
    if (announcement.trim()) {
      console.log('Making announcement:', announcement);
      // Add your announcement logic here
      setAnnouncement('');
    }
  };

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
        <main className="flex-1 overflow-hidden">
          <div className="h-full flex">
            {/* Left Sidebar - Channel List */}
            <div className="w-full lg:w-80 xl:w-96 bg-white border-r border-gray-200 flex flex-col">
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <button 
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-1 hover:text-gray-900 transition-colors px-3 py-1.5 bg-gray-700 text-white rounded-lg"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <span>/</span>
                  <span className="hidden sm:inline">Dashboard</span>
                  <span className="hidden sm:inline">/</span>
                  <button
                    onClick={() => navigate('/team-communication')}
                    className="text-gray-900 font-medium hover:underline"
                  >
                    Team Communication
                  </button>
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
                    onClick={() => navigate('/team-communication')}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Direct Chats
                  </button>
                  <button
                    onClick={() => navigate('/team-communication')}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Group Chats
                  </button>
                  <button
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white transition-colors"
                  >
                    Announcements
                  </button>
                </div>
              </div>

              {/* Channel List */}
              <div className="flex-1 overflow-y-auto">
                {filteredChannels.map((channel) => (
                  <div
                    key={channel.id}
                    onClick={() => handleChannelClick(channel)}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedChannel?.id === channel.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${channel.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-semibold text-sm">
                          {channel.initials}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {channel.name}
                          </h3>
                          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                            {channel.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">
                          {channel.preview}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Settings Button */}
              <div className="p-4 border-t border-gray-200">
                <button
                  onClick={() => navigate('/team-communication')}
                  className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Settings className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Right Side - Announcement View */}
            <div className="hidden lg:flex flex-1 flex-col bg-white border-2 border-blue-500 rounded-lg m-6">
              {selectedChannel ? (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${selectedChannel.bgColor} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-semibold text-sm">
                          {selectedChannel.initials}
                        </span>
                      </div>
                      <h2 className="font-semibold text-gray-900">{selectedChannel.name}</h2>
                    </div>
                  </div>

                  {/* Announcement Area */}
                  <div 
                    className="flex-1 overflow-y-auto p-6"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundColor: '#fafafa'
                    }}
                  >
                    <div className="mb-6">
                      <div className="text-xs text-gray-500 mb-2">
                        By: XX at 00:00AM
                      </div>
                      <div className="bg-gray-900 text-white px-4 py-3 rounded-lg inline-block max-w-2xl">
                        Announcement text
                      </div>
                    </div>
                  </div>

                  {/* Announcement Input */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex flex-col gap-3">
                      <input
                        type="text"
                        value={announcement}
                        onChange={(e) => setAnnouncement(e.target.value)}
                        placeholder="Make Announcement"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      <button
                        onClick={handleMakeAnnouncement}
                        className="self-end px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-500">Select a channel to view announcements</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Announcements;