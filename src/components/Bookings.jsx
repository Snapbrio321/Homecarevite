import React, { useState } from 'react'
import { FiCheckCircle, FiArrowRight, FiSend, FiStar, FiInfo } from 'react-icons/fi'
import {
  PiHeartbeatDuotone, PiBandaidsDuotone, PiFirstAidKitDuotone,
  PiStethoscopeDuotone, PiPillDuotone, PiHandsPrayingDuotone,
  PiPersonSimpleRunDuotone, PiBabyDuotone,
} from 'react-icons/pi'
import { MdAccessTime, MdVerified } from 'react-icons/md'
import './Bookings.css'

const FORMSPREE_ID = 'mrpbngpg'

const plans = [
  {
    name: 'Basic Care',
    shift: '8 Hours / Day',
    price: '₹800',
    per: 'per day',
    color: 'navy',
    popular: false,
    desc: 'Ideal for patients needing daytime support and monitoring.',
    features: [
      'Certified nursing attendant',
      'Vital signs monitoring',
      'Medication reminders',
      'Personal hygiene assistance',
      'Basic wound dressing',
      'Daily care report',
    ],
  },
  {
    name: 'Standard Care',
    shift: '12 Hours / Day',
    price: '₹1,200',
    per: 'per day',
    color: 'green',
    popular: true,
    desc: 'Most popular — full daytime nursing care for post-surgery & elderly patients.',
    features: [
      'Registered Nurse (RN)',
      'Vital signs & health monitoring',
      'Medication administration',
      'Wound care & dressing',
      'Physiotherapy exercises',
      'Diet & nutrition guidance',
      'Doctor coordination',
      'Detailed care report',
    ],
  },
  {
    name: 'Premium Care',
    shift: '24 Hours / Day',
    price: '₹2,000',
    per: 'per day',
    color: 'navy',
    popular: false,
    desc: 'Round-the-clock nursing care — best for critical recovery & palliative care.',
    features: [
      '2 Nurses in rotation (12hr shifts)',
      'Continuous health monitoring',
      'IV / injections at home',
      'Catheter & tube care',
      'Emergency response',
      'Full medication management',
      'Physiotherapy home visit',
      'Family counselling support',
      'Daily doctor video consultation',
    ],
  },
]

const services = [
  // Core Nursing Services
  { icon: <PiFirstAidKitDuotone size={28} />,    name: 'Post-Surgery Care',                        price: '₹1,200 – ₹2,000',  per: '/day',      group: 'Nursing' },
  { icon: <PiStethoscopeDuotone size={28} />,    name: 'Elderly Care',                             price: '₹800 – ₹1,500',    per: '/day',      group: 'Nursing' },
  { icon: <PiHeartbeatDuotone size={28} />,      name: 'Cardiac Monitoring',                       price: '₹1,000 – ₹1,800',  per: '/day',      group: 'Nursing' },
  { icon: <PiBandaidsDuotone size={28} />,       name: 'Wound Care',                               price: '₹400 – ₹700',      per: '/visit',    group: 'Nursing' },
  { icon: <PiPillDuotone size={28} />,           name: 'Medication Management',                    price: '₹500 – ₹800',      per: '/day',      group: 'Nursing' },
  { icon: <PiHandsPrayingDuotone size={28} />,   name: 'Palliative Care',                          price: '₹1,500 – ₹2,500',  per: '/day',      group: 'Nursing' },
  { icon: <PiPersonSimpleRunDuotone size={28} />,name: 'Physiotherapy',                            price: '₹600 – ₹1,000',    per: '/session',  group: 'Nursing' },
  { icon: <PiBabyDuotone size={28} />,           name: 'Mother & Baby Care',                       price: '₹800 – ₹1,200',    per: '/day',      group: 'Nursing' },
  // Massage & Reflexology
  { icon: <PiHandsPrayingDuotone size={28} />,   name: 'Full Body Massage Therapy',                price: '₹1,500',           per: '/sitting',  group: 'Massage' },
  { icon: <PiHandsPrayingDuotone size={28} />,   name: 'Reflexology Therapy (Paralysis)',          price: '₹2,000',           per: '/sitting',  group: 'Massage' },
  { icon: <PiHandsPrayingDuotone size={28} />,   name: 'Foot Reflexology & Massage',               price: '₹1,500',           per: '/sitting',  group: 'Massage' },
  // Specialized
  { icon: <PiHeartbeatDuotone size={28} />,      name: 'Cardiac & Respiratory Support Therapy',   price: '₹2,500',           per: '/sitting',  group: 'Specialized' },
  // Hospital & Night Care
  { icon: <PiFirstAidKitDuotone size={28} />,    name: 'Night-Time Patient Attendant',             price: '₹2,000',           per: '/night',    group: 'Hospital' },
  // Infusion
  { icon: <PiBandaidsDuotone size={28} />,       name: 'Home IV Infusion Service',                 price: '₹1,500',           per: '/infusion', group: 'Infusion' },
]

