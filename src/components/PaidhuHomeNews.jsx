import React, { useState, useEffect } from 'react';
import './PaidhuHomeNews.css';
import { 
  RotateCw, 
  Play, 
  Maximize2, 
  ExternalLink, 
  X, 
  ZoomIn, 
  ZoomOut, 
  Check 
} from 'lucide-react';

export const PaidhuHomeNews = ({ onNavigateNewsroom, onOpenContact }) => {
  // 1. Featured Carousel State (Card 1)
  const [slideIndex, setSlideIndex] = useState(0);
  const featuredSlides = [
    {
      id: 1,
      kicker: 'PRESS RELEASE • THE NEW INDIAN EXPRESS',
      title: 'FLORAL FOOD REVOLUTION: The New Indian Express Features Paidhu',
      subtext: 'Pollachi-based startup Paidhu is positioning products made of flowers as both gourmet and rooted in tradition.',
      image: '/assets/indian_express_paidhu_feature.jpg',
      isExpress: true
    },
    {
      id: 2,
      kicker: 'GLOBAL INNOVATION • BIO-EXTRACTION',
      title: 'Kashmiri Saffron Bio-Extraction Achieves Benchmark 285+ Crocin Rating',
      subtext: 'Supercritical cold-temperature molecular isolation delivers 100% active botanical potency certified for international fine dining.',
      image: '/assets/paidhu_saffron_harvest_field.jpg',
      isExpress: false
    },
    {
      id: 3,
      kicker: 'SUSTAINABILITY CHARTER • 2028',
      title: 'Paidhu Expands "Just B Happy" Farmer Network Across Western Ghats',
      subtext: 'Partnering with regional agricultural stewards to cultivate safe, pesticide-free edible flowers with complete farm-to-table traceability.',
      image: '/assets/paidhu_pollachi_flower_farm.jpg',
      isExpress: false
    }
  ];

  // Auto-advance featured slides
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % featuredSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [featuredSlides.length]);

  // 2. Company News Cycler (Card 2)
  const [companyIndex, setCompanyIndex] = useState(0);
  const [isCompRotating, setIsCompRotating] = useState(false);
  const companyNewsList = [
    {
      company: 'Paidhu Saffron',
      headline: 'Artisanal cold-processing laboratory in Kashmir expands pure Grade-A Mongra export',
      date: '12 Nov 2026',
      url: 'https://paidhusaffron.com'
    },
    {
      company: 'Floffi Culinary Labs',
      headline: 'Floffi launches cold-crystallized Damask Rose preserves across European gourmet channels',
      date: '06 Nov 2026',
      url: 'https://floffi.in'
    },
    {
      company: 'VIYARA Enterprise Tech',
      headline: 'VIYARA deploys scalable cloud commerce and blockchain farm traceability ledgers',
      date: '28 Oct 2026',
      url: 'https://viyara.co.in'
    },
    {
      company: 'Brew Flora Infusions',
      headline: 'Launches zero-waste whole-blossom tisanes packaged in compostable botanical cellulose',
      date: '20 Oct 2026',
      url: 'https://paidhuethicalfoods.com'
    }
  ];

  const cycleCompany = (e) => {
    e.stopPropagation();
    setIsCompRotating(true);
    setTimeout(() => {
      setCompanyIndex(prev => (prev + 1) % companyNewsList.length);
      setIsCompRotating(false);
    }, 200);
  };

  // 3. Facts Cycler (Card 3)
  const [factIndex, setFactIndex] = useState(0);
  const [isFactRotating, setIsFactRotating] = useState(false);
  const factsList = [
    {
      quote: "As reported in The New Indian Express, Paidhu was founded by aeronautical engineer turned entrepreneur Ragapriya Karunakaran to revive traditional Indian floral foods.",
      source: 'The New Indian Express Feature'
    },
    {
      quote: 'Grade-A Mongra Saffron consists exclusively of deep-crimson stigmas, requiring over 150,000 hand-pollinated crocus flowers for a single kilogram.',
      source: 'Pampore Botanical Labs'
    },
    {
      quote: "Paidhu's 'Just B Happy' initiative in Pollachi educates farmers on safe edible flower cultivation with 100% pesticide-free buy-back guarantees.",
      source: 'Regenerative Farmer Charter'
    },
    {
      quote: 'All floral foods under Floffi and Bloom Cookies utilize only 100% certified pesticide-free petals, cold-crystallized to retain active phytonutrients.',
      source: 'Clean Food Science Labs'
    }
  ];

  const cycleFact = (e) => {
    e.stopPropagation();
    setIsFactRotating(true);
    setTimeout(() => {
      setFactIndex(prev => (prev + 1) % factsList.length);
      setIsFactRotating(false);
    }, 200);
  };

  // 4. Modals State
  const [showExpressModal, setShowExpressModal] = useState(false);
  const [modalMode, setModalMode] = useState('clipping');
  const [scanZoom, setScanZoom] = useState(1);
  const [showShortsModal, setShowShortsModal] = useState(false);

  const currentSlide = featuredSlides[slideIndex];
  const currentCompany = companyNewsList[companyIndex];
  const currentFact = factsList[factIndex];

  return (
    <section className="paidhu-hn-section">
      
      {/* Floating Right Social Media Pill */}
      <div 
        className="paidhu-hn-social-float"
        onClick={onOpenContact}
        title="Connect on Social Media"
      >
        Social Media
      </div>

      <div className="paidhu-hn-container">
        
        {/* Floating "In the News" Pill Header */}
        <div className="paidhu-hn-header-pill">
          <h2 className="paidhu-hn-header-title">In the News</h2>
        </div>

        {/* =====================================================================
            ROW 1: FEATURED PRESS RELEASE (LEFT) + COMPANY NEWS (RIGHT)
            ===================================================================== */}
        <div className="paidhu-hn-grid-row paidhu-hn-row-top">
          
          {/* Card 1: Featured Story (Horizontal Split Carousel) */}
          <div 
            className="paidhu-hn-card-featured"
            onClick={() => {
              if (currentSlide.isExpress) {
                setShowExpressModal(true);
              } else {
                onNavigateNewsroom();
              }
            }}
          >
            {/* Left Image Section with Dots */}
            <div className="paidhu-hn-featured-imgwrap">
              <img 
                src={currentSlide.image} 
                alt={currentSlide.title} 
                className="paidhu-hn-featured-img"
              />
              <div className="paidhu-hn-dots-row" onClick={(e) => e.stopPropagation()}>
                {featuredSlides.map((_, idx) => (
                  <button 
                    key={idx}
                    className={`paidhu-hn-dot ${idx === slideIndex ? 'active' : ''}`}
                    onClick={() => setSlideIndex(idx)}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Text Section */}
            <div className="paidhu-hn-featured-body">
              <div className="paidhu-hn-notch" />
              <span className="paidhu-hn-kicker-press">{currentSlide.kicker}</span>
              <h3 className="paidhu-hn-featured-title">{currentSlide.title}</h3>
              <div className="paidhu-hn-subrow">
                <div className="paidhu-hn-goldline" />
                <p className="paidhu-hn-subtext">{currentSlide.subtext}</p>
              </div>
            </div>
          </div>

          {/* Card 2: Company News (Rotatable) */}
          <div className="paidhu-hn-card-company">
            <div>
              <span className="paidhu-hn-kicker-company">COMPANY NEWS</span>
              <h3 className="paidhu-hn-company-name">{currentCompany.company}</h3>
              
              <div className="paidhu-hn-subrow">
                <div className="paidhu-hn-goldline" />
                <div>
                  <a 
                    href={currentCompany.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="paidhu-hn-story-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{currentCompany.headline}</span>
                    <ExternalLink size={14} style={{ flexShrink: 0 }} />
                  </a>
                  <span className="paidhu-hn-date">{currentCompany.date}</span>
                </div>
              </div>
            </div>

            <div className="paidhu-hn-company-bottom">
              <button 
                className={`paidhu-hn-cycle-btn ${isCompRotating ? 'rotating' : ''}`}
                onClick={cycleCompany}
                title="Show next company dispatch"
                aria-label="Cycle company news"
              >
                <RotateCw size={24} />
              </button>
            </div>
          </div>

        </div>

        {/* =====================================================================
            ROW 2: FACTS BOX (LEFT) + SHORTS VIDEO CARD (RIGHT)
            ===================================================================== */}
        <div className="paidhu-hn-grid-row paidhu-hn-row-bottom">
          
          {/* Card 3: Facts / Did You Know */}
          <div className="paidhu-hn-card-facts">
            <div>
              <span className="paidhu-hn-kicker-facts">FACTS</span>
              <h3 className="paidhu-hn-facts-heading">Did you know</h3>

              <div className="paidhu-hn-subrow">
                <div className="paidhu-hn-goldline" style={{ backgroundColor: '#ffffff' }} />
                <div>
                  <p className="paidhu-hn-facts-quote">{currentFact.quote}</p>
                  <span className="paidhu-hn-facts-source">{currentFact.source}</span>
                </div>
              </div>
            </div>

            <div className="paidhu-hn-company-bottom">
              <button 
                className={`paidhu-hn-cycle-btn ${isFactRotating ? 'rotating' : ''}`}
                onClick={cycleFact}
                title="Show next fact"
                aria-label="Cycle facts"
              >
                <RotateCw size={24} />
              </button>
            </div>
          </div>

          {/* Card 4: Shorts / Story Video Card */}
          <div 
            className="paidhu-hn-card-shorts"
            onClick={() => setShowShortsModal(true)}
          >
            <img 
              src="/assets/indian_express_paidhu_feature.jpg" 
              alt="Paidhu Floral Gastronomy" 
              className="paidhu-hn-shorts-bg-img"
            />

            <div className="paidhu-hn-shorts-top">
              <span className="paidhu-hn-kicker-shorts">SHORTS</span>
              <div className="paidhu-hn-play-icon">
                <Play size={16} fill="currentColor" style={{ marginLeft: '2px' }} />
              </div>
            </div>

            <div className="paidhu-hn-shorts-content">
              <h3 className="paidhu-hn-shorts-title">Reviving Forgotten Floral Foods</h3>
              <div className="paidhu-hn-subrow">
                <div className="paidhu-hn-goldline" style={{ backgroundColor: '#ffffff' }} />
                <p className="paidhu-hn-subtext" style={{ color: '#ffffff', opacity: 0.95 }}>
                  From Chinese Ixora nectar and Ugadi neem flowers to modern probiotic petal jams and whole-blossom tisanes.
                </p>
              </div>
            </div>

            <div className="paidhu-hn-shorts-expand">
              <Maximize2 size={18} />
            </div>
          </div>

        </div>

      </div>

      {/* =====================================================================
          MODAL: THE NEW INDIAN EXPRESS FEATURE
          ===================================================================== */}
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

                  <p style={{ marginBottom: '1.2rem' }}>
                    Founded by <strong>Ragapriya Karunakaran</strong>, Paidhu started operations selling products such as petal jams and cookies, namely <strong>Hibiscus Petal Jam, Neem Flower Jam, Golden Shower Flower Jam, White Lotus Cookies, Aavaram Poo Cookies</strong>, and Kashmiri Saffron. The idea is simple: reintroduce the nutritional and culinary potential of flowers through formats that fit modern lifestyles.
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
                    <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
                      <li style={{ marginBottom: '0.5rem' }}><strong>Tanner's Petal Jam Popsicles:</strong> Paidhu Tanner's Petal Jam stirred with water and sweetener, frozen into refreshing probiotic floral popsicles.</li>
                      <li style={{ marginBottom: '0.5rem' }}><strong>Moringa Flower Sprouts Ball:</strong> Fresh drumstick flowers combined with sprouted beans, garam masala, cumin, rolled in breadcrumbs and deep fried.</li>
                      <li style={{ marginBottom: '0.5rem' }}><strong>Hibiscus Flower Rasam:</strong> Fresh hibiscus petals boiled with tamarind water, tomatoes, garlic, and rasam powder.</li>
                      <li style={{ marginBottom: '0.5rem' }}><strong>Mango Flower Grilled Chicken:</strong> Tender chicken breast marinated in fresh mango flowers, lemon juice, and butter.</li>
                      <li style={{ marginBottom: '0.5rem' }}><strong>Jasmine Prawns:</strong> Succulent prawns tossed with fresh aromatic jasmine flowers and spring onions.</li>
                    </ul>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL: SHORTS VIDEO STORY PREVIEW
          ===================================================================== */}
      {showShortsModal && (
        <div className="paidhu-nr-modal-backdrop" onClick={() => setShowShortsModal(false)}>
          <div className="paidhu-nr-modal-window" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
            <div className="paidhu-nr-modal-header">
              <span className="paidhu-hn-kicker-shorts" style={{ color: '#b8860b' }}>
                PAIDHU SHORTS • VIDEO FEATURE
              </span>
              <button 
                onClick={() => setShowShortsModal(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            <div className="paidhu-nr-modal-body" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f7ba5a, #d4af37)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                boxShadow: '0 8px 24px rgba(212, 175, 55, 0.35)'
              }}>
                <Play size={32} fill="#0a0a0a" color="#0a0a0a" style={{ marginLeft: '4px' }} />
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem' }}>
                Reviving Forgotten Floral Foods
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
                Watch founder Ragapriya Karunakaran share the inspiring journey from aerospace engineering to building Paidhu's ethical floral food revolution.
              </p>

              <button 
                className="paidhu-cr-job-btn"
                onClick={() => setShowExpressModal(true)}
              >
                Read Full Newspaper Article →
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
