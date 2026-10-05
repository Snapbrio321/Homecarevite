import React, { lazy, Suspense } from 'react'
import Hero from '../components/Hero'

// Lazy load below-fold sections for performance
const Services     = lazy(() => import('../components/Services'))
const About        = lazy(() => import('../components/About'))
const WhyUs        = lazy(() => import('../components/WhyUs'))
const Caregiver    = lazy(() => import('../components/Caregiver'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const Contact      = lazy(() => import('../components/Contact'))

const SectionFallback = () => (
  <div style={{ minHeight: '200px', background: 'var(--off-white)' }} aria-hidden="true" />
)

export default function HomePage() {
  return (
    <main>
      {/* Hero — always eager loaded */}
      <Hero />

      {/* All sections — lazy loaded as user scrolls */}
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>

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
  )
}
