import React, { useState, useEffect } from 'react';
import './PaidhuHomeCareers.css';
import { ArrowRight, Users, ShieldAlert, X, ShieldCheck } from 'lucide-react';

export const PaidhuHomeCareers = ({ onNavigateCareers }) => {
  // 1. Featured Jobs Cycler State (Card 4)
  const [jobSlide, setJobSlide] = useState(0);

  const jobSlides = [
    [
      {
        id: 1,
        title: 'E-Commerce Executive (Min 2 Yrs Exp)',
        location: 'Paidhu Group & Floffi D2C, Coimbatore / Hybrid'
      },
      {
        id: 2,
        title: 'Social Media Executive (Min 2 Yrs Exp)',
        location: 'Paidhu Creative Studio, Chennai / Hybrid'
      }
    ],
    [
      {
        id: 3,
        title: 'Business Development Officer (Min 2 Yrs Exp)',
        location: 'Paidhu Group Corporate, Bengaluru / Coimbatore'
      },
      {
        id: 4,
        title: 'E-Commerce Marketplace Lead (Min 2 Yrs Exp)',
        location: 'Paidhu D2C & Multi-Brand, Hybrid'
      }
    ]
  ];

  // Auto-advance featured jobs
  useEffect(() => {
    const timer = setInterval(() => {
      setJobSlide(prev => (prev + 1) % jobSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [jobSlides.length]);

  // 2. Scam Disclaimer Modal State
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <section className="paidhu-hc-section" id="careers-home">
      <div className="paidhu-hc-container">
        
        {/* Floating "Careers" Pill (Tata.com Home Reference) */}
        <div className="paidhu-hc-header-pill">
          <h3 className="paidhu-hc-header-title">Careers</h3>
        </div>

        {/* 4-Card Asymmetric Grid */}
        <div className="paidhu-hc-grid">

          {/* CARD 1: LEFT TALL CARD (Beware of Job Scams - Spans Rows 1 & 2) */}
          {/* CARD 1: TALL LEFT CARD (Culture & Hiring Opportunities) */}
          <div 
            className="paidhu-hc-card-tall"
            onClick={onNavigateCareers}
            role="button"
            tabIndex={0}
            aria-label="Explore careers at Paidhu"
          >
            <div className="paidhu-hc-scam-imgwrap">
              <img 
                src="/assets/careers_scam_advisory.jpg" 
                alt="Paidhu Careers Culture & Opportunities" 
                className="paidhu-hc-scam-img"
              />
              <div className="paidhu-hc-scam-notch" />
            </div>

            <div className="paidhu-hc-scam-body">
              <div>
                <div className="paidhu-hc-scam-kicker">CAREERS</div>
                <h4 className="paidhu-hc-scam-title">Join Our Growing Team</h4>
                <p className="paidhu-hc-scam-quote">
                  Build the future of ethical consumer brands, digital commerce, and sustainable food innovation with Paidhu.{' '}
                  <span className="paidhu-hc-disclaimer-btn">
                    View openings.
                  </span>
                </p>
              </div>

              <div className="paidhu-hc-scam-footer">
                <button 
                  className="paidhu-hc-arrow-btn" 
                  aria-label="Explore Careers at Paidhu"
                  onClick={onNavigateCareers}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2: TOP-RIGHT WIDE CARD (For Students & Researchers) */}
          <div 
            className="paidhu-hc-card-student"
            onClick={onNavigateCareers}
            role="button"
            tabIndex={0}
            aria-label="Explore Paidhu Young Innovators Challenge"
          >
            <div className="paidhu-hc-student-content">
              <div>
                <div className="paidhu-hc-student-kicker">FOR STUDENTS & RESEARCHERS</div>
                <div className="paidhu-hc-student-badge-title">
                  <h4 className="paidhu-hc-student-title">
                    Paidhu Young Innovators Challenge 2026
                  </h4>
                </div>
              </div>

              <p className="paidhu-hc-student-desc">
                <strong>#FloraToFood</strong> Exploring sustainable edible flower science and clean food solutions. Good luck to the participants!
              </p>
            </div>

            <div className="paidhu-hc-student-media">
              <img 
                src="/assets/careers_student_challenge.png" 
                alt="Paidhu Young Innovator" 
                className="paidhu-hc-student-img"
              />
              <span className="paidhu-hc-doodle-tag paidhu-hc-doodle-create">CREATE</span>
              <span className="paidhu-hc-doodle-tag paidhu-hc-doodle-step">STEPPING UP</span>

              <div className="paidhu-hc-student-arrow">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>

          {/* CARD 3: BOTTOM-LEFT CARD (In Numbers) */}
          <div 
            className="paidhu-hc-card-numbers"
            onClick={onNavigateCareers}
            role="button"
            tabIndex={0}
            aria-label="View Paidhu Purity & Standards"
          >
            <div className="paidhu-hc-numbers-kicker">IN NUMBERS</div>

            <div className="paidhu-hc-numbers-body">
              <ShieldCheck className="paidhu-hc-numbers-icon" strokeWidth={1.5} />
              <div className="paidhu-hc-numbers-stat">100%</div>
              <div className="paidhu-hc-numbers-label">
                Certified Single-Origin & Pesticide-Free Harvest
              </div>
            </div>

            <div className="paidhu-hc-numbers-footer">
              <button className="paidhu-hc-arrow-btn" aria-label="Explore Careers">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* CARD 4: BOTTOM-RIGHT CARD (Featured Jobs - Paidhu Brand Styling) */}
          <div 
            className="paidhu-hc-card-jobs"
            onClick={onNavigateCareers}
            role="button"
            tabIndex={0}
            aria-label="View All Open Careers at Paidhu"
          >
            <div>
              <div className="paidhu-hc-jobs-kicker">CAREERS</div>
              <h4 className="paidhu-hc-jobs-title">Featured Jobs</h4>

              <div className="paidhu-hc-jobs-list">
                {jobSlides[jobSlide].map(job => (
                  <div key={job.id} className="paidhu-hc-job-item">
                    <div className="paidhu-hc-job-name">{job.title}</div>
                    <div className="paidhu-hc-job-loc">{job.location}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="paidhu-hc-jobs-footer">
              <div className="paidhu-hc-jobs-dots">
                {jobSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`paidhu-hc-dot ${idx === jobSlide ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setJobSlide(idx);
                    }}
                    aria-label={`Go to job slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="paidhu-hc-jobs-arrow">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* RECRUITMENT FRAUD & JOB SCAM DISCLAIMER MODAL */}
      {showDisclaimer && (
        <div 
          className="paidhu-hc-modal-overlay"
          onClick={() => setShowDisclaimer(false)}
        >
          <div 
            className="paidhu-hc-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="paidhu-hc-modal-close"
              onClick={() => setShowDisclaimer(false)}
              aria-label="Close Disclaimer Modal"
            >
              <X size={20} />
            </button>

            <div className="paidhu-hc-modal-kicker">OFFICIAL ADVISORY</div>
            <h3 className="paidhu-hc-modal-title">Beware of Fraudulent Job Offers</h3>

            <div className="paidhu-hc-modal-body">
              <p>
                It has come to our attention that unscrupulous individuals or unauthorized agencies are issuing fake employment appointment letters and fraudulent job interview invitations purportedly from <strong>Paidhu Ethical Foods</strong>, <strong>Floffi</strong>, <strong>Paidhu Saffron</strong>, and <strong>VIYARA Tech</strong>.
              </p>

              <div className="paidhu-hc-modal-alert">
                Paidhu follows a strict zero-tolerance policy regarding recruitment fraud. We NEVER charge or accept any security deposit, interview processing fee, laptop deposit, or registration charges from job seekers.
              </div>

              <p>
                All official recruitment communications are initiated solely from verified domain email addresses (<strong>@paidhu.com</strong> or <strong>@paidhuethicalfoods.com</strong>).
              </p>
              <p>
                If you encounter any suspicious job offer demanding money or personal financial details in exchange for an employment opportunity at Paidhu, please report immediately to our ethics desk at <strong>careers@paidhu.com</strong>.
              </p>

              <button 
                className="paidhu-hc-modal-btn"
                onClick={() => setShowDisclaimer(false)}
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
