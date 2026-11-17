import React, { useState, useEffect } from 'react';
import { Newsroom } from './components/Newsroom';
import { Careers } from './components/Careers';
import { PaidhuHomeNews } from './components/PaidhuHomeNews';
import { PaidhuHomeCareers } from './components/PaidhuHomeCareers';
import { PaidhuHomeBrands } from './components/PaidhuHomeBrands';
import { TataBusinessDropdown } from './components/TataBusinessDropdown';

function App() {
  const [brands, setBrands] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [expandedBrands, setExpandedBrands] = useState({});
  
  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState('purity');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Mega Menu Hover State
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  
  // Page View Routing (home vs newsroom vs careers - Tata.com Style)
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#newsroom') return 'newsroom';
      if (window.location.hash === '#careers') return 'careers';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#newsroom') {
        setCurrentView('newsroom');
      } else if (window.location.hash === '#careers') {
        setCurrentView('careers');
      } else if (window.location.hash === '#home' || !window.location.hash) {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);
  
  // Modals & Navigation State
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Innovation & Future Labs State
  const [activeInnovationTab, setActiveInnovationTab] = useState(0);

  const innovationLabs = [
    {
      id: 'botanical',
      num: '01',
      tabLabel: 'Botanical Bio-Science',
      kicker: 'BIO-EXTRACTION & MOLECULAR BOTANY',
      title: 'Advanced Saffron Crocin Extraction & Botanical Science',
      subtitle: 'Pure Kashmiri Grade-A Molecular Isolation',
      desc: 'At the Paidhu Botanical Research Institute in Srinagar, our scientists have engineered clean cold-press bio-extraction methods that preserve delicate carotenoids, safranal, and crocin without chemical solvents. The result is 100% active botanical potency certified for international high-end wellness and ethical luxury applications.',
      image: '/assets/hero_saffron.jpg',
      metrics: [
        { label: 'Crocin Purity Rating', value: 'Grade-A 280+' },
        { label: 'Synthetic Additives', value: '0.0%' },
        { label: 'Ethical Valley Yield', value: '100% Organic' }
      ],
      highlights: [
        'Supercritical cold-temperature stabilization preserving volatile aroma compounds',
        'Direct farmer-level botanical traceability with verified origin certification',
        'Zero heat degradation safeguarding antioxidant polyphenol density'
      ],
      linkText: 'Explore Saffron Science',
      linkUrl: 'https://paidhusaffron.com'
    },
    {
      id: 'culinary',
      num: '02',
      tabLabel: 'Culinary Food Lab',
      kicker: 'ARTISANAL CONFECTIONERY & FLORAL FOODS',
      title: 'Floffi Clean Culinary Food Labs',
      subtitle: 'Micro-Infused Edible Flora & Preservative-Free Gastronomy',
      desc: 'Floffi Labs bridges artisanal European confectionery traditions with ancient Kashmiri floral wisdom. We pioneer molecular encapsulation of fresh organic Damask Rose, Calendula, and Blue Pea blossoms into shelf-stable luxury confections and petal confitures without artificial colors, preservatives, or chemical emulsifiers.',
      image: '/assets/floffi_culinary.jpg',
      metrics: [
        { label: 'Edible Flora Varieties', value: '18+ Handpicked' },
        { label: 'Artificial Preservatives', value: 'Zero (0.0%)' },
        { label: 'Shelf-Life Stability', value: '100% Natural' }
      ],
      highlights: [
        'Proprietary cold-crystallization preserving vibrant natural flower pigmentation',
        'Zero hydrogenated fats—pure A2 clarified butter and unrefined raw sweetness',
        'Clinical food-grade hygiene tested to exceed international food safety benchmarks'
      ],
      linkText: 'Discover Floffi Culinary Arts',
      linkUrl: 'https://paidhuethicalfoods.com'
    },
    {
      id: 'digital',
      num: '03',
      tabLabel: 'Creative Digital & AI',
      kicker: 'CREATIVE EDUCATION & DIGITAL ECOSYSTEMS',
      title: 'KalikaSphere & VIYARA Enterprise Tech',
      subtitle: 'Decentralized Innovation & Next-Gen Collaborative Learning',
      desc: 'KalikaSphere Labs engineers transformative learning platforms and enterprise digital architectures. We combine immersive design thinking with high-performance cloud frameworks, enabling ambitious students, creative professionals, and scalable enterprises to lead in an AI-accelerated global economy.',
      image: '/assets/hero_tech.jpg',
      metrics: [
        { label: 'Learners Empowered', value: '10,000+' },
        { label: 'Enterprise Uptime', value: '99.99%' },
        { label: 'Global Client Growth', value: '3.4x ARR' }
      ],
      highlights: [
        'Modular learning ecosystems integrating practical creative workshops & industry mentorship',
        'Next-gen digital infrastructure powered by scalable edge architecture via VIYARA',
        'Human-centric design frameworks bridging creative culture with enterprise scalability'
      ],
      linkText: 'Explore KalikaSphere',
      linkUrl: 'https://kalikasphere.com'
    }
  ];

  // News & Dispatches State
  const [featuredNewsSlide, setFeaturedNewsSlide] = useState(0);
  const [companyNewsIndex, setCompanyNewsIndex] = useState(0);
  const [factIndex, setFactIndex] = useState(0);

  const featuredStories = [
    {
      image: '/assets/floffi_culinary.jpg',
      tag: 'PRESS RELEASE',
      title: 'Paidhu Expands Organic Edible Flower Cultivation & Global Saffron Distribution',
      summary: 'The strategic expansion marks an ethical milestone in organic culinary wellness, connecting handpicked botanicals with international fine-dining and wellness connoisseurs.',
      link: 'https://paidhuethicalfoods.com'
    },
    {
      image: '/assets/hero_saffron.jpg',
      tag: 'GLOBAL CERTIFICATION',
      title: 'Paidhu Saffron Achieves 100% Grade-A Mongra International Purity Benchmark',
      summary: 'Independent botanical laboratory testing confirms record crocin levels, deep crimson color, and authentic aroma direct from the Kashmir valley.',
      link: 'https://paidhusaffron.com'
    },
    {
      image: '/assets/hero_tech.jpg',
      tag: 'ENTERPRISE MILESTONE',
      title: 'VIYARA Launches Scalable Next-Gen Enterprise Cloud & Marketing Infrastructure',
      summary: 'Deploying high-performance digital transformation platforms, predictive analytics, and enterprise web solutions that accelerate measurable business growth.',
      link: 'https://viyara.co.in'
    }
  ];

  const companyDispatches = [
    {
      category: 'COMPANY NEWS',
      entity: 'Paidhu Saffron',
      headline: 'Paidhu Saffron breaks ground on climate-controlled artisanal processing center in Kashmir, boosting pure Grade-A Mongra export',
      date: '28 Oct 2026',
      link: 'https://paidhusaffron.com'
    },
    {
      category: 'COMPANY NEWS',
      entity: 'Floffi Gourmet',
      headline: 'Floffi introduces new collection of handcrafted floral preserves and artisanal pantry essentials crafted without artificial pectin',
      date: '25 Oct 2026',
      link: 'https://floffi.in'
    },
    {
      category: 'COMPANY NEWS',
      entity: 'KalikaSphere',
      headline: 'KalikaSphere partners with premier creative design studios to mentor next-generation digital creators and software innovators',
      date: '22 Oct 2026',
      link: 'https://kalikasphere.com'
    }
  ];

  const paidhuFacts = [
    {
      title: 'Did you know',
      fact: "Paidhu's edible flower cookies and petal jams are 100% preservative-free, utilizing organic damask rose, calendula, and blue pea botanicals.",
      footnote: 'The Standard of Purity'
    },
    {
      title: 'Did you know',
      fact: 'Grade-A Mongra Saffron consists exclusively of the deep-crimson stigmas, requiring over 150,000 handpicked flowers for a single kilogram.',
      footnote: 'Royal Kashmiri Heritage'
    },
    {
      title: 'Did you know',
      fact: "VIYARA's cloud architectures power high-frequency transactional platforms with guaranteed 99.99% operational uptime.",
      footnote: 'Engineering Excellence'
    }
  ];

  const cycleCompanyNews = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCompanyNewsIndex(prev => (prev + 1) % companyDispatches.length);
  };

  const cycleFact = () => {
    setFactIndex(prev => (prev + 1) % paidhuFacts.length);
  };

  const heroSlides = [
    {
      id: 'purity',
      badge: '',
      title: '',
      subtitle: '',
      buttonText: '',
      secondaryText: '',
      bgImage: '/assets/hero_marigold_harvest.jpg',
      mobilePosition: '72% center',
      sectionId: 'brands',
      secondarySectionId: 'philosophy',
      metrics: []
    },
    {
      id: 'saffron',
      badge: '',
      title: '',
      subtitle: '',
      buttonText: '',
      secondaryText: '',
      bgImage: '/assets/hero_saffron.jpg',
      mobilePosition: 'center center',
      sectionId: 'brands',
      secondarySectionId: 'brands',
      metrics: []
    },
    {
      id: 'tech',
      badge: '',
      title: '',
      subtitle: '',
      buttonText: '',
      secondaryText: '',
      bgImage: '/assets/hero_viyara_team.jpg',
      mobilePosition: 'center center',
      sectionId: 'brands',
      secondarySectionId: 'brands',
      metrics: []
    }
  ];

  const rightTabs = [
    { id: 'purity', label: 'Overview', slideIndex: 0 },
    { id: 'saffron', label: 'Pure Saffron', slideIndex: 1 },
    { id: 'tech', label: 'Technical & Software', slideIndex: 2 }
  ];

  const toggleExpand = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedBrands(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const apiUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ? 'http://localhost:5001/api/brands'
      : '/api/brands';
    fetch(apiUrl)
      .then(res => {
        if (!res.ok) throw new Error('API offline');
        return res.json();
      })
      .then(data => setBrands(data))
      .catch(() => {
        setBrands([
          {
            id: 'paidhuethicalfoods',
            name: 'Paidhu Ethical Foods',
            category: 'food',
            tagline: 'The Edible Flower Co.',
            description: "Paidhu – The Edible Flower Co. offers premium edible flower-based foods, including Bloom Cookies, Petal Jams, Medley Teas, Brew Flora, and Saffron, crafted with natural ingredients. We are committed to healthy, preservative-free, and ethically made products that bring wellness and floral goodness to everyday life.",
            url: 'https://paidhuethicalfoods.com',
            logo: '/assets/paidhu_official_logo.png'
          },
          {
            id: 'paidhusaffron',
            name: 'Paidhu Saffron',
            category: 'food',
            tagline: 'Grade-A Kashmiri Mongra Saffron',
            description: "Paidhu Saffron offers the world's finest, ethically sourced grade-A Kashmiri Saffron, handpicked for its rich aroma, deep crimson color, and unparalleled purity. We are committed to delivering authentic, premium saffron that brings natural wellness, gourmet flavor, and exquisite quality to everyday life.",
            url: 'https://paidhusaffron.com',
            logo: '/assets/paidhu_saffron_logo.png'
          },
          {
            id: 'floffi',
            name: 'Floffi',
            category: 'food',
            tagline: 'Artisanal Pantry & Spreads',
            description: "Floffi offers a delightful range of jams, sauces, spreads, and everyday food products made with carefully selected quality ingredients. We are committed to delivering great taste, freshness, and trusted quality in every product for you and your family.",
            url: 'https://floffi.in',
            logo: '/assets/fluffy_logo.png'
          },
          {
            id: 'viyara',
            name: 'Viyara',
            category: 'tech',
            tagline: 'Software & Growth Marketing',
            description: "VIYARA is a tech-enabled software and marketing agency helping businesses grow through innovative technology and data-driven strategies. We deliver scalable software, impactful digital experiences, and performance-focused marketing solutions that drive growth, improve efficiency, and create lasting business success.",
            url: 'https://viyara.co.in',
            logo: '/assets/viyara_logo.png'
          },
          {
            id: 'kalikasphere',
            name: 'KalikaSphere',
            category: 'education',
            tagline: 'Creative Innovation & Learning',
            description: "Kalikasphere is a creative learning and innovation platform focused on empowering individuals and businesses through education, creativity, technology, and community-driven experiences. We provide workshops, digital solutions, strategic consulting, and innovative programs that inspire growth, collaboration, and lifelong learning.",
            url: 'https://kalikasphere.com',
            logo: '/assets/collegebear_logo.png'
          }
        ]);
      });

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero auto-slider effect
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide(prev => {
          const next = (prev + 1) % heroSlides.length;
          setActiveTab(heroSlides[next].id);
          return next;
        });
      }, 6000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, heroSlides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setActiveTab(heroSlides[index].id);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % heroSlides.length;
    handleSlideChange(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    handleSlideChange(prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus(null);
    try {
      const contactUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://localhost:5001/api/contact'
        : '/api/contact';
      const response = await fetch(contactUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setFormStatus({ type: 'success', text: data.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      console.error("Submit error:", err);
      setFormStatus({ type: 'error', text: 'Thank you! Your message has been received.' });
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVerticalClick = (filterCategory) => {
    setCategoryFilter(filterCategory);
    scrollToSection('brands');
    setActiveMegaMenu(null);
  };

  const filteredBrands = categoryFilter === 'all' 
    ? brands 
    : brands.filter(b => b.category === categoryFilter || (categoryFilter === 'food' && (b.id.includes('food') || b.id.includes('saffron') || b.id.includes('floffi'))));

  const searchedBrands = searchQuery.trim() === ''
    ? brands
    : brands.filter(b => b.name.toLowerCase().includes(searchQuery.toLowerCase()) || b.description.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="paidhu-luxury-app">
      {/* Top Navbar */}
      <header 
        className={`paidhu-navbar ${scrolled ? 'scrolled' : ''} ${activeMegaMenu ? 'mega-open' : ''}`}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="navbar-inner">
          <div className="navbar-brand-col">
            <a 
              href="#home" 
              className="brand-link" 
              onClick={(e) => { 
                e.preventDefault(); 
                setCurrentView('home');
                window.location.hash = 'home';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img src="/assets/paidhu_official_logo.png" alt="Paidhu Group" className="paidhu-brand-logo" />
            </a>
          </div>

          <nav className="navbar-nav-links">
            <ul className="nav-menu">
              <li onMouseEnter={() => setActiveMegaMenu('business')}>
                <a 
                  href="#business" 
                  className={activeMegaMenu === 'business' ? 'active' : ''} 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    if (currentView !== 'home') setCurrentView('home');
                    setActiveMegaMenu(activeMegaMenu === 'business' ? null : 'business'); 
                  }}
                >
                  Business
                  <span className="gold-indicator" />
                </a>
              </li>
              <li onMouseEnter={() => setActiveMegaMenu('brands')}>
                <a 
                  href="#ecosystem" 
                  className={activeMegaMenu === 'brands' ? 'active' : ''} 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    if (currentView !== 'home') setCurrentView('home');
                    setActiveMegaMenu(null); 
                    const el = document.getElementById('our-brands-home');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Our Brands
                  <span className="gold-indicator" />
                </a>
              </li>
              <li onMouseEnter={() => setActiveMegaMenu('about')}>
                <a 
                  href="#about" 
                  className={activeMegaMenu === 'about' ? 'active' : ''} 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    if (currentView !== 'home') setCurrentView('home');
                    setActiveMegaMenu(activeMegaMenu === 'about' ? null : 'about'); 
                  }}
                >
                  About Us
                  <span className="gold-indicator" />
                </a>
              </li>
              <li onMouseEnter={() => setActiveMegaMenu('news')}>
                <a 
                  href="#newsroom" 
                  className={currentView === 'newsroom' ? 'active' : ''} 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setActiveMegaMenu(null);
                    setCurrentView('newsroom');
                    window.location.hash = 'newsroom';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Newsroom
                  <span className="gold-indicator" />
                </a>
              </li>
              <li onMouseEnter={() => setActiveMegaMenu(null)}>
                <a 
                  href="#careers" 
                  className={currentView === 'careers' ? 'active' : ''} 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setActiveMegaMenu(null);
                    setCurrentView('careers');
                    window.location.hash = 'careers';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Careers
                  <span className="gold-indicator" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="navbar-actions">
            {/* Global Language Selector (Tata.com Style) */}
            <button 
              className="action-icon-btn hide-on-mobile" 
              title="Global / Region" 
              aria-label="Language selector"
              onClick={() => setShowContactModal(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </button>

            <button 
              className="action-icon-btn hide-on-mobile" 
              title="Contact Paidhu" 
              aria-label="Contact"
              onClick={() => setShowContactModal(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </button>

            <button 
              className="action-icon-btn" 
              title="Search brands or stories" 
              aria-label="Search"
              onClick={() => setShowSearchModal(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>

            <button 
              className="navbar-connect-btn"
              onClick={() => setShowContactModal(true)}
            >
              Connect
            </button>

            {/* Mobile Toggle */}
            <button 
              className="mobile-hamburger" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`paidhu-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-links-container">
            <a 
              href="#our-brands-home" 
              className="mobile-link"
              onClick={(e) => { 
                e.preventDefault(); 
                if (currentView !== 'home') setCurrentView('home');
                setMobileMenuOpen(false); 
                setTimeout(() => {
                  const el = document.getElementById('our-brands-home');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
            >
              Our Brands
            </a>
            <a 
              href="#in-the-news-home" 
              className="mobile-link"
              onClick={(e) => { 
                e.preventDefault(); 
                if (currentView !== 'home') setCurrentView('home');
                setMobileMenuOpen(false); 
                setTimeout(() => {
                  const el = document.getElementById('in-the-news-home');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
            >
              In the News
            </a>
            <a 
              href="#newsroom" 
              className="mobile-link"
              onClick={(e) => { 
                e.preventDefault(); 
                setCurrentView('newsroom');
                window.location.hash = 'newsroom';
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false); 
              }}
            >
              Newsroom
            </a>
            <a 
              href="#careers" 
              className="mobile-link"
              onClick={(e) => { 
                e.preventDefault(); 
                setCurrentView('careers');
                window.location.hash = 'careers';
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false); 
              }}
            >
              Careers
            </a>
            <a 
              href="#about" 
              className="mobile-link"
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection('about'); 
                setMobileMenuOpen(false); 
              }}
            >
              About Us
            </a>
            <button 
              className="mobile-drawer-btn"
              onClick={() => { setShowContactModal(true); setMobileMenuOpen(false); }}
            >
              Connect With Us
            </button>
          </div>
        </div>

        {/* Tata.com-Inspired Mega Menu Dropdowns (Business, Brands, About Us, Newsroom) */}
        {(activeMegaMenu === 'business' || activeMegaMenu === 'ventures' || activeMegaMenu === 'brands' || activeMegaMenu === 'about' || activeMegaMenu === 'news') && (
          <TataBusinessDropdown 
            mode={activeMegaMenu}
            onClose={() => setActiveMegaMenu(null)}
            onNavigateSection={(sec) => {
              setActiveMegaMenu(null);
              if (sec === 'newsroom') {
                setCurrentView('newsroom');
                window.location.hash = 'newsroom';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else if (sec === 'home') {
                setCurrentView('home');
                window.location.hash = 'home';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else if (sec === 'ecosystem') {
                if (currentView !== 'home') setCurrentView('home');
                const el = document.getElementById('ecosystem');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              } else if (sec === 'contact') {
                setShowContactModal(true);
              }
            }}
          />
        )}

        {/* Innovation Mega Menu */}
        {activeMegaMenu === 'innovation' && (
          <div 
            className="paidhu-mega-dropdown"
            onMouseEnter={() => setActiveMegaMenu('innovation')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="mega-dropdown-grid simple">
              <div className="mega-pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-badge">
                    <span className="pillar-glyph">🔬</span>
                    <span className="pillar-tag">LAB 01</span>
                  </div>
                  <h4>Botanical Bio-Science</h4>
                  <p className="pillar-desc">Cryogenic extraction of Kashmiri Crocin and bio-active flower petals.</p>
                </div>
                <div className="pillar-links-list">
                  <a href="#innovation" className="pillar-link-item" onClick={(e) => { e.preventDefault(); scrollToSection('innovation'); setActiveInnovationTab(0); setActiveMegaMenu(null); }}>
                    <div className="link-text-group">
                      <span className="link-title">Crocin Bio-Potency Standards</span>
                      <span className="link-subtitle">Pure Grade-A Mongra laboratory validation</span>
                    </div>
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>

              <div className="mega-pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-badge">
                    <span className="pillar-glyph">🌸</span>
                    <span className="pillar-tag">LAB 02</span>
                  </div>
                  <h4>Floffi Clean Culinary</h4>
                  <p className="pillar-desc">Preservative-free floral gastronomy and sustainable shelf-life preservation.</p>
                </div>
                <div className="pillar-links-list">
                  <a href="#innovation" className="pillar-link-item" onClick={(e) => { e.preventDefault(); scrollToSection('innovation'); setActiveInnovationTab(1); setActiveMegaMenu(null); }}>
                    <div className="link-text-group">
                      <span className="link-title">Micro-Baking Formulation</span>
                      <span className="link-subtitle">Damask rose & calendula bloom cookies</span>
                    </div>
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>

              <div className="mega-pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-badge">
                    <span className="pillar-glyph">⚡</span>
                    <span className="pillar-tag">LAB 03</span>
                  </div>
                  <h4>KalikaSphere & VIYARA Tech</h4>
                  <p className="pillar-desc">Next-generation enterprise software, telemetry, and interactive creative learning tools.</p>
                </div>
                <div className="pillar-links-list">
                  <a href="#innovation" className="pillar-link-item" onClick={(e) => { e.preventDefault(); scrollToSection('innovation'); setActiveInnovationTab(2); setActiveMegaMenu(null); }}>
                    <div className="link-text-group">
                      <span className="link-title">Explore Future Labs</span>
                      <span className="link-subtitle">Interactive research demos & metrics</span>
                    </div>
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Philosophy Mega Menu */}
        {activeMegaMenu === 'philosophy' && (
          <div 
            className="paidhu-mega-dropdown"
            onMouseEnter={() => setActiveMegaMenu('philosophy')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="mega-dropdown-grid simple">
              <div className="mega-pillar">
                <span className="pillar-tag">ETHICAL SOURCING</span>
                <h4>Purity Without Compromise</h4>
                <p>100% natural, chemical-free and preservative-free ingredients direct from verified ethical growers.</p>
              </div>
              <div className="mega-pillar">
                <span className="pillar-tag">INNOVATION</span>
                <h4>Modern Craftsmanship</h4>
                <p>Combining time-honored artisanal botanicals with scalable enterprise digital platforms.</p>
              </div>
              <div className="mega-pillar">
                <span className="pillar-tag">COMMUNITY</span>
                <h4>Empowering Generations</h4>
                <p>Investing in education, creative skill development, and sustainable economic impact.</p>
              </div>
            </div>
          </div>
        )}



        {/* Careers Mega Menu */}
        {activeMegaMenu === 'careers' && (
          <div 
            className="paidhu-mega-dropdown"
            onMouseEnter={() => setActiveMegaMenu('careers')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="mega-dropdown-grid simple">
              <div className="mega-pillar">
                <span className="pillar-tag">PEOPLE</span>
                <h4>Life at Paidhu</h4>
                <p>Collaborate with ambitious founders, chefs, software engineers, and creative thinkers.</p>
                <a href="#careers" onClick={(e) => { e.preventDefault(); scrollToSection('careers'); setActiveMegaMenu(null); }} className="mega-cta-link">
                  Explore Opportunities →
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mega Menu Cinema Backdrop Scrim (Prevents ghosting / background bleed) */}
      {activeMegaMenu && (
        <div 
          className="paidhu-mega-backdrop-scrim" 
          onClick={() => setActiveMegaMenu(null)}
          onMouseEnter={() => setActiveMegaMenu(null)}
        />
      )}

      {/* View Routing: Newsroom vs Careers vs Home */}
      {currentView === 'newsroom' ? (
        <main className="newsroom-page-view pt-[76px]">
          <Newsroom 
            onNavigateHome={() => {
              setCurrentView('home');
              window.location.hash = 'home';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenContact={() => setShowContactModal(true)}
            onOpenSearch={() => setShowSearchModal(true)}
            onOpenLanguage={() => setShowContactModal(true)}
          />
        </main>
      ) : currentView === 'careers' ? (
        <main className="careers-page-view pt-[76px]">
          <Careers 
            onNavigateHome={() => {
              setCurrentView('home');
              window.location.hash = 'home';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateNewsroom={() => {
              setCurrentView('newsroom');
              window.location.hash = 'newsroom';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenContact={() => setShowContactModal(true)}
          />
        </main>
      ) : (
        <>
          {/* Hero Showcase (Black, White & Gold Luxury Experience) */}
          <section id="home" className="paidhu-hero-stage">
        {/* Natural Photography Backgrounds */}
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`hero-slide-layer ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${slide.bgImage})`,
              '--mobile-pos': slide.mobilePosition || 'center center'
            }}
          />
        ))}

        {/* Atmospheric Gradient & Vignette (Guarantees zero ghosting & pristine contrast) */}
        <div className="hero-atmosphere-vignette" />
        <div className="hero-gold-ambient-spot" />

        {/* Hero Narrative Block (Modern Luxury 2026 UI) - Hidden if slide has no wording */}
        {Boolean(heroSlides[currentSlide].title || heroSlides[currentSlide].subtitle || heroSlides[currentSlide].badge) && (
          <div className="hero-narrative-container">
            {heroSlides[currentSlide].badge && (
              <div className="hero-badge-pill">
                <span className="gold-spark-pulse" />
                <span>{heroSlides[currentSlide].badge}</span>
              </div>
            )}
            
            {heroSlides[currentSlide].title && (
              <h1 className="hero-luxury-title">
                {heroSlides[currentSlide].title.includes('.') ? (
                  <>
                    <span className="title-lead">{heroSlides[currentSlide].title.split('.')[0]}.</span>
                    <span className="title-gold-accent">{heroSlides[currentSlide].title.split('.')[1]}</span>
                  </>
                ) : (
                  <span>{heroSlides[currentSlide].title}</span>
                )}
              </h1>
            )}
            
            {heroSlides[currentSlide].subtitle && (
              <div className="hero-editorial-quote">
                <div className="gold-accent-rail" />
                <p className="hero-editorial-text">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>
            )}
            
            {heroSlides[currentSlide].buttonText && (
              <div className="hero-action-cluster">
                <button 
                  className="hero-primary-btn"
                  onClick={() => setShowContactModal(true)}
                >
                  <span>{heroSlides[currentSlide].buttonText}</span>
                  <span className="arrow-glyph">→</span>
                </button>

                {heroSlides[currentSlide].secondaryText && (
                  <button 
                    className="hero-secondary-btn"
                    onClick={nextSlide}
                  >
                    <span>{heroSlides[currentSlide].secondaryText}</span>
                  </button>
                )}
              </div>
            )}

            {/* Micro-Metrics Live Ribbon */}
            {heroSlides[currentSlide].metrics && heroSlides[currentSlide].metrics.length > 0 && (
              <div className="hero-metrics-strip">
                {heroSlides[currentSlide].metrics.map((metric, mIdx, arr) => (
                  <React.Fragment key={mIdx}>
                    <div className="hero-metric-chip">
                      <span className="metric-chip-dot" />
                      <span className="metric-chip-label">{metric}</span>
                    </div>
                    {mIdx < arr.length - 1 && <div className="hero-metric-divider" />}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Right Vertical Navigation Rail */}
        <div className="hero-vertical-navigation">
          <div className="vertical-nav-track">
            {rightTabs.map((tab, idx) => {
              const isSelected = currentSlide === idx;
              return (
                <button
                  key={tab.id}
                  className={`vertical-nav-tab ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSlideChange(idx)}
                  title={tab.label}
                >
                  <span className="tab-text">{tab.label}</span>
                  <span className="tab-pill" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination & Progress Dock (Tata-grade Responsive Architecture) */}
        <div className="hero-pagination-dock">
          {/* Centered Progress Tracks (Prominent centered row on mobile; inline on desktop) */}
          <div className="dock-progress-tracks">
            {heroSlides.map((slide, idx) => (
              <button 
                key={slide.id} 
                className={`progress-bar-slot ${idx === currentSlide ? 'active' : idx < currentSlide ? 'done' : ''}`}
                onClick={() => handleSlideChange(idx)}
                title={slide.title || `Slide ${idx + 1}`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className="progress-fill" />
              </button>
            ))}
          </div>

          <div className="dock-action-row">
            <div className="dock-left-controls">
              <button 
                className="dock-icon-btn" 
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? "Pause auto-slider" : "Play auto-slider"}
                aria-label={isPlaying ? "Pause auto-slider" : "Play auto-slider"}
              >
                {isPlaying ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16"/>
                    <rect x="14" y="4" width="4" height="16"/>
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                )}
              </button>

              <div className="dock-slide-counter">
                <span className="current-num">0{currentSlide + 1}</span>
                <span className="divider">/</span>
                <span className="total-num">0{heroSlides.length}</span>
              </div>
            </div>

            <div className="dock-right-arrows">
              <button className="dock-arrow-btn" onClick={prevSlide} title="Previous Slide" aria-label="Previous Slide">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button className="dock-arrow-btn" onClick={nextSlide} title="Next Slide" aria-label="Next Slide">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>

              <div 
                className="scroll-down-invitation"
                onClick={() => {
                  const el = document.getElementById('in-the-news-home');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                title="Scroll to explore"
              >
                <span className="scroll-caption">EXPLORE</span>
                <div className="scroll-chevrons">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="chev-sub">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="chev-sub2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: IN THE NEWS (Exact Tata.com Home Reference)
         ========================================================================= */}
      <div id="in-the-news-home">
        <PaidhuHomeNews 
          onNavigateNewsroom={() => {
            setCurrentView('newsroom');
            window.location.hash = 'newsroom';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setShowContactModal(true)}
        />
      </div>

      {/* =========================================================================
          SECTION 3: CAREERS SHOWCASE (Exact Tata.com Home Reference)
         ========================================================================= */}
      <PaidhuHomeCareers 
        onNavigateCareers={() => {
          setCurrentView('careers');
          window.location.hash = 'careers';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* =========================================================================
          SECTION 4: OUR BRANDS SHOWCASE (Exact Tata.com Home Reference)
         ========================================================================= */}
      <PaidhuHomeBrands />

      {/* =========================================================================
          SECTION 5: CORPORATE LUXURY FOOTER
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
                <li><a href="https://paidhuethicalfoods.com" target="_blank" rel="noopener noreferrer">Medley Teas</a></li>
                <li><a href="https://paidhuethicalfoods.com" target="_blank" rel="noopener noreferrer">Bloom Cookies</a></li>
                <li><a href="https://paidhusaffron.com" target="_blank" rel="noopener noreferrer">Paidhu Saffron</a></li>
                <li><a href="https://viyara.co.in" target="_blank" rel="noopener noreferrer">Viyara Enterprise Tech</a></li>
              </ul>
            </div>

            {/* Col 2: Community */}
            <div className="paidhu-nr-footer-col">
              <h4 className="paidhu-nr-footer-heading">Community</h4>
              <ul className="paidhu-nr-footer-list">
                <li><a href="#newsroom" onClick={() => { setCurrentView('newsroom'); window.location.hash = 'newsroom'; }}>Just B Happy Farmer Network</a></li>
                <li><a href="#careers" onClick={() => { setCurrentView('careers'); window.location.hash = 'careers'; }}>Project Malar (Women in Agri)</a></li>
                <li><a href="#newsroom" onClick={() => { setCurrentView('newsroom'); window.location.hash = 'newsroom'; }}>Pesticide-Free Flower Cultivation</a></li>
                <li><a href="#newsroom" onClick={() => { setCurrentView('newsroom'); window.location.hash = 'newsroom'; }}>Clean Food Education & Recipes</a></li>
                <li><a href="#newsroom" onClick={() => { setCurrentView('newsroom'); window.location.hash = 'newsroom'; }}>Regenerative Soil Stewardship</a></li>
              </ul>
            </div>

            {/* Col 3: About */}
            <div className="paidhu-nr-footer-col">
              <h4 className="paidhu-nr-footer-heading">About Us</h4>
              <ul className="paidhu-nr-footer-list">
                <li><a href="#home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>The Paidhu Vision</a></li>
                <li><a href="#home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Executive Leadership</a></li>
                <li><a href="#home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Governance & Quality Standards</a></li>
                <li><a href="#newsroom" onClick={() => { setCurrentView('newsroom'); window.location.hash = 'newsroom'; }}>2028 Sustainability Charter</a></li>
                <li><a href="#careers" onClick={() => { setCurrentView('careers'); window.location.hash = 'careers'; }}>Equal Opportunity Statement</a></li>
              </ul>
            </div>

            {/* Col 4: Newsletter & Inquiries */}
            <div className="paidhu-nr-footer-col">
              <h4 className="paidhu-nr-footer-heading">Stay Connected</h4>
              <p className="paidhu-nr-footer-subtext">
                Subscribe to receive verified Paidhu press releases, botanical breakthroughs, and corporate dispatches.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Paidhu Newsroom dispatches.'); }} className="paidhu-nr-newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your corporate email" 
                  className="paidhu-nr-newsletter-input"
                  required
                />
                <button type="submit" className="paidhu-nr-newsletter-btn" aria-label="Subscribe">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </form>

              <div className="paidhu-nr-social-row">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="paidhu-nr-social-icon" aria-label="X / Twitter">𝕏</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="paidhu-nr-social-icon" aria-label="LinkedIn">in</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="paidhu-nr-social-icon" aria-label="Instagram">📸</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="paidhu-nr-social-icon" aria-label="YouTube">▶</a>
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
              <a href="#privacy" onClick={() => setShowContactModal(true)}>Privacy Policy</a>
              <span className="paidhu-nr-footer-sep">•</span>
              <a href="#terms" onClick={() => setShowContactModal(true)}>Terms of Use</a>
              <span className="paidhu-nr-footer-sep">•</span>
              <a href="#contact" onClick={() => setShowContactModal(true)}>Media Contact</a>
            </div>
          </div>
        </div>
      </footer>
        </>
      )}

      {/* Contact Modal Drawer */}
      {showContactModal && (
        <div className="paidhu-modal-backdrop" onClick={() => setShowContactModal(false)}>
          <div className="paidhu-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <div>
                <span className="modal-kicker">CONNECT WITH US</span>
                <h3 className="modal-title">Partner with Paidhu Group</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setShowContactModal(false)}>✕</button>
            </div>
            {formStatus && (
              <div className={`modal-status-alert ${formStatus.type}`}>
                {formStatus.text}
              </div>
            )}
            <form onSubmit={handleContactSubmit} className="paidhu-contact-form">
              <div className="input-field-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Enter your full name"
                />
              </div>
              <div className="input-field-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="name@company.com"
                />
              </div>
              <div className="input-field-group">
                <label>Your Inquiry or Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="How can we assist or collaborate with you?"
                ></textarea>
              </div>
              <button type="submit" className="modal-submit-btn" disabled={submitting}>
                {submitting ? 'Sending Transmission...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {showSearchModal && (
        <div className="paidhu-modal-backdrop" onClick={() => setShowSearchModal(false)}>
          <div className="paidhu-search-card" onClick={(e) => e.stopPropagation()}>
            <div className="search-bar-row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search Paidhu brands, products, or philosophy..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="search-input-field"
              />
              <button className="modal-close-btn" onClick={() => setShowSearchModal(false)}>✕</button>
            </div>
            <div className="search-results-list">
              {searchedBrands.length > 0 ? (
                searchedBrands.map(b => (
                  <a key={b.id} href={b.url} target="_blank" rel="noopener noreferrer" className="search-result-row">
                    <img src={b.logo} alt={b.name} className="search-thumb" />
                    <div className="search-meta">
                      <h4>{b.name}</h4>
                      <p>{b.description.slice(0, 90)}...</p>
                    </div>
                    <span className="search-link-arrow">↗</span>
                  </a>
                ))
              ) : (
                <div className="no-results-msg">No matching Paidhu brands found for "{searchQuery}".</div>
              )}
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}

export default App;
