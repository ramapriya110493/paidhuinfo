import React, { useState, useEffect, useRef } from 'react';
import './PaidhuHomeBrands.css';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export const PaidhuHomeBrands = ({ onOpenBrandModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef(null);

  const brandsList = [
    {
      id: 'floffi',
      name: 'Floffi',
      kicker: 'OUR BRANDS',
      tagline: 'Tradition in Every Spoon. Taste in Every Bite – Syrups, Spreads & Chutneys',
      description: 'Micro-infused flower spreads, handcrafted syrups, and traditional floral chutneys delivering delightful taste and freshness in every bite.',
      image: '/assets/paidhu_floffi_clean.jpg',
      mobileImage: '/assets/paidhu_floffi_mobile.jpg',
      thumb: '/assets/paidhu_floffi_clean.jpg',
      bgPosition: 'center center',
      url: 'https://floffi.in'
    },
    {
      id: 'paidhusaffron',
      name: 'Paidhu Saffron',
      kicker: 'OUR BRANDS',
      tagline: 'Pure Grade-A Mongra Kashmiri Saffron from the Terraces of Pampore',
      description: 'Laboratory-certified 285+ crocin active botanical density. 100% natural, ethically harvested, with complete single-origin valley traceability.',
      image: '/assets/hero_saffron.jpg',
      mobileImage: '/assets/hero_saffron_mobile.jpg',
      thumb: '/assets/hero_saffron.jpg',
      url: 'https://paidhusaffron.com'
    },
    {
      id: 'bloomcookies',
      name: 'Bloom Cookies',
      kicker: 'OUR BRANDS',
      tagline: 'Made with Real Flowers. Baked with Love – 100% Natural',
      description: 'Baked with pure A2 clarified butter and real organic edible flower petals, delivering pure crisp indulgence with zero hydrogenated fats.',
      image: '/assets/paidhu_bloom_cookies_clean.jpg',
      mobileImage: '/assets/paidhu_bloom_cookies_mobile.jpg',
      thumb: '/assets/paidhu_bloom_cookies_clean.jpg',
      bgPosition: 'center center',
      url: 'https://paidhuethicalfoods.com'
    },
    {
      id: 'medleyteas',
      name: 'Medley Teas',
      kicker: 'OUR BRANDS',
      tagline: 'Nature’s Goodness in Every Sip – Whole-Flower Herbal Teas',
      description: 'A perfect blend of purity, taste, and tradition crafted with Saffron, Lavender, Blue Pea, and Hibiscus blossoms to nourish body and soul.',
      image: '/assets/paidhu_medley_teas_clean.jpg',
      mobileImage: '/assets/paidhu_medley_teas_mobile.jpg',
      thumb: '/assets/paidhu_medley_teas_clean.jpg',
      bgPosition: 'center center',
      url: 'https://paidhuethicalfoods.com'
    },
    {
      id: 'viyara',
      name: 'VIYARA Tech',
      kicker: 'OUR BRANDS',
      tagline: 'Enterprise Software, Edge Architecture & Growth Engines',
      description: 'Powering ethical businesses with next-generation digital platforms, predictive analytics, and decentralized supply-chain farm ledgers.',
      image: '/assets/hero_tech.jpg',
      mobileImage: '/assets/hero_tech.jpg',
      thumb: '/assets/hero_viyara_team.jpg',
      url: 'https://viyara.co.in'
    },
    {
      id: 'petaljam',
      name: 'Petal Jam',
      kicker: 'OUR BRANDS',
      tagline: 'Nature’s Floral Goodness in Every Jar – Handcrafted with Real Flowers',
      description: 'Delicious petal jams crafted with fresh edible flowers (Hibiscus, Tanner’s, Neem Flower, and Damask Rose), pure ingredients, and the goodness of nature.',
      image: '/assets/paidhu_petal_jam_clean.jpg',
      mobileImage: '/assets/paidhu_petal_jam_mobile.jpg',
      thumb: '/assets/paidhu_petal_jam_clean.jpg',
      bgPosition: 'center center',
      url: 'https://paidhuethicalfoods.com'
    },
    {
      id: 'kalikasphere',
      name: 'KalikaSphere Labs',
      kicker: 'OUR BRANDS',
      tagline: 'Creative Innovation Academy & Food Bio-Science Workshops',
      description: 'Bridging design thinking, food innovation, and practical youth mentorship to nurture visionary entrepreneurs in sustainable wellness.',
      image: '/assets/kalikasphere_luxury_academy.jpg',
      mobileImage: '/assets/kalikasphere_luxury_academy.jpg',
      thumb: '/assets/hero_education.jpg',
      url: 'https://kalikasphere.com'
    }
  ];

  // Auto-advance active brand every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % brandsList.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, brandsList.length]);

  // Keep active thumbnail visible in horizontal scroller ONLY (Never scroll the window!)
  useEffect(() => {
    if (scrollerRef.current) {
      const scroller = scrollerRef.current;
      const activeCard = scroller.children[activeIndex];
      if (activeCard) {
        const targetLeft = activeCard.offsetLeft - (scroller.clientWidth / 2) + (activeCard.clientWidth / 2);
        scroller.scrollTo({
          left: Math.max(0, targetLeft),
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + brandsList.length) % brandsList.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % brandsList.length);
  };

  const currentBrand = brandsList[activeIndex];

  return (
    <section 
      className="paidhu-hb-section" 
      id="our-brands-home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="paidhu-hb-stage">
        
        {/* Panoramic Background Images with Crossfade (Full Screen Edge-to-Edge) */}
        {brandsList.map((brand, idx) => (
          <div
            key={brand.id}
            className={`paidhu-hb-bg-layer ${idx === activeIndex ? 'active' : ''}`}
            style={{ 
              '--desktop-bg': `url(${brand.image})`,
              '--mobile-bg': `url(${brand.mobileImage || brand.image})`,
              backgroundPosition: brand.bgPosition || 'center center'
            }}
            role="img"
            aria-label={brand.name}
          />
        ))}

        {/* Ambient Soft Scrim (Preserves 100% Crisp Image Clarity across Center & Right) */}
        <div className="paidhu-hb-left-scrim" />

        {/* Right Rail Vertical Tab (Exact Tata.com Reference) */}
        <div className="paidhu-hb-right-rail-tab">
          <span>Our Brands</span>
        </div>

        {/* Left Hero Callout / Brand Info Box (Minimalist & Crisp - Tata Style) */}
        <div className="paidhu-hb-narrative-wrap">
          <div className="paidhu-hb-kicker-pill">
            {currentBrand.kicker}
          </div>

          <a 
            href={currentBrand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="paidhu-hb-title-row"
            title={`Visit ${currentBrand.name}`}
          >
            <h2 className="paidhu-hb-brand-title">{currentBrand.name}</h2>
            <ExternalLink className="paidhu-hb-link-icon" size={26} strokeWidth={2.2} />
          </a>

          <a
            href={currentBrand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="paidhu-hb-action-btn"
          >
            <span>View All</span>
            <ArrowRight size={18} strokeWidth={2.4} />
          </a>
        </div>

        {/* Bottom Filmstrip Carousel */}
        <div className="paidhu-hb-filmstrip-bar">
          {/* Left Arrow Button (Amber Square) */}
          <button 
            type="button" 
            className="paidhu-hb-nav-btn" 
            onClick={handlePrev}
            aria-label="Previous Brand"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Scrolling Thumbnails */}
          <div className="paidhu-hb-thumbs-scroller" ref={scrollerRef}>
            {brandsList.map((brand, idx) => (
              <div
                key={brand.id}
                className={`paidhu-hb-thumb-card ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${brand.name}`}
              >
                <img 
                  src={brand.thumb} 
                  alt={brand.name} 
                  className="paidhu-hb-thumb-img" 
                />
                <div className="paidhu-hb-thumb-overlay">
                  <span className="paidhu-hb-thumb-name">{brand.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button (Amber Square) */}
          <button 
            type="button" 
            className="paidhu-hb-nav-btn" 
            onClick={handleNext}
            aria-label="Next Brand"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
};
