import React, { useEffect } from 'react'
import { FiX, FiChevronRight } from 'react-icons/fi'
import './LegalModal.css'

export const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'October 1, 2023',
    sections: [
      {
        heading: '1. Introduction',
        body: `Home Care Vite ("we", "our", or "us") is committed to protecting the privacy and confidentiality of all personal and health-related information entrusted to us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website or services. By accessing our website or engaging our nursing services, you agree to the terms described in this policy.`,
      },
      {
        heading: '2. Information We Collect',
        body: `We collect the following categories of information:

• Personal Identification: Full name, address, phone number, email address, age, and gender.
• Health Information: Medical history, diagnoses, prescribed medications, treatment plans, and clinical assessment notes necessary for delivering nursing care.
• Financial Information: Insurance details, billing information, and payment records, processed securely and never stored on our servers.
• Technical Information: IP address, browser type, device type, and pages visited on our website (collected via cookies and analytics tools).
• Communication Records: Records of calls, messages, and correspondence between you and our team for quality and safety purposes.`,
      },
      {
        heading: '3. How We Use Your Information',
        body: `We use your information solely for the following purposes:

• To assess your care needs and create a personalised nursing care plan.
• To coordinate nursing visits, physiotherapy, and medical services.
• To communicate with your treating physicians and specialists as required.
• To send appointment reminders, health updates, and service-related communications.
• To process payments and manage billing.
• To improve our services, website functionality, and patient experience.
• To comply with applicable laws, regulations, and legal obligations in India.

We do not sell, rent, or trade your personal information to any third party for marketing purposes.`,
      },
      {
        heading: '4. How We Share Your Information',
        body: `We may share your information only in the following circumstances:

• With Your Care Team: Licensed nurses, physiotherapists, and care coordinators involved in your treatment.
• With Your Physician: To coordinate care and share clinical updates with your referring or treating doctor.
• With Service Providers: Trusted third-party service providers (e.g., payment gateways, SMS services) who are contractually obligated to keep your data confidential.
• Legal Requirements: When required by law, court order, or government authority under applicable Indian law including the Information Technology Act, 2000.
• Emergency Situations: In cases of medical emergency, to protect your vital interests or those of another person.`,
      },
      {
        heading: '5. Data Security',
        body: `We implement industry-standard security measures to protect your personal and health information, including:

• Encrypted data storage and transmission (SSL/TLS).
• Role-based access controls — only authorised staff can access patient records.
• Secure, password-protected digital records management systems.
• Regular security audits and staff training on data privacy.

While we take all reasonable precautions, no method of electronic transmission is 100% secure. We encourage you to contact us immediately if you suspect any unauthorised use of your information.`,
      },
      {
        heading: '6. Cookies & Website Analytics',
        body: `Our website uses cookies to improve your browsing experience. Cookies are small text files stored on your device. We use:

• Essential Cookies: Required for the website to function correctly.
• Analytics Cookies: To understand how visitors use our website (via tools like Google Analytics). All data is anonymised.

You can disable cookies in your browser settings. Note that disabling cookies may affect some website functionality.`,
      },
      {
        heading: '7. Data Retention',
        body: `We retain your personal and health information for as long as necessary to provide our services and comply with legal obligations. Clinical records are retained for a minimum of 7 years as required under Indian healthcare regulations. Financial records are retained for a minimum of 8 years as per the Income Tax Act, 1961. You may request deletion of non-essential data at any time by contacting us.`,
      },
      {
        heading: '8. Your Rights',
        body: `You have the following rights regarding your personal information:

• Right to Access: Request a copy of the personal information we hold about you.
• Right to Correction: Request correction of inaccurate or incomplete information.
• Right to Deletion: Request deletion of your personal data (subject to legal retention requirements).
• Right to Withdraw Consent: Withdraw your consent to data processing at any time (this will not affect past lawful processing).
• Right to Complaint: Lodge a complaint with the relevant Indian data protection authority.

To exercise any of these rights, please contact us at homecarevite@gmail.com or call +91 91105 81825.`,
      },
      {
        heading: '9. Children\'s Privacy',
        body: `Our services extend to paediatric and newborn patients. For patients under the age of 18, all consent is obtained from a parent or legal guardian. We handle all information pertaining to minors with the highest level of care and confidentiality.`,
      },
      {
        heading: '10. Changes to This Policy',
        body: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on our website with a revised date. Continued use of our services after any changes constitutes your acceptance of the updated policy.`,
      },
      {
        heading: '11. Contact Us',
        body: `For any questions, concerns, or requests regarding this Privacy Policy, please contact:\n\nHome Care Vite\nEmail: homecarevite@gmail.com\nPhone: +91 91105 81825\nService Area: Greater Visakhapatnam, Andhra Pradesh`,
      },
    ],
  },

  terms: {
    title: 'Terms of Service',
    lastUpdated: 'October 1, 2023',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: `By accessing the Home Care Vite website or engaging our home nursing services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. These terms constitute a legally binding agreement between you ("Client") and Home Care Vite ("Company").`,
      },
      {
        heading: '2. Services Offered',
        body: `Home Care Vite provides professional home nursing and healthcare services including, but not limited to:

• Post-surgery and wound care
• Elderly and chronic disease management care
• Cardiac monitoring and support
• Medication management and administration
• Palliative and end-of-life care
• In-home physiotherapy
• Mother and newborn postnatal care

All services are delivered by licensed, verified nursing professionals. Home Care Vite does not provide emergency medical services. In case of a medical emergency, please call 108 (Ambulance) immediately.`,
      },
      {
        heading: '3. Client Responsibilities',
        body: `As a client, you agree to:

• Provide accurate and complete information about the patient's health condition, medical history, and medications.
• Ensure a safe working environment for our nursing staff at your home.
• Inform us immediately of any changes in the patient's health condition.
• Be present or designate a responsible adult during nursing visits as required.
• Not request or expect our nursing staff to perform tasks outside the agreed care plan.
• Treat all Home Care Vite staff with respect and professionalism.`,
      },
      {
        heading: '4. Fees, Payments & Cancellations',
        body: `• Fees are agreed upon at the time of care plan creation and are communicated transparently before services begin.
• Payment is due as per the agreed billing cycle (weekly or per-visit basis).
• We accept payments via bank transfer, UPI, and major credit/debit cards.
• Cancellation of a scheduled visit requires at least 12 hours' notice. Late cancellations may be subject to a partial charge.
• We reserve the right to revise our fees with 30 days' written notice to existing clients.`,
      },
      {
        heading: '5. Limitation of Liability',
        body: `Home Care Vite and its staff will provide services with the highest standard of professional care. However:

• We are not liable for any adverse outcomes resulting from incomplete or inaccurate medical information provided by the client.
• We are not responsible for pre-existing medical conditions that deteriorate despite our care.
• Our total liability in any claim shall not exceed the total fees paid for the specific service period in question.
• We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.`,
      },
      {
        heading: '6. Intellectual Property',
        body: `All content on the Home Care Vite website — including text, images, logos, graphics, and design — is the intellectual property of Home Care Vite and is protected under Indian copyright law. You may not reproduce, distribute, or use any content without prior written permission from us.`,
      },
      {
        heading: '7. Termination of Services',
        body: `Either party may terminate the service agreement with 7 days' written notice. Home Care Vite reserves the right to terminate services immediately in cases of:

• Abusive or threatening behaviour toward our staff.
• Unsafe or hazardous working conditions at the patient's premises.
• Non-payment of agreed fees.
• Provision of false medical information that places our staff at risk.`,
      },
      {
        heading: '8. Governing Law',
        body: `These Terms of Service are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Andhra Pradesh, India.`,
      },
      {
        heading: '9. Amendments',
        body: `We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on our website. Continued use of our services after the effective date of changes constitutes acceptance of the revised terms.`,
      },
      {
        heading: '10. Contact',
        body: `For questions about these Terms, contact us at:\n\nHome Care Vite\nEmail: homecarevite@gmail.com\nPhone: +91 91105 81825`,
      },
    ],
  },

  accessibility: {
    title: 'Accessibility Statement',
    lastUpdated: 'October 1, 2023',
    sections: [
      {
        heading: 'Our Commitment',
        body: `Home Care Vite is committed to ensuring that our website and services are accessible to everyone, including individuals with disabilities. We believe that all people deserve equal access to healthcare information and services, and we continuously work to improve the accessibility of our digital presence.`,
      },
      {
        heading: 'Conformance Status',
        body: `We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible to people with disabilities. Our website is designed with the following accessibility features:

• Semantic HTML structure for screen reader compatibility.
• Sufficient colour contrast ratios between text and backgrounds (minimum 4.5:1).
• All images include descriptive alt text.
• All form fields include visible labels.
• Keyboard navigation is fully supported across all interactive elements.
• ARIA roles and landmarks are used throughout to assist assistive technologies.
• Font sizes are scalable and the layout is fully responsive across all devices.`,
      },
      {
        heading: 'Physical Service Accessibility',
        body: `Home Care Vite provides services in patients' homes, meaning our nurses come to you. This inherently removes many physical access barriers common in clinical settings. Our caregivers are trained to assist patients with:

• Mobility impairments and wheelchair users.
• Visual and hearing impairments — communication adaptations are available upon request.
• Cognitive conditions including dementia and memory-related conditions.
• Patients requiring sign language interpretation (available upon advance request).`,
      },
      {
        heading: 'Known Limitations',
        body: `While we strive for full accessibility, some older content or third-party embedded tools may not fully meet accessibility standards. We are actively working to address all known issues. If you encounter any accessibility barrier on our website, please let us know immediately.`,
      },
      {
        heading: 'Assistive Technology Support',
        body: `Our website is designed to be compatible with the following assistive technologies:

• Screen readers: NVDA, JAWS, VoiceOver (iOS/macOS), TalkBack (Android).
• Browser zoom and text resizing up to 200% without loss of content.
• High contrast and dark mode browser settings.
• Keyboard-only navigation (Tab, Enter, Arrow keys, Escape).`,
      },
      {
        heading: 'Feedback & Contact',
        body: `We welcome your feedback on accessibility. If you experience any difficulty accessing any part of our website or services, please contact us:\n\nEmail: homecarevite@gmail.com\nPhone: +91 91105 81825\n\nWe aim to respond to all accessibility feedback within 2 business days and will make every reasonable effort to provide the information in an accessible format.`,
      },
    ],
  },

  hipaa: {
    title: 'Patient Health Information Notice',
    lastUpdated: 'October 1, 2023',
    sections: [
      {
        heading: 'Notice Regarding Health Information',
        body: `Home Care Vite takes the privacy and security of your health information extremely seriously. While HIPAA (Health Insurance Portability and Accountability Act) is a United States federal law, Home Care Vite adheres to equivalent principles of health data protection under Indian law, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and applicable healthcare regulations.`,
      },
      {
        heading: 'What is Protected Health Information?',
        body: `Protected Health Information (PHI) includes any information related to:

• Your past, present, or future physical or mental health condition.
• The healthcare services provided to you by Home Care Vite.
• Payment for those healthcare services.

This includes your name, address, phone number, diagnosis, treatment notes, prescription details, and any other information that identifies you and relates to your health.`,
      },
      {
        heading: 'How We Use Your Health Information',
        body: `We may use and disclose your health information for the following purposes:

• Treatment: Sharing information with your nurses, care coordinators, and treating physicians to provide appropriate care.
• Payment: Billing and insurance processing as required.
• Healthcare Operations: Internal quality reviews, staff training, and service improvement activities.
• Emergency Situations: Disclosing relevant information to emergency services or treating hospitals if required for your safety.
• Legal Compliance: As required by Indian law, including reporting communicable diseases to public health authorities.

We will NOT use or share your health information for marketing purposes or sell it to any third party.`,
      },
      {
        heading: 'Your Rights Over Your Health Information',
        body: `You have the following rights regarding your health information:

• Right to Inspect and Copy: Request access to your medical records and care notes held by Home Care Vite.
• Right to Amend: Request corrections to your health information if you believe it is inaccurate or incomplete.
• Right to an Account of Disclosures: Request a record of when and to whom your health information was disclosed.
• Right to Request Restrictions: Request limitations on how we use or share your information (we will consider all requests in good faith).
• Right to Confidential Communication: Request that we communicate with you in a specific way or at a specific location.
• Right to a Copy of This Notice: You are entitled to a paper or digital copy of this notice at any time.`,
      },
      {
        heading: 'Data Security Measures',
        body: `To protect your health information, Home Care Vite maintains:

• Encrypted digital health records accessible only to authorised care personnel.
• Strict access controls — each team member can only access records relevant to their assigned patients.
• Secure disposal of all physical documents containing patient information.
• Regular audits of data access logs to detect any unauthorised activity.
• Mandatory staff training on health data privacy and confidentiality obligations.`,
      },
      {
        heading: 'Data Breach Notification',
        body: `In the unlikely event of a data breach involving your health information, Home Care Vite will:

• Notify affected patients promptly, within 72 hours of becoming aware of the breach.
• Provide details of what information was affected and what steps we are taking.
• Report the breach to appropriate regulatory authorities as required by law.`,
      },
      {
        heading: 'Complaints',
        body: `If you believe your health information privacy rights have been violated, you may file a complaint with Home Care Vite directly or with the relevant Indian data protection authority. We will not retaliate against you for filing a complaint.\n\nTo file a complaint or for any questions:\n\nEmail: homecarevite@gmail.com\nPhone: +91 91105 81825\nHome Care Vite, Greater Visakhapatnam, Andhra Pradesh`,
      },
    ],
  },
}

