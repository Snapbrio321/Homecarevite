import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiPhone, FiClock, FiTag } from 'react-icons/fi'
import { MdHealthAndSafety } from 'react-icons/md'
import blogImg1 from '../assets/Complete Guide to Home Care Nursing in Vizag.png'
import './BlogPost.css'

export default function BlogPost1() {
  return (
    <main className="blog-post">
      <div className="container">

        {/* Back */}
        <Link to="/blog" className="blog-post__back">
          <FiArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Header */}
        <header className="blog-post__header">
          <div className="blog-post__meta">
            <span className="blog-post__tag" style={{ background: '#1B3F8B15', color: '#1B3F8B' }}>
              <FiTag size={11} /> Home Nursing
            </span>
            <span className="blog-post__time"><FiClock size={11} /> 7 min read</span>
            <span className="blog-post__date">October 9, 2026</span>
          </div>
          <h1 className="blog-post__title">
            Complete Guide to Home Care Nursing Services in Visakhapatnam (Vizag)
          </h1>
          <p className="blog-post__subtitle">
            Everything you need to know about hiring a certified home care nurse in Vizag — costs, services, what to expect, and how to choose the right provider.
          </p>
          <div className="blog-post__author">
            <div className="blog-post__author-icon">
              <MdHealthAndSafety size={22} color="white" />
            </div>
            <div>
              <p className="blog-post__author-name">Home Care Vite Nursing Team</p>
              <p className="blog-post__author-role">Certified Home Care Nurses, Visakhapatnam</p>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="blog-post__hero-img">
          <img
            src={blogImg1}
            alt="Complete Guide to Home Care Nursing Services in Visakhapatnam Vizag — Home Care Vite"
            loading="eager"
          />
        </div>

        {/* Content */}
        <div className="blog-post__content">

          <p>
            Home care nursing services are growing rapidly in Visakhapatnam. More and more families in Vizag are choosing to bring professional nursing care home rather than extended hospital stays. Whether your loved one is recovering from surgery, managing a chronic illness, or simply needs daily assistance — a certified home care nurse can make an enormous difference.
          </p>
          <p>
            This guide covers everything families in Visakhapatnam need to know before hiring a home care nurse.
          </p>

          <h2>What Are Home Care Nursing Services?</h2>
          <p>
            Home care nursing services involve certified nurses visiting patients at their homes to provide medical care, assistance, and monitoring. Unlike hospital care, home nursing allows patients to recover in the comfort and familiarity of their own environment, surrounded by family.
          </p>
          <p>
            In Visakhapatnam, home care nursing has become especially popular in areas like MVP Colony, Dwaraka Nagar, Madhurawada, Gajuwaka, Rushikonda and PM Palem — where families often prefer in-home care for elderly parents or post-surgery recovery.
          </p>

          <h2>Who Needs Home Care Nursing in Vizag?</h2>
          <ul>
            <li><strong>Post-surgery patients</strong> — recovering at home after operations at hospitals like KIMS, Medicover, or Apollo in Visakhapatnam</li>
            <li><strong>Senior citizens</strong> — elderly parents who need daily assistance, medication management, or company</li>
            <li><strong>Cardiac patients</strong> — those with heart conditions requiring regular monitoring and medication</li>
            <li><strong>Bedridden patients</strong> — long-term patients who cannot move independently</li>
            <li><strong>Stroke & paralysis patients</strong> — requiring specialized nursing and rehabilitation support</li>
            <li><strong>New mothers & newborns</strong> — postnatal care and newborn health monitoring</li>
            <li><strong>Diabetic patients</strong> — regular monitoring and wound care at home</li>
          </ul>

          <h2>Types of Home Care Nursing Services Available in Visakhapatnam</h2>

          <h3>1. Post-Surgery Home Care</h3>
          <p>
            After any surgical procedure — whether at KIMS Hospital, Medicover, Seven Hills, or any other hospital in Vizag — patients are often discharged within days. A home care nurse ensures proper wound care, medication management, and rehabilitation at home, reducing the risk of complications and infection.
          </p>

          <h3>2. Elderly Care at Home</h3>
          <p>
            Many families in Visakhapatnam have elderly parents who live alone or need daily assistance. A dedicated home nurse provides personal hygiene support, mobility assistance, companionship, and chronic disease management for senior citizens — giving the entire family peace of mind.
          </p>

          <h3>3. Cardiac & BP Monitoring</h3>
          <p>
            Patients with heart conditions or high blood pressure in Vizag benefit greatly from regular home visits — monitoring vital signs, tracking medication adherence, and reporting any warning signs to the treating doctor immediately.
          </p>

          <h3>4. Wound Care & Dressing</h3>
          <p>
            Sterile wound dressing, post-operative care, and diabetic wound management are some of the most commonly requested home nursing services in Visakhapatnam. Our nurses visit regularly to clean and dress wounds, preventing infection and tracking healing progress.
          </p>

          <h3>5. Physiotherapy at Home</h3>
          <p>
            Instead of travelling to a clinic, patients in Vizag can now receive physiotherapy sessions at home — restoring mobility and strength after injury, stroke, or surgery.
          </p>

          <h2>How Much Do Home Care Nursing Services Cost in Vizag?</h2>
          <p>
            Home nursing costs in Visakhapatnam vary depending on the type of service, duration, and nurse qualification. Here are typical charges:
          </p>

          <div className="blog-post__table-wrap">
            <table className="blog-post__table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Typical Cost in Vizag</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Post-Surgery Care (12 hrs)</td><td>₹1,200 – ₹2,000/day</td></tr>
                <tr><td>Elderly Care (8 hrs)</td><td>₹800 – ₹1,500/day</td></tr>
                <tr><td>Wound Care (per visit)</td><td>₹400 – ₹700/visit</td></tr>
                <tr><td>Physiotherapy (per session)</td><td>₹600 – ₹1,000/session</td></tr>
                <tr><td>24-Hour Nursing</td><td>₹1,800 – ₹2,500/day</td></tr>
                <tr><td>IV Infusion at Home</td><td>₹1,200 – ₹1,800/infusion</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Most reputable home care agencies in Visakhapatnam offer a <strong>free home assessment</strong> before starting services — so you get a clear quote with no hidden charges.
          </p>

          <h2>How to Choose the Right Home Care Nurse in Visakhapatnam</h2>

          <h3>1. Check Nurse Qualifications</h3>
          <p>
            Always verify that the nurse holds a valid RN (Registered Nurse), LPN, or CNA licence. In Andhra Pradesh, nursing staff must be registered with the AP Nurses and Midwives Council. Ask for credentials before the first visit.
          </p>

          <h3>2. Verify Background Checks</h3>
          <p>
            A reputable agency will conduct police verification and background checks on all nurses. This is essential when a nurse will be entering your home, especially with elderly or vulnerable patients.
          </p>

          <h3>3. Look for 24/7 Availability</h3>
          <p>
            Medical needs don't follow business hours. Choose a home care provider in Vizag that is available around the clock — not just 9 to 5. Home Care Vite provides 24/7 home nursing services across Visakhapatnam.
          </p>

          <h3>4. Check Google Reviews</h3>
          <p>
            Read reviews on Google Maps and JustDial for the agency you're considering. Pay attention to comments about nurse punctuality, communication, clinical quality, and how the agency responds to complaints.
          </p>

          <h3>5. Ask for a Free Assessment</h3>
          <p>
            The best home care agencies in Visakhapatnam will send a care coordinator to assess the patient's needs before starting care. This ensures the right nurse is assigned and the care plan matches the patient's medical requirements.
          </p>

          <h2>Areas in Visakhapatnam Where We Provide Home Nursing</h2>
          <p>
            Home Care Vite provides home care nursing services across all major areas of Visakhapatnam including:
          </p>
          <ul>
            <li>MVP Colony</li>
            <li>Dwaraka Nagar</li>
            <li>Gajuwaka</li>
            <li>Rushikonda</li>
            <li>Madhurawada</li>
            <li>Seethammadhara</li>
            <li>Siripuram</li>
            <li>PM Palem</li>
            <li>Kommadi</li>
            <li>Pendurthi</li>
            <li>Bheemunipatnam</li>
          </ul>

          <h2>Why Families in Vizag Choose Home Care Vite</h2>
          <p>
            Home Care Vite is a trusted home care nursing service in Visakhapatnam, founded in 2023 with a commitment to bringing hospital-quality care to your doorstep. Every nurse is:
          </p>
          <ul>
            <li>✅ Licensed and certified (RN/LPN/CNA)</li>
            <li>✅ Background verified</li>
            <li>✅ Trained to our clinical care standards</li>
            <li>✅ Available 24 hours, 7 days a week</li>
          </ul>

          <div className="blog-post__cta">
            <h3>Book a Home Care Nurse in Visakhapatnam Today</h3>
            <p>Get a free home assessment — no commitment, no hidden charges.</p>
            <div className="blog-post__cta-btns">
              <a href="tel:+918639057903" className="btn-primary">
                <FiPhone size={16} /> Call +91 86390 57903
              </a>
              <Link to="/bookings" className="btn-secondary">
                Book Online <FiArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
              </Link>
            </div>
          </div>

          <h2>Frequently Asked Questions</h2>

          <div className="blog-post__faq">
            {[
              {
                q: 'How do I hire a home nurse in Visakhapatnam?',
                a: 'Call Home Care Vite at +91 86390 57903 or fill the online booking form at homecarevite.life. A care coordinator will contact you within one hour to arrange a free home assessment.',
              },
              {
                q: 'What is the minimum booking duration for home nursing in Vizag?',
                a: 'Home Care Vite offers home nursing services starting from a single visit or a single day. No minimum contract is required.',
              },
              {
                q: 'Can a home nurse administer injections or IV drips at home in Vizag?',
                a: 'Yes. Our registered nurses can administer injections and IV infusions at home in Visakhapatnam, provided a valid doctor\'s prescription is available.',
              },
              {
                q: 'Is home nursing covered by health insurance in Andhra Pradesh?',
                a: 'Some health insurance policies in India cover home nursing services. Check with your insurer. Home Care Vite provides itemised invoices suitable for insurance claims.',
              },
              {
                q: 'Do you provide male attendants for male patients in Vizag?',
                a: 'Yes. Home Care Vite provides both male and female nursing attendants in Visakhapatnam — matched to patient preference.',
              },
            ].map((item, i) => (
              <div key={i} className="blog-post__faq-item">
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Related posts */}
        <div className="blog-post__related">
          <h3>Related Articles</h3>
          <div className="blog-post__related-grid">
            <Link to="/blog/post-surgery-care-home-visakhapatnam" className="blog-post__related-card">
              <span>Post-Surgery Home Care in Visakhapatnam — What Patients Need to Know</span>
              <FiArrowLeft size={14} style={{ transform: 'rotate(180deg)', flexShrink: 0 }} />
            </Link>
            <Link to="/blog/elderly-care-at-home-vizag" className="blog-post__related-card">
              <span>Home Nursing for Senior Citizens in Vizag — A Family Guide</span>
              <FiArrowLeft size={14} style={{ transform: 'rotate(180deg)', flexShrink: 0 }} />
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
