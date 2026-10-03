import React, { useState } from 'react'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { MdFormatQuote } from 'react-icons/md'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Venkat Reddy',
    role: 'Patient — Post-Surgery Care, Vijayawada',
    initials: 'VR',
    color: '#1B3F8B',
    rating: 5,
    text: 'Mee seva chala bagundi. After my knee surgery, the nurse from Home Care Vite visited every day and took care of everything — wound dressing, medicines, exercises. I recovered much faster than I expected. Chala thanks to the entire team!',
  },
  {
    name: 'Karthik & Padmavathi Sharma',
    role: 'Family — Elderly Care, Guntur',
    initials: 'KS',
    color: '#3A7D2C',
    rating: 5,
    text: 'Maa nanna ki daily nurse vasthundi and takes excellent care. We both work and cannot always be home, so Home Care Vite has been a true blessing for our family. The nurse treats our father like her own — we could not ask for more.',
  },
  {
    name: 'Dr. Suresh Babu',
    role: 'Referring Physician, Tirupati',
    initials: 'SB',
    color: '#1B3F8B',
    rating: 5,
    text: 'As a doctor in Tirupati, I regularly refer my discharged patients to Home Care Vite. Their nurses are well-trained, punctual, and communicate every update clearly. My patients always come back with positive feedback. I recommend them fully.',
  },
  {
    name: 'Lakshmi Narayana & Family',
    role: 'Family — Palliative Care, Nellore',
    initials: 'LN',
    color: '#3A7D2C',
    rating: 5,
    text: 'Maa amma ki palliative care ichcharu — chala sensitivity tho, chala prema tho. The team handled everything with such dignity and kindness during the most difficult time for our family. We are forever grateful to Home Care Vite.',
  },
  {
    name: 'Annapurna Devi',
    role: 'Patient — Cardiac Monitoring, Kurnool',
    initials: 'AD',
    color: '#1B3F8B',
    rating: 5,
    text: 'Naa heart condition valla chala worry ga undedhi. But the nurse visits regularly, checks my BP and vitals, and explains everything in Telugu so I understand properly. She caught a problem early and saved me from another hospital trip. Mee seva chala melu.',
  },
  {
    name: 'Ravi Teja Gottipati',
    role: 'Patient — Wound Care, Vizag',
    initials: 'RG',
    color: '#3A7D2C',
    rating: 5,
    text: 'The nurse who came for my wound dressing was highly skilled and very gentle. She visited every alternate day and my wound healed completely within weeks. No need to go to the hospital repeatedly — Home Care Vite takes care of everything at home. Super service!',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length
  const visible = 3

  const prev = () => setCurrent((c) => (c === 0 ? total - visible : c - 1))
  const next = () => setCurrent((c) => (c >= total - visible ? 0 : c + 1))

  const shown = [
    testimonials[current % total],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ]

  return (
    <section id="testimonials" className="testimonials section-padding" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Header */}
        <div className="testimonials__header">
          <div className="badge green">Testimonials</div>
          <h2 id="testimonials-heading" className="section-title">
            What Our Patients & Families Say
          </h2>
          <p className="section-subtitle">
            Real stories from the patients and families whose lives we have had the privilege of supporting.
          </p>
        </div>

        {/* Cards */}
        <div className="testimonials__grid" role="list" aria-live="polite">
          {shown.map((t, i) => (
            <article
              key={i}
              className="testimonial-card"
              role="listitem"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="testimonial-card__quote" aria-hidden="true">
                <MdFormatQuote size={40} />
              </div>
              <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, si) => (
                  <FiStar key={si} size={15} fill="#f59e0b" color="#f59e0b" aria-hidden="true" />
                ))}
              </div>
              <p className="testimonial-card__text" itemProp="reviewBody">"{t.text}"</p>
              <div className="testimonial-card__author" itemScope itemType="https://schema.org/Person">
                <div
                  className="testimonial-card__avatar"
                  style={{ background: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="testimonial-card__name" itemProp="name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Controls */}
        <div className="testimonials__controls">
          <button
            className="testimonials__btn"
            onClick={prev}
            aria-label="Previous testimonials"
          >
            <FiChevronLeft size={20} />
          </button>

          <div className="testimonials__dots" role="tablist" aria-label="Testimonial pages">
            {Array.from({ length: total - visible + 1 }).map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot${current === i ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                role="tab"
                aria-selected={current === i}
                aria-label={`Go to testimonial page ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="testimonials__btn"
            onClick={next}
            aria-label="Next testimonials"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Trust bar */}
        <div className="testimonials__trust">
          {[
            { label: 'Google Reviews', rating: '4.9/5', count: '412 reviews' },
            { label: 'Practo',         rating: '4.8/5', count: '238 reviews' },
            { label: 'JustDial',       rating: '4.9/5', count: '317 reviews' },
          ].map((t) => (
            <div key={t.label} className="trust-item">
              <div className="trust-item__stars" aria-hidden="true">
                {[...Array(5)].map((_, i) => <FiStar key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <span className="trust-item__rating">{t.rating}</span>
              <span className="trust-item__platform">{t.label}</span>
              <span className="trust-item__count">{t.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
