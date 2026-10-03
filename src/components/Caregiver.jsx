import React, { useState } from 'react'
import {
  FiArrowRight, FiCheckCircle, FiUser, FiFileText,
  FiBriefcase, FiHeart, FiPhone
} from 'react-icons/fi'
import {
  MdVerified, MdSchool, MdWorkHistory, MdSupportAgent,
  MdHealthAndSafety, MdGroups, MdPayments, MdCalendarMonth
} from 'react-icons/md'
import './Caregiver.css'

const howItWorks = [
  {
    step: '01',
    icon: <FiUser size={26} />,
    title: 'Apply Online',
    desc: 'Fill out our quick online application form with your qualifications, experience, and availability. The process takes less than 10 minutes.',
  },
  {
    step: '02',
    icon: <FiFileText size={26} />,
    title: 'Verification & Training',
    desc: 'We verify your license, conduct a background check, and complete onboarding training to align you with our care standards and protocols.',
  },
  {
    step: '03',
    icon: <MdCalendarMonth size={26} />,
    title: 'Get Matched to Patients',
    desc: 'Our care coordinators match you with patients based on your skills, location, and schedule preferences — you stay in control.',
  },
  {
    step: '04',
    icon: <FiHeart size={26} />,
    title: 'Deliver Care & Get Paid',
    desc: 'Provide compassionate care at patients\' homes. Track visits digitally, submit notes, and receive timely, competitive payments.',
  },
]

const benefits = [
  { icon: <MdPayments size={24} />,      title: 'Competitive Pay',        desc: 'Above-market hourly rates with timely weekly payments directly to your account.' },
  { icon: <MdCalendarMonth size={24} />, title: 'Flexible Scheduling',     desc: 'Choose the shifts and hours that work for your life — full-time, part-time, or on-call.' },
  { icon: <MdSchool size={24} />,        title: 'Free CPD Training',       desc: 'Access ongoing professional development and skill-building workshops at no cost.' },
  { icon: <MdVerified size={24} />,      title: 'Full Insurance Cover',    desc: 'All caregivers are covered under our comprehensive professional liability insurance.' },
  { icon: <MdSupportAgent size={24} />,  title: '24/7 Coordinator Support','desc': 'A dedicated care coordinator is always available to support you in the field.' },
  { icon: <MdGroups size={24} />,        title: 'Supportive Team',         desc: 'Join a caring, close-knit team that values your wellbeing as much as our patients\'.' },
]

const requirements = [
  'Valid RN, LPN, or CNA licence',
  'Minimum 1 year of clinical experience',
  'Clear background & reference checks',
  'Basic life support (BLS) certification',
  'Reliable transportation',
  'Strong communication skills',
]