const durations = ['1 Day', '3 Days', '1 Week', '2 Weeks', '1 Month', 'Ongoing']

// Smart durations based on service type
const getDurations = (serviceName) => {
  if (!serviceName) return ['— Select a service first —']

  // Per sitting services
  if ([
    'Full Body Massage Therapy',
    'Reflexology Therapy (Paralysis)',
    'Foot Reflexology & Massage',
    'Cardiac & Respiratory Support Therapy',
  ].includes(serviceName)) {
    return ['1 Sitting', '2 Sittings', '3 Sittings', '5 Sittings', '10 Sittings', 'Weekly Package', 'Monthly Package']
  }

  // Per night services
  if (serviceName === 'Night-Time Patient Attendant') {
    return ['1 Night', '2 Nights', '3 Nights', '1 Week (7 nights)', '2 Weeks', '1 Month', 'Ongoing']
  }

  // Per infusion services
  if (serviceName === 'Home IV Infusion Service') {
    return ['1 Infusion', '2 Infusions', '3 Infusions', '5 Infusions', '10 Infusions', 'As Prescribed']
  }

  // Per visit services
  if (serviceName === 'Wound Care') {
    return ['1 Visit', '2 Visits', '3 Visits', '5 Visits', '10 Visits', '1 Week (daily)', '2 Weeks', '1 Month']
  }

  // Per session services
  if (serviceName === 'Physiotherapy') {
    return ['1 Session', '3 Sessions', '5 Sessions', '10 Sessions', '1 Week (daily)', '2 Weeks', '1 Month']
  }

  // Default per day nursing services
  return ['1 Day', '3 Days', '1 Week', '2 Weeks', '1 Month', 'Ongoing']
}

