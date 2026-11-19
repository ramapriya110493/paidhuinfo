import React, { useState } from 'react';
import './PaidhuNewsroom.css';
import { 
  Share2, 
  RotateCw, 
  X, 
  ChevronDown, 
  ChevronRight, 
  FileText, 
  Mail, 
  Bell, 
  ExternalLink,
  Check,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

export const Newsroom = ({ onNavigateHome, onOpenContact, onOpenSearch }) => {
  // 1. Interactive Indian Express Modal State
  const [showExpressModal, setShowExpressModal] = useState(false);
  const [modalMode, setModalMode] = useState('clipping'); // 'clipping' | 'text'
  const [scanZoom, setScanZoom] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  // 2. Generic Story Modal State
  const [activeStoryModal, setActiveStoryModal] = useState(null);

  // 3. Trending Tags State
  const [selectedTags, setSelectedTags] = useState(['TheNewIndianExpress', 'EdibleFlowers']);
  const trendingTags = [
    { id: 'TheNewIndianExpress', label: '#TheNewIndianExpress' },
    { id: 'EdibleFlowers', label: '#EdibleFlowers' },
    { id: 'JustBHappy', label: '#JustBHappy' },
    { id: 'RegenerativeFarming', label: '#RegenerativeFarming' },
    { id: 'SaffronPurity', label: '#SaffronPurity' },
    { id: 'PesticideFree', label: '#PesticideFree' },
    { id: 'CleanLabel', label: '#CleanLabel' },
    { id: 'Pollachi', label: '#Pollachi' },
    { id: 'KashmirHarvest', label: '#KashmirHarvest' },
    { id: 'FloralGastronomy', label: '#FloralGastronomy' },
    { id: 'Sustainability2028', label: '#Sustainability2028' }
  ];

  const toggleTag = (id) => {
    setSelectedTags(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  // 4. "Did You Know" Facts Box Cycler
  const [factIndex, setFactIndex] = useState(0);
  const [isFactRotating, setIsFactRotating] = useState(false);
  const factsList = [
    {
      title: 'Did you know',
      quote: "As featured in The New Indian Express, Paidhu's 'Just B Happy' initiative in Pollachi partners with regional farmers to cultivate safe, pesticide-free edible flowers with 100% farm-to-fork traceability.",
      source: 'The New Indian Express • National Press Spotlight'
    },
    {
      title: 'Did you know',
      quote: 'Grade-A Mongra Saffron consists exclusively of the deep-crimson stigmas, requiring over 150,000 hand-pollinated crocus flowers for a single kilogram.',
      source: 'Royal Kashmiri Saffron Laboratory'
    },
    {
      title: 'Did you know',
      quote: 'Paidhu was founded on the principle that centralized ethical corporate governance enables artisanal culinary brands to scale globally without ever diluting natural ingredient purity.',
      source: 'Paidhu Corporate Governance Charter'
    },
    {
      title: 'Did you know',
      quote: 'All floral foods under Floffi and Bloom Cookies utilize only 100% certified pesticide-free petals, cold-crystallized to retain active phytonutrients and natural pigments.',
      source: 'Clean Botanical Food Science'
    }
  ];

  const cycleFact = () => {
    setIsFactRotating(true);
    setTimeout(() => {
      setFactIndex(prev => (prev + 1) % factsList.length);
      setIsFactRotating(false);
    }, 200);
  };

  // 5. Share Handler
  const handleShare = (e, title) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title} - ${window.location.href}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // 6. Newsletter Subscription
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

  const scrollToGrid = () => {
    const el = document.getElementById('paidhu-press-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="paidhu-nr-page">
      {/* Toast Notification */}
      {copiedLink && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          backgroundColor: '#111114',
          color: '#f7e7b4',
          border: '1px solid #d4af37',
          padding: '12px 20px',
          borderRadius: '6px',
          fontSize: '0.88rem',
          fontWeight: 600,
          boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Check size={16} /> Link copied to clipboard!
        </div>
      )}

      {/* =========================================================================
          SECTION 1: HERO BANNER (Image 3)
          ========================================================================= */}
      <section className="paidhu-nr-hero">
        <div className="paidhu-nr-hero-bg" />
        <div className="paidhu-nr-hero-scrim" />

        <div className="paidhu-nr-hero-content">
          <div className="paidhu-nr-hero-textblock">
            <span className="paidhu-nr-badge">Newsroom</span>
            <h1 className="paidhu-nr-hero-title">News and Features</h1>

            <div className="paidhu-nr-subtitle-row">
              <div className="paidhu-nr-gold-bar" />
              <p className="paidhu-nr-hero-subtext">
                Get the latest news and feature stories on our businesses, community initiatives, heritage and people. Scroll to read.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Chevrons Indicator (Click to scroll down) */}
        <button 
          className="paidhu-nr-scroll-chevrons" 
          onClick={scrollToGrid}
          aria-label="Scroll to editorial news stories"
        >
          <ChevronDown className="paidhu-nr-chevron paidhu-nr-ch-1" />
          <ChevronDown className="paidhu-nr-chevron paidhu-nr-ch-2" />
          <ChevronDown className="paidhu-nr-chevron paidhu-nr-ch-3" />
        </button>
      </section>

      {/* =========================================================================
          SECTION 2: POPULAR FILTER & 3-COLUMN EDITORIAL PRESS GRID (Images 4 & 5)
          ========================================================================= */}
      <section id="paidhu-press-grid" className="paidhu-nr-grid-section">
        {/* Filter Pill: Popular ⌵ */}
        <div className="paidhu-nr-filter-bar">
          <button className="paidhu-nr-filter-pill" onClick={scrollToGrid}>
            <span>Popular</span>
            <ChevronDown size={16} />
          </button>
        </div>

        {/* 3-Column Editorial Grid matching Tata.com */}
        <div className="paidhu-nr-card-grid">
          
          {/* ----------------- ROW 1: CARD 1 (Image Card - Authentic Press) ----------------- */}
          <div 
            className="paidhu-nr-card-image"
            style={{ backgroundImage: `url('/assets/indian_express_paidhu_feature.jpg')` }}
            onClick={() => setShowExpressModal(true)}
            role="button"
            tabIndex={0}
          >
            <div className="paidhu-nr-card-img-scrim" />
            <span className="paidhu-nr-card-img-tag">NATIONAL PRESS SPOTLIGHT</span>
            <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto' }}>
              <h3 style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.25,
                margin: '0.75rem 0 0.5rem 0'
              }}>
                The New Indian Express Features Paidhu: "Floral Food Revolution"
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: '#f0f0f0',
                lineHeight: 1.45,
                margin: 0
              }}>
                Pollachi-based startup Paidhu converts traditional floral wisdom into healthy everyday foods. Click to read full clipping & recipes →
              </p>
            </div>
          </div>

          {/* ----------------- ROW 1: CARD 2 (White Card) ----------------- */}
          <div 
            className="paidhu-nr-card-white"
            onClick={() => setActiveStoryModal({
              kicker: 'PAIDHU SAFFRON',
              title: 'Kashmiri Saffron Bio-Extraction Achieves Benchmark 285+ Crocin Rating',
              date: '08 Nov 2026',
              content: `PAMPORE VALLEY — The Paidhu Botanical Research Institute announced today that its proprietary supercritical cold-stabilization process has achieved an unprecedented Grade-A Mongra crocin reading of 285+, verified by independent European botanical testing laboratories.\n\nBy eliminating all heat degradation and chemical solvents, Paidhu Saffron safeguards the delicate volatile aroma compounds (safranal) and natural crimson carotenoids. The breakthrough enables direct export compliance across European, GCC, and North American luxury epicurean channels.`
            })}
          >
            <div>
              <span className="paidhu-nr-card-kicker">PAIDHU SAFFRON</span>
              <h3 className="paidhu-nr-card-title">
                Kashmiri Saffron Bio-Extraction Achieves Benchmark 285+ Crocin Rating
              </h3>
              <div className="paidhu-nr-card-quote-box">
                <div className="paidhu-nr-card-gold-line" />
                <p className="paidhu-nr-card-desc">
                  Supercritical cold-temperature molecular isolation delivers 100% active botanical potency certified for international high-end culinary and therapeutic wellness.
                </p>
              </div>
            </div>

            <div className="paidhu-nr-card-footer">
              <span className="paidhu-nr-card-date">08 Nov 2026</span>
              <button 
                className="paidhu-nr-share-btn" 
                onClick={(e) => handleShare(e, 'Kashmiri Saffron Bio-Extraction Achieves Benchmark 285+ Crocin Rating')}
                title="Share this release"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* ----------------- ROW 1: CARD 3 (White Card) ----------------- */}
          <div 
            className="paidhu-nr-card-white"
            onClick={() => setActiveStoryModal({
              kicker: 'SUSTAINABILITY CHARTER',
              title: 'Paidhu Commits to 100% Regenerative Sourcing & Carbon-Negative Packaging by 2028',
              date: '02 Nov 2026',
              content: `MUMBAI / BENGALURU — Setting a new corporate benchmark for multinational ethical food conglomerates, Paidhu unveiled its 2028 Sustainability Charter.\n\nThe multi-year roadmap encompasses guaranteed above-market living wages for rural farming partners, comprehensive topsoil remineralization, and the total replacement of fossil-based plastics across all sub-brand packaging with seaweed and agricultural-byproduct bio-resins.`
            })}
          >
            <div>
              <span className="paidhu-nr-card-kicker">SUSTAINABILITY CHARTER</span>
              <h3 className="paidhu-nr-card-title">
                Paidhu Commits to 100% Regenerative Sourcing & Carbon-Negative Packaging by 2028
              </h3>
              <div className="paidhu-nr-card-quote-box">
                <div className="paidhu-nr-card-gold-line" />
                <p className="paidhu-nr-card-desc">
                  Eliminating synthetic fertilizers across grower networks while transitioning all brand packaging to certified home-compostable bio-resins.
                </p>
              </div>
            </div>

            <div className="paidhu-nr-card-footer">
              <span className="paidhu-nr-card-date">02 Nov 2026</span>
              <button 
                className="paidhu-nr-share-btn" 
                onClick={(e) => handleShare(e, 'Paidhu Commits to 100% Regenerative Sourcing & Carbon-Negative Packaging by 2028')}
                title="Share this release"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* ----------------- ROW 2: CARD 4 (White Card) ----------------- */}
          <div 
            className="paidhu-nr-card-white"
            onClick={() => setActiveStoryModal({
              kicker: 'FARMER EMPOWERMENT',
              title: 'Paidhu Expands "Just B Happy" Pesticide-Free Farmer Network in Pollachi',
              date: '28 Oct 2026',
              content: `POLLACHI — Building upon the recognition highlighted by The New Indian Express, Paidhu has onboarded an additional 120 certified smallholder farmers into its 'Just B Happy' initiative.\n\nThe program provides agronomist advisory, organic bio-fertilizer subsidies, and buy-back guarantees for culinary-grade Moringa, Hibiscus, Chinese Ixora, and Neem flowers.`
            })}
          >
            <div>
              <span className="paidhu-nr-card-kicker">FARMER EMPOWERMENT</span>
              <h3 className="paidhu-nr-card-title">
                Paidhu Expands "Just B Happy" Pesticide-Free Farmer Network in Pollachi
              </h3>
              <div className="paidhu-nr-card-quote-box">
                <div className="paidhu-nr-card-gold-line" />
                <p className="paidhu-nr-card-desc">
                  Partnering with regional agricultural stewards to cultivate safe, pesticide-free edible flowers with complete farm-to-table traceability.
                </p>
              </div>
            </div>

            <div className="paidhu-nr-card-footer">
              <span className="paidhu-nr-card-date">28 Oct 2026</span>
              <button 
                className="paidhu-nr-share-btn" 
                onClick={(e) => handleShare(e, 'Paidhu Expands "Just B Happy" Farmer Network')}
                title="Share this release"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* ----------------- ROW 2: CARD 5 (Image Card) ----------------- */}
          <div 
            className="paidhu-nr-card-image"
            style={{ backgroundImage: `url('/assets/paidhu_saffron_harvest_field.jpg')` }}
            onClick={() => setActiveStoryModal({
              kicker: 'BOTANICAL SCIENCE',
              title: 'Pure Kashmiri Mongra Saffron: Direct Valley Harvest & Cryogenic Seals',
              date: '20 Oct 2026',
              content: `PAMPORE VALLEY — Handpicked before dawn at peak autumn bloom, Paidhu Saffron represents the purest single-origin Mongra stigmas in the world.\n\nEvery batch is vacuum-sealed in cryogenic glass jars with batch-specific QR codes verifying international ISO 3632 Category I purity standards.`
            })}
            role="button"
            tabIndex={0}
          >
            <div className="paidhu-nr-card-img-scrim" />
            <span className="paidhu-nr-card-img-tag">ROYAL BOTANICALS</span>
            <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto' }}>
              <h3 style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.25,
                margin: '0.75rem 0 0.5rem 0'
              }}>
                Pure Kashmiri Mongra Saffron: Direct Valley Harvest & Cryogenic Seals
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: '#f0f0f0',
                lineHeight: 1.45,
                margin: 0
              }}>
                Certified Grade-A purity with tamper-evident cryogenic glass seals from Pampore generational grower cooperatives.
              </p>
            </div>
          </div>

          {/* ----------------- ROW 2: CARD 6 (White Card) ----------------- */}
          <div 
            className="paidhu-nr-card-white"
            onClick={() => setActiveStoryModal({
              kicker: 'CORPORATE GOVERNANCE',
              title: 'Paidhu Group Closes FY26 Q3 Enterprise Audit With 100% Farm Traceability',
              date: '24 Oct 2026',
              content: `NEW DELHI — Paidhu – Ethical Foods Pvt. Ltd. published its quarterly corporate audit, confirming zero synthetic chemical residues across its five consumer brands: Bloom Cookies, Floffi, Brew Flora, Medley Teas, and Paidhu Saffron.\n\nThe audit validates Paidhu's centralized testing and direct farmer-compensation framework.`
            })}
          >
            <div>
              <span className="paidhu-nr-card-kicker">CORPORATE GOVERNANCE</span>
              <h3 className="paidhu-nr-card-title">
                Paidhu Group Closes FY26 Q3 Enterprise Audit With 100% Farm Traceability
              </h3>
              <div className="paidhu-nr-card-quote-box">
                <div className="paidhu-nr-card-gold-line" />
                <p className="paidhu-nr-card-desc">
                  Consolidating ethical supply chains, cold-chain logistics, and botanical lab testing across five independent ventures under unified corporate oversight.
                </p>
              </div>
            </div>

            <div className="paidhu-nr-card-footer">
              <span className="paidhu-nr-card-date">24 Oct 2026</span>
              <button 
                className="paidhu-nr-share-btn" 
                onClick={(e) => handleShare(e, 'Paidhu Group Closes FY26 Q3 Enterprise Audit')}
                title="Share this release"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: #TRENDING TAGS & BLUE ACTION BAR (Image 6)
          ========================================================================= */}
      <section className="paidhu-nr-trending-section">
        <div className="paidhu-nr-trending-container">
          <h2 className="paidhu-nr-trending-heading">#Trending</h2>

          <div className="paidhu-nr-tags-cloud">
            {trendingTags.map((tag) => {
              const isActive = selectedTags.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  className={`paidhu-nr-tag-pill ${isActive ? 'active' : ''}`}
                  onClick={() => toggleTag(tag.id)}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>

          <div className="paidhu-nr-tag-actions">
            <button className="paidhu-nr-btn-apply" onClick={scrollToGrid}>
              Apply
            </button>
            <button className="paidhu-nr-link-clear" onClick={() => setSelectedTags([])}>
              Clear
            </button>
          </div>
        </div>

        {/* Full-Width Blue Utility Bar */}
        <div className="paidhu-nr-utility-bar">
          <div className="paidhu-nr-utility-inner">
            <div 
              className="paidhu-nr-utility-item" 
              onClick={() => setShowExpressModal(true)}
            >
              <div className="paidhu-nr-utility-icon-box">
                <FileText size={22} />
              </div>
              <span className="paidhu-nr-utility-label">Media Resources</span>
            </div>

            <div 
              className="paidhu-nr-utility-item" 
              onClick={onOpenContact}
            >
              <div className="paidhu-nr-utility-icon-box">
                <Mail size={22} />
              </div>
              <span className="paidhu-nr-utility-label">Contact Us</span>
            </div>

            <div 
              className="paidhu-nr-utility-item" 
              onClick={() => {
                const el = document.getElementById('paidhu-footer-subscribe');
                if (el) el.focus();
              }}
            >
              <div className="paidhu-nr-utility-icon-box">
                <Bell size={22} />
              </div>
              <span className="paidhu-nr-utility-label">Subscribe</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: SPOTLIGHT STORY & DID YOU KNOW FACTS BOX (Image 7)
          ========================================================================= */}
      <section className="paidhu-nr-spotlight-section">
        <div className="paidhu-nr-spotlight-grid">
          
          {/* Left: Big Visual Feature */}
          <div className="paidhu-nr-big-feature">
            {/* Clean visual showcase without text overlay */}
          </div>

          {/* Right Column Stack: Facts Box + Clean Food Innovation */}
          <div className="paidhu-nr-facts-stack">
            
            {/* Tata-style Blue Facts Box with refresh button */}
            <div className="paidhu-nr-card-factsbox">
              <div>
                <span className="paidhu-nr-factsbox-kicker">FACTS & SCIENCE</span>
                <h3 className="paidhu-nr-factsbox-heading">
                  {factsList[factIndex].title}
                </h3>

                <div className="paidhu-nr-factsbox-body">
                  <div className="paidhu-nr-factsbox-goldbar" />
                  <p className="paidhu-nr-factsbox-quote">
                    {factsList[factIndex].quote}
                  </p>
                </div>
              </div>

              <div className="paidhu-nr-factsbox-footer">
                <span className="paidhu-nr-factsbox-source">
                  {factsList[factIndex].source}
                </span>
                <button 
                  className={`paidhu-nr-refresh-btn ${isFactRotating ? 'rotating' : ''}`}
                  onClick={cycleFact}
                  title="Show another fact"
                  aria-label="Cycle next fact"
                >
                  <RotateCw size={18} />
                </button>
              </div>
            </div>

            {/* Innovation White Card */}
            <div 
              className="paidhu-nr-card-white"
              style={{ minHeight: 'auto', flex: 1 }}
              onClick={() => setActiveStoryModal({
                kicker: 'CLEAN FOOD LABS',
                title: 'Floffi Launches Cold-Crystallized Floral Confitures in European Markets',
                date: '06 Nov 2026',
                content: `PARIS / LONDON — Floffi, Paidhu's artisanal culinary gastronomy arm, has introduced its handpicked Damask Rose and Hibiscus Petal preserves to premier gourmet patisseries across the UK and France.\n\nRetaining whole edible petals through low-temperature vacuum crystallization, each jar delivers intense natural floral aromas without synthetic colors or high-fructose corn syrups.`
              })}
            >
              <div>
                <span className="paidhu-nr-card-kicker">CLEAN FOOD LABS</span>
                <h3 className="paidhu-nr-card-title">
                  Floffi Launches Cold-Crystallized Floral Confitures in European Markets
                </h3>
                <div className="paidhu-nr-card-quote-box">
                  <div className="paidhu-nr-card-gold-line" />
                  <p className="paidhu-nr-card-desc">
                    Micro-infused botanical confitures and cold-crystallized floral spreads launch across Paris and London epicurean channels.
                  </p>
                </div>
              </div>

              <div className="paidhu-nr-card-footer">
                <span className="paidhu-nr-card-date">06 Nov 2026</span>
                <button 
                  className="paidhu-nr-share-btn" 
                  onClick={(e) => handleShare(e, 'Floffi Launches Cold-Crystallized Floral Confitures')}
                  title="Share this release"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>



      {/* =========================================================================
          SECTION 6: CORPORATE BLUE FOOTER (Image 9)
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
                <li><a href="#newsroom" onClick={() => setShowExpressModal(true)}>Just B Happy Farm</a></li>
                <li><a href="#newsroom">Family Tales</a></li>
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
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '1.25rem', lineHeight: 1.45 }}>
                Subscribe to receive verified Paidhu press releases, brand updates, and corporate dispatches.
              </p>

              <form onSubmit={handleSubscribe} className="paidhu-nr-newsletter-form">
                <input 
                  id="paidhu-footer-subscribe"
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
                <p style={{ color: '#d4af37', fontSize: '0.8rem', marginTop: '0.75rem', fontWeight: 600 }}>
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
              <a href="#contact" onClick={onOpenContact}>Media Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          INTERACTIVE MODAL: THE NEW INDIAN EXPRESS COVERAGE ("FLORAL FOOD REVOLUTION")
          ========================================================================= */}
      {showExpressModal && (
        <div className="paidhu-nr-modal-backdrop" onClick={() => setShowExpressModal(false)}>
          <div className="paidhu-nr-modal-window" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header Bar */}
            <div className="paidhu-nr-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #f7ba5a 0%, #d4af37 100%)',
                  color: '#0a0a0a',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '3px',
                  textTransform: 'uppercase'
                }}>
                  THE NEW INDIAN EXPRESS
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#1a1a1a' }}>
                  Floral Food Revolution • National Press Feature
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                {/* View Mode Toggle */}
                <div style={{
                  display: 'flex',
                  backgroundColor: '#e8e8ed',
                  padding: '3px',
                  borderRadius: '6px'
                }}>
                  <button
                    onClick={() => setModalMode('clipping')}
                    style={{
                      padding: '4px 12px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: modalMode === 'clipping' ? '#ffffff' : 'transparent',
                      color: modalMode === 'clipping' ? '#b8860b' : '#666666',
                      boxShadow: modalMode === 'clipping' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                    }}
                  >
                    Newspaper Clipping
                  </button>
                  <button
                    onClick={() => setModalMode('text')}
                    style={{
                      padding: '4px 12px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: modalMode === 'text' ? '#ffffff' : 'transparent',
                      color: modalMode === 'text' ? '#b8860b' : '#666666',
                      boxShadow: modalMode === 'text' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                    }}
                  >
                    Full Text & Recipes
                  </button>
                </div>

                <button 
                  onClick={() => setShowExpressModal(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#666666',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px'
                  }}
                  aria-label="Close modal"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="paidhu-nr-modal-body">
              {modalMode === 'clipping' ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Zoom Controls */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '1rem',
                    backgroundColor: '#ffffff',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    border: '1px solid #dcdce0',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                  }}>
                    <button 
                      onClick={() => setScanZoom(prev => Math.max(0.6, prev - 0.2))}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                      title="Zoom Out"
                    >
                      <ZoomOut size={18} />
                    </button>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, minWidth: '45px', textAlign: 'center' }}>
                      {Math.round(scanZoom * 100)}%
                    </span>
                    <button 
                      onClick={() => setScanZoom(prev => Math.min(2.5, prev + 0.2))}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                      title="Zoom In"
                    >
                      <ZoomIn size={18} />
                    </button>
                    <button 
                      onClick={() => setScanZoom(1)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', color: '#b8860b', fontWeight: 600, marginLeft: '8px' }}
                    >
                      Reset
                    </button>
                  </div>

                  {/* Scanned Image */}
                  <div style={{ overflow: 'auto', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <img 
                      src="/assets/indian_express_paidhu_feature.jpg" 
                      alt="The New Indian Express - Floral Food Revolution - Paidhu"
                      style={{
                        transform: `scale(${scanZoom})`,
                        transformOrigin: 'top center',
                        transition: 'transform 0.2s ease',
                        maxWidth: scanZoom <= 1 ? '100%' : 'none',
                        height: 'auto',
                        borderRadius: '4px',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                      }}
                    />
                  </div>
                </div>
              ) : (
                /* Full Editorial Text Mode */
                <article style={{ maxWidth: '820px', margin: '0 auto', color: '#2b2b2b', lineHeight: 1.7 }}>
                  <div style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '0.8rem', color: '#888888', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                      The New Indian Express (Chennai City Express / Entrée) • Wednesday, 10.06.2026 • Page 3
                    </p>
                    <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#b91c1c', margin: '0.75rem 0 0.5rem 0' }}>
                      FLORAL FOOD REVOLUTION
                    </h1>
                    <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1a1a1a', margin: 0 }}>
                      Pollachi-based startup Paidhu is positioning products made of flowers as both gourmet and rooted in tradition
                    </p>
                    <p style={{ fontSize: '0.85rem', color: '#666666', marginTop: '0.4rem' }}>
                      Reported by <strong>Rakshitha Priya G</strong>
                    </p>
                  </div>

                  <div style={{ fontSize: '0.96rem', spaceY: '1.25rem' }}>
                    <p style={{ marginBottom: '1.2rem' }}>
                      Many of us might remember plucking <em>vetchi poo / idli poo</em> (Chinese ixora) as children to taste its sweet nectar from its stems. Many others may recollect the taste of <em>murungai poo</em> (Moringa flower) kootu that Tamil grandmothers would lovingly prepare. For those who grew up in a Telugu or Kannada household, the memory of summer is felt in Ugadi pachadi's bitter neem flower, and the season transitions into the sweetness of rose gulkand-infused desserts. Yet somewhere along the way, with rapid urbanisation and fast food habits, edible flowers seem to be slowly disappearing from everyday diets.
                    </p>

                    <p style={{ marginBottom: '1.2rem' }}>
                      To aid in course correction, a Pollachi-based brand is hoping to transform the way people experience floral-based foods. Founded by <strong>Ragapriya Karunakaran</strong>, Paidhu started their operations selling products such as petal jams and cookies, namely <strong>Hibiscus Petal Jam, Neem Flower Jam, Golden Shower Flower Jam, White Lotus Cookies, Aavaram Poo Cookies</strong>, and saffron-based offerings. The idea is simple: reintroduce the nutritional and culinary potential of flowers through formats that fit modern lifestyles.
                    </p>

                    <blockquote style={{
                      borderLeft: '4px solid #b91c1c',
                      backgroundColor: '#fef2f2',
                      padding: '1rem 1.25rem',
                      borderRadius: '0 4px 4px 0',
                      margin: '1.5rem 0',
                      fontStyle: 'italic',
                      color: '#991b1b'
                    }}>
                      "Flowers have always been part of our food culture, but people don't realise it. We consume banana flower, moringa flower, cauliflower, and broccoli without even thinking of them as flowers... We want to take that knowledge forward to the next generation through a modern-day consumption method."
                      <br />
                      <strong style={{ fontStyle: 'normal', color: '#1a1a1a', display: 'block', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                        — Ragapriya Karunakaran, Founder & CEO of Paidhu
                      </strong>
                    </blockquote>

                    <p style={{ marginBottom: '1.2rem' }}>
                      The name <strong>Paidhu</strong> — which means nature in Tamil — reflects that vision. Ragapriya spent over a year researching edible flowers before launching products. During this period, though focusing on Indian varieties, she worked alongside food technologists, studied international edible flower markets, and compiled a database of over 100 edible flowers from around the world.
                    </p>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a1a', marginTop: '2rem', marginBottom: '0.75rem' }}>
                      A Call for Action: The "Just B Happy" Initiative
                    </h3>
                    <p style={{ marginBottom: '1.2rem' }}>
                      To encourage safe edible flower cultivation, Paidhu has launched <strong>'Just B Happy'</strong>, a network that educates cultivators on growing flowers specifically for consumption. Farmers can dedicate a small portion of their land to edible flower cultivation, receive guidance from agricultural consultants, and sell their produce directly to the brand.
                    </p>

                    <div style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      padding: '1.5rem',
                      marginTop: '2rem'
                    }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#b8860b', marginBottom: '1rem' }}>
                        Featured Floral Recipes from The New Indian Express:
                      </h4>
                      <ul style={{ paddingLeft: '1.25rem', spaceY: '0.5rem', fontSize: '0.9rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Tanner's Petal Jam Popsicles:</strong> Paidhu Tanner's Petal Jam stirred with water and sweetener, frozen into refreshing probiotic floral popsicles.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Moringa Flower Sprouts Ball:</strong> Fresh drumstick flowers combined with sprouted beans, garam masala, cumin, rolled in breadcrumbs and deep fried.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Hibiscus Flower Rasam:</strong> Fresh hibiscus petals boiled with tamarind water, tomatoes, garlic, and rasam powder, topped with fresh coriander.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Mango Flower Grilled Chicken:</strong> Tender chicken breast marinated in fresh mango flowers, lemon juice, grated green mango, and butter.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Jasmine Prawns:</strong> Succulent prawns tossed with fresh aromatic jasmine flowers, soy sauce, and spring onions.</li>
                      </ul>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          GENERIC STORY DETAIL MODAL
          ========================================================================= */}
      {activeStoryModal && (
        <div className="paidhu-nr-modal-backdrop" onClick={() => setActiveStoryModal(null)}>
          <div className="paidhu-nr-modal-window" style={{ maxWidth: '720px' }} onClick={(e) => e.stopPropagation()}>
            <div className="paidhu-nr-modal-header">
              <span className="paidhu-nr-card-kicker" style={{ margin: 0 }}>
                {activeStoryModal.kicker}
              </span>
              <button 
                onClick={() => setActiveStoryModal(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            <div className="paidhu-nr-modal-body">
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem' }}>
                {activeStoryModal.title}
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#888888', marginBottom: '1.5rem' }}>
                {activeStoryModal.date} • Paidhu Corporate Press Dispatch
              </p>
              <div style={{ whiteSpace: 'pre-line', fontSize: '0.95rem', lineHeight: 1.7, color: '#333333' }}>
                {activeStoryModal.content}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
