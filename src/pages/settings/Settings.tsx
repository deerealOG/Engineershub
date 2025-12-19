import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import { useAuth } from '../../context/AuthContext';
import './Settings.css';

type SettingsTab = 'profile' | 'account' | 'notifications' | 'privacy';

const TABS: { key: SettingsTab; label: string; icon: string }[] = [
  { key: 'profile', label: 'Profile', icon: 'user' },
  { key: 'account', label: 'Account', icon: 'settings' },
  { key: 'notifications', label: 'Notifications', icon: 'bell' },
  { key: 'privacy', label: 'Privacy', icon: 'shield' }
];

const getIcon = (icon: string) => {
  const icons: Record<string, React.ReactNode> = {
    user: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" /></>,
    bell: <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {icons[icon]}
    </svg>
  );
};

export function Settings() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  
  // Profile form state
  const [profileForm, setProfileForm] = useState({
    firstName: '',
    lastName: '',
    title: '',
    location: '',
    bio: '',
    phone: '',
  });

  // Notifications state
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    jobAlerts: true,
    marketing: false
  });

  // Initialize form with user data
  useEffect(() => {
    if (user?.profile) {
      const nameParts = (user.profile.fullName || '').split(' ');
      setProfileForm({
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || '',
        title: user.profile.title || '',
        location: user.profile.location || '',
        bio: user.profile.about || '',
        phone: user.profile.phone || '',
      });
    }
  }, [user]);

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handleProfileSave = () => {
    setSaveStatus('saving');
    
    updateProfile({
      fullName: `${profileForm.firstName} ${profileForm.lastName}`.trim(),
      title: profileForm.title,
      location: profileForm.location,
      about: profileForm.bio,
      phone: profileForm.phone,
    });

    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 500);
  };

  // Get initials for avatar
  const initials = (profileForm.firstName?.[0] || 'U') + (profileForm.lastName?.[0] || '');

  return (
    <DashboardLayout>
      <div className="settings-page">
        {/* Header */}
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your account settings and preferences</p>
        </div>

        <div className="settings-layout">
          {/* Tabs */}
          <nav className="settings-tabs">
            {TABS.map(tab => (
              <button
                key={tab.key}
                className={`settings-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {getIcon(tab.icon)}
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Content */}
          <div className="settings-content">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <>
                <section className="settings-section">
                  <h2>Profile Information</h2>
                  <p>Update your personal details and public profile.</p>

                  <div className="settings-avatar">
                    <div className="settings-avatar__preview">{initials}</div>
                    <div className="settings-avatar__actions">
                      <button className="settings-avatar__upload">Upload Photo</button>
                      <button className="settings-avatar__remove">Remove</button>
                    </div>
                  </div>

                  <div className="settings-form">
                    <div className="settings-form__row">
                      <div className="settings-form__group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          value={profileForm.firstName}
                          onChange={(e) => setProfileForm({ ...profileForm, firstName: e.target.value })}
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="settings-form__group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          value={profileForm.lastName}
                          onChange={(e) => setProfileForm({ ...profileForm, lastName: e.target.value })}
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="settings-form__group">
                      <label htmlFor="title">Job Title</label>
                      <input 
                        type="text" 
                        id="title" 
                        value={profileForm.title}
                        onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                        placeholder="e.g., Mechanical Engineer"
                      />
                    </div>
                    <div className="settings-form__group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                    <div className="settings-form__group">
                      <label htmlFor="location">Location</label>
                      <input 
                        type="text" 
                        id="location" 
                        value={profileForm.location}
                        onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                        placeholder="e.g., Lagos, Nigeria"
                      />
                    </div>
                    <div className="settings-form__group">
                      <label htmlFor="bio">Bio</label>
                      <textarea 
                        id="bio" 
                        rows={4} 
                        value={profileForm.bio}
                        onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                        placeholder="Tell us about yourself, your experience, and what you're looking for..."
                      />
                    </div>
                  </div>
                </section>

                <div className="settings-save">
                  <button 
                    className="settings-save__btn" 
                    onClick={handleProfileSave}
                    disabled={saveStatus === 'saving'}
                  >
                    {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? '✓ Saved!' : 'Save Changes'}
                  </button>
                  <button 
                    className="settings-save__cancel"
                    onClick={() => navigate('/profile')}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}

            {/* Account Tab */}
            {activeTab === 'account' && (
              <>
                <section className="settings-section">
                  <h2>Email Address</h2>
                  <p>Update your email address for account notifications.</p>

                  <div className="settings-form">
                    <div className="settings-form__group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" defaultValue={user?.profile?.email || ''} placeholder="your@email.com" />
                    </div>
                  </div>
                </section>

                <section className="settings-section">
                  <h2>Password</h2>
                  <p>Change your password to keep your account secure.</p>

                  <div className="settings-password">
                    <h3>Change Password</h3>
                    <div className="settings-form">
                      <div className="settings-form__group">
                        <label htmlFor="currentPassword">Current Password</label>
                        <input type="password" id="currentPassword" placeholder="Enter current password" />
                      </div>
                      <div className="settings-form__group">
                        <label htmlFor="newPassword">New Password</label>
                        <input type="password" id="newPassword" placeholder="Enter new password" />
                      </div>
                      <div className="settings-form__group">
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <input type="password" id="confirmPassword" placeholder="Confirm new password" />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="settings-section">
                  <h2>Danger Zone</h2>
                  <div className="settings-danger">
                    <h3>Delete Account</h3>
                    <p>Once you delete your account, there is no going back. Please be certain.</p>
                    <button className="settings-danger__btn">Delete Account</button>
                  </div>
                </section>

                <div className="settings-save">
                  <button className="settings-save__btn">Save Changes</button>
                </div>
              </>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <>
                <section className="settings-section">
                  <h2>Notification Preferences</h2>
                  <p>Choose how you want to receive notifications.</p>

                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <h3>Email Notifications</h3>
                      <p>Receive notifications via email</p>
                    </div>
                    <button
                      className={`settings-toggle__switch ${notifications.email ? 'active' : ''}`}
                      onClick={() => toggleNotification('email')}
                    />
                  </div>

                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <h3>Push Notifications</h3>
                      <p>Receive push notifications in your browser</p>
                    </div>
                    <button
                      className={`settings-toggle__switch ${notifications.push ? 'active' : ''}`}
                      onClick={() => toggleNotification('push')}
                    />
                  </div>

                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <h3>Job Alerts</h3>
                      <p>Get notified about new jobs matching your preferences</p>
                    </div>
                    <button
                      className={`settings-toggle__switch ${notifications.jobAlerts ? 'active' : ''}`}
                      onClick={() => toggleNotification('jobAlerts')}
                    />
                  </div>

                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <h3>Marketing Emails</h3>
                      <p>Receive updates about new features and tips</p>
                    </div>
                    <button
                      className={`settings-toggle__switch ${notifications.marketing ? 'active' : ''}`}
                      onClick={() => toggleNotification('marketing')}
                    />
                  </div>
                </section>

                <div className="settings-save">
                  <button className="settings-save__btn">Save Preferences</button>
                </div>
              </>
            )}

            {/* Privacy Tab */}
            {activeTab === 'privacy' && (
              <>
                <section className="settings-section">
                  <h2>Profile Visibility</h2>
                  <p>Control who can see your profile information.</p>

                  <div className="settings-form">
                    <div className="settings-form__group">
                      <label htmlFor="profileVisibility">Who can see your profile?</label>
                      <select id="profileVisibility" defaultValue="recruiters">
                        <option value="everyone">Everyone</option>
                        <option value="recruiters">Recruiters Only</option>
                        <option value="private">Private</option>
                      </select>
                    </div>
                    <div className="settings-form__group">
                      <label htmlFor="resumeVisibility">Who can see your resume?</label>
                      <select id="resumeVisibility" defaultValue="applied">
                        <option value="everyone">All Recruiters</option>
                        <option value="applied">Only Companies I Applied To</option>
                        <option value="private">No One</option>
                      </select>
                    </div>
                  </div>
                </section>

                <section className="settings-section">
                  <h2>Data & Privacy</h2>
                  <p>Manage your data and privacy settings.</p>

                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <h3>Show Activity Status</h3>
                      <p>Let recruiters see when you were last active</p>
                    </div>
                    <button className="settings-toggle__switch active" />
                  </div>

                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <h3>Allow Profile to Be Indexed</h3>
                      <p>Allow your profile to appear in search results</p>
                    </div>
                    <button className="settings-toggle__switch active" />
                  </div>
                </section>

                <div className="settings-save">
                  <button className="settings-save__btn">Save Settings</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
