import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import logo from '../assets/logo.jpeg'
import './Footer.css'

const footerLinks = {
  Services: [
    'Post-Surgery Care', 'Elderly Care', 'Cardiac Care',
    'Wound Care', 'Medication Management', 'Palliative Care',
    'Physiotherapy', 'Mother & Baby Care',
  ],
  Company: [
    { label: 'About Us',        to: '/about'      },
    { label: 'Why Choose Us',   to: '/why-us'     },
    { label: 'Join as Caregiver', to: '/caregivers' },
    { label: 'Our Team',        to: '/about'      },
    { label: 'Careers',         to: '/caregivers' },
    { label: 'Blog',            to: '/'           },
  ],
  Support: [
    { label: 'Contact Us',         to: '/contact'             },
    { label: 'FAQs',               to: '/contact'             },
    { label: 'Insurance & Billing',to: '/contact'             },
    { label: 'Patient Rights',     to: '/contact'             },
    { label: 'Feedback',           to: '/contact'             },
    { label: 'Emergency Line',     to: 'tel:+919110581825', external: true },
  ],
}

export default function Footer({ onLegalClick }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      {/* CTA Banner */}
      <div className="footer__cta-banner">
        <div className="container footer__cta-inner">
          <div>
            <h3>Ready to Get Started?</h3>
            <p>Contact us today for a free, no-obligation home care nursing assessment in Visakhapatnam.</p>
          </div>
          <div className="footer__cta-actions">
            <a href="tel:+919110581825" className="btn-primary footer__cta-btn">
              <FiPhone size={16} /> Call +91 91105 81825
            </a>
            <Link to="/contact" className="btn-outline footer__cta-btn">
              Request Online
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="container footer__grid">

          {/* Brand column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Home Care Vite Home">
              <img src={logo} alt="Home Care Vite Logo" />
            </Link>
            <p className="footer__brand-desc">
              Visakhapatnam's trusted home care nursing services since 2023. Certified nurses serving MVP Colony, Dwaraka Nagar, Gajuwaka, Rushikonda, Madhurawada & all areas of Vizag — 24/7.
            </p>
            <div className="footer__contact-quick">
              <a href="tel:+919110581825" className="footer__quick-link">
                <FiPhone size={14} /> +91 91105 81825
              </a>
              <a href="mailto:homecarevite@gmail.com" className="footer__quick-link">
                <FiMail size={14} /> homecarevite@gmail.com
              </a>
              <span className="footer__quick-link">
                <FiMapPin size={14} /> Greater Visakhapatnam
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul>
              {footerLinks.Services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="footer__link">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul>
              {footerLinks.Company.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="footer__link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer__col">
            <h4 className="footer__col-title">Support</h4>
            <ul>
              {footerLinks.Support.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.to} className="footer__link">{l.label}</a>
                  ) : (
                    <Link to={l.to} className="footer__link">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Home Care Vite. All rights reserved.</p>
          <div className="footer__legal">
            <button onClick={() => onLegalClick('privacy')}        className="footer__legal-link">Privacy Policy</button>
            <button onClick={() => onLegalClick('terms')}           className="footer__legal-link">Terms of Service</button>
            <button onClick={() => onLegalClick('accessibility')}   className="footer__legal-link">Accessibility</button>
            <button onClick={() => onLegalClick('hipaa')}           className="footer__legal-link">Health Info Notice</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
