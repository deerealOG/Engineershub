import { useState } from 'react';
import { DashboardLayout } from '../../components/layout';
import shellLogo from '../../assets/images/shell-logo.webp';
import './Messages.css';

// Better mock data with unique conversations
const MOCK_CONVERSATIONS = [
  {
    id: 1,
    sender: 'Jacob Ramsy',
    role: 'HR Manager, NNPC',
    avatar: shellLogo,
    lastMessage: 'Your application was received',
    time: '10:20am',
    unread: true,
    messages: [
      { id: 1, text: 'Hello, thanks for your application for the Mechanical Engineer role.', sent: false, time: '10:15am' },
      { id: 2, text: 'We received your email and our team is currently reviewing it.', sent: false, time: '10:16am' },
      { id: 3, text: 'Thank you for the update! I look forward to hearing from you.', sent: true, time: '10:18am' },
      { id: 4, text: 'Your application was received', sent: false, time: '10:20am' },
    ]
  },
  {
    id: 2,
    sender: 'Amaka Okonkwo',
    role: 'Recruiter, Shell',
    avatar: shellLogo,
    lastMessage: 'Can you send your portfolio?',
    time: 'Yesterday',
    unread: false,
    messages: [
      { id: 1, text: 'Hi! We saw your profile and are impressed with your experience.', sent: false, time: '2:00pm' },
      { id: 2, text: 'Can you send your portfolio?', sent: false, time: '2:01pm' },
    ]
  },
  {
    id: 3,
    sender: 'David Adeleke',
    role: 'Engineer, Chevron',
    avatar: shellLogo,
    lastMessage: 'Great connecting with you!',
    time: 'Mon',
    unread: false,
    messages: [
      { id: 1, text: 'Hey, I saw you also work in the oil and gas sector.', sent: false, time: '11:00am' },
      { id: 2, text: 'Great connecting with you!', sent: false, time: '11:05am' },
    ]
  },
  {
    id: 4,
    sender: 'Sarah Obi',
    role: 'HR, Dangote Group',
    avatar: shellLogo,
    lastMessage: 'Interview scheduled for Friday',
    time: 'Dec 15',
    unread: true,
    messages: [
      { id: 1, text: 'Congratulations! You have been shortlisted for an interview.', sent: false, time: '9:00am' },
      { id: 2, text: 'Interview scheduled for Friday at 10:00am.', sent: false, time: '9:01am' },
    ]
  },
  {
    id: 5,
    sender: 'Michael Eze',
    role: 'Technical Lead, Julius Berger',
    avatar: shellLogo,
    lastMessage: 'Thanks for applying',
    time: 'Dec 10',
    unread: false,
    messages: [
      { id: 1, text: 'Thanks for applying to our Civil Engineer position.', sent: false, time: '4:30pm' },
    ]
  },
];

export function Messages() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [conversations, setConversations] = useState(MOCK_CONVERSATIONS);
  const [searchTerm, setSearchTerm] = useState('');

  const selectedConversation = selectedChat !== null 
    ? conversations.find(c => c.id === selectedChat) 
    : null;

  const filteredConversations = conversations.filter(c => 
    c.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!newMessage.trim() || selectedChat === null) return;
    
    setConversations(prev => prev.map(conv => {
      if (conv.id === selectedChat) {
        return {
          ...conv,
          messages: [...conv.messages, {
            id: Date.now(),
            text: newMessage,
            sent: true,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }],
          lastMessage: newMessage,
          time: 'Just now'
        };
      }
      return conv;
    }));
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const unreadCount = conversations.filter(c => c.unread).length;

  return (
    <DashboardLayout>
      <div className="messages-page">
        <div className="messages__container">
          <div className="messages__sidebar">
             <div className="messages__header">
                <h2>Messages</h2>
                <p>You have {unreadCount} new unread message{unreadCount !== 1 ? 's' : ''}</p>
             </div>
             
             <div className="messages__search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>

             <div className="messages__list">
                {filteredConversations.map((conv) => (
                    <div 
                        key={conv.id} 
                        className={`message-item ${selectedChat === conv.id ? 'active' : ''} ${conv.unread ? 'unread' : ''}`}
                        onClick={() => {
                          setSelectedChat(conv.id);
                          // Mark as read
                          setConversations(prev => prev.map(c => 
                            c.id === conv.id ? { ...c, unread: false } : c
                          ));
                        }}
                    >
                        <img src={conv.avatar} alt={conv.sender} />
                        <div className="message-item__content">
                            <div className="message-item__top">
                                <h3>{conv.sender}</h3>
                                <span>{conv.time}</span>
                            </div>
                            <p className="message-item__role">({conv.role})</p>
                            <p className="message-item__preview">{conv.lastMessage}</p>
                        </div>
                        {conv.unread && <span className="message-item__badge" />}
                    </div>
                ))}
            </div>
          </div>

          <div className="messages__content">
            {selectedConversation ? (
                <>
                    <div className="chat__header">
                        <div className="chat__user">
                            <img src={selectedConversation.avatar} alt={selectedConversation.sender} />
                            <div>
                                <h3>{selectedConversation.sender}</h3>
                                <p>({selectedConversation.role})</p>
                            </div>
                        </div>
                        <button className="chat__options" aria-label="Options">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                          </svg>
                        </button>
                    </div>
                    
                    <div className="chat__body">
                        {selectedConversation.messages.map((msg) => (
                          <div key={msg.id} className={`chat__bubble ${msg.sent ? 'sent' : 'received'}`}>
                              <p>{msg.text}</p>
                              <span className="chat__time">{msg.time}</span>
                          </div>
                        ))}
                    </div>

                    <div className="chat__footer">
                         <div className="chat__input-wrapper">
                            <button className="chat__emoji" aria-label="Add emoji">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                <line x1="9" y1="9" x2="9.01" y2="9" />
                                <line x1="15" y1="9" x2="15.01" y2="9" />
                              </svg>
                            </button>
                            <input 
                                type="text" 
                                placeholder="Type a message..."
                                value={newMessage} 
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button 
                              className="chat__send" 
                              onClick={handleSendMessage}
                              disabled={!newMessage.trim()}
                              aria-label="Send message"
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                              </svg>
                            </button>
                         </div>
                    </div>
                </>
            ) : (
                <div className="messages__empty-selection">
                    <div className="messages__empty-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <h3>Select a conversation</h3>
                    <p>Choose a conversation from the list to start messaging</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
