import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/auth';
import {
  RoleSelection,
  RecruiterSignup,
  RecruiterLogin,
  JobSeekerSignup,
  JobSeekerLogin,
} from './pages/auth';
import { CompanyRegistration, ProfileComplete } from './pages/onboarding';
import { MyApplications } from './pages/dashboard';
import { CompanyReviews } from './pages/reviews/CompanyReviews';
import { Messages } from './pages/messages/Messages';
import { Notifications } from './pages/notifications/Notifications';
import './App.css';

import { AuthProvider } from './context/AuthContext';
import { JobListing } from './pages/jobs/JobListing';
import { JobDetail } from './pages/jobs/JobDetail';
import { JobApplication } from './pages/jobs/JobApplication';
import { RateEmployer } from './pages/reviews/RateEmployer';

// Public Pages
import { LandingPage, About, Terms, Privacy, Contact, Help, UserAgreement, CompanyDetail } from './pages/public';

// Profile Pages
import { Profile, ResumeManager } from './pages/profile';

// Recruiter Pages
import { RecruiterDashboard, PostJob, ManageJobs, Applicants, CompanyProfile } from './pages/recruiter';

// Settings
import { Settings } from './pages/settings';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public/Marketing Pages */}
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/user-agreement" element={<UserAgreement />} />
          <Route path="/company/:companyId" element={<CompanyDetail />} />
          
          {/* Auth Routes */}
          <Route path="/" element={<RoleSelection />} />
          <Route path="/login" element={<Navigate to="/" replace />} />
          
          {/* Recruiter Auth Routes */}
          <Route path="/recruiter/signup" element={<RecruiterSignup />} />
          <Route path="/recruiter/login" element={<RecruiterLogin />} />
          
          {/* Job Seeker Auth Routes */}
          <Route path="/jobseeker/signup" element={<JobSeekerSignup />} />
          <Route path="/jobseeker/login" element={<JobSeekerLogin />} />
          
          {/* Onboarding Routes */}
          <Route path="/company/register" element={<CompanyRegistration />} />
          <Route path="/profile/complete" element={<ProfileComplete />} />
          
          {/* Job Seeker Dashboard Routes */}
          <Route path="/jobs" element={
            <ProtectedRoute allowedRoles={['jobseeker']}>
              <JobListing />
            </ProtectedRoute>
          } />
          <Route path="/jobs/:id" element={
            <ProtectedRoute allowedRoles={['jobseeker']}>
              <JobDetail />
            </ProtectedRoute>
          } />
          <Route path="/jobs/:id/apply" element={
            <ProtectedRoute allowedRoles={['jobseeker']}>
              <JobApplication />
            </ProtectedRoute>
          } />
          <Route path="/applications" element={
            <ProtectedRoute allowedRoles={['jobseeker']}>
              <MyApplications />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute allowedRoles={['jobseeker']}>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/resume" element={
            <ProtectedRoute allowedRoles={['jobseeker']}>
              <ResumeManager />
            </ProtectedRoute>
          } />
          <Route path="/reviews" element={
            <ProtectedRoute allowedRoles={['jobseeker']}>
              <CompanyReviews />
            </ProtectedRoute>
          } />
          <Route path="/rate-employer" element={
            <ProtectedRoute allowedRoles={['jobseeker']}>
              <RateEmployer />
            </ProtectedRoute>
          } />
          <Route path="/messages" element={
            <ProtectedRoute allowedRoles={['jobseeker']}>
              <Messages />
            </ProtectedRoute>
          } />
          <Route path="/notifications" element={
            <ProtectedRoute allowedRoles={['jobseeker']}>
              <Notifications />
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute allowedRoles={['jobseeker']}>
              <Settings />
            </ProtectedRoute>
          } />
          
          {/* Recruiter Dashboard Routes */}
          <Route path="/recruiter/dashboard" element={
            <ProtectedRoute allowedRoles={['company']}>
              <RecruiterDashboard />
            </ProtectedRoute>
          } />
          <Route path="/recruiter/jobs" element={
            <ProtectedRoute allowedRoles={['company']}>
              <ManageJobs />
            </ProtectedRoute>
          } />
          <Route path="/recruiter/jobs/new" element={
            <ProtectedRoute allowedRoles={['company']}>
              <PostJob />
            </ProtectedRoute>
          } />
          <Route path="/recruiter/applicants" element={
            <ProtectedRoute allowedRoles={['company']}>
              <Applicants />
            </ProtectedRoute>
          } />
          <Route path="/recruiter/company" element={
            <ProtectedRoute allowedRoles={['company']}>
              <CompanyProfile />
            </ProtectedRoute>
          } />
          <Route path="/recruiter/messages" element={
            <ProtectedRoute allowedRoles={['company']}>
              <Messages />
            </ProtectedRoute>
          } />
          <Route path="/recruiter/notifications" element={
            <ProtectedRoute allowedRoles={['company']}>
              <Notifications />
            </ProtectedRoute>
          } />
          <Route path="/recruiter/settings" element={
            <ProtectedRoute allowedRoles={['company']}>
              <Settings />
            </ProtectedRoute>
          } />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
