import React, { useState } from 'react'
import { FiPhone, FiArrowRight, FiCheckCircle, FiStar } from 'react-icons/fi'
import { MdHealthAndSafety } from 'react-icons/md'
import './Hero.css'

const FORMSPREE_ID = 'mrpbngpg'

const trustBadges = [
  'Certified Home Care Nursing in Vizag',
  '24/7 Home Care Nursing Services',
  'All Areas of Visakhapatnam Covered',
]

export default function Hero() {
  const [heroForm, setHeroForm] = useState({ name: '', phone: '', service: '' })
  const [heroSubmitted, setHeroSubmitted] = useState(false)
  const [heroLoading, setHeroLoading] = useState(false)

  const handleHeroChange = (e) => {
    const key = e.target.id.replace('hero-', '')
    setHeroForm(prev => ({ ...prev, [key]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setHeroLoading(true)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          'Full Name':      heroForm.name,
          'Phone Number':   heroForm.phone,
          'Service Needed': heroForm.service || 'Not specified',
          '_subject':       `Callback Request from ${heroForm.name} — Home Care Vite`,
          'Form Source':    'Hero Quick Callback Form',
        }),
      })
      if (res.ok) setHeroSubmitted(true)
    } catch {
      // silent fail
    } finally {
      setHeroLoading(false)
    }
  }

  return (
    <section
      id="home"
      className="hero"
      aria-label="Home Care Vite — Professional Home Nursing Services in Visakhapatnam"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      {/* Background shapes */}
      <div className="hero__bg-shape hero__bg-shape--1" aria-hidden="true" />
      <div className="hero__bg-shape hero__bg-shape--2" aria-hidden="true" />
      <div className="hero__bg-shape hero__bg-shape--3" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Left: Content */}
        <div className="hero__content">
          <div className="badge">
            <MdHealthAndSafety size={14} />
            Trusted Home Nursing Care
          </div>

          <h1 className="hero__title" itemProp="headline">
            Home Care Nursing Services<br />
            <span className="hero__title-accent">in Visakhapatnam (Vizag)</span>
          </h1>

          <p className="hero__desc" itemProp="description">
            Home Care Vite provides professional home care nursing services across all areas of Visakhapatnam — MVP Colony, Dwaraka Nagar, Gajuwaka, Rushikonda, Madhurawada & more. Certified nurses delivering hospital-quality care at your home in Vizag, 24/7.
          </p>

          {/* Trust badges */}
          <ul className="hero__badges" aria-label="Key features">
            {trustBadges.map((b) => (
              <li key={b} className="hero__badge">
                <FiCheckCircle className="hero__badge-icon" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hero__ctas">
            <a href="/contact" className="btn-primary hero__cta-main">
              Get Free Consultation
              <FiArrowRight size={18} />
            </a>
            <a href="tel:+919110581825" className="btn-outline hero__cta-call">
              <FiPhone size={18} />
              +91 91105 81825
            </a>
          </div>

          {/* Social proof */}
          <div className="hero__social-proof">
            <div className="hero__avatars" aria-hidden="true">
              {[
                { name: 'Venkat',  bg: '#1B3F8B' },
                { name: 'Karthik', bg: '#3A7D2C' },
                { name: 'Lakshmi', bg: '#2a5ab5' },
                { name: 'Suresh',  bg: '#4a9e38' },
              ].map((p, i) => (
                <span
                  key={i}
                  className="hero__avatar"
                  style={{ '--i': i, background: p.bg }}
                  title={p.name}
                >
                  {p.name.slice(0, 2)}
                </span>
              ))}
            </div>
            <div className="hero__proof-text">
              <div className="hero__stars" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => <FiStar key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p><strong>500+</strong> families across Visakhapatnam trust us</p>
            </div>
          </div>
        </div>

        {/* Right: Card */}
        <div className="hero__card-wrap" aria-hidden="true">
          <div className="hero__card">
            <div className="hero__card-header">
              <div className="hero__card-icon">
                <MdHealthAndSafety size={32} color="var(--white)" />
              </div>
              <div>
                <p className="hero__card-label">Request a Nurse</p>
                <p className="hero__card-sub">Quick & easy scheduling</p>
              </div>
            </div>

            <form className="hero__form" onSubmit={handleSubmit} aria-label="Quick callback form">
              {heroSubmitted ? (
                <div className="hero__form-success">
                  <FiCheckCircle size={32} color="var(--green)" />
                  <p><strong>Request Received!</strong><br />We'll call you back shortly.</p>
                </div>
              ) : (
                <>
                  <div className="hero__form-group">
                    <label htmlFor="hero-name">Full Name</label>
                    <input id="hero-name" type="text" placeholder="Your full name"
                      value={heroForm.name} onChange={handleHeroChange} required />
                  </div>
                  <div className="hero__form-group">
                    <label htmlFor="hero-phone">Phone Number</label>
                    <input id="hero-phone" type="tel" placeholder="Your phone number"
                      value={heroForm.phone} onChange={handleHeroChange} required />
                  </div>
                  <div className="hero__form-group">
                    <label htmlFor="hero-service">Service Needed</label>
                    <select id="hero-service" value={heroForm.service} onChange={handleHeroChange}>
                      <option value="">Select a service</option>
                      <option>Post-Surgery Care</option>
                      <option>Elderly Care</option>
                      <option>Wound Care</option>
                      <option>Medication Management</option>
                      <option>Physiotherapy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-secondary hero__form-btn" disabled={heroLoading}>
                    {heroLoading ? <span className="hero__form-spinner" /> : <>Request a Callback <FiArrowRight size={16} /></>}
                  </button>
                </>
              )}
            </form>

            <p className="hero__card-note">
              <FiCheckCircle size={13} color="var(--green)" /> Free assessment · No commitment required
            </p>
          </div>

          {/* Floating stats */}
          <div className="hero__stat hero__stat--1">
            <span className="hero__stat-num">2023</span>
            <span className="hero__stat-label">Est. Year</span>
          </div>
          <div className="hero__stat hero__stat--2">
            <span className="hero__stat-num">98%</span>
            <span className="hero__stat-label">Patient Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--white)" />
        </svg>
      </div>
    </section>
  )
}

