import { useState } from 'react';
import { DashboardLayout } from '../../components/layout';
import { Input, Button } from '../../components/ui';
import shellLogo from '../../assets/images/shell-logo.webp';
import './Notifications.css';

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    message: 'Your application for the position of a Senior Safety Engineer was sent.',
    date: 'Today',
    status: 'sent', // sent, error, success
    action: 'view',
  },
  {
    id: 2,
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    message: 'Your application for the position of a Senior Safety Engineer was sent.',
    date: 'Today',
    status: 'sent',
    action: 'view',
  },
  {
    id: 3,
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    message: 'Your application was unsuccessful, check job description and complete your application',
    date: 'Today',
    status: 'error',
    action: 'view',
  },
  {
    id: 4,
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    message: 'Your application for the position of a Senior Safety Engineer was sent.',
    date: 'Yesterday',
    status: 'sent',
    action: 'view',
  },
   {
    id: 5,
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    message: 'Your application for the position of a Senior Safety Engineer was sent.',
    date: 'Yesterday',
    status: 'sent',
    action: 'view',
  },
  {
    id: 6,
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    message: 'Your application was unsuccessful, check job description and complete your application',
    date: 'Yesterday',
    status: 'error',
    action: 'view',
  },
   {
    id: 7,
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    message: 'Your application for the position of a Senior Safety Engineer was sent.',
    date: '20 Mar',
    status: 'sent',
    action: 'view',
  },
];

export function Notifications() {
  const [searchTerm, setSearchTerm] = useState('');

  // Group by date
  const grouped = MOCK_NOTIFICATIONS.reduce((acc, curr) => {
    if (!acc[curr.date]) acc[curr.date] = [];
    acc[curr.date].push(curr);
    return acc;
  }, {} as Record<string, typeof MOCK_NOTIFICATIONS>);

  return (
    <DashboardLayout>
      <div className="notifications-page">
        <div className="notifications__container">
          <div className="notifications__header">
            <div>
                <h1>Notifications</h1>
                <p>You have 6 notifications to go through</p>
            </div>
            <button className="notifications__clear">Clear all notification</button>
          </div>

          <div className="notifications__search-area">
             <div className="notifications__search">
                <Input 
                    label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  
                />
             </div>
             <Button>search</Button>
          </div>

          <div className="notifications__list">
            {Object.entries(grouped).map(([date, items]) => (
                <div key={date} className="notifications__group">
                    <h3>{date}</h3>
                    {items.map((item) => (
                        <div key={item.id} className={`notification-card type-${item.status}`}>
                            <div className="notification-card__icon">
                                <img src={item.logo} alt={item.company} />
                            </div>
                            <div className="notification-card__content">
                                <h4>{item.company}</h4>
                                <p className={item.status === 'error' ? 'text-error' : 'text-success'}>
                                    {item.message}
                                </p>
                            </div>
                            <button className="notification-card__action">
                                {item.action}
                            </button>
                        </div>
                    ))}
                </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
