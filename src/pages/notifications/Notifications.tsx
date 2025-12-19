import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import { Button } from '../../components/ui';
import shellLogo from '../../assets/images/shell-logo.webp';
import './Notifications.css';

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    message: 'Your application for the position of Senior Safety Engineer was sent successfully.',
    date: 'Today',
    status: 'success',
    jobId: 1,
    read: false,
  },
  {
    id: 2,
    company: 'NNPC',
    logo: shellLogo,
    message: 'Congratulations! You have been shortlisted for an interview for the Mechanical Engineer role.',
    date: 'Today',
    status: 'success',
    jobId: 2,
    read: false,
  },
  {
    id: 3,
    company: 'Chevron Nigeria',
    logo: shellLogo,
    message: 'Your application was unsuccessful. Check job requirements and improve your profile.',
    date: 'Today',
    status: 'error',
    jobId: 3,
    read: true,
  },
  {
    id: 4,
    company: 'Dangote Industries',
    logo: shellLogo,
    message: 'Your application for the position of Process Engineer is under review.',
    date: 'Yesterday',
    status: 'pending',
    jobId: 4,
    read: true,
  },
  {
    id: 5,
    company: 'Julius Berger',
    logo: shellLogo,
    message: 'New job match! Civil Engineer position matches your profile.',
    date: 'Yesterday',
    status: 'info',
    jobId: 5,
    read: true,
  },
  {
    id: 6,
    company: 'Total Energies',
    logo: shellLogo,
    message: 'Your application for the position of Petroleum Engineer was sent successfully.',
    date: 'Dec 15',
    status: 'success',
    jobId: 1,
    read: true,
  },
  {
    id: 7,
    company: 'ExxonMobil',
    logo: shellLogo,
    message: 'Reminder: Complete your profile to increase visibility to recruiters.',
    date: 'Dec 10',
    status: 'info',
    jobId: null,
    read: true,
  },
];

export function Notifications() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [searchTerm, setSearchTerm] = useState('');

  // Group by date
  const filteredNotifications = notifications.filter(n =>
    n.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const grouped = filteredNotifications.reduce((acc, curr) => {
    if (!acc[curr.date]) acc[curr.date] = [];
    acc[curr.date].push(curr);
    return acc;
  }, {} as Record<string, typeof notifications>);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleView = (notification: typeof notifications[0]) => {
    // Mark as read
    setNotifications(prev => prev.map(n => 
      n.id === notification.id ? { ...n, read: true } : n
    ));
    // Navigate to job if applicable
    if (notification.jobId) {
      navigate(`/jobs/${notification.jobId}`);
    }
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        );
      case 'error':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        );
      case 'pending':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        );
    }
  };

  return (
    <DashboardLayout>
      <div className="notifications-page">
        <div className="notifications__container">
          <div className="notifications__header">
            <div>
                <h1>Notifications</h1>
                <p>You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}</p>
            </div>
            <div className="notifications__actions">
              <button className="notifications__mark-read" onClick={handleMarkAllRead}>
                Mark all as read
              </button>
              <button className="notifications__clear" onClick={handleClearAll}>
                Clear all
              </button>
            </div>
          </div>

          <div className="notifications__search-area">
             <div className="notifications__search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input 
                  type="text"
                  placeholder="Search notifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
          </div>

          {notifications.length === 0 ? (
            <div className="notifications__empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <h3>No notifications</h3>
              <p>You're all caught up!</p>
              <Link to="/jobs">
                <Button>Browse Jobs</Button>
              </Link>
            </div>
          ) : (
            <div className="notifications__list">
              {Object.entries(grouped).map(([date, items]) => (
                  <div key={date} className="notifications__group">
                      <h3>{date}</h3>
                      {items.map((item) => (
                          <div 
                            key={item.id} 
                            className={`notification-card status-${item.status} ${!item.read ? 'unread' : ''}`}
                          >
                              <div className="notification-card__status">
                                {getStatusIcon(item.status)}
                              </div>
                              <div className="notification-card__icon">
                                  <img src={item.logo} alt={item.company} />
                              </div>
                              <div className="notification-card__content">
                                  <h4>{item.company}</h4>
                                  <p>{item.message}</p>
                              </div>
                              <button 
                                className="notification-card__action"
                                onClick={() => handleView(item)}
                              >
                                  View
                              </button>
                          </div>
                      ))}
                  </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
