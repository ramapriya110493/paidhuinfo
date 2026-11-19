import React, { useState } from 'react';
import './PaidhuCareers.css';
import './PaidhuNewsroom.css';
import { 
  ChevronDown, 
  ChevronRight, 
  Briefcase, 
  MapPin, 
  Clock, 
  Award,
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  Sparkles, 
  X, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const Careers = ({ onNavigateHome, onNavigateNewsroom, onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    linkedin: '',
    notes: ''
  });

  // Newsletter state
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmailInput('');
        setSubscribed(false);
      }, 3500);
    }
  };

  const jobListings = [
    {
      id: 1,
      title: 'E-Commerce Executive',
      department: 'E-Commerce & Digital',
      deptKey: 'ecommerce',
      brand: 'Paidhu Group & Floffi D2C',
      location: 'Coimbatore / Chennai / Hybrid',
      type: 'Full-time • E-Commerce & Marketplace Operations',
      experience: 'Min 2 Years Experience',
      description: 'Lead marketplace operations across Amazon, Flipkart, Blinkit/Quick Commerce, and brand D2C stores. Responsible for listing optimization, product cataloging, inventory forecasting, order fulfillment tracking, and campaign performance to scale digital revenue.'
    },
    {
      id: 2,
      title: 'Social Media Executive',
      department: 'Brand Marketing & Social Media',
      deptKey: 'marketing',
      brand: 'Paidhu Creative & Brand Studio',
      location: 'Chennai / Coimbatore / Remote Hybrid',
      type: 'Full-time • Social Media & Content Strategy',
      experience: 'Min 2 Years Experience',
      description: 'Drive Paidhu’s digital brand voice, visual storytelling, and community engagement across Instagram, LinkedIn, YouTube, and digital platforms. Develop monthly content calendars, coordinate photography and video reels, engage followers, and track campaign analytics.'
    },
    {
      id: 3,
      title: 'Business Development Officer',
      department: 'Sales & Business Development',
      deptKey: 'sales',
      brand: 'Paidhu Group Corporate',
      location: 'Chennai / Bengaluru / Coimbatore',
      type: 'Full-time • B2B Sales & Corporate Alliances',
      experience: 'Min 2 Years Experience',
      description: 'Expand Paidhu’s commercial footprint across retail chains, modern trade, corporate gifting, and regional distributor networks. Identify strategic opportunities, pitch premium brand portfolios, negotiate commercial contracts, and hit revenue expansion milestones.'
    }
  ];

  const filteredJobs = activeFilter === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.deptKey === activeFilter);

  const scrollToContent = () => {
    const el = document.getElementById('careers-content');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedJob(null);
      setFormData({ name: '', email: '', phone: '', experience: '', linkedin: '', notes: '' });
    }, 2800);
  };

  return (
    <div className="paidhu-cr-page">
      
      {/* =========================================================================
          SECTION 1: HERO (Artistic Watercolor Gradient matching Tata.com reference)
          ========================================================================= */}
      <section className="paidhu-cr-hero">
        <div className="paidhu-cr-hero-bg" />
        <div className="paidhu-cr-hero-scrim" />
        <div className="paidhu-cr-hero-gold-glow" />

        <div className="paidhu-cr-hero-content">
          <div className="paidhu-cr-hero-textblock">
            <span className="paidhu-cr-hero-kicker">Careers</span>
            <h1 className="paidhu-cr-hero-title">
              We Are An Equal Opportunity Employer
            </h1>

            <div className="paidhu-cr-subtitle-row">
              <div className="paidhu-cr-gold-bar" />
              <p className="paidhu-cr-hero-subtext">
                The Paidhu group is committed to providing equal opportunities in employment and creating an inclusive work environment.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Chevrons */}
        <button 
          className="paidhu-cr-scroll-chevrons"
          onClick={scrollToContent}
          aria-label="Scroll to career openings and statement"
        >
          <ChevronDown className="paidhu-cr-chevron paidhu-cr-ch-1" />
          <ChevronDown className="paidhu-cr-chevron paidhu-cr-ch-2" />
          <ChevronDown className="paidhu-cr-chevron paidhu-cr-ch-3" />
        </button>
      </section>

      {/* =========================================================================
          SECTION 2: OPEN CAREER OPPORTUNITIES
          ========================================================================= */}
      <section id="careers-content" className="paidhu-cr-openings-section">
        <div className="paidhu-cr-openings-container">
          <div className="paidhu-cr-openings-top">
            <span className="paidhu-cr-tag-label">CAREER OPPORTUNITIES</span>
            <h2 className="paidhu-cr-openings-heading">Shape the Future of Ethical Foods & Tech</h2>
            <p className="paidhu-cr-openings-subtext">
              Join our family of innovators, agronomists, and technologists dedicated to building wholesome, transparent, and regenerative food ecosystems.
            </p>

            {/* Filter Tabs */}
            <div className="paidhu-cr-filter-tabs">
              <button 
                className={`paidhu-cr-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Openings ({jobListings.length})
              </button>
              <button 
                className={`paidhu-cr-filter-btn ${activeFilter === 'ecommerce' ? 'active' : ''}`}
                onClick={() => setActiveFilter('ecommerce')}
              >
                E-Commerce & Digital
              </button>
              <button 
                className={`paidhu-cr-filter-btn ${activeFilter === 'marketing' ? 'active' : ''}`}
                onClick={() => setActiveFilter('marketing')}
              >
                Social Media & Marketing
              </button>
              <button 
                className={`paidhu-cr-filter-btn ${activeFilter === 'sales' ? 'active' : ''}`}
                onClick={() => setActiveFilter('sales')}
              >
                Business Development
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="paidhu-cr-jobs-list">
            {filteredJobs.map((job) => (
              <div key={job.id} className="paidhu-cr-job-card">
                <div className="paidhu-cr-job-main">
                  <div className="paidhu-cr-job-meta-row">
                    <span className="paidhu-cr-badge-dept">{job.department}</span>
                    <span className="paidhu-cr-badge-exp">
                      <Award size={13} /> {job.experience}
                    </span>
                    <span className="paidhu-cr-meta-item">
                      <Briefcase size={14} /> {job.brand}
                    </span>
                    <span className="paidhu-cr-meta-item">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="paidhu-cr-meta-item">
                      <Clock size={14} /> {job.type}
                    </span>
                  </div>

                  <h3 className="paidhu-cr-job-title">{job.title}</h3>
                  <p className="paidhu-cr-job-desc">{job.description}</p>
                </div>

                <button 
                  className="paidhu-cr-job-btn"
                  onClick={() => setSelectedJob(job)}
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* =========================================================================
          SECTION 5: CORPORATE FOOTER (Matching Newsroom Luxury Design)
          ========================================================================= */}
      <footer className="paidhu-nr-footer">
        <div className="paidhu-nr-footer-inner">
          <div className="paidhu-nr-footer-grid">
            
            {/* Col 1: Businesses */}
            <div className="paidhu-nr-footer-col">
              <h4 className="paidhu-nr-footer-heading">Businesses</h4>
              <ul className="paidhu-nr-footer-list">
                <li><a href="https://floffi.in" target="_blank" rel="noopener noreferrer">Floffi</a></li>
                <li><a href="https://viyara.co.in" target="_blank" rel="noopener noreferrer">Viyara</a></li>
                <li><a href="https://paidhuethicalfoods.com" target="_blank" rel="noopener noreferrer">Bloom Cookies</a></li>
                <li><a href="https://paidhuethicalfoods.com" target="_blank" rel="noopener noreferrer">The Edible Flower Co.</a></li>
              </ul>
            </div>

            {/* Col 2: Community */}
            <div className="paidhu-nr-footer-col">
              <h4 className="paidhu-nr-footer-heading">Community</h4>
              <ul className="paidhu-nr-footer-list">
                <li><a href="#newsroom" onClick={onNavigateNewsroom}>Just B Happy Farm</a></li>
                <li><a href="#newsroom" onClick={onNavigateNewsroom}>Family Tales</a></li>
              </ul>
            </div>

            {/* Col 3: About */}
            <div className="paidhu-nr-footer-col">
              <h4 className="paidhu-nr-footer-heading">About Us</h4>
              <ul className="paidhu-nr-footer-list">
                <li><a href="#home" onClick={onNavigateHome}>The Paidhu Vision</a></li>
              </ul>
            </div>

            {/* Col 4: Newsletter & Inquiries */}
            <div className="paidhu-nr-footer-col">
              <h4 className="paidhu-nr-footer-heading">Stay Connected</h4>
              <p className="paidhu-nr-footer-subtext">
                Subscribe to receive verified Paidhu press releases, brand updates, and talent announcements.
              </p>

              <form onSubmit={handleSubscribe} className="paidhu-nr-newsletter-form">
                <input 
                  id="paidhu-footer-subscribe-careers"
                  type="email" 
                  placeholder="Enter your corporate email" 
                  className="paidhu-nr-newsletter-input"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                />
                <button type="submit" className="paidhu-nr-newsletter-btn" aria-label="Subscribe">
                  <ChevronRight size={18} />
                </button>
              </form>

              {subscribed && (
                <p className="paidhu-nr-subscribed-msg">
                  ✓ Thank you for subscribing to Paidhu Newsroom dispatches.
                </p>
              )}

              <div className="paidhu-nr-social-row">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="paidhu-nr-social-icon" 
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="paidhu-nr-social-icon" 
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                  </svg>
                </a>
                <a 
                  href="mailto:connect@paidhu.com" 
                  className="paidhu-nr-social-icon" 
                  aria-label="Email Us"
                  title="connect@paidhu.com"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Footer Bottom Bar */}
          <div className="paidhu-nr-footer-bottom">
            <div className="paidhu-nr-footer-brand-wrap">
              <img 
                src="/assets/paidhu_official_logo.png" 
                alt="Paidhu" 
                className="paidhu-nr-footer-logo"
              />
              <span className="paidhu-nr-footer-copyright">
                © 2026 All rights reserved to Paidhu.
              </span>
            </div>

            <div className="paidhu-nr-footer-links">
              <a href="#privacy" onClick={onOpenContact}>Privacy Policy</a>
              <span className="paidhu-nr-footer-sep">•</span>
              <a href="#terms" onClick={onOpenContact}>Terms of Use</a>
              <span className="paidhu-nr-footer-sep">•</span>
              <a href="#contact" onClick={onOpenContact}>Equal Opportunity & POSH</a>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          APPLICATION MODAL
          ========================================================================= */}
      {selectedJob && (
        <div className="paidhu-cr-modal-backdrop" onClick={() => setSelectedJob(null)}>
          <div className="paidhu-cr-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="paidhu-cr-modal-header">
              <div>
                <span className="paidhu-cr-badge-dept">{selectedJob.department}</span>
                <h3 className="paidhu-cr-modal-title" style={{ marginTop: '0.4rem' }}>
                  Apply for {selectedJob.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            <div className="paidhu-cr-modal-body">
              {appliedSuccess ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={54} color="#16a34a" style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem' }}>
                    Application Successfully Submitted
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                    Thank you for applying to Paidhu. Our People & Culture team will review your profile and reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit}>
                  <div className="paidhu-cr-form-group">
                    <label className="paidhu-cr-form-label">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="paidhu-cr-form-input" 
                      placeholder="e.g. Anandhi Rajendran"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="paidhu-cr-form-group">
                      <label className="paidhu-cr-form-label">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        className="paidhu-cr-form-input" 
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="paidhu-cr-form-group">
                      <label className="paidhu-cr-form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        className="paidhu-cr-form-input" 
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="paidhu-cr-form-group">
                      <label className="paidhu-cr-form-label">Years of Experience</label>
                      <input 
                        type="text" 
                        className="paidhu-cr-form-input" 
                        placeholder="e.g. 4 Years"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      />
                    </div>
                    <div className="paidhu-cr-form-group">
                      <label className="paidhu-cr-form-label">LinkedIn / Portfolio URL</label>
                      <input 
                        type="url" 
                        className="paidhu-cr-form-input" 
                        placeholder="https://linkedin.com/in/..."
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="paidhu-cr-form-group">
                    <label className="paidhu-cr-form-label">Cover Note / Why Paidhu?</label>
                    <textarea 
                      rows={3}
                      className="paidhu-cr-form-textarea" 
                      placeholder="Share a brief introduction and what excites you about our ethical food & tech mission..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="paidhu-cr-form-submit">
                    Submit Application for {selectedJob.title}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
