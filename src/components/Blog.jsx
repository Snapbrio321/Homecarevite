import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock, FiTag } from 'react-icons/fi'
import blogImg1 from '../assets/Complete Guide to Home Care Nursing in Vizag.png'
import blogImg2 from '../assets/Post-Surgery Home Care in Visakhapatnam.png'
import './Blog.css'

export const blogPosts = [
  {
    id: 'home-care-nursing-services-vizag-guide',
    slug: 'home-care-nursing-services-vizag-guide',
    title: 'Complete Guide to Home Care Nursing Services in Visakhapatnam (Vizag)',
    excerpt: 'Everything you need to know about hiring a certified home care nurse in Vizag — costs, services, what to expect, and how to choose the right provider.',
    date: 'October 9, 2026',
    readTime: '7 min read',
    tag: 'Home Nursing',
    tagColor: '#1B3F8B',
    image: blogImg1,
  },
  {
    id: 'post-surgery-care-home-visakhapatnam',
    slug: 'post-surgery-care-home-visakhapatnam',
    title: 'Post-Surgery Home Care in Visakhapatnam — What Patients Need to Know',
    excerpt: 'Recovering at home after surgery in Vizag? Here is what professional post-surgery home care involves, who needs it, and how it speeds up recovery.',
    date: 'October 9, 2026',
    readTime: '5 min read',
    tag: 'Post-Surgery',
    tagColor: '#2d6221',
    image: blogImg2,
  },
  {
    id: 'elderly-care-at-home-vizag',
    slug: 'elderly-care-at-home-vizag',
    title: 'Home Nursing Services for Senior Citizens in Vizag — A Family Guide',
    excerpt: 'Looking after elderly parents in Visakhapatnam? Discover how home nursing for senior citizens works, what it costs, and why families across Vizag are choosing home care.',
    date: 'October 9, 2026',
    readTime: '6 min read',
    tag: 'Senior Care',
    tagColor: '#154360',
    image: null,
  },
]

export default function Blog() {
  return (
    <section className="blog section-padding" aria-labelledby="blog-heading">
      <div className="container">
        <div className="blog__header">
          <div className="badge green">Blog</div>
          <h2 id="blog-heading" className="section-title">
            Home Care Nursing Tips & Guides for Vizag Families
          </h2>
          <p className="section-subtitle">
            Helpful information about home care nursing services in Visakhapatnam — written by our certified nursing team.
          </p>
        </div>

        <div className="blog__grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              {/* Image */}
              <div className="blog-card__img" style={{ background: post.image ? 'transparent' : `linear-gradient(135deg, ${post.tagColor}22, ${post.tagColor}11)` }}>
                {post.image ? (
                  <img src={post.image} alt={post.title} className="blog-card__img-real" />
                ) : (
                  <div className="blog-card__img-icon" style={{ color: post.tagColor }}>
                    <span style={{ fontSize: '3rem' }}>📋</span>
                  </div>
                )}
              </div>

              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span className="blog-card__tag" style={{ background: `${post.tagColor}15`, color: post.tagColor }}>
                    <FiTag size={11} /> {post.tag}
                  </span>
                  <span className="blog-card__time">
                    <FiClock size={11} /> {post.readTime}
                  </span>
                </div>
                <h3 className="blog-card__title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__date">{post.date}</span>
                  <Link to={`/blog/${post.slug}`} className="blog-card__read">
                    Read More <FiArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
