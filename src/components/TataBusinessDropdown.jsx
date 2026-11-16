import React from 'react';
import './TataBusinessDropdown.css';

export const TataBusinessDropdown = ({ mode = 'business', onClose, onNavigateSection }) => {
  // 1. Business mode data (with categories as requested)
  const businesses = [
    {
      name: 'Paidhu Ethical Foods',
      category: 'Ethical Foods & Natural Agriculture',
      domain: 'paidhuethicalfoods.com',
      url: 'https://paidhuethicalfoods.com'
    },
    {
      name: 'Floffi',
      category: 'Floral Gastronomy & Gourmet Spreads',
      domain: 'floffi.in',
      url: 'https://floffi.in'
    },
    {
      name: 'Viyara',
      category: 'Enterprise Technology & Software',
      domain: 'viyara.co.in',
      url: 'https://viyara.co.in'
    }
  ];

  // 2. Brands mode data (for "Our Brands" dropdown)
  const brands = [
    {
      name: 'Paidhu Saffron',
      category: 'Grade-A Kashmiri Mongra Saffron',
      url: 'https://paidhusaffron.com'
    },
    {
      name: 'Bloom Cookies',
      category: 'Artisanal Edible Flower Confections',
      url: 'https://paidhuethicalfoods.com'
    },
    {
      name: 'Floffi',
      category: 'Handcrafted Floral Jams & Spreads',
      url: 'https://floffi.in'
    },
    {
      name: 'Brew Flora',
      category: 'Whole-Blossom Herbal Infusions',
      url: 'https://paidhuethicalfoods.com'
    },
    {
      name: 'Medley Teas',
      category: 'Single-Estate Orthodox Teas',
      url: 'https://paidhuethicalfoods.com'
    },
    {
      name: 'Viyara Tech',
      category: 'Enterprise Cloud & SaaS Engines',
      url: 'https://viyara.co.in'
    }
  ];

  // 3. About Us mode data (Tata.com Image 2 layout - NO Investors section)
  const aboutColumns = [
    {
      items: [
        { label: 'Paidhu Corporate', target: 'home' },
        { label: 'Values and Purpose', target: 'newsroom' },
        { label: 'Paidhu Code of Conduct', target: 'newsroom' },
      ]
    },
    {
      items: [
        { label: 'Heritage', target: 'home' },
        { label: 'Leadership', target: 'home' },
        { label: 'Partnerships & Community', target: 'ecosystem' },
      ]
    },
    {
      items: [
        { label: 'Sustainability', target: 'newsroom' },
        { label: 'Innovation', target: 'ecosystem' },
        { label: 'Research & Publications', target: 'newsroom' },
      ]
    }
  ];

  return (
    <div 
      className="tata-business-dropdown"
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="tata-dropdown-container">
        {mode === 'about' ? (
          /* =========================================================================
             ABOUT US MODE (Image 2 Tata.com Reference - NO INVESTORS SECTION)
             ========================================================================= */
          <div className="tata-about-wrapper">
            <h3 className="tata-about-main-title">The Paidhu group</h3>

            <div className="tata-compact-divider" />

            <h4 className="tata-about-subheading">About the Paidhu Group</h4>

            {/* 3 Clean Editorial Columns strictly matching Tata.com reference (No Investors section) */}
            <div className="tata-about-grid">
              {aboutColumns.map((col, cIdx) => (
                <div key={cIdx} className="tata-about-col">
                  {col.items.map((item, iIdx) => (
                    <a
                      key={iIdx}
                      href={`#${item.target}`}
                      className="tata-about-link"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateSection(item.target);
                        onClose();
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : mode === 'news' ? (
          /* =========================================================================
             NEWSROOM MODE (With The Indian Express Coverage Feature)
             ========================================================================= */
          <div className="tata-about-wrapper">
            <div className="tata-compact-overview">
              <a 
                href="#newsroom" 
                className="tata-compact-heading"
                onClick={(e) => { 
                  e.preventDefault(); 
                  onNavigateSection('newsroom');
                  onClose();
                }}
              >
                <span>Paidhu Newsroom</span>
                <span className="tata-heading-arrow">→</span>
              </a>
            </div>

            <div className="tata-compact-divider" />

            <h4 className="tata-about-subheading">Media Coverage & Press Dispatches</h4>

            <div className="tata-about-grid">
              {/* Column 1: Media Features */}
              <div className="tata-about-col">
                <a
                  href="#newsroom"
                  className="tata-about-link tata-featured-media-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('newsroom');
                    onClose();
                  }}
                >
                  <span className="tata-press-tag">FEATURED IN</span>
                  <span className="tata-press-title">The Indian Express</span>
                  <span className="tata-press-sub">"From Flowers to Food: Reviving Floral Gastronomy"</span>
                </a>
                <a
                  href="#newsroom"
                  className="tata-about-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('newsroom');
                    onClose();
                  }}
                >
                  In the News (Featured Press)
                </a>
              </div>

              {/* Column 2: Updates & Short Stories */}
              <div className="tata-about-col">
                <a
                  href="#newsroom"
                  className="tata-about-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('newsroom');
                    onClose();
                  }}
                >
                  Company Updates & Milestones
                </a>
                <a
                  href="#newsroom"
                  className="tata-about-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('newsroom');
                    onClose();
                  }}
                >
                  Did You Know? Facts & Science
                </a>
                <a
                  href="#newsroom"
                  className="tata-about-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('newsroom');
                    onClose();
                  }}
                >
                  Paidhu Shorts (Video Stories)
                </a>
              </div>

              {/* Column 3: Ecosystem & Inquiries */}
              <div className="tata-about-col">
                <a
                  href="#ecosystem"
                  className="tata-about-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('ecosystem');
                    onClose();
                  }}
                >
                  Across the Brand Ecosystem
                </a>
                <a
                  href="#newsroom"
                  className="tata-about-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('newsroom');
                    onClose();
                  }}
                >
                  Farmer Network: "Just B Happy"
                </a>
                <a
                  href="#contact"
                  className="tata-about-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('contact');
                    onClose();
                  }}
                >
                  Media & Press Inquiries →
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================================================
             BUSINESS & BRANDS MODES
             ========================================================================= */
          <>
            {/* Section 1: Top Overview / Portfolio Link */}
            <div className="tata-compact-overview">
              <a 
                href={mode === 'brands' ? "#ecosystem" : "#newsroom"} 
                className="tata-compact-heading"
                onClick={(e) => { 
                  e.preventDefault(); 
                  onNavigateSection(mode === 'brands' ? 'ecosystem' : 'newsroom');
                  onClose();
                }}
              >
                <span>{mode === 'brands' ? 'Our Brand Portfolio' : 'Business Overview'}</span>
                <span className="tata-heading-arrow">→</span>
              </a>
            </div>

            <div className="tata-compact-divider" />

            {/* Section 2: Items List with Categories */}
            <div className="tata-compact-businesses">
              <h4 className="tata-compact-subheading">
                {mode === 'brands' ? 'Explore Brands' : 'Our Businesses & Sectors'}
              </h4>
              
              <div className={mode === 'brands' ? "tata-brands-grid" : "tata-compact-links-grid"}>
                {(mode === 'brands' ? brands : businesses).map((item) => (
                  <a 
                    key={item.name}
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="tata-compact-link-item group"
                    onClick={onClose}
                  >
                    <div className="tata-item-content">
                      <div className="tata-item-top">
                        <span className="tata-item-name">{item.name}</span>
                        <span className="compact-arrow">↗</span>
                      </div>
                      <span className="tata-item-category">{item.category}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
