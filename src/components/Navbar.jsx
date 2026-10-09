import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/logo.jpeg'
import './Navbar.css'

const navLinks = [
  { label: 'Home',         to: '/'             },
  { label: 'Services',     to: '/services'     },
  { label: 'About Us',     to: '/about'        },
  { label: 'Why Us',       to: '/why-us'       },
  { label: 'Caregivers',   to: '/caregivers'   },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Bookings',     to: '/bookings'     },
  { label: 'Contact',      to: '/contact'      },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const navigate = useNavigate()

  /* ── Throttled scroll listener ── */
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (to) => {
    setMenuOpen(false)
    navigate(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">

        {/* Logo */}
        <NavLink
          to="/"
          className="navbar__logo"
          onClick={() => handleNav('/')}
          aria-label="Home Care Vite — Home Care Nursing Services Visakhapatnam"
        >
          <img src={logo} alt="Home Care Vite — Home Care Nursing Services Vizag" />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+918639057903"
          className="navbar__cta btn-primary"
          aria-label="Call Home Care Vite — +91 86390 57903"
        >
          <FiPhone size={16} />
          Call Now
        </a>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__mobile-link${isActive ? ' active' : ''}`
              }
              onClick={() => handleNav(link.to)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <a href="tel:+918639057903" className="btn-primary navbar__mobile-cta">
            <FiPhone size={16} /> Call Now
          </a>
        </nav>
      </div>
    </header>
  )
}

