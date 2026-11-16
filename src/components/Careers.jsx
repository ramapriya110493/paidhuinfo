import React, { useState } from 'react';
import './PaidhuCareers.css';
import './PaidhuNewsroom.css';
import { 
  ChevronDown, 
  ChevronRight, 
  Briefcase, 
  MapPin, 
  Clock, 
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
      title: 'Senior Botanical Food Technologist',
      department: 'Clean Food & R&D',
      deptKey: 'rnd',
      brand: 'Floffi Culinary Labs',
      location: 'Pollachi / Bengaluru, India',
      type: 'Full-time • Laboratory & R&D',
      experience: '4–7 Years',
      description: 'Lead botanical formulation, micro-encapsulation of active floral compounds, and shelf-life stability without synthetic preservatives across Floffi’s expanding gourmet spread and petal confiture lines.'
    },
    {
      id: 2,
      title: 'Organic Agricultural Sourcing Manager',
      department: 'Agritech & Sourcing',
      deptKey: 'agri',
      brand: 'Just B Happy Network',
      location: 'Pollachi & Western Ghats Corridor',
      type: 'Full-time • Field & Cooperatives',
      experience: '3–6 Years',
      description: 'Expand Paidhu’s regenerative farmer cluster network. Provide agronomic advisory on zero-pesticide edible flower cultivation, manage buy-back guarantees, and champion fair living wages for grower families.'
    },
    {
      id: 3,
      title: 'Saffron Extraction Quality Chemist',
      department: 'Clean Food & R&D',
      deptKey: 'rnd',
      brand: 'Paidhu Saffron',
      location: 'Pampore Valley, Kashmir',
      type: 'Full-time • Quality Assurance',
      experience: '2–5 Years',
      description: 'Oversee cryogenic supercritical extraction protocols, ensuring ISO 3632 Category I purity, benchmark 285+ crocin ratings, and 100% farm-to-table batch certification for Kashmiri Mongra Saffron.'
    },
    {
      id: 4,
      title: 'Lead Full-Stack Cloud Architect',
      department: 'Digital & Cloud (VIYARA)',
      deptKey: 'tech',
      brand: 'VIYARA Enterprise Tech',
      location: 'Coimbatore / Remote Hybrid',
      type: 'Full-time • Software Engineering',
      experience: '5+ Years',
      description: 'Architect scalable cloud infrastructure, supply chain traceability ledgers, and performant digital commerce engines powering the Paidhu ecosystem of ethical consumer brands.'
    },
    {
      id: 5,
      title: 'Regenerative Supply Chain Associate',
      department: 'Corporate & Operations',
      deptKey: 'ops',
      brand: 'Paidhu Group Corporate',
      location: 'Chennai / Coimbatore',
      type: 'Full-time • Operations',
      experience: '2–4 Years',
      description: 'Coordinate cold-chain distribution, tamper-evident biodegradable packaging sourcing, and nationwide logistics connecting artisanal farm clusters to premier retail and export channels.'
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
                className={`paidhu-cr-filter-btn ${activeFilter === 'rnd' ? 'active' : ''}`}
                onClick={() => setActiveFilter('rnd')}
              >
                Clean Food & R&D
              </button>
              <button 
                className={`paidhu-cr-filter-btn ${activeFilter === 'agri' ? 'active' : ''}`}
                onClick={() => setActiveFilter('agri')}
              >
                Agritech & Sourcing
              </button>
              <button 
                className={`paidhu-cr-filter-btn ${activeFilter === 'tech' ? 'active' : ''}`}
                onClick={() => setActiveFilter('tech')}
              >
                Digital & Cloud (VIYARA)
              </button>
              <button 
                className={`paidhu-cr-filter-btn ${activeFilter === 'ops' ? 'active' : ''}`}
                onClick={() => setActiveFilter('ops')}
              >
                Corporate & Operations
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
                <li><a href="https://paidhuethicalfoods.com" target="_blank" rel="noopener noreferrer">Paidhu Ethical Foods</a></li>
                <li><a href="https://floffi.in" target="_blank" rel="noopener noreferrer">Floffi</a></li>
                <li><a href="https://paidhuethicalfoods.com" target="_blank" rel="noopener noreferrer">Brew Flora</a></li>
                <li><a href="https://paidhuethicalfoods.com" target="_blank" rel="noopener noreferrer">Bloom Cookies</a></li>
                <li><a href="https://paidhusaffron.com" target="_blank" rel="noopener noreferrer">Paidhu Saffron</a></li>
                <li><a href="https://viyara.co.in" target="_blank" rel="noopener noreferrer">Viyara Enterprise Tech</a></li>
              </ul>
            </div>

            {/* Col 2: Community */}
            <div className="paidhu-nr-footer-col">
              <h4 className="paidhu-nr-footer-heading">Community</h4>
              <ul className="paidhu-nr-footer-list">
                <li><a href="#newsroom" onClick={onNavigateNewsroom}>Just B Happy Farmer Network</a></li>
                <li><a href="#careers">Project Malar (Women in Agri)</a></li>
                <li><a href="#newsroom" onClick={onNavigateNewsroom}>Pesticide-Free Flower Cultivation</a></li>
                <li><a href="#newsroom" onClick={onNavigateNewsroom}>Clean Food Education & Recipes</a></li>
                <li><a href="#newsroom" onClick={onNavigateNewsroom}>Regenerative Soil Stewardship</a></li>
              </ul>
            </div>

            {/* Col 3: About */}
            <div className="paidhu-nr-footer-col">
              <h4 className="paidhu-nr-footer-heading">About Us</h4>
              <ul className="paidhu-nr-footer-list">
                <li><a href="#home" onClick={onNavigateHome}>The Paidhu Vision</a></li>
                <li><a href="#home" onClick={onNavigateHome}>Executive Leadership</a></li>
                <li><a href="#home" onClick={onNavigateHome}>Governance & Quality Standards</a></li>
                <li><a href="#newsroom" onClick={onNavigateNewsroom}>2028 Sustainability Charter</a></li>
                <li><a href="#careers">Equal Opportunity Statement</a></li>
              </ul>
            </div>

            {/* Col 4: Newsletter & Inquiries */}
            <div className="paidhu-nr-footer-col">
              <h4 className="paidhu-nr-footer-heading">Stay Connected</h4>
              <p className="paidhu-nr-footer-subtext">
                Subscribe to receive verified Paidhu press releases, botanical breakthroughs, and talent updates.
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
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="paidhu-nr-social-icon" aria-label="X / Twitter">
                  𝕏
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="paidhu-nr-social-icon" aria-label="LinkedIn">
                  in
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="paidhu-nr-social-icon" aria-label="Instagram">
                  📸
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="paidhu-nr-social-icon" aria-label="YouTube">
                  ▶
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
                © 2026 Paidhu – Ethical Foods Pvt. Ltd. All rights reserved.
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