export default function Caregiver() {
  const [tab, setTab] = useState('how')

  return (
    <section id="caregiver" className="caregiver section-padding" aria-labelledby="caregiver-heading">
      <div className="container">

        {/* Header */}
        <div className="caregiver__header">
          <div className="badge">For Caregivers</div>
          <h2 id="caregiver-heading" className="section-title">
            Join Our Team of Compassionate Nurses
          </h2>
          <p className="section-subtitle">
            Are you a licensed nurse or caregiver looking for meaningful, flexible work? Home Care Vite is always looking for dedicated professionals to join our growing team.
          </p>

          {/* Tab toggle */}
          <div className="caregiver__tabs" role="tablist" aria-label="Caregiver information tabs">
            <button
              role="tab"
              aria-selected={tab === 'how'}
              className={`caregiver__tab${tab === 'how' ? ' active' : ''}`}
              onClick={() => setTab('how')}
            >
              How It Works
            </button>
            <button
              role="tab"
              aria-selected={tab === 'benefits'}
              className={`caregiver__tab${tab === 'benefits' ? ' active' : ''}`}
              onClick={() => setTab('benefits')}
            >
              Benefits
            </button>
            <button
              role="tab"
              aria-selected={tab === 'requirements'}
              className={`caregiver__tab${tab === 'requirements' ? ' active' : ''}`}
              onClick={() => setTab('requirements')}
            >
              Requirements
            </button>
          </div>
        </div>

        {/* ── HOW IT WORKS TAB ── */}
        {tab === 'how' && (
          <div className="caregiver__how" role="tabpanel" aria-label="How it works for caregivers">
            <div className="caregiver__steps">
              {howItWorks.map((item, i) => (
                <div key={i} className="cg-step">
                  {/* Connector line */}
                  {i < howItWorks.length - 1 && (
                    <div className="cg-step__line" aria-hidden="true" />
                  )}
                  <div className="cg-step__icon-wrap" aria-hidden="true">
                    <div className="cg-step__num">{item.step}</div>
                    <div className="cg-step__icon">{item.icon}</div>
                  </div>
                  <div className="cg-step__content">
                    <h3 className="cg-step__title">{item.title}</h3>
                    <p className="cg-step__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual call-out */}
            <div className="caregiver__callout">
              <div className="caregiver__callout-left">
                <MdHealthAndSafety size={56} color="rgba(255,255,255,0.25)" aria-hidden="true" />
                <div>
                  <h3>Ready to Make a Difference?</h3>
                  <p>Join 50+ nurses already delivering care across the metro region. Applications reviewed within 24 hours.</p>
                </div>
              </div>
              <div className="caregiver__callout-actions">
                <a href="#caregiver-apply" className="btn-secondary">
                  Apply Now <FiArrowRight size={16} />
                </a>
                <a href="tel:+919110581825" className="btn-outline">
                  <FiPhone size={15} /> Talk to Us
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── BENEFITS TAB ── */}
        {tab === 'benefits' && (
          <div className="caregiver__benefits" role="tabpanel" aria-label="Caregiver benefits">
            <div className="cg-benefits-grid">
              {benefits.map((b, i) => (
                <div key={i} className="cg-benefit-card">
                  <div className="cg-benefit-card__icon" aria-hidden="true">{b.icon}</div>
                  <h3 className="cg-benefit-card__title">{b.title}</h3>
                  <p className="cg-benefit-card__desc">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="caregiver__callout">
              <div className="caregiver__callout-left">
                <MdWorkHistory size={56} color="rgba(255,255,255,0.25)" aria-hidden="true" />
                <div>
                  <h3>Work That Truly Matters</h3>
                  <p>Our caregivers report high job satisfaction and strong work-life balance. See why nurses choose Home Care Vite.</p>
                </div>
              </div>
              <div className="caregiver__callout-actions">
                <a href="#caregiver-apply" className="btn-secondary">
                  Start Your Application <FiArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── REQUIREMENTS TAB ── */}
        {tab === 'requirements' && (
          <div className="caregiver__requirements" role="tabpanel" aria-label="Caregiver requirements">
            <div className="cg-req-inner">
              <div className="cg-req-list">
                <h3>What You'll Need</h3>
                <p>We maintain high standards to ensure the best outcomes for our patients. Here's what we look for in every caregiver.</p>
                <ul>
                  {requirements.map((r, i) => (
                    <li key={i} className="cg-req-item">
                      <FiCheckCircle className="cg-req-icon" size={18} aria-hidden="true" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
                <a href="#caregiver-apply" className="btn-primary cg-req-cta">
                  <FiBriefcase size={16} /> Apply Today
                </a>
              </div>

              <div className="cg-req-card">
                <div className="cg-req-card__badge">
                  <MdVerified size={32} color="var(--white)" />
                </div>
                <h4>Not Fully Qualified Yet?</h4>
                <p>We partner with nursing schools and training providers. If you're completing your certification, reach out — we may have a role for you.</p>
                <a href="#contact" className="cg-req-card__link">
                  Contact our Recruitment Team <FiArrowRight size={14} />
                </a>

                <div className="cg-req-card__divider" />

                <h4>Already Experienced?</h4>
                <p>Senior nurses and RNs with specialisations (ICU, palliative, paediatric) are highly valued. We offer senior-tier pay and roles.</p>
                <a href="#caregiver-apply" className="cg-req-card__link">
                  Apply for Senior Roles <FiArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Apply form anchor */}
        <div id="caregiver-apply" className="caregiver__apply">
          <div className="caregiver__apply-inner">
            <div className="caregiver__apply-header">
              <h3>Quick Application</h3>
              <p>Takes less than 2 minutes. We'll contact you within 24 hours.</p>
            </div>
            <form
              className="caregiver__apply-form"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Caregiver application form"
            >
              <div className="cg-form-row">
                <div className="cg-form-group">
                  <label htmlFor="cg-name">Full Name</label>
                  <input id="cg-name" type="text" placeholder="Your full name" />
                </div>
                <div className="cg-form-group">
                  <label htmlFor="cg-phone">Phone Number</label>
                  <input id="cg-phone" type="tel" placeholder="Your phone number" />
                </div>
                <div className="cg-form-group">
                  <label htmlFor="cg-role">Your Role</label>
                  <select id="cg-role">
                    <option value="">Select your qualification</option>
                    <option>Registered Nurse (RN)</option>
                    <option>Licensed Practical Nurse (LPN)</option>
                    <option>Certified Nursing Assistant (CNA)</option>
                    <option>Physiotherapist</option>
                    <option>Other Healthcare Professional</option>
                  </select>
                </div>
                <button type="submit" className="btn-secondary cg-form-btn">
                  Submit Application <FiArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
