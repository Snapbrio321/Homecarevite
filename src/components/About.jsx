import React from 'react'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import { MdVerified, MdFavorite } from 'react-icons/md'
import caretakerImg from '../assets/caretaker.webp'
import './About.css'

const milestones = [
  { year: '2023', label: 'Founded — home care nursing services launched in Visakhapatnam' },
  { year: '2024', label: 'Expanded home care nursing to all major areas of Vizag' },
  { year: '2024', label: 'Launched 24/7 emergency home care nursing response in Visakhapatnam' },
  { year: '2025', label: '500+ families in Vizag served with 98% satisfaction' },
]

const values = [
  { title: 'Compassion', desc: 'We treat every patient with the warmth and dignity they deserve.' },
  { title: 'Excellence', desc: 'Our nurses are rigorously trained and continuously upskilled.' },
  { title: 'Integrity', desc: 'Transparent communication and honest care, always.' },
  { title: 'Reliability', desc: 'We show up when needed — 24 hours a day, 7 days a week.' },
]

export default function About() {
  return (
    <section id="about" className="about section-padding" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__inner">
          {/* Left: Visual */}
          <div className="about__visual">
            <div className="about__img-wrap">
              {/* Main large image */}
              <div className="about__img-main">
                <img
                  src={caretakerImg}
                  alt="Home Care Vite nurse providing compassionate patient care at home in Visakhapatnam"
                  className="about__img"
                  loading="lazy"
                />
              </div>

              {/* Floating badge cards */}
              <div className="about__img-badge about__img-badge--1">
                <div className="about__img-badge-icon">
                  <MdVerified size={22} color="var(--navy)" />
                </div>
                <div>
                  <p className="about__img-badge-num">500+</p>
                  <p className="about__img-badge-label">Patients Served</p>
                </div>
              </div>

              <div className="about__img-badge about__img-badge--2">
                <div className="about__img-badge-icon about__img-badge-icon--green">
                  <MdFavorite size={22} color="var(--green)" />
                </div>
                <div>
                  <p className="about__img-badge-num">98%</p>
                  <p className="about__img-badge-label">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            {/* Milestone timeline */}
            <div className="about__milestones">
              {milestones.map((m) => (
                <div key={m.year} className="about__milestone">
                  <span className="about__milestone-year">{m.year}</span>
                  <span className="about__milestone-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="about__content">
            <div className="badge">About Us</div>
            <h2 id="about-heading" className="section-title">
              Visakhapatnam's Trusted Home Care Nursing Services Since 2023
            </h2>
            <p className="about__lead">
              Home Care Vite is Visakhapatnam's dedicated home care nursing service — founded in 2023 with a mission to bring professional nursing care directly to patients' homes across Vizag.
            </p>
            <p className="about__body">
              We provide home care nursing services across all areas of Visakhapatnam including MVP Colony, Dwaraka Nagar, Gajuwaka, Rushikonda, Madhurawada, Seethammadhara, Siripuram, Bheemunipatnam and surrounding localities. Our licensed nurses, physiotherapists and care coordinators deliver personalised home care nursing for every patient — from newborns to elderly, from post-surgical recovery to long-term chronic care.
            </p>

            {/* Values */}
            <div className="about__values" role="list">
              {values.map((v) => (
                <div key={v.title} className="about__value" role="listitem">
                  <FiCheckCircle className="about__value-icon" aria-hidden="true" />
                  <div>
                    <strong>{v.title}</strong>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__ctas">
              <a href="#contact" className="btn-primary">
                Get Started Today <FiArrowRight size={16} />
              </a>
              <a href="#why-us" className="about__learn-more">
                Why Choose Us? <FiArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="about__stats" role="list" aria-label="Company statistics">
          {[
            { num: '500+',  label: 'Patients Served' },
            { num: '50+',   label: 'Certified Nurses' },
            { num: '2023',  label: 'Est. Year' },
            { num: '98%',   label: 'Satisfaction Rate' },
            { num: '24/7',  label: 'Availability' },
          ].map((s) => (
            <div key={s.label} className="about__stat" role="listitem">
              <span className="about__stat-num">{s.num}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
