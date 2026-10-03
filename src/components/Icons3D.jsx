import React from 'react'
import './Icons3D.css'

export const Icon3DSurgery = () => (
  <div className="icon3d icon3d--surgery" aria-hidden="true">
    <div className="icon3d__bg" />
    <div className="icon3d__shadow" />
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon3d__svg">
      <defs>
        <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
          <stop offset="100%" stopColor="#c8deff" stopOpacity="1"/>
        </linearGradient>
        <linearGradient id="sg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4e8cff"/>
          <stop offset="100%" stopColor="#1B3F8B"/>
        </linearGradient>
        <filter id="sf1"><feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#1B3F8B" floodOpacity="0.4"/></filter>
      </defs>
      {/* Cross shape */}
      <rect x="32" y="10" width="16" height="60" rx="8" fill="url(#sg1)" filter="url(#sf1)"/>
      <rect x="10" y="32" width="60" height="16" rx="8" fill="url(#sg1)" filter="url(#sf1)"/>
      {/* Shine overlay */}
      <rect x="34" y="10" width="6" height="26" rx="3" fill="white" fillOpacity="0.6"/>
      <rect x="10" y="34" width="26" height="6" rx="3" fill="white" fillOpacity="0.6"/>
    </svg>
  </div>
)

export const Icon3DElderly = () => (
  <div className="icon3d icon3d--elderly" aria-hidden="true">
    <div className="icon3d__bg" />
    <div className="icon3d__shadow" />
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon3d__svg">
      <defs>
        <linearGradient id="eg1" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#b8f0a0"/>
        </linearGradient>
        <filter id="ef1"><feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#2d6221" floodOpacity="0.4"/></filter>
      </defs>
      {/* Person body */}
      <circle cx="36" cy="18" r="11" fill="url(#eg1)" filter="url(#ef1)"/>
      <circle cx="36" cy="17" r="5" fill="white" fillOpacity="0.5"/>
      <path d="M20 36 C20 28 27 24 36 24 C45 24 52 28 52 36 L52 50 L20 50 Z" fill="url(#eg1)" filter="url(#ef1)"/>
      <path d="M20 50 L17 68 M52 50 L55 68" stroke="url(#eg1)" strokeWidth="6" strokeLinecap="round" filter="url(#ef1)"/>
      {/* Walking stick */}
      <path d="M55 38 L66 52 L66 68" stroke="url(#eg1)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" filter="url(#ef1)"/>
      <circle cx="66" cy="34" r="5" fill="url(#eg1)" fillOpacity="0.8"/>
      {/* Shine */}
      <circle cx="33" cy="15" r="4" fill="white" fillOpacity="0.55"/>
    </svg>
  </div>
)

export const Icon3DCardiac = () => (
  <div className="icon3d icon3d--cardiac" aria-hidden="true">
    <div className="icon3d__bg" />
    <div className="icon3d__shadow" />
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon3d__svg">
      <defs>
        <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#ffc0c0"/>
        </linearGradient>
        <linearGradient id="cg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b6b"/>
          <stop offset="100%" stopColor="#c0392b"/>
        </linearGradient>
        <filter id="cf1"><feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#c0392b" floodOpacity="0.45"/></filter>
      </defs>
      {/* Heart */}
      <path d="M40 65 C40 65 12 48 12 30 C12 21 18 14 27 14 C32 14 37 17 40 22 C43 17 48 14 53 14 C62 14 68 21 68 30 C68 48 40 65 40 65Z"
        fill="url(#cg1)" filter="url(#cf1)"/>
      {/* Inner heart glow */}
      <path d="M40 58 C40 58 18 44 18 30 C18 23 23 18 30 18 C35 18 39 21 40 25 C41 21 45 18 50 18 C57 18 62 23 62 30 C62 44 40 58 40 58Z"
        fill="url(#cg2)" fillOpacity="0.35"/>
      {/* ECG line */}
      <path d="M14 40 L24 40 L28 30 L34 52 L40 36 L45 44 L50 44 L66 44"
        stroke="#c0392b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7"/>
      {/* Shine */}
      <ellipse cx="30" cy="24" rx="8" ry="5" fill="white" fillOpacity="0.45" transform="rotate(-30 30 24)"/>
    </svg>
  </div>
)