export default function LegalModal({ type, onClose }) {
  const content = LEGAL_CONTENT[type]

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!content) return null

  return (
    <div
      className="legal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="legal-modal">
        {/* Header */}
        <div className="legal-modal__header">
          <div>
            <h2 id="legal-modal-title" className="legal-modal__title">{content.title}</h2>
            <p className="legal-modal__date">Last updated: {content.lastUpdated}</p>
          </div>
          <button
            className="legal-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Table of contents */}
        <div className="legal-modal__toc">
          <p className="legal-modal__toc-label">Contents</p>
          <div className="legal-modal__toc-links">
            {content.sections.map((s, i) => (
              <a
                key={i}
                href={`#legal-section-${i}`}
                className="legal-modal__toc-link"
              >
                <FiChevronRight size={12} />
                {s.heading}
              </a>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="legal-modal__body">
          {content.sections.map((s, i) => (
            <div key={i} id={`legal-section-${i}`} className="legal-modal__section">
              <h3 className="legal-modal__section-title">{s.heading}</h3>
              <div className="legal-modal__section-body">
                {s.body.split('\n').map((line, li) =>
                  line.trim() === '' ? (
                    <br key={li} />
                  ) : line.trim().startsWith('•') ? (
                    <p key={li} className="legal-modal__bullet">{line}</p>
                  ) : (
                    <p key={li}>{line}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="legal-modal__footer">
          <p>Questions? Contact us at <a href="mailto:homecarevite@gmail.com">homecarevite@gmail.com</a> or <a href="tel:+919110581825">+91 91105 81825</a></p>
          <button className="btn-primary legal-modal__close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
