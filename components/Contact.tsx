'use client'

import React, { useState } from 'react'
import { Federant, Merriweather } from 'next/font/google'

const fed = Federant({ weight: ['400'] })
const merri = Merriweather({ weight: ['300'] })

const contactDetails = [
  {
    label: 'Address',
    value: 'Chilkur Road, Moinabad\nHyderabad, Telangana 501504',
    action: { text: 'Open in Maps →', href: 'https://maps.google.com' },
  },
  {
    label: 'WhatsApp / Call',
    value: '+91 98765 43210',
    action: { text: 'Chat on WhatsApp →', href: 'https://wa.me/919876543210' },
  },
  {
    label: 'Email',
    value: 'hello@hydhorseriding.in',
    action: { text: 'Send Email →', href: 'mailto:hello@hydhorseriding.in' },
  },
  {
    label: 'Timings',
    value: 'Tuesday – Sunday\n6:00 AM – 7:00 PM',
    action: null,
  },
]

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.112 1.528 5.837L.057 23.882l6.198-1.63A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.376l-.36-.213-3.68.968.987-3.598-.235-.369A9.782 9.782 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
  </svg>
)

/* ── Shared input / select styles ── */
const inputCls =
  'w-full bg-[#141310] border border-white/12 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-teal-400/60 focus:bg-[#161513] transition-colors duration-200'

const selectCls =
  'w-full bg-[#141310] border border-white/12 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-teal-400/60 transition-colors duration-200 appearance-none cursor-pointer'

const Label = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <label className={`${merri.className} block text-xs text-white/50 mb-2 tracking-wide`}>
    {children}
    {required && <span className="text-teal-400 ml-1">*</span>}
  </label>
)

const SelectWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    {children}
    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
)

