import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiPhone, FiClock, FiTag } from 'react-icons/fi'
import { MdHealthAndSafety } from 'react-icons/md'
import './BlogPost.css'

export default function BlogPost2() {
  return (
    <main className="blog-post">
      <div className="container">
        <Link to="/blog" className="blog-post__back">
          <FiArrowLeft size={16} /> Back to Blog
        </Link>

        <header className="blog-post__header">
          <div className="blog-post__meta">
            <span className="blog-post__tag" style={{ background: '#2d622115', color: '#2d6221' }}>
              <FiTag size={11} /> Post-Surgery
            </span>
            <span className="blog-post__time"><FiClock size={11} /> 5 min read</span>
            <span className="blog-post__date">October 9, 2026</span>
          </div>
          <h1 className="blog-post__title">
            Post-Surgery Home Care in Visakhapatnam — What Patients Need to Know
          </h1>
          <p className="blog-post__subtitle">
            Recovering at home after surgery in Vizag? Here is what professional post-surgery home care involves, who needs it, and how it speeds up recovery.
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

        <div className="blog-post__content">
          <p>
            Every year, thousands of patients in Visakhapatnam undergo surgery at hospitals like KIMS, Medicover, Seven Hills, and Apollo. Most are discharged within 2–5 days — but recovery doesn't stop at the hospital gate. Post-surgery home care nursing ensures that patients continue to receive the medical attention they need in the comfort of their own homes in Vizag.
          </p>

          <h2>Why Post-Surgery Home Care Matters</h2>
          <p>
            After surgery, patients face several challenges at home — wound management, pain control, preventing infection, managing medications, and regaining mobility. Without proper nursing support, complications can arise, leading to hospital readmission. Studies show that patients who receive structured home nursing care after surgery recover significantly faster and with fewer complications.
          </p>

          <h2>What Does Post-Surgery Home Care Include in Vizag?</h2>
          <ul>
            <li><strong>Wound care & dressing changes</strong> — sterile cleaning and dressing of surgical wounds every 1–2 days</li>
            <li><strong>Drain & catheter management</strong> — monitoring and managing post-operative drains</li>
            <li><strong>Medication administration</strong> — ensuring the right medicines at the right time</li>
            <li><strong>Pain monitoring</strong> — tracking pain levels and communicating with your surgeon</li>
            <li><strong>Vital signs monitoring</strong> — BP, temperature, pulse, oxygen levels</li>
            <li><strong>Mobility assistance</strong> — helping patients sit, stand, and walk safely</li>
            <li><strong>Preventing bed sores</strong> — repositioning and skin care for bedridden patients</li>
            <li><strong>Physiotherapy exercises</strong> — prescribed rehabilitation exercises at home</li>
            <li><strong>Doctor coordination</strong> — communicating updates to your treating physician</li>
          </ul>

          <h2>How Long Is Post-Surgery Home Care Needed?</h2>
          <p>
            The duration depends on the type of surgery. Here is a general guide for common surgeries in Visakhapatnam:
          </p>
          <div className="blog-post__table-wrap">
            <table className="blog-post__table">
              <thead>
                <tr><th>Surgery Type</th><th>Typical Home Care Duration</th></tr>
              </thead>
              <tbody>
                <tr><td>Hip / Knee Replacement</td><td>4–6 weeks</td></tr>
                <tr><td>Abdominal / Laparoscopic Surgery</td><td>1–2 weeks</td></tr>
                <tr><td>Cardiac Surgery</td><td>4–8 weeks</td></tr>
                <tr><td>Spinal Surgery</td><td>3–6 weeks</td></tr>
                <tr><td>Fracture / Orthopaedic Surgery</td><td>2–4 weeks</td></tr>
                <tr><td>Caesarean Section</td><td>2–3 weeks</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Signs You Need a Home Nurse After Surgery in Vizag</h2>
          <ul>
            <li>You live alone or your family cannot take time off work</li>
            <li>You have a complex wound that requires professional dressing</li>
            <li>You are on multiple medications that need careful management</li>
            <li>Your surgeon has prescribed physiotherapy or rehabilitation</li>
            <li>You have a drain, catheter, or IV line that needs monitoring</li>
            <li>You are elderly or have a pre-existing condition like diabetes</li>
          </ul>

          <h2>Post-Surgery Home Care Charges in Visakhapatnam</h2>
          <p>
            Home Care Vite offers post-surgery nursing packages starting from <strong>₹1,200 per day</strong> for 12-hour care. Free home assessment included — no hidden charges.
          </p>

          <div className="blog-post__cta">
            <h3>Need Post-Surgery Care at Home in Vizag?</h3>
            <p>Call us now — a care coordinator will visit within hours for a free assessment.</p>
            <div className="blog-post__cta-btns">
              <a href="tel:+918639057903" className="btn-primary">
                <FiPhone size={16} /> Call +91 86390 57903
              </a>
              <Link to="/bookings" className="btn-secondary">
                Book Online <FiArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
              </Link>
            </div>
          </div>

          <div className="blog-post__faq">
            {[
              { q: 'Can a home nurse remove surgical stitches in Visakhapatnam?', a: 'Yes. Our registered nurses can remove sutures and staples at home in Vizag, on the instruction of your treating surgeon.' },
              { q: 'What if there is a complication during post-surgery home care?', a: 'Our nurses are trained to recognize warning signs. They immediately contact the treating doctor and arrange hospital transfer if required.' },
              { q: 'Do you provide male nurses for post-surgery care in Vizag?', a: 'Yes. We provide both male and female nurses depending on patient preference and availability.' },
            ].map((item, i) => (
              <div key={i} className="blog-post__faq-item">
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-post__related">
          <h3>Related Articles</h3>
          <div className="blog-post__related-grid">
            <Link to="/blog/home-care-nursing-services-vizag-guide" className="blog-post__related-card">
              <span>Complete Guide to Home Care Nursing Services in Visakhapatnam</span>
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
