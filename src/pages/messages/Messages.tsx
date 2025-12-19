import { useState } from 'react';
import { DashboardLayout } from '../../components/layout';
import shellLogo from '../../assets/images/shell-logo.webp'; // Using generic avatar
import './Messages.css';

const MOCK_MESSAGES = Array(8).fill({
  id: 1,
  sender: 'Jacob Ramsy',
  role: 'HR. NNPC',
  avatar: shellLogo, // Placeholder
  lastMessage: 'Your application was received',
  time: '10:20am',
  unread: false,
});

export function Messages() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');

  return (
    <DashboardLayout>
      <div className="messages-page">
        <div className="messages__container">
          <div className="messages__sidebar">
             <div className="messages__header">
                <h2>Message</h2>
                <p>You have 4 new unread messages</p>
             </div>
             
             <div className="messages__search">
                {/* Search icon placeholder */}
                <input type="text" />
             </div>

             <div className="messages__list">
                {MOCK_MESSAGES.map((msg, idx) => (
                    <div 
                        key={idx} 
                        className={`message-item ${selectedChat === idx ? 'active' : ''}`}
                        onClick={() => setSelectedChat(idx)}
                    >
                        <img src={msg.avatar} alt={msg.sender} />
                        <div className="message-item__content">
                            <div className="message-item__top">
                                <h3>{msg.sender}</h3>
                                <span>{msg.time}</span>
                            </div>
                            <p className="message-item__role">({msg.role})</p>
                            <p className="message-item__preview">{msg.lastMessage}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          <div className="messages__content">
            {selectedChat !== null ? (
                <>
                    <div className="chat__header">
                        <div className="chat__user">
                            <img src={shellLogo} alt="Jacob" />
                            <div>
                                <h3>Jacob Ramsy</h3>
                                <p>(HR. NNPC)</p>
                            </div>
                        </div>
                        <button className="chat__options">⋮</button>
                    </div>
                    
                    <div className="chat__body">
                        {/* Mock chat bubbles */}
                        <div className="chat__bubble received">
                            <p>Hello Fred,</p>
                            <p>We received your email and message and our Team...</p>
                        </div>
                        <div className="chat__bubble sent">
                            <p>Thank you Sir,</p>
                            <p>I will do just as you have said.</p>
                        </div>
                    </div>

                    <div className="chat__footer">
                         <div className="chat__input-wrapper">
                            <button className="chat__emoji">☺</button>
                            <input 
                                type="text" 
                                value={newMessage} 
                                onChange={(e) => setNewMessage(e.target.value)} 
                            />
                            <button className="chat__send">➤</button>
                         </div>
                    </div>
                </>
            ) : (
                <div className="messages__empty-selection">
                    <p>Select a conversation to start messaging</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
