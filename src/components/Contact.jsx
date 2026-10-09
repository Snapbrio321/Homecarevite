import React, { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle, FiStar } from 'react-icons/fi'
import { MdAccessTime } from 'react-icons/md'
import './Contact.css'

const FORMSPREE_ID = 'mrpbngpg'
const GOOGLE_REVIEW_LINK = 'https://g.page/r/CVnJbcQE1AKIEAE/review'
const GOOGLE_MAPS_EMBED = 'https://maps.google.com/maps?q=FF+3+backside+Vedanta+Hospital+PM+Palem+Madhurawada+Visakhapatnam+530045&output=embed'

const contactInfo = [
  {
    icon: <FiPhone size={22} />,
    label: 'Phone',
    value: '+91 86390 57903',
    sub: 'Available 24/7',
    href: 'tel:+918639057903',
  },
  {
    icon: <FiMail size={22} />,
    label: 'Email',
    value: 'homecarevite@gmail.com',
    sub: 'We reply within 1 hour',
    href: 'mailto:homecarevite@gmail.com',
  },
  {
    icon: <FiMapPin size={22} />,
    label: 'Service Area',
    value: 'All Areas of Visakhapatnam',
    sub: 'MVP Colony, Dwaraka Nagar, Gajuwaka, Rushikonda, Madhurawada & more',
    href: '#',
  },
  {
    icon: <MdAccessTime size={22} />,
    label: 'Hours',
    value: '24 Hours, 7 Days',
    sub: 'Including holidays',
    href: '#',
  },
]

const services = [
  'Post-Surgery Care', 'Elderly Care', 'Cardiac Care',
  'Wound Care', 'Medication Management', 'Palliative Care',
  'Physiotherapy', 'Mother & Baby Care', 'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          'Full Name':      form.name,
          'Phone Number':   form.phone,
          'Email':          form.email || 'Not provided',
          'Service Needed': form.service,
          'Message':        form.message || 'No additional details',
          '_subject':       `New Care Request from ${form.name} — Home Care Vite`,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        const data = await res.json()
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact section-padding" aria-labelledby="contact-heading">
      <div className="container">
        {/* Header */}
        <div className="contact__header">
          <div className="badge">Contact Us</div>
          <h2 id="contact-heading" className="section-title">
            Home Care Nursing Services in Visakhapatnam
          </h2>
          <p className="section-subtitle">
            Book certified home care nursing services anywhere in Vizag. Call us or fill the form — our care coordinator will contact you within one hour for a free home assessment.
          </p>
        </div>

        <div className="contact__inner">
          {/* Left: Info */}
          <div className="contact__info">
            <h3 className="contact__info-title">Home Care Nursing Services Vizag</h3>
            <p className="contact__info-sub">
              We provide home care nursing services across all areas of Visakhapatnam. Call us now and get a certified nurse at your home today.
            </p>

            <div className="contact__cards" role="list">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="contact-card"
                  role="listitem"
                  aria-label={`${c.label}: ${c.value}`}
                >
                  <div className="contact-card__icon" aria-hidden="true">{c.icon}</div>
                  <div>
                    <p className="contact-card__label">{c.label}</p>
                    <p className="contact-card__value">{c.value}</p>
                    <p className="contact-card__sub">{c.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Emergency notice */}
            <div className="contact__emergency" role="alert">
              <FiPhone size={18} />
              <div>
                <strong>Medical Emergency?</strong>
                <p>For immediate nursing assistance, call us directly at <a href="tel:+918639057903">+91 86390 57903</a></p>
              </div>
            </div>

            {/* Google Review Button */}
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__review-btn"
              aria-label="Leave a Google Review for Home Care Vite"
            >
              <div className="contact__review-btn-left">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div>
                  <p className="contact__review-title">Rate us on Google</p>
                  <div className="contact__review-stars">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                    ))}
                    <span>5.0 · 7 reviews</span>
                  </div>
                </div>
              </div>
              <span className="contact__review-cta">Write a Review →</span>
            </a>

            {/* Google Maps Embed */}
            <div className="contact__map">
              <iframe
                title="Home Care Vite Location — Visakhapatnam"
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '14px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=Home+Care+Vite+PM+Palem+Madhurawada+Visakhapatnam"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-link"
              >
                <FiMapPin size={14} /> View on Google Maps
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success" role="status" aria-live="polite">
                <div className="contact__success-icon">
                  <FiCheckCircle size={48} />
                </div>
                <h3>Thank You!</h3>
                <p>Your request has been received. A care coordinator will call you within <strong>one hour</strong> to discuss your needs.</p>
                <button
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} aria-label="Care request form" noValidate>
                <div className="contact__form-header">
                  <h3>Request a Free Consultation</h3>
                  <p>Fill out the form and we'll be in touch shortly</p>
                </div>

                <div className="contact__form-grid">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group form-group--full">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group form-group--full">
                    <label htmlFor="contact-service">Service Required <span aria-hidden="true">*</span></label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select the type of care needed</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group form-group--full">
                    <label htmlFor="contact-message">Additional Details</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about the patient's condition, care needs, or any other details..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {error && (
                  <p className="contact__error" role="alert">
                    ⚠️ {error}
                  </p>
                )}

                <button
                  type="submit"
                  className={`btn-primary contact__submit${loading ? ' loading' : ''}`}
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? (
                    <span className="contact__spinner" aria-hidden="true" />
                  ) : (
                    <><FiSend size={16} /> Send Request — It's Free</>
                  )}
                </button>

                <p className="contact__privacy">
                  <FiCheckCircle size={12} color="var(--green)" />
                  Your information is private and secure. We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

