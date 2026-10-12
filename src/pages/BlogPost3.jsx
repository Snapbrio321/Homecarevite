import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiPhone, FiClock, FiTag } from 'react-icons/fi'
import { MdHealthAndSafety } from 'react-icons/md'
import './BlogPost.css'

export default function BlogPost3() {
  return (
    <main className="blog-post">
      <div className="container">
        <Link to="/blog" className="blog-post__back">
          <FiArrowLeft size={16} /> Back to Blog
        </Link>

        <header className="blog-post__header">
          <div className="blog-post__meta">
            <span className="blog-post__tag" style={{ background: '#15436015', color: '#154360' }}>
              <FiTag size={11} /> Senior Care
            </span>
            <span className="blog-post__time"><FiClock size={11} /> 6 min read</span>
            <span className="blog-post__date">October 9, 2026</span>
          </div>
          <h1 className="blog-post__title">
            Home Nursing Services for Senior Citizens in Vizag — A Family Guide
          </h1>
          <p className="blog-post__subtitle">
            Looking after elderly parents in Visakhapatnam? Discover how home nursing for senior citizens works, what it costs, and why families across Vizag are choosing home care.
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
            Caring for ageing parents is one of the most loving yet challenging responsibilities a family faces. In Visakhapatnam, where many working adults live far from their elderly parents — or simply cannot take enough time off work — professional home nursing services for senior citizens provide the ideal solution.
          </p>
          <p>
            This guide is written for families in Vizag looking for reliable, compassionate care for their elderly loved ones at home.
          </p>

          <h2>Why Home Nursing Is Better Than Old Age Homes for Most Seniors</h2>
          <ul>
            <li><strong>Familiar environment</strong> — seniors recover better and feel happier at home</li>
            <li><strong>Family connection</strong> — they remain close to family members</li>
            <li><strong>Personalised care</strong> — one-on-one attention from a dedicated nurse</li>
            <li><strong>No uprooting</strong> — no stressful transition to a new place</li>
            <li><strong>More affordable</strong> — home nursing is often cheaper than residential care facilities</li>
          </ul>

          <h2>What Home Nursing for Senior Citizens Includes in Visakhapatnam</h2>
          <ul>
            <li><strong>Personal hygiene</strong> — bathing, grooming, oral care, dressing</li>
            <li><strong>Mobility assistance</strong> — helping seniors move safely, preventing falls</li>
            <li><strong>Medication management</strong> — ensuring correct medicines at the correct time</li>
            <li><strong>Vital signs monitoring</strong> — daily BP, pulse, temperature checks</li>
            <li><strong>Chronic disease management</strong> — diabetes, hypertension, arthritis care</li>
            <li><strong>Nutritional support</strong> — meal preparation and dietary guidance</li>
            <li><strong>Companionship</strong> — conversation, mental stimulation, emotional support</li>
            <li><strong>Doctor visit coordination</strong> — accompanying seniors to outpatient appointments</li>
            <li><strong>Emergency response</strong> — immediate action in case of falls or medical emergencies</li>
          </ul>

          <h2>Signs Your Elderly Parent Needs a Home Nurse in Vizag</h2>
          <ul>
            <li>They live alone in Visakhapatnam while you work or live away</li>
            <li>They have fallen recently or are at risk of falling</li>
            <li>They are forgetting to take their medications</li>
            <li>They have recently been discharged from hospital</li>
            <li>They are showing signs of dementia or memory loss</li>
            <li>They are losing weight or not eating properly</li>
            <li>They have a chronic condition like diabetes, heart disease, or COPD</li>
            <li>Their personal hygiene has declined</li>
          </ul>

          <h2>Cost of Elderly Home Care Nursing in Visakhapatnam</h2>
          <div className="blog-post__table-wrap">
            <table className="blog-post__table">
              <thead>
                <tr><th>Care Type</th><th>Duration</th><th>Typical Cost</th></tr>
              </thead>
              <tbody>
                <tr><td>Basic Attendant Care</td><td>8 hours/day</td><td>₹800 – ₹1,200/day</td></tr>
                <tr><td>Registered Nurse Visit</td><td>Per visit (2 hrs)</td><td>₹500 – ₹800/visit</td></tr>
                <tr><td>12-Hour Nursing Care</td><td>12 hours/day</td><td>₹1,200 – ₹1,800/day</td></tr>
                <tr><td>24-Hour Live-in Care</td><td>Round the clock</td><td>₹1,800 – ₹2,500/day</td></tr>
                <tr><td>Monthly Package</td><td>30 days, 12 hrs/day</td><td>₹28,000 – ₹40,000</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Choosing the Right Home Nurse for Your Elderly Parent in Vizag</h2>
          <h3>Match Nurse Gender to Patient Preference</h3>
          <p>
            Most elderly patients in Visakhapatnam are more comfortable with a nurse of the same gender. Home Care Vite provides both male and female nurses, matched to your preference.
          </p>
          <h3>Language Compatibility</h3>
          <p>
            Our nurses in Visakhapatnam are Telugu-speaking and can communicate naturally with elderly patients who are not comfortable in English.
          </p>
          <h3>Experience With Specific Conditions</h3>
          <p>
            If your parent has dementia, Parkinson's, or stroke-related paralysis, ask specifically for a nurse with experience in that area. Home Care Vite matches nurses to patient conditions.
          </p>

          <h2>Areas in Visakhapatnam Where We Provide Senior Citizen Home Nursing</h2>
          <p>Home Care Vite provides elderly home nursing in all major Vizag localities including MVP Colony, Dwaraka Nagar, Madhurawada, Gajuwaka, Rushikonda, Seethammadhara, PM Palem, Siripuram, Kommadi and Pendurthi.</p>

          <div className="blog-post__cta">
            <h3>Book Home Nursing for Your Elderly Parent in Vizag</h3>
            <p>Free home assessment. Telugu-speaking nurses. Available 24/7.</p>
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
              { q: 'Can I hire a home nurse for just a few hours a day for my elderly parent in Vizag?', a: 'Yes. Home Care Vite offers flexible hourly and daily care plans for senior citizens in Visakhapatnam — starting from just a few hours a day.' },
              { q: 'Do your nurses speak Telugu?', a: 'Yes. All our nurses in Visakhapatnam are Telugu-speaking and can communicate naturally and comfortably with elderly patients.' },
              { q: 'What if my elderly parent refuses nursing care?', a: 'This is common. Our care coordinators are trained to gently introduce the nurse and build trust with the patient. Most seniors become comfortable within the first 1–2 visits.' },
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
              <span>Complete Guide to Home Care Nursing in Visakhapatnam</span>
              <FiArrowLeft size={14} style={{ transform: 'rotate(180deg)', flexShrink: 0 }} />
            </Link>
            <Link to="/blog/post-surgery-care-home-visakhapatnam" className="blog-post__related-card">
              <span>Post-Surgery Home Care in Visakhapatnam</span>
              <FiArrowLeft size={14} style={{ transform: 'rotate(180deg)', flexShrink: 0 }} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
