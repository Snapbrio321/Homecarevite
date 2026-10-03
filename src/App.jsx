import React, { useState, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import './App.css'

// Lazy load everything below the fold
const About       = lazy(() => import('./components/About'))
const WhyUs       = lazy(() => import('./components/WhyUs'))
const Caregiver   = lazy(() => import('./components/Caregiver'))
const Testimonials= lazy(() => import('./components/Testimonials'))
const Contact     = lazy(() => import('./components/Contact'))
const Footer      = lazy(() => import('./components/Footer'))
const LegalModal  = lazy(() => import('./components/LegalModal'))

const SectionFallback = () => (
  <div style={{ minHeight: '200px', background: 'var(--off-white)' }} aria-hidden="true" />
)

export default function App() {
  const [legalModal, setLegalModal] = useState(null)

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Caregiver />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
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
