import React, { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'
import { MdAccessTime } from 'react-icons/md'
import './Contact.css'

const FORMSPREE_ID = 'mrpbngpg'

const contactInfo = [
  {
    icon: <FiPhone size={22} />,
    label: 'Phone',
    value: '+91 91105 81825',
    sub: 'Available 24/7',
    href: 'tel:+919110581825',
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
                <p>For immediate nursing assistance, call us directly at <a href="tel:+919110581825">+91 91105 81825</a></p>
              </div>
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