export const Icon3DWound = () => (
  <div className="icon3d icon3d--wound" aria-hidden="true">
    <div className="icon3d__bg" />
    <div className="icon3d__shadow" />
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon3d__svg">
      <defs>
        <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#a8f0e0"/>
        </linearGradient>
        <filter id="wf1"><feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0a7060" floodOpacity="0.45"/></filter>
      </defs>
      {/* Bandage base */}
      <rect x="12" y="28" width="56" height="24" rx="12" fill="url(#wg1)" filter="url(#wf1)"/>
      {/* Vertical strip */}
      <rect x="30" y="12" width="20" height="56" rx="10" fill="url(#wg1)" filter="url(#wf1)"/>
      {/* Centre pad */}
      <rect x="30" y="28" width="20" height="24" rx="4" fill="white" fillOpacity="0.9"/>
      <rect x="34" y="32" width="3" height="16" rx="1.5" fill="#0a7060" fillOpacity="0.25"/>
      <rect x="39" y="32" width="3" height="16" rx="1.5" fill="#0a7060" fillOpacity="0.25"/>
      <rect x="44" y="32" width="3" height="16" rx="1.5" fill="#0a7060" fillOpacity="0.25"/>
      {/* Shine */}
      <rect x="14" y="30" width="20" height="8" rx="4" fill="white" fillOpacity="0.5"/>
      <rect x="32" y="14" width="8" height="14" rx="4" fill="white" fillOpacity="0.5"/>
    </svg>
  </div>
)

export const Icon3DMedication = () => (
  <div className="icon3d icon3d--medication" aria-hidden="true">
    <div className="icon3d__bg" />
    <div className="icon3d__shadow" />
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon3d__svg">
      <defs>
        <linearGradient id="mg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#e8c8ff"/>
        </linearGradient>
        <linearGradient id="mg2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c084fc"/>
          <stop offset="100%" stopColor="#7c3aed"/>
        </linearGradient>
        <filter id="mf1"><feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#5b2c6f" floodOpacity="0.45"/></filter>
      </defs>
      {/* Bottle body */}
      <rect x="26" y="28" width="28" height="40" rx="8" fill="url(#mg1)" filter="url(#mf1)"/>
      {/* Bottle cap */}
      <rect x="30" y="14" width="20" height="16" rx="6" fill="url(#mg2)" filter="url(#mf1)"/>
      {/* Label */}
      <rect x="30" y="36" width="20" height="24" rx="4" fill="white" fillOpacity="0.5"/>
      {/* Cross on label */}
      <rect x="38" y="39" width="4" height="14" rx="2" fill="#7c3aed" fillOpacity="0.7"/>
      <rect x="32" y="44" width="16" height="4" rx="2" fill="#7c3aed" fillOpacity="0.7"/>
      {/* Pills beside */}
      <ellipse cx="62" cy="30" rx="8" ry="5" fill="url(#mg1)" filter="url(#mf1)" transform="rotate(-30 62 30)"/>
      <line x1="62" y1="25.5" x2="62" y2="34.5" stroke="#7c3aed" strokeWidth="1.5" opacity="0.5" transform="rotate(-30 62 30)"/>
      {/* Shine */}
      <rect x="28" y="16" width="6" height="10" rx="3" fill="white" fillOpacity="0.5"/>
      <rect x="28" y="30" width="8" height="14" rx="4" fill="white" fillOpacity="0.4"/>
    </svg>
  </div>
)

export const Icon3DPalliative = () => (
  <div className="icon3d icon3d--palliative" aria-hidden="true">
    <div className="icon3d__bg" />
    <div className="icon3d__shadow" />
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon3d__svg">
      <defs>
        <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#bfdbfe"/>
        </linearGradient>
        <linearGradient id="pg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa"/>
          <stop offset="100%" stopColor="#1d4ed8"/>
        </linearGradient>
        <filter id="pf1"><feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#154360" floodOpacity="0.4"/></filter>
      </defs>
      {/* Dove / peace shape */}
      <circle cx="40" cy="40" r="26" fill="url(#pg1)" filter="url(#pf1)"/>
      <circle cx="40" cy="40" r="18" fill="url(#pg2)" fillOpacity="0.2"/>
      <circle cx="40" cy="40" r="10" fill="url(#pg1)" fillOpacity="0.9"/>
      {/* Rays */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <line key={i}
          x1={40 + 14 * Math.cos(angle * Math.PI/180)}
          y1={40 + 14 * Math.sin(angle * Math.PI/180)}
          x2={40 + 24 * Math.cos(angle * Math.PI/180)}
          y2={40 + 24 * Math.sin(angle * Math.PI/180)}
          stroke="url(#pg1)" strokeWidth="3.5" strokeLinecap="round"/>
      ))}
      {/* Inner symbol */}
      <path d="M34 40 C34 36 37 33 40 33 C43 33 46 36 46 40 C46 44 43 47 40 47 C37 47 34 44 34 40Z"
        fill="url(#pg2)" fillOpacity="0.5"/>
      {/* Shine */}
      <circle cx="33" cy="33" r="6" fill="white" fillOpacity="0.5"/>
    </svg>
  </div>
)

