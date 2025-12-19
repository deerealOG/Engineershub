import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import { Input, Button, FileUpload, Checkbox } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import constructionWorkers from '../../assets/images/construction-workers.webp';
import './ProfileComplete.css';

export function ProfileComplete() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    engineeringField: '',
    yearsOfExperience: '',
    cv: null as File | null,
    profileImage: null as File | null,
    portfolio: null as File | null,
    portfolioLink: '',
    location: '',
    emailTips: true,
  });

  // Track uploaded file names for display
  const [uploadedFiles, setUploadedFiles] = useState({
    cv: '',
    profileImage: '',
    portfolio: '',
  });

  const handleFileChange = (field: 'cv' | 'profileImage' | 'portfolio') => (file: File | null) => {
    setFormData({ ...formData, [field]: file });
    setUploadedFiles({ ...uploadedFiles, [field]: file?.name || '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update the user's profile with the completed data
    updateProfile({
      engineeringField: formData.engineeringField,
      yearsOfExperience: formData.yearsOfExperience,
      location: formData.location,
      title: formData.engineeringField || 'Engineer',
    });

    console.log('Profile completed with files:', {
      cv: formData.cv?.name,
      profileImage: formData.profileImage?.name,
      portfolio: formData.portfolio?.name,
      portfolioLink: formData.portfolioLink,
    });

    // Navigate to the profile page
    navigate('/profile');
  };

  return (
    <DashboardLayout>
        <div className="profile-complete">
        <div
            className="profile-complete__hero"
            style={{ backgroundImage: `url(${constructionWorkers})` }}
        >
            <div className="profile-complete__hero-overlay" />
            <div className="profile-complete__hero-content">
            <h1>Complete Profile</h1>
            </div>
        </div>

        <div className="profile-complete__content">
            <div className="profile-complete__header">
            <h1>Create Your Profile</h1>
            {user && (
              <p className="profile-complete__welcome">
                Welcome, {user.profile.fullName}! Let's complete your profile.
              </p>
            )}
            </div>

            <form onSubmit={handleSubmit}>
            <div className="profile-complete__fields">
                <div className="profile-complete__field-row">
                <Input
                    label="Engineering Field"
                    value={formData.engineeringField}
                    onChange={(e) =>
                    setFormData({ ...formData, engineeringField: e.target.value })
                    }
                    placeholder="e.g., Mechanical Engineering, Civil Engineering"
                />
                <span className="profile-complete__edit">Edit</span>
                </div>

                <div className="profile-complete__field-row">
                <Input
                    label="Years of Experience"
                    value={formData.yearsOfExperience}
                    onChange={(e) =>
                    setFormData({ ...formData, yearsOfExperience: e.target.value })
                    }
                    placeholder="e.g., 5"
                />
                <span className="profile-complete__edit">Edit</span>
                </div>

                <div className="profile-complete__file-group">
                  <FileUpload
                    label="Upload CV"
                    accept=".pdf,.docx"
                    maxSize="10MB"
                    onChange={handleFileChange('cv')}
                  />
                  {uploadedFiles.cv && (
                    <p className="profile-complete__file-name">
                      ✓ Uploaded: {uploadedFiles.cv}
                    </p>
                  )}
                </div>

                <div className="profile-complete__file-group">
                  <FileUpload
                    label="Upload Image"
                    accept=".jpg,.jpeg,.png"
                    maxSize="10MB"
                    onChange={handleFileChange('profileImage')}
                  />
                  {uploadedFiles.profileImage && (
                    <p className="profile-complete__file-name">
                      ✓ Uploaded: {uploadedFiles.profileImage}
                    </p>
                  )}
                </div>

                <div className="profile-complete__file-group">
                  <FileUpload
                    label="Upload Portfolio (Optional)"
                    accept=".pdf,.jpg,.jpeg,.png"
                    maxSize="10MB"
                    onChange={handleFileChange('portfolio')}
                  />
                  {uploadedFiles.portfolio && (
                    <p className="profile-complete__file-name">
                      ✓ Uploaded: {uploadedFiles.portfolio}
                    </p>
                  )}
                </div>

                <Input
                label="Portfolio link:"
                value={formData.portfolioLink}
                onChange={(e) =>
                    setFormData({ ...formData, portfolioLink: e.target.value })
                }
                placeholder="https://yourportfolio.com"
                />

                <div className="profile-complete__field-row">
                <Input
                    label="Location"
                    value={formData.location}
                    onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="e.g., Lagos, Nigeria"
                />
                <span className="profile-complete__edit">Edit</span>
                </div>

                <Checkbox
                label="Send me emails with tips on how to find talent that fits my needs."
                checked={formData.emailTips}
                onChange={(e) =>
                    setFormData({ ...formData, emailTips: e.target.checked })
                }
                />
            </div>

            <Button type="submit" fullWidth size="lg">
                Submit Profile
            </Button>

            <p className="profile-complete__skip">
              <button type="button" onClick={() => navigate('/profile')} className="profile-complete__skip-link">
                Skip for now
              </button>
            </p>
            </form>
        </div>
        </div>
    </DashboardLayout>
  );
}
