import { useParams, Link } from 'react-router-dom';
import { PublicLayout } from '../../components/layout';
import './CompanyDetail.css';

// Sample company data (in a real app, this would come from an API)
const COMPANIES: Record<string, {
  name: string;
  logo?: string;
  industry: string;
  size: string;
  location: string;
  founded: string;
  website: string;
  about: string;
  benefits: string[];
  openPositions: number;
  rating: number;
  reviews: number;
}> = {
  'shell-petroleum': {
    name: 'Shell Petroleum',
    industry: 'Oil & Gas',
    size: '10,000+ employees',
    location: 'Lagos, Nigeria',
    founded: '1958',
    website: 'www.shell.com.ng',
    about: 'Shell companies have been exploring and producing oil and gas in Nigeria since 1937. We are the largest oil and gas company in the nation, providing over 20% of Nigeria\'s oil production. We are committed to providing energy in a responsible way, helping Nigeria to develop its natural resources for the benefit of its people.',
    benefits: [
      'Competitive salary packages',
      'Health insurance',
      'Pension scheme',
      'Professional development',
      'Remote work options',
      'Annual performance bonus'
    ],
    openPositions: 12,
    rating: 4.5,
    reviews: 234
  },
  'total-energies': {
    name: 'Total Energies',
    industry: 'Oil & Gas',
    size: '5,000-10,000 employees',
    location: 'Port Harcourt, Nigeria',
    founded: '1956',
    website: 'www.totalenergies.ng',
    about: 'TotalEnergies is a global multi-energy company that produces and markets energies: oil and biofuels, natural gas and green gases, renewables and electricity. We are committed to a transition towards a more sustainable energy future.',
    benefits: [
      'Competitive compensation',
      'Health & wellness programs',
      'Career growth opportunities',
      'Work-life balance',
      'International mobility'
    ],
    openPositions: 8,
    rating: 4.3,
    reviews: 189
  },
  'chevron-nigeria': {
    name: 'Chevron Nigeria',
    industry: 'Oil & Gas',
    size: '5,000-10,000 employees',
    location: 'Lagos, Nigeria',
    founded: '1961',
    website: 'www.chevron.com/nigeria',
    about: 'Chevron Nigeria Limited is the largest oil producer in Nigeria. We are committed to conducting our business in a socially and environmentally responsible manner while delivering reliable energy to the world.',
    benefits: [
      'Excellent benefits package',
      'Professional development',
      'Diverse & inclusive culture',
      'Community engagement programs',
      'Safety-first culture'
    ],
    openPositions: 15,
    rating: 4.6,
    reviews: 312
  }
};

// Default company for unknown IDs
const DEFAULT_COMPANY = {
  name: 'Company',
  industry: 'Engineering',
  size: 'Various',
  location: 'Nigeria',
  founded: '-',
  website: '-',
  about: 'Company information not available.',
  benefits: [],
  openPositions: 0,
  rating: 0,
  reviews: 0
};

export function CompanyDetail() {
  const { companyId } = useParams<{ companyId: string }>();
  
  // Get company data or use default
  const company = companyId && COMPANIES[companyId] 
    ? COMPANIES[companyId] 
    : { ...DEFAULT_COMPANY, name: companyId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Company' };

  const initials = company.name.split(' ').map(w => w[0]).join('').slice(0, 2);

  return (
    <PublicLayout>
      <div className="company-detail">
        {/* Hero Section */}
        <section className="company-detail__hero">
          <div className="company-detail__hero-content">
            <div className="company-detail__logo">{initials}</div>
            <div className="company-detail__info">
              <h1>{company.name}</h1>
              <div className="company-detail__meta">
                <span className="company-detail__industry">{company.industry}</span>
                <span className="company-detail__location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {company.location}
                </span>
              </div>
              {company.rating > 0 && (
                <div className="company-detail__rating">
                  <div className="company-detail__stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} viewBox="0 0 24 24" fill={star <= Math.round(company.rating) ? '#f97316' : 'none'} stroke="#f97316" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span>{company.rating.toFixed(1)} ({company.reviews} reviews)</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="company-detail__container">
          <div className="company-detail__main">
            {/* About Section */}
            <section className="company-detail__section">
              <h2>About {company.name}</h2>
              <p>{company.about}</p>
            </section>

            {/* Company Info */}
            <section className="company-detail__section">
              <h2>Company Information</h2>
              <div className="company-detail__info-grid">
                <div className="company-detail__info-item">
                  <span className="label">Industry</span>
                  <span className="value">{company.industry}</span>
                </div>
                <div className="company-detail__info-item">
                  <span className="label">Company Size</span>
                  <span className="value">{company.size}</span>
                </div>
                <div className="company-detail__info-item">
                  <span className="label">Founded</span>
                  <span className="value">{company.founded}</span>
                </div>
                <div className="company-detail__info-item">
                  <span className="label">Website</span>
                  <span className="value">{company.website}</span>
                </div>
              </div>
            </section>

            {/* Benefits */}
            {company.benefits.length > 0 && (
              <section className="company-detail__section">
                <h2>Benefits & Perks</h2>
                <div className="company-detail__benefits">
                  {company.benefits.map((benefit, index) => (
                    <div key={index} className="company-detail__benefit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="company-detail__sidebar">
            <div className="company-detail__sidebar-card">
              <h3>Open Positions</h3>
              <p className="company-detail__positions-count">{company.openPositions} open positions</p>
              <Link to="/jobs" className="company-detail__view-jobs-btn">
                View All Jobs
              </Link>
            </div>

            <div className="company-detail__sidebar-card">
              <h3>Quick Actions</h3>
              <button className="company-detail__action-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
                Save Company
              </button>
              <button className="company-detail__action-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 016 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 01-3.46 0" />
                </svg>
                Set Job Alert
              </button>
            </div>
          </aside>
        </div>
      </div>
    </PublicLayout>
  );
}