export const Icon3DPhysio = () => (
  <div className="icon3d icon3d--physio" aria-hidden="true">
    <div className="icon3d__bg" />
    <div className="icon3d__shadow" />
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon3d__svg">
      <defs>
        <linearGradient id="phg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#fde68a"/>
        </linearGradient>
        <filter id="phf1"><feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#92400e" floodOpacity="0.4"/></filter>
      </defs>
      {/* Body */}
      <circle cx="40" cy="15" r="10" fill="url(#phg1)" filter="url(#phf1)"/>
      <circle cx="37" cy="13" r="4" fill="white" fillOpacity="0.55"/>
      {/* Torso */}
      <path d="M26 30 C26 24 32 20 40 20 C48 20 54 24 54 30 L54 44 L26 44 Z" fill="url(#phg1)" filter="url(#phf1)"/>
      {/* Arms extended */}
      <path d="M26 32 L10 26 M54 32 L70 26" stroke="url(#phg1)" strokeWidth="7" strokeLinecap="round" filter="url(#phf1)"/>
      {/* Legs */}
      <path d="M26 44 L20 66 M54 44 L60 66" stroke="url(#phg1)" strokeWidth="7" strokeLinecap="round" filter="url(#phf1)"/>
      <path d="M20 66 L14 70 M60 66 L66 70" stroke="url(#phg1)" strokeWidth="5" strokeLinecap="round" filter="url(#phf1)"/>
    </svg>
  </div>
)

export const Icon3DMotherBaby = () => (
  <div className="icon3d icon3d--motherbaby" aria-hidden="true">
    <div className="icon3d__bg" />
    <div className="icon3d__shadow" />
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon3d__svg">
      <defs>
        <linearGradient id="mbg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#fecaca"/>
        </linearGradient>
        <linearGradient id="mbg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171"/>
          <stop offset="100%" stopColor="#b91c1c"/>
        </linearGradient>
        <filter id="mbf1"><feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#922b21" floodOpacity="0.4"/></filter>
      </defs>
      {/* Mother head */}
      <circle cx="28" cy="14" r="10" fill="url(#mbg1)" filter="url(#mbf1)"/>
      <circle cx="25" cy="12" r="4" fill="white" fillOpacity="0.55"/>
      {/* Mother body */}
      <path d="M14 30 C14 22 20 18 28 18 C36 18 42 22 42 30 L42 48 L14 48 Z" fill="url(#mbg1)" filter="url(#mbf1)"/>
      <path d="M14 48 L12 66 M42 48 L44 66" stroke="url(#mbg1)" strokeWidth="6" strokeLinecap="round" filter="url(#mbf1)"/>
      {/* Baby */}
      <circle cx="55" cy="26" r="9" fill="url(#mbg1)" filter="url(#mbf1)"/>
      <circle cx="52" cy="24" r="3.5" fill="white" fillOpacity="0.55"/>
      {/* Arm cradling baby */}
      <path d="M38 34 C38 34 50 30 62 36 C62 36 58 46 50 46 C42 46 38 40 38 34Z"
        fill="url(#mbg2)" fillOpacity="0.3" stroke="url(#mbg1)" strokeWidth="3" filter="url(#mbf1)"/>
      {/* Heart above baby */}
      <path d="M55 14 C55 14 50 10 50 7 C50 5 52 4 54 6 C55 7 55 7 55 7 C55 7 55 7 56 6 C58 4 60 5 60 7 C60 10 55 14 55 14Z"
        fill="url(#mbg2)" fillOpacity="0.7"/>
    </svg>
  </div>
)
