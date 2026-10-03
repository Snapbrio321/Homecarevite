import React from 'react'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
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
import './Services.css'

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
            Comprehensive Home Nursing Services in Visakhapatnam
          </h2>
          <p className="section-subtitle">
            From post-operative recovery to long-term chronic disease management, our certified nurses provide a full spectrum of medical care in the comfort of your home in Vizag.
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
                    href="#contact"
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

        {/* Bottom CTA */}
        <div className="services__cta">
          <div className="services__cta-left">
            <PiStethoscopeDuotone size={48} color="white" aria-hidden="true" />
            <div>
              <strong>Don't see your specific need?</strong>
              <p>We offer fully custom home care plans in Visakhapatnam designed around your unique situation.</p>
            </div>
          </div>
          <a href="#contact" className="btn-primary services__cta-btn" title="Contact Home Care Vite for custom nursing care">
            Discuss Your Care Needs <FiArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}