export default function Contact() {
  const [riders, setRiders] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className={`${merri.className} bg-[#0c0b09] text-white`}>

      {/* ── CTA Banner ── */}
      <div className="relative px-6 md:px-12 pt-20 pb-16 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(45,212,191,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <p className="text-xs tracking-[0.45em] text-white/35 uppercase">Book Your Ride</p>
            </div>
            <h2 className={`${fed.className} text-4xl md:text-[3.5rem] leading-[1.08]`}>
              YOUR NEXT RIDE <br />
              STARTS WITH <br />
              ONE MESSAGE.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-white/45 text-sm leading-[1.9] mb-7">
              Fill in the form below and we{`'`}ll confirm your booking — usually
              within a few hours. Prefer to speak to someone? WhatsApp us
              directly, we respond fast.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 px-6 py-3 bg-white text-black rounded-full text-xs tracking-[0.25em] uppercase hover:bg-teal-400 transition-colors duration-300"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
              <a
                href="#form"
                className="text-xs tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors duration-300"
              >
                Fill the form ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Grid: Form + Sidebar ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

        {/* ── FORM ── */}
    

        {/* ── Right Sidebar ── */}
        <div className="flex flex-col divide-y divide-white/10">

          {contactDetails.map((d) => (
            <div key={d.label} className="px-8 py-9 hover:bg-white/2 transition-colors duration-300">
              <p className="text-[10px] tracking-[0.4em] text-white/25 uppercase mb-3">{d.label}</p>
              <p className="text-sm text-white/60 leading-[1.85] whitespace-pre-line">{d.value}</p>
              {d.action && (
                <a
                  href={d.action.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-[10px] tracking-[0.3em] uppercase text-teal-400/70 hover:text-teal-400 transition-colors duration-200"
                >
                  {d.action.text}
                </a>
              )}
            </div>
          ))}

          {/* Good to know */}
          <div className="px-8 py-9">
            <p className="text-[10px] tracking-[0.4em] text-white/25 uppercase mb-5">Good to Know</p>
            <ul className="space-y-4">
              {[
                'No payment needed to enquire',
                'Free cancellation 24 hrs before',
                'Helmets & safety gear provided',
                'Directions shared on WhatsApp',
                'Open for ages 8 and above',
              ].map((note) => (
                <li key={note} className="flex items-start gap-3 text-xs text-white/40 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-teal-400/50 shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

         
        </div>
        <div id="form" className="px-6 md:px-12 py-14">
          <p className="text-xs tracking-[0.4em] text-white/30 uppercase mb-8">
            Enquiry Form
          </p>

          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-start gap-4 py-12">
              <div className="w-10 h-10 rounded-full border border-teal-400/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className={`${fed.className} text-2xl`}>Enquiry Received!</h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-sm">
                Thank you. We{`'`}ll WhatsApp or call you back within 4 hours to confirm your slot. See you at the stables!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs tracking-[0.3em] uppercase text-teal-400/70 hover:text-teal-400 transition-colors"
              >
                Submit another →
              </button>
            </div>
          ) : (
            <div className="space-y-6 max-w-2xl">

              {/* Row 1 — Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label required>Full Name</Label>
                  <input
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    className={inputCls}
                  />
                </div>

                <div>
                  <Label required>WhatsApp / Mobile Number</Label>
                  <div className="flex gap-0">
                    <span className="flex items-center px-3 bg-[#141310] border border-r-0 border-white/12 rounded-l-lg text-sm text-white/40 shrink-0">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      maxLength={10}
                      className={`${inputCls} rounded-l-none`}
                    />
                  </div>
                  <p className="text-[10px] text-white/25 mt-1.5 tracking-wide">
                    We will confirm your booking on this number
                  </p>
                </div>
              </div>

              {/* Row 2 — Email + Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label>Email Address</Label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Label required>Your Area / Locality</Label>
                  <input
                    type="text"
                    placeholder="e.g. Gachibowli, Jubilee Hills"
                    className={inputCls}
                  />
                  <p className="text-[10px] text-white/25 mt-1.5 tracking-wide">
                    Helps us share directions easily
                  </p>
                </div>
              </div>

              {/* Row 3 — What are you looking for */}
              <div>
                <Label required>What are you looking for?</Label>
                <SelectWrapper>
                  <select className={selectCls} defaultValue="">
                    <option value="" disabled>— Select an option —</option>
                    <option value="beginner">Beginner Training (first time rider)</option>
                    <option value="advanced">Advanced / Intermediate Training</option>
                    <option value="rental">Hourly Stable Rental (I already ride)</option>
                    <option value="kids">Kids Programme (ages 8–15)</option>
                    <option value="group">Group / Corporate / Birthday Booking</option>
                    <option value="other">Just want to know more</option>
                  </select>
                </SelectWrapper>
              </div>

              {/* Row 4 — Experience + Riders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label required>Your Riding Experience</Label>
                  <SelectWrapper>
                    <select className={selectCls} defaultValue="">
                      <option value="" disabled>— Select —</option>
                      <option value="never">I have never ridden before</option>
                      <option value="once">Tried once or twice</option>
                      <option value="occasional">Ride occasionally</option>
                      <option value="regular">I ride regularly</option>
                    </select>
                  </SelectWrapper>
                </div>

                <div>
                  <Label required>Number of Riders</Label>
                  <SelectWrapper>
                    <select
                      className={selectCls}
                      onChange={(e) => setRiders(e.target.value)}
                      defaultValue=""
                    >
                      <option value="" disabled>— Select —</option>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'rider' : 'riders'}</option>
                      ))}
                      <option value="6-10">6–10 riders (group rate)</option>
                      <option value="10+">More than 10 (corporate / event)</option>
                    </select>
                  </SelectWrapper>
                  {(riders === '6-10' || riders === '10+') && (
                    <p className="text-[10px] text-teal-400/70 mt-1.5 tracking-wide">
                      Special group rates available — we{`'`}ll share details
                    </p>
                  )}
                </div>
              </div>

              {/* Row 5 — Preferred Day + Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label>Preferred Day</Label>
                  <SelectWrapper>
                    <select className={selectCls} defaultValue="">
                      <option value="" disabled>— Select a day —</option>
                      <option value="weekday">Any Weekday (Tue–Fri)</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="flexible">I{`'`}m flexible</option>
                    </select>
                  </SelectWrapper>
                </div>

                <div>
                  <Label>Preferred Time Slot</Label>
                  <SelectWrapper>
                    <select className={selectCls} defaultValue="">
                      <option value="" disabled>— Select a slot —</option>
                      <option value="6-8">6:00 AM - 8:00 AM (Early Morning)</option>
                      <option value="8-10">8:00 AM - 10:00 AM (Morning)</option>
                      <option value="10-12">10:00 AM - 12:00 PM (Late Morning)</option>
                      <option value="16-18">4:00 PM - 6:00 PM (Evening)</option>
                      <option value="18-19">6:00 PM - 7:00 PM (Late Evening)</option>
                    </select>
                  </SelectWrapper>
                </div>
              </div>

              {/* Row 6 — Message */}
              <div>
                <Label>Any Questions or Special Requests? <span className="text-white/25 normal-case tracking-normal">(Optional)</span></Label>
                <textarea
                  rows={4}
                  placeholder="e.g. My child is 10 years old and has never ridden before. Do you provide gear? What should we wear?"
                  className={`${inputCls} resize-none leading-relaxed`}
                />
              </div>

              {/* How did you hear */}
              <div>
                <Label>How did you hear about us?</Label>
                <SelectWrapper>
                  <select className={selectCls} defaultValue="">
                    <option value="" disabled>— Select —</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="google">Google Search</option>
                    <option value="friend">Friend / Family Referral</option>
                    <option value="youtube">YouTube</option>
                    <option value="other">Other</option>
                  </select>
                </SelectWrapper>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <p className="text-[11px] text-white/25 leading-relaxed max-w-xs">
                  Fields marked <span className="text-teal-400">*</span> are required.
                  We will never share your details with anyone.
                </p>
                <button
                  onClick={() => setSubmitted(true)}
                  className="group flex items-center gap-3 px-8 py-3.5 bg-white text-black rounded-full text-xs tracking-[0.3em] uppercase hover:bg-teal-400 transition-colors duration-300 shrink-0"
                >
                  Submit Enquiry
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-white/10 px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className={`${fed.className} text-lg text-white/20`}>HydHorseRiding</p>
        <p className="text-[10px] tracking-[0.4em] text-white/15 uppercase">
          © {new Date().getFullYear()} · Hyderabad, Telangana
        </p>
        <p className="text-[10px] tracking-[0.35em] text-white/15 uppercase">
          Crafted for the rider in you
        </p>
      </div>

    </section>
  )
}