export default function Bookings() {
  const [selectedPlan, setSelectedPlan] = useState('Standard Care')
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    service: '', address: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          'Full Name':        form.name,
          'Phone Number':     form.phone,
          'Email':            form.email || 'Not provided',
          'Service Needed': form.service,
          '_subject':       `New Booking Request — ${form.service} — ${selectedPlan} — Home Care Vite`,
          'Address in Vizag': form.address,
          'Additional Notes': form.message || 'None',
          '_subject': `New Booking Request — ${form.service} — ${selectedPlan} — Home Care Vite`,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', phone: '', email: '', service: '', address: '', message: '' })
      } else {
        setError('Something went wrong. Please call us directly at +91 86390 57903.')
      }
    } catch {
      setError('Network error. Please call us at +91 86390 57903.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bookings section-padding" aria-labelledby="bookings-heading">
      <div className="container">

        {/* Header */}
        <div className="bookings__header">
          <div className="badge green">Book a Service</div>
          <h1 id="bookings-heading" className="section-title">
            Book Home Care Nursing Services in Visakhapatnam
          </h1>
          <p className="section-subtitle">
            Transparent pricing, no hidden charges. Book certified home care nursing services across all areas of Vizag — available 24/7.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="bookings__plans">
          <h2 className="bookings__section-title">Choose Your Care Plan</h2>
          <div className="bookings__plans-grid">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card plan-card--${plan.color}${selectedPlan === plan.name ? ' plan-card--selected' : ''}${plan.popular ? ' plan-card--popular' : ''}`}
                onClick={() => setSelectedPlan(plan.name)}
                role="button"
                tabIndex={0}
                aria-pressed={selectedPlan === plan.name}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedPlan(plan.name)}
              >
                {plan.popular && (
                  <div className="plan-card__badge">
                    <FiStar size={12} /> Most Popular
                  </div>
                )}
                <div className="plan-card__header">
                  <h3 className="plan-card__name">{plan.name}</h3>
                  <div className="plan-card__shift">
                    <MdAccessTime size={14} /> {plan.shift}
                  </div>
                </div>
                <div className="plan-card__price">
                  <span className="plan-card__amount">{plan.price}</span>
                  <span className="plan-card__per">{plan.per}</span>
                </div>
                <p className="plan-card__desc">{plan.desc}</p>
                <ul className="plan-card__features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <FiCheckCircle size={13} aria-hidden="true" /> {f}
                    </li>
                  ))}
                </ul>
                <div className={`plan-card__select${selectedPlan === plan.name ? ' selected' : ''}`}>
                  {selectedPlan === plan.name ? '✓ Selected' : 'Select Plan'}
                </div>
              </div>
            ))}
          </div>
          <p className="bookings__note">
            <FiInfo size={14} /> Prices are indicative. Final quote provided after free home assessment. No hidden charges.
          </p>
        </div>

        {/* Service Charges */}
        <div className="bookings__charges">
          <h2 className="bookings__section-title">Service-Wise Charges</h2>
          <p className="bookings__charges-sub">Click any service to book it instantly ↓</p>
          <div className="bookings__charges-grid">
            {services.map((s) => (
              <button
                key={s.name}
                className="charge-card charge-card--btn"
                onClick={() => {
                  setForm(prev => ({ ...prev, service: s.name }))
                  const el = document.getElementById('caregiver-apply')
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                aria-label={`Book ${s.name} — ${s.price}${s.per}`}
                title={`Click to book ${s.name}`}
              >
                <div className="charge-card__icon">{s.icon}</div>
                <div className="charge-card__info">
                  <p className="charge-card__name">{s.name}</p>
                  <p className="charge-card__price">{s.price}<span>{s.per}</span></p>
                </div>
                <span className="charge-card__book">Book Now →</span>
              </button>
            ))}
          </div>
        </div>

        {/* Booking Form + Info */}
        <div className="bookings__bottom" id="caregiver-apply">

          {/* Left — Info */}
          <div className="bookings__info">
            <h2 className="bookings__section-title">Why Book With Us?</h2>
            {[
              { icon: <MdVerified size={22} />,     title: 'Verified Nurses Only',   desc: 'Every nurse is licensed, background-verified, and trained to our clinical standards.' },
              { icon: <MdAccessTime size={22} />,   title: '24/7 Availability',      desc: 'Home care nursing across all areas of Visakhapatnam — round the clock.' },
              { icon: <FiCheckCircle size={22} />,  title: 'Free Home Assessment',   desc: 'A care coordinator visits your home before care begins — completely free.' },
              { icon: <FiStar size={22} />,         title: '98% Satisfaction Rate',  desc: '500+ families in Vizag trust our home care nursing services.' },
            ].map((item) => (
              <div key={item.title} className="bookings__info-item">
                <div className="bookings__info-icon">{item.icon}</div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="bookings__call">
              <p>Prefer to talk? Call us directly:</p>
              <a href="tel:+918639057903" className="btn-primary">
                +91 86390 57903
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bookings__form-wrap">
            {submitted ? (
              <div className="bookings__success">
                <div className="bookings__success-icon">
                  <FiCheckCircle size={52} />
                </div>
                <h3>Booking Confirmed!</h3>
                <p>Our care coordinator will call you within <strong>one hour</strong> to confirm your booking and arrange a free home assessment.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>
                  Book Another Service
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Booking form" noValidate>

                {/* Form Header */}
                <div className="bookings__form-header">
                  <div className="bookings__form-header-left">
                    <h3>Book Now</h3>
                    <p>Selected plan: <span className="bookings__form-plan">{selectedPlan}</span></p>
                  </div>
                  <div className="bookings__form-header-price">
                    <span>{plans.find(p => p.name === selectedPlan)?.price}</span>
                    <small>per day</small>
                  </div>
                </div>

                {/* Step 1 — Personal Details */}
                <div className="bookings__form-section">
                  <p className="bookings__form-step">
                    <span>1</span> Your Details
                  </p>
                  <div className="bookings__form-row">
                    <div className="form-group">
                      <label htmlFor="b-name">Full Name <span>*</span></label>
                      <input id="b-name" name="name" type="text"
                        placeholder="Enter your full name"
                        value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="b-phone">Phone Number <span>*</span></label>
                      <input id="b-phone" name="phone" type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="b-email">Email Address <span className="optional">(Optional)</span></label>
                    <input id="b-email" name="email" type="email"
                      placeholder="your@email.com"
                      value={form.email} onChange={handleChange} />
                  </div>
                </div>

                {/* Step 2 — Service Details */}
                <div className="bookings__form-section">
                  <p className="bookings__form-step">
                    <span>2</span> Service Details
                  </p>
                  <div className="bookings__form-row">
                    <div className="form-group form-group--full">
                      <label htmlFor="b-service">Service Required <span>*</span></label>
                      <select id="b-service" name="service"
                        value={form.service} onChange={handleChange} required>
                        <option value="">— Select a service —</option>
                        <optgroup label="🏥 Nursing Services">
                          {services.filter(s => s.group === 'Nursing').map((s) => (
                            <option key={s.name} value={s.name}>{s.name} — {s.price}{s.per}</option>
                          ))}
                        </optgroup>
                        <optgroup label="💆 Massage & Reflexology">
                          {services.filter(s => s.group === 'Massage').map((s) => (
                            <option key={s.name} value={s.name}>{s.name} — {s.price}{s.per}</option>
                          ))}
                        </optgroup>
                        <optgroup label="❤️ Specialized Therapy">
                          {services.filter(s => s.group === 'Specialized').map((s) => (
                            <option key={s.name} value={s.name}>{s.name} — {s.price}{s.per}</option>
                          ))}
                        </optgroup>
                        <optgroup label="🏨 Hospital & Night Care">
                          {services.filter(s => s.group === 'Hospital').map((s) => (
                            <option key={s.name} value={s.name}>{s.name} — {s.price}{s.per}</option>
                          ))}
                        </optgroup>
                        <optgroup label="💉 Medical Infusion">
                          {services.filter(s => s.group === 'Infusion').map((s) => (
                            <option key={s.name} value={s.name}>{s.name} — {s.price}{s.per}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="b-address">Your Address in Visakhapatnam <span>*</span></label>
                    <input id="b-address" name="address" type="text"
                      placeholder="e.g. Flat 4B, Sunrise Apartments, MVP Colony, Vizag"
                      value={form.address} onChange={handleChange} required />
                  </div>
                </div>

                {/* Step 3 — Additional Info */}
                <div className="bookings__form-section">
                  <p className="bookings__form-step">
                    <span>3</span> Patient Information <span className="optional">(Optional)</span>
                  </p>
                  <div className="form-group">
                    <label htmlFor="b-message">Patient Condition / Special Requirements</label>
                    <textarea id="b-message" name="message" rows={4}
                      placeholder="Briefly describe the patient's condition, diagnosis, any special care requirements or equipment needed..."
                      value={form.message} onChange={handleChange} />
                  </div>
                </div>

                {error && (
                  <p className="contact__error" role="alert">⚠️ {error}</p>
                )}

                <button
                  type="submit"
                  className={`bookings__submit-btn${loading ? ' loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="contact__spinner" />
                  ) : (
                    <>
                      <FiSend size={18} />
                      Confirm Booking — {selectedPlan}
                    </>
                  )}
                </button>

                <div className="bookings__form-trust">
                  <span><FiCheckCircle size={13} color="var(--green)" /> Free assessment</span>
                  <span><FiCheckCircle size={13} color="var(--green)" /> No commitment</span>
                  <span><FiCheckCircle size={13} color="var(--green)" /> No hidden charges</span>
                </div>

              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

