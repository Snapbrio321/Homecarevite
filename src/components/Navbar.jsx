import React, { useState, useEffect } from 'react'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/logo.jpeg'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Caregivers', href: '#caregiver' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

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

  const handleNav = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={() => handleNav('#home')} aria-label="Home Care Vite Home">
          <img src={logo} alt="Home Care Vite Logo" />
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link${activeLink === link.href ? ' active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="tel:+919110581825" className="navbar__cta btn-primary" aria-label="Call us now">
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
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__mobile-link${activeLink === link.href ? ' active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
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
