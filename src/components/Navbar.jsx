import React, { useState, useEffect } from 'react'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/logo.jpeg'
import './Navbar.css'

const navLinks = [
  { label: 'Home',         href: '#home'         },
  { label: 'Services',     href: '#services'     },
  { label: 'About Us',     href: '#about'        },
  { label: 'Why Us',       href: '#why-us'       },
  { label: 'Caregivers',   href: '#caregiver'    },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact'      },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeLink,setActiveLink]= useState(window.location.hash || '#home')

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

  /* ── Sync active link with hash changes (back/forward) ── */
  useEffect(() => {
    const onHashChange = () => setActiveLink(window.location.hash || '#home')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  /* ── Handle nav click — update URL hash + smooth scroll ── */
  const handleNav = (e, href) => {
    e.preventDefault()
    setActiveLink(href)
    setMenuOpen(false)
    // Update the browser URL to show the hash (e.g. /# contact)
    window.history.pushState(null, '', href)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">

        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleNav(e, '#home')}
          aria-label="Home Care Vite — Home Care Nursing Services Visakhapatnam"
        >
          <img src={logo} alt="Home Care Vite — Home Care Nursing Services Vizag" />
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link${activeLink === link.href ? ' active' : ''}`}
              onClick={(e) => handleNav(e, link.href)}
              aria-current={activeLink === link.href ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+919110581825"
          className="navbar__cta btn-primary"
          aria-label="Call Home Care Vite — +91 91105 81825"
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
            <a
              key={link.href}
              href={link.href}
              className={`navbar__mobile-link${activeLink === link.href ? ' active' : ''}`}
              onClick={(e) => handleNav(e, link.href)}
              aria-current={activeLink === link.href ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+919110581825" className="btn-primary navbar__mobile-cta">
            <FiPhone size={16} /> Call Now
          </a>
        </nav>
      </div>
    </header>
  )
}
