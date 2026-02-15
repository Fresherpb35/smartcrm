// src/pages/ChatConversation.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  ArrowLeft,
  MoreVertical,
  Plus,
  Send
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const ChatConversation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState(null);

  const chatType = location.state?.type || 'direct';

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Sample chat data
    const sampleDirectChats = {
      1: {
        id: 1,
        name: 'Name',
        initials: 'A',
        bgColor: 'bg-indigo-500',
        messages: [
          {
            id: 1,
            text: 'Text',
            sender: 'other',
            time: '00:00AM'
          },
          {
            id: 2,
            text: 'Text',
            sender: 'me',
            time: '00:00AM'
          }
        ]
      }
    };

    const sampleGroupChats = {
      1: {
        id: 1,
        name: 'Channel Name',
        initials: 'C',
        bgColor: 'bg-indigo-500',
        messages: [
          {
            id: 1,
            text: 'Text',
            sender: 'other',
            time: '00:00AM'
          },
          {
            id: 2,
            text: 'Text',
            sender: 'me',
            time: '00:00AM'
          }
        ]
      }
    };

    const chatData = chatType === 'direct' ? sampleDirectChats : sampleGroupChats;
    setChat(chatData[id] || chatData[1]);
  }, [id, chatType]);

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      // Add your send message logic here
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!chat) {
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
        <main className="flex-1 overflow-hidden flex flex-col">
          {/* Breadcrumb */}
          <div className="p-4 sm:p-6 bg-white border-b border-gray-200">
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
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Team Communication
            </h1>
          </div>

          {/* Chat Container */}
          <div className="flex-1 flex overflow-hidden">
            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-white border-2 border-blue-500 rounded-lg m-4 sm:m-6">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${chat.bgColor} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-semibold text-sm">
                      {chat.initials}
                    </span>
                  </div>
                  <h2 className="font-semibold text-gray-900">{chat.name}</h2>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Messages Area */}
              <div 
                className="flex-1 overflow-y-auto p-4 sm:p-6"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundColor: '#fafafa'
                }}
              >
                <div className="space-y-4">
                  {chat.messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs sm:max-w-md lg:max-w-lg ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                        <div className="mb-1 text-xs text-gray-500">
                          Sent By: XX at {msg.time}
                        </div>
                        <div
                          className={`inline-block px-4 py-2 rounded-lg ${
                            msg.sender === 'me'
                              ? 'bg-gray-900 text-white'
                              : 'bg-white text-gray-900 border border-gray-200'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                    <Plus className="w-5 h-5 text-gray-600" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter query here..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0"
                  >
                    <Send className="w-5 h-5" />
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

export default ChatConversation;