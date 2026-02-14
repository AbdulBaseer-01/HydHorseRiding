'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Federant } from 'next/font/google'

const fed = Federant({ weight: ['400'] })

const navLinks = ['DISCOVER', 'ABOUT US', 'GALLERY', 'PREVIEW', 'CONTACT']

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="absolute top-0 left-0 text-white w-screen z-999 flex justify-between items-center px-2 pr-4 md:px-8">

        {/* ── Logo ── */}
        <div className="shrink-0">
          <Image src="/logo-1.png" alt="HydHorseRiding" width={80} height={74} className="object-contain" />
        </div>

        {/* ── Desktop Pill Nav ── */}
        <ul className="hidden md:flex justify-center items-center gap-1 px-2 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className={`${fed.className} relative cursor-pointer text-[11px] tracking-[0.2em] px-5 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-250 block`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop Book Now ── */}
        <div className="hidden md:block shrink-0">
          <button className="px-6 py-2.5 bg-white/10 rounded-full border border-white/30 text-sm tracking-[0.15em] text-white backdrop-blur-sm hover:bg-teal-400 hover:border-teal-400 hover:text-black transition-all duration-300">
            Book Now
          </button>
        </div>

        {/* ── Mobile: Book + Hamburger ── */}
        <div className="flex md:hidden items-center gap-3">
          <button className="px-4 py-2 bg-white/10 rounded-full border border-white/30 text-xs tracking-[0.15em] text-white backdrop-blur-sm hover:bg-teal-400 hover:border-teal-400 hover:text-black transition-all duration-300">
            Book
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex flex-col justify-center items-center gap-1.25 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm"
          >
            <span className={`block w-4 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-4 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-4 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        className={`fixed top-0 left-0 w-screen z-998 bg-[#0c0b09]/95 backdrop-blur-md transition-all duration-400 ease-in-out md:hidden
          ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        <div className="flex flex-col pt-24 pb-10 px-8 gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              className={`${fed.className} text-2xl tracking-[0.15em] text-white/50 hover:text-white py-4 border-b border-white/8 transition-all duration-300
                ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm tracking-[0.2em] hover:bg-teal-400 transition-colors duration-300"
          >
            BOOK YOUR RIDE
          </a>

          {/* teal dot + location */}
          <div className="flex items-center gap-2 mt-6 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span className="text-[10px] tracking-[0.35em] text-white/25 uppercase">Hyderabad, Telangana</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav