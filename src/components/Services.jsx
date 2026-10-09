import React from 'react'
import { FiArrowRight, FiCheckCircle, FiInfo } from 'react-icons/fi'
import {
  PiHeartbeatDuotone,
  PiBandaidsDuotone,
  PiFirstAidKitDuotone,
  PiStethoscopeDuotone,
  PiPillDuotone,
  PiHandsPrayingDuotone,
  PiPersonSimpleRunDuotone,
  PiBabyDuotone,
} from 'react-icons/pi'
import { MdSpa, MdFavorite } from 'react-icons/md'
import './Services.css'

const massageServices = [
  {
    title: 'Full Body Massage Therapy at Home',
    desc: 'Relaxing full-body massage using essential organic oils, provided in the comfort of your home by a certified therapist.',
    price: '₹1,500',
    per: 'per sitting',
    features: ['Certified massage therapist', 'Organic essential oils', 'In-home convenience', 'Stress & pain relief'],
    accent: '#5b2c6f',
    light: '#f0e6fa',
    note: null,
  },
  {
    title: 'Reflexology Therapy for Paralysis Patients',
    desc: 'Specialized reflexology sessions for patients with paralysis, provided by a certified therapist using medicinal oils.',
    price: '₹2,000',
    per: 'per sitting',
    features: ['Certified reflexology therapist', 'Medicinal oils used', 'Paralysis-specific technique', 'Supports rehabilitation'],
    accent: '#1B3F8B',
    light: '#e8eefa',
    note: 'Complementary therapy — not a replacement for prescribed rehabilitation or medical treatment.',
  },
  {
    title: 'Foot Reflexology & Massage',
    desc: 'Foot massage focused on relaxation and supporting general comfort and circulation at your home.',
    price: '₹1,500',
    per: 'per sitting',
    features: ['Certified foot therapist', 'Improves circulation', 'Deep relaxation', 'Supports general comfort'],
    accent: '#0a7060',
    light: '#e0f5f1',
    note: null,
  },
]

const specializedServices = [
  {
    title: 'Cardiac & Respiratory Support Therapy',
    desc: 'Temperature-controlled supportive therapy for patients with cardiac conditions and lung diseases, subject to medical assessment and appropriate clinical supervision.',
    price: '₹2,500',
    per: 'per sitting',
    features: [
      'Temperature-controlled environment',
      'Cardiac condition support',
      'Lung disease management',
      'Medical assessment required',
      'Certified clinical supervision',
    ],
    accent: '#a93226',
    light: '#fde8e6',
    note: 'This therapy is subject to prior medical assessment. Clinical supervision is provided throughout each session. Not a replacement for prescribed medical treatment.',
  },
]

const hospitalServices = [
  {
    title: 'Night-Time Patient Attendant',
    desc: 'Professional overnight attendant service for patients during hospital stays — providing comfort, assistance, and monitoring through the night.',
    price: '₹2,000',
    per: 'per night',
    features: [
      'Male attendant for male patients',
      'Female attendant for female patients',
      'Hospital overnight stay support',
      'Patient comfort & assistance',
      'Night monitoring & care',
    ],
    accent: '#154360',
    light: '#e0ecf8',
    note: null,
    icon: '🏥',
  },
]

const infusionServices = [
  {
    title: 'Home IV Infusion Service',
    desc: 'Home-based IV infusion service provided only on a doctor\'s prescription and administered by a qualified healthcare professional at your home.',
    price: '₹1,500',
    per: 'per infusion',
    features: [
      'Doctor\'s prescription required',
      'Qualified healthcare professional',
      'Safe sterile administration',
      'All IV types supported',
      'Post-infusion monitoring',
    ],
    accent: '#0a7060',
    light: '#e0f5f1',
    note: 'This service is provided strictly on a valid doctor\'s prescription only. Administered by a qualified and licensed healthcare professional.',
    icon: '💉',
  },
]

const services = [
  {
    PhIcon: PiHeartbeatDuotone,
    accent: '#1B3F8B',
    light:  '#e8eefa',
    tag: 'Cardiac',
    title: 'Cardiac Care',
    desc: 'Continuous monitoring for heart patients — vital signs, medication adherence, and lifestyle coaching from certified cardiac nurses.',
    features: ['Vital signs monitoring', 'Medication compliance', 'Diet & lifestyle coaching'],
  },
  {
    PhIcon: PiBandaidsDuotone,
    accent: '#0a7060',
    light:  '#e0f5f1',
    tag: 'Wound',
    title: 'Wound Care',
    desc: 'Professional sterile dressing changes, wound assessment, and infection prevention by trained nursing professionals at your home.',
    features: ['Sterile dressing changes', 'Infection prevention', 'Healing progress tracking'],
  },
  {
    PhIcon: PiFirstAidKitDuotone,
    accent: '#2d6221',
    light:  '#e6f4e0',
    tag: 'Recovery',
    title: 'Post-Surgery Care',
    desc: 'Expert wound care, medication management and rehabilitation support after surgical procedures for a safe and speedy recovery.',
    features: ['Wound dressing & monitoring', 'Pain management', 'Mobility rehabilitation'],
  },
  {
    PhIcon: PiStethoscopeDuotone,
    accent: '#154360',
    light:  '#e0ecf8',
    tag: 'Senior Care',
    title: 'Elderly Care',
    desc: 'Compassionate daily support for seniors — personal hygiene, mobility assistance, companionship and chronic disease management.',
    features: ['Daily personal assistance', 'Fall prevention', 'Companionship visits'],
  },
  {
    PhIcon: PiPillDuotone,
    accent: '#5b2c6f',
    light:  '#f0e6fa',
    tag: 'Medication',
    title: 'Medication Management',
    desc: 'Safe administration and close monitoring of prescribed medications ensuring correct dosage and timing for optimal outcomes.',
    features: ['Dosage administration', 'Side-effect monitoring', 'Prescription coordination'],
  },
  {
    PhIcon: PiHandsPrayingDuotone,
    accent: '#7b3f00',
    light:  '#fdeee0',
    tag: 'Palliative',
    title: 'Palliative Care',
    desc: 'Sensitive, dignity-centred care focused on comfort and quality of life for patients and families during serious illness.',
    features: ['Comfort & pain relief', 'Family support guidance', 'Dignity-centred care'],
  },
  {
    PhIcon: PiPersonSimpleRunDuotone,
    accent: '#9a7d0a',
    light:  '#fef3e0',
    tag: 'Therapy',
    title: 'Physiotherapy',
    desc: 'In-home physiotherapy sessions to restore mobility, manage pain and rebuild strength after injury, surgery, or illness.',
    features: ['Mobility restoration', 'Strength & balance training', 'Pain management therapy'],
  },
  {
    PhIcon: PiBabyDuotone,
    accent: '#922b21',
    light:  '#fde8e6',
    tag: 'Postnatal',
    title: 'Mother & Baby Care',
    desc: 'Dedicated postnatal nursing for new mothers and newborns — lactation support, newborn health checks, and maternal recovery.',
    features: ['Newborn health checks', 'Lactation support', 'Maternal recovery care'],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="services section-padding"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container">

        {/* Header */}
        <div className="services__header">
          <div className="badge green">Our Services</div>
          <h2 id="services-heading" className="section-title">
            Home Care Nursing Services in Visakhapatnam
          </h2>
          <p className="section-subtitle">
            From post-operative recovery to long-term chronic disease management, our certified nurses provide complete home care nursing services across all areas of Visakhapatnam (Vizag).
          </p>
        </div>

        {/* Grid */}
        <div className="services__grid" role="list">
          {services.map((svc, i) => (
            <article
              key={i}
              className="svc-card"
              role="listitem"
              style={{ '--accent': svc.accent, '--light': svc.light }}
              itemScope
              itemType="https://schema.org/MedicalTherapy"
            >
                {/* Top accent bar */}
                <div className="svc-card__bar" />

                {/* Icon area */}
                <div className="svc-card__icon-area">
                  <div className="svc-card__icon-ring" aria-hidden="true">
                    <svc.PhIcon size={46} color={svc.accent} />
                  </div>
                  <span className="svc-card__tag">{svc.tag}</span>
                </div>

                {/* Body */}
                <div className="svc-card__body">
                  <h3 className="svc-card__title" itemProp="name">{svc.title}</h3>
                  <p className="svc-card__desc" itemProp="description">{svc.desc}</p>

                  <ul className="svc-card__features" aria-label={`${svc.title} features`}>
                    {svc.features.map((f) => (
                      <li key={f} className="svc-card__feature">
                        <FiCheckCircle size={13} className="svc-card__feature-icon" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="svc-card__cta"
                    aria-label={`Book ${svc.title} in Visakhapatnam — Home Care Vite`}
                    title={`Book ${svc.title} at Home`}
                  >
                    Book This Service
                    <FiArrowRight size={14} className="svc-card__cta-arrow" aria-hidden="true" />
                  </a>
                </div>
              </article>
          ))}
        </div>

        {/* ── Massage & Reflexology Section ── */}
        <div className="services__massage">
          <div className="services__massage-header">
            <div className="services__massage-icon" aria-hidden="true">
              <MdSpa size={32} color="var(--white)" />
            </div>
            <div>
              <div className="badge" style={{ marginBottom: '8px' }}>New Service</div>
              <h2 className="section-title" style={{ marginBottom: '8px' }}>
                Massage & Reflexology Therapy at Home
              </h2>
              <p className="section-subtitle">
                Professional massage and reflexology therapy delivered at your home in Visakhapatnam by certified therapists.
              </p>
            </div>
          </div>

          <div className="massage__grid">
            {massageServices.map((m, i) => (
              <div key={i} className="massage-card" style={{ '--accent': m.accent, '--light': m.light }}>
                <div className="massage-card__top">
                  <div className="massage-card__icon" aria-hidden="true">
                    <MdSpa size={28} color={m.accent} />
                  </div>
                  <div className="massage-card__price-wrap">
                    <span className="massage-card__price">{m.price}</span>
                    <span className="massage-card__per">{m.per}</span>
                  </div>
                </div>
                <h3 className="massage-card__title">{m.title}</h3>
                <p className="massage-card__desc">{m.desc}</p>
                <ul className="massage-card__features">
                  {m.features.map((f) => (
                    <li key={f}>
                      <FiCheckCircle size={13} aria-hidden="true" /> {f}
                    </li>
                  ))}
                </ul>
                {m.note && (
                  <div className="massage-card__note">
                    <FiInfo size={13} aria-hidden="true" />
                    <span>{m.note}</span>
                  </div>
                )}
                <a href="/bookings" className="massage-card__cta">
                  Book This Service <FiArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Specialized Supportive Therapy Section ── */}
        <div className="services__specialized">
          <div className="services__specialized-header">
            <div className="services__specialized-icon" aria-hidden="true">
              <MdFavorite size={32} color="var(--white)" />
            </div>
            <div>
              <div className="badge" style={{ marginBottom: '8px' }}>Specialized</div>
              <h2 className="section-title" style={{ marginBottom: '8px' }}>
                Specialized Supportive Therapy
              </h2>
              <p className="section-subtitle">
                Advanced supportive therapies provided under clinical supervision for patients with complex medical conditions in Visakhapatnam.
              </p>
            </div>
          </div>

          <div className="specialized__grid">
            {specializedServices.map((s, i) => (
              <div key={i} className="specialized-card" style={{ '--accent': s.accent, '--light': s.light }}>
                <div className="specialized-card__top">
                  <div className="specialized-card__icon" aria-hidden="true">
                    <MdFavorite size={28} color={s.accent} />
                  </div>
                  <div className="specialized-card__price-wrap">
                    <span className="specialized-card__price">{s.price}</span>
                    <span className="specialized-card__per">{s.per}</span>
                  </div>
                </div>
                <h3 className="specialized-card__title">{s.title}</h3>
                <p className="specialized-card__desc">{s.desc}</p>
                <ul className="specialized-card__features">
                  {s.features.map((f) => (
                    <li key={f}>
                      <FiCheckCircle size={13} aria-hidden="true" /> {f}
                    </li>
                  ))}
                </ul>
                {s.note && (
                  <div className="specialized-card__note">
                    <FiInfo size={13} aria-hidden="true" />
                    <span>{s.note}</span>
                  </div>
                )}
                <a href="/bookings" className="specialized-card__cta">
                  Book This Service <FiArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Hospital & Night Care Attendant Services ── */}
        <div className="services__hospital">
          <div className="services__section-header services__section-header--blue">
            <div className="services__section-icon services__section-icon--blue" aria-hidden="true">
              🏥
            </div>
            <div>
              <div className="badge" style={{ marginBottom: '8px' }}>Hospital Care</div>
              <h2 className="section-title" style={{ marginBottom: '8px' }}>
                Hospital & Night Care Attendant Services
              </h2>
              <p className="section-subtitle">
                Professional overnight hospital attendants for patients in Visakhapatnam — ensuring comfort, assistance and monitoring through the night.
              </p>
            </div>
          </div>
          <div className="extra-services__grid">
            {hospitalServices.map((s, i) => (
              <div key={i} className="extra-card" style={{ '--accent': s.accent, '--light': s.light }}>
                <div className="extra-card__top">
                  <div className="extra-card__emoji" aria-hidden="true">{s.icon}</div>
                  <div className="extra-card__price-wrap">
                    <span className="extra-card__price">{s.price}</span>
                    <span className="extra-card__per">{s.per}</span>
                  </div>
                </div>
                <h3 className="extra-card__title">{s.title}</h3>
                <p className="extra-card__desc">{s.desc}</p>
                <ul className="extra-card__features">
                  {s.features.map((f) => (
                    <li key={f}><FiCheckCircle size={13} aria-hidden="true" /> {f}</li>
                  ))}
                </ul>
                {s.note && (
                  <div className="extra-card__note">
                    <FiInfo size={13} aria-hidden="true" /><span>{s.note}</span>
                  </div>
                )}
                <a href="/bookings" className="extra-card__cta">
                  Book This Service <FiArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Home Medical Infusion Services ── */}
        <div className="services__infusion">
          <div className="services__section-header services__section-header--green">
            <div className="services__section-icon services__section-icon--green" aria-hidden="true">
              💉
            </div>
            <div>
              <div className="badge green" style={{ marginBottom: '8px' }}>Medical</div>
              <h2 className="section-title" style={{ marginBottom: '8px' }}>
                Home Medical Infusion Services
              </h2>
              <p className="section-subtitle">
                Safe, sterile home IV infusion services in Visakhapatnam administered by qualified healthcare professionals on doctor's prescription.
              </p>
            </div>
          </div>
          <div className="extra-services__grid">
            {infusionServices.map((s, i) => (
              <div key={i} className="extra-card" style={{ '--accent': s.accent, '--light': s.light }}>
                <div className="extra-card__top">
                  <div className="extra-card__emoji" aria-hidden="true">{s.icon}</div>
                  <div className="extra-card__price-wrap">
                    <span className="extra-card__price">{s.price}</span>
                    <span className="extra-card__per">{s.per}</span>
                  </div>
                </div>
                <h3 className="extra-card__title">{s.title}</h3>
                <p className="extra-card__desc">{s.desc}</p>
                <ul className="extra-card__features">
                  {s.features.map((f) => (
                    <li key={f}><FiCheckCircle size={13} aria-hidden="true" /> {f}</li>
                  ))}
                </ul>
                {s.note && (
                  <div className="extra-card__note">
                    <FiInfo size={13} aria-hidden="true" /><span>{s.note}</span>
                  </div>
                )}
                <a href="/bookings" className="extra-card__cta">
                  Book This Service <FiArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="services__cta">
          <div className="services__cta-left">
            <PiStethoscopeDuotone size={48} color="white" aria-hidden="true" />
            <div>
              <strong>Don't see your specific need?</strong>
              <p>We offer fully custom home care plans in Visakhapatnam designed around your unique situation.</p>
            </div>
          </div>
          <a href="/contact" className="btn-primary services__cta-btn" title="Contact Home Care Vite for custom nursing care">
            Discuss Your Care Needs <FiArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}

