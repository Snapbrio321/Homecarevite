import React from 'react'
import {
  MdVerified, MdAccessTime, MdSupportAgent, MdLocalHospital,
  MdFavorite, MdSecurity
} from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'
import './WhyUs.css'

const reasons = [
  {
    icon: <MdVerified size={28} />,
    title: 'Licensed & Certified',
    desc: 'Every nurse on our team holds active state licensure and undergoes rigorous background checks and skills verification before joining.',
  },
  {
    icon: <MdAccessTime size={28} />,
    title: '24/7 Availability',
    desc: 'Medical needs don\'t follow a schedule. Our care coordinators and nursing staff are available around the clock, every day of the year.',
  },
  {
    icon: <MdFavorite size={28} />,
    title: 'Personalized Care Plans',
    desc: 'We develop customized care plans in collaboration with your physician, tailored to your unique health needs and lifestyle.',
  },
  {
    icon: <MdLocalHospital size={28} />,
    title: 'Hospital-Grade Equipment',
    desc: 'We bring clinical-grade medical equipment to your home — IV infusion pumps, monitoring devices, wound care supplies, and more.',
  },
  {
    icon: <MdSupportAgent size={28} />,
    title: 'Dedicated Care Coordinator',
    desc: 'A dedicated coordinator manages your entire care journey, keeping you, your family, and your doctor consistently informed.',
  },
  {
    icon: <MdSecurity size={28} />,
    title: 'Fully Insured & Compliant',
    desc: 'All services are fully insured and compliant with healthcare regulations, giving you complete peace of mind.',
  },
]

const steps = [
  { num: '01', title: 'Contact Us', desc: 'Call or fill out our online form to describe your care needs.' },
  { num: '02', title: 'Free Assessment', desc: 'A care coordinator visits your home for a complimentary needs assessment.' },
  { num: '03', title: 'Care Plan', desc: 'We create a personalized care plan in coordination with your physician.' },
  { num: '04', title: 'Care Begins', desc: 'Your dedicated nurse arrives and professional care starts immediately.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us section-padding" aria-labelledby="why-us-heading">
      <div className="container">
        {/* Header */}
        <div className="why-us__header">
          <div className="badge">Why Choose Us</div>
          <h2 id="why-us-heading" className="section-title">
            Why Choose Home Care Vite in Visakhapatnam
          </h2>
          <p className="section-subtitle">
            We combine clinical expertise with genuine compassion to deliver a home nursing experience that is safe, reliable, and centred entirely around you and your family.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="why-us__grid" role="list">
          {reasons.map((r, i) => (
            <div key={i} className="why-card" role="listitem">
              <div className="why-card__icon" aria-hidden="true">{r.icon}</div>
              <h3 className="why-card__title">{r.title}</h3>
              <p className="why-card__desc">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="how-it-works">
          <div className="how-it-works__header">
            <h3 className="how-it-works__title">How It Works</h3>
            <p className="how-it-works__sub">Getting started is simple — professional care is just four steps away.</p>
          </div>
          <div className="how-it-works__steps" role="list">
            {steps.map((step, i) => (
              <div key={i} className="step" role="listitem">
                <div className="step__num" aria-hidden="true">{step.num}</div>
                <div className="step__connector" aria-hidden="true" />
                <h4 className="step__title">{step.title}</h4>
                <p className="step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="how-it-works__cta">
            <a href="#contact" className="btn-secondary">
              Get Your Free Assessment <FiArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
