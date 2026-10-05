import React from 'react'
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
    { label: 'About Us', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Join as Caregiver', href: '#caregiver' },
    { label: 'Our Team', href: '#about' },
    { label: 'Careers', href: '#caregiver' },
    { label: 'Blog', href: '#' },
  ],
  Support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'FAQs', href: '#' },
    { label: 'Insurance & Billing', href: '#' },
    { label: 'Patient Rights', href: '#' },
    { label: 'Feedback', href: '#contact' },
    { label: 'Emergency Line', href: 'tel:+919110581825' },
  ],
}

export default function Footer({ onLegalClick }) {
  const year = new Date().getFullYear()

  const scrollTo = (e, href) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = href
    }
  }

  return (
    <footer className="footer" role="contentinfo">
      {/* CTA Banner */}
      <div className="footer__cta-banner">
        <div className="container footer__cta-inner">
          <div>
            <h3>Ready to Get Started?</h3>
            <p>Contact us today for a free, no-obligation home care assessment.</p>
          </div>
          <div className="footer__cta-actions">
            <a href="tel:+919110581825" className="btn-primary footer__cta-btn">
              <FiPhone size={16} /> Call +91 91105 81825
            </a>
            <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="btn-outline footer__cta-btn">
              Request Online
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="footer__logo" aria-label="Home Care Vite Home">
              <img src={logo} alt="Home Care Vite Logo" />
            </a>
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
                  <a href="#services" onClick={(e) => scrollTo(e, '#services')} className="footer__link">
                    {s}
                  </a>
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
                  <a href={l.href} onClick={(e) => scrollTo(e, l.href)} className="footer__link">
                    {l.label}
                  </a>
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
                  <a href={l.href} onClick={(e) => scrollTo(e, l.href)} className="footer__link">
                    {l.label}
                  </a>
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
            <button onClick={() => onLegalClick('privacy')}   className="footer__legal-link">Privacy Policy</button>
            <button onClick={() => onLegalClick('terms')}      className="footer__legal-link">Terms of Service</button>
            <button onClick={() => onLegalClick('accessibility')} className="footer__legal-link">Accessibility</button>
            <button onClick={() => onLegalClick('hipaa')}     className="footer__legal-link">Health Info Notice</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
