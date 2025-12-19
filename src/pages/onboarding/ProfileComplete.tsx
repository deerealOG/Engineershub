import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import { Input, Button, FileUpload, Checkbox } from '../../components/ui';
import constructionWorkers from '../../assets/images/construction-workers.webp';
import './ProfileComplete.css';

export function ProfileComplete() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile complete:', formData);
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
                />
                <span className="profile-complete__edit">Edit</span>
                </div>

                <FileUpload
                label="Upload CV"
                accept=".pdf,.docx"
                maxSize="10MB"
                onChange={(file) => setFormData({ ...formData, cv: file })}
                />

                <FileUpload
                label="Upload Image"
                accept=".jpg,.jpeg,.png"
                maxSize="10MB"
                onChange={(file) => setFormData({ ...formData, profileImage: file })}
                />

                <FileUpload
                label="Upload Portfolio (Optional: link to online portfolio)"
                accept=".pdf,.jpg,.jpeg,.png"
                maxSize="10MB"
                onChange={(file) => setFormData({ ...formData, portfolio: file })}
                />

                <Input
                label="Portfolio link:"
                value={formData.portfolioLink}
                onChange={(e) =>
                    setFormData({ ...formData, portfolioLink: e.target.value })
                }
                />

                <div className="profile-complete__field-row">
                <Input
                    label="Location"
                    value={formData.location}
                    onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                    }
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

            <p className="profile-complete__login">
                Already Registered? <Link to="/jobseeker/login">Login</Link>
            </p>
            </form>
        </div>
        </div>
    </DashboardLayout>
  );
}
