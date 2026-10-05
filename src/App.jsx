import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import StructuredData from './components/StructuredData'
import './App.css'

// Eager load home page
import HomePage from './pages/HomePage'

// Lazy load all other pages
const ServicesPage     = lazy(() => import('./pages/ServicesPage'))
const AboutPage        = lazy(() => import('./pages/AboutPage'))
const WhyUsPage        = lazy(() => import('./pages/WhyUsPage'))
const CaregiverPage    = lazy(() => import('./pages/CaregiverPage'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'))
const ContactPage      = lazy(() => import('./pages/ContactPage'))
const BookingsPage     = lazy(() => import('./pages/BookingsPage'))

// Lazy load footer & legal modal
const Footer    = lazy(() => import('./components/Footer'))
const LegalModal= lazy(() => import('./components/LegalModal'))

import { useState } from 'react'

const SectionFallback = () => (
  <div style={{ minHeight: '300px', background: 'var(--off-white)' }} aria-hidden="true" />
)

function AppContent() {
  const [legalModal, setLegalModal] = useState(null)
  const location = useLocation()

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <>
      <StructuredData />
      <Navbar />

      <Suspense fallback={<SectionFallback />}>
        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/services"     element={<ServicesPage />} />
          <Route path="/about"        element={<AboutPage />} />
          <Route path="/why-us"       element={<WhyUsPage />} />
          <Route path="/caregivers"   element={<CaregiverPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact"      element={<ContactPage />} />
          <Route path="/bookings"     element={<BookingsPage />} />
          {/* Fallback */}
          <Route path="*"             element={<HomePage />} />
        </Routes>
      </Suspense>

      <Suspense fallback={null}>
        <Footer onLegalClick={setLegalModal} />
      </Suspense>

      {legalModal && (
        <Suspense fallback={null}>
          <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
        </Suspense>
      )}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
