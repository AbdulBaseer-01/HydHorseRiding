import Image from 'next/image'
import React from 'react'
import { Federant, Merriweather } from 'next/font/google'

const fed = Federant({
  weight: ['400'],
})

const merri = Merriweather({
  weight: ['300'],
})

const experiences = [
  {
    id: '01',
    category: 'BEGINNER',
    title: 'First Strides',
    duration: '60 min',
    price: '₹1,200',
    image: '/horse-ride-1.png',
    description:
      'Your first time on horseback. Learn to sit, steer, and breathe with your horse in our enclosed arena — safe, calm, and unforgettable.',
    highlight: true,   // teal accent on this card
  },
  {
    id: '02',
    category: 'INTERMEDIATE',
    title: 'Forest Trail Ride',
    duration: '90 min',
    price: '₹1,800',
    image: '/horse-ride-2.png',
    description:
      'Guided through our private forest trail at a steady trot. Canopy above, silence around, nothing but the rhythm of hooves.',
    highlight: false,
  },
  {
    id: '03',
    category: 'ADVANCED',
    title: 'Open Arena Session',
    duration: '120 min',
    price: '₹2,400',
    image: '/horse-ride-3.png',
    description:
      'Full arena access for experienced riders. Canter, jump, or simply work your form — on your terms, at your pace.',
    highlight: false,
  },
]

const testimonials = [
  {
    quote: 'I came for one hour. I stayed for the whole afternoon. The horses here have a kind of stillness you don\'t expect.',
    name: 'Meera S.',
    tag: 'Trail Rider',
  },
  {
    quote: 'My daughter had her first riding lesson here. Watching her face when the horse responded to her was worth everything.',
    name: 'Vikram P.',
    tag: 'Parent',
  },
]

const Preview = () => {
  return (
    <section className={`${merri.className} bg-[#0c0b09] text-white`}>

      {/* ── Section Header ── */}
      <div className="md:px-12 px-2 pt-20 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10">
        <div>
          {/* teal dot — tiny, deliberate, hierarchical */}
          <div className="flex items-center justify-center md:justify-around gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <p className="text-xs tracking-[0.45em] text-white/35  uppercase">
              Experiences
            </p>
          </div>
          <h2 className={`${fed.className} text-5xl md:text-6xl leading-[1.05] text-center md:text-left`}>
            CHOOSE YOUR <br /> RIDE. OWN THE <br /> MOMENT.
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="text-white/45 text-sm leading-[1.85] mb-6">
            Every session is curated around your level and mood. Whether you
            want the quiet of the forest or the discipline of the arena —
            we have a ride shaped for you.
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-teal-400 hover:text-white transition-colors duration-300"
          >
            View all sessions
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </div>

      {/* ── Experience Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {experiences.map((exp) => (
          <div key={exp.id} className="group relative flex flex-col">

            {/* Image */}
            <div className="relative w-full h-[44vh] overflow-hidden">
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0c0b09] via-[#0c0b09]/20 to-transparent" />

              {/* Ghost index */}
              <span
                className={`${fed.className} absolute top-5 left-7 text-6xl text-white/10 select-none leading-none`}
              >
                {exp.id}
              </span>

              {/* Category pill — teal ONLY on the highlighted card */}
              <span
                className={`absolute top-5 right-7 text-[10px] tracking-[0.35em] px-3 py-1 rounded-full uppercase backdrop-blur-sm border transition-colors duration-300
                  ${exp.highlight
                    ? 'border-teal-400/60 text-teal-400'
                    : 'border-white/25 text-white/50'
                  }`}
              >
                {exp.category}
              </span>
            </div>

            {/* Content */}
            <div className="px-8 pt-8 pb-10 flex flex-col flex-1 justify-between">
              <div>
                <h3 className={`${fed.className} text-2xl md:text-3xl mb-4`}>
                  {exp.title}
                </h3>
                <p className="text-white/45 text-sm leading-[1.85] mb-7">
                  {exp.description}
                </p>
              </div>

              {/* Meta + CTA */}
              <div>
                {/* Duration / Price row */}
                <div className="flex items-center gap-6 mb-6 text-xs tracking-widest uppercase">
                  <span className="text-white/30">{exp.duration}</span>
                  <span className="w-px h-3 bg-white/15" />
                  {/* price teal on highlighted card only */}
                  <span className={exp.highlight ? 'text-teal-400' : 'text-white/30'}>
                    {exp.price}
                  </span>
                </div>

                <button
                  className={`group/btn w-full flex items-center justify-between px-6 py-3 rounded-full border text-xs tracking-[0.25em] uppercase transition-all duration-300
                    ${exp.highlight
                      ? 'border-teal-400/50 text-teal-400 hover:bg-teal-400 hover:text-black hover:border-teal-400'
                      : 'border-white/20 text-white hover:bg-white hover:text-black'
                    }`}
                >
                  Book This Ride
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </div>

            {/* Bottom sweep line */}
            <div
              className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full
                ${exp.highlight ? 'bg-teal-400' : 'bg-white'}`}
            />
          </div>
        ))}
      </div>

      {/* ── Testimonials ── */}
      <div className="border-t border-white/10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {testimonials.map((t, i) => (
          <div key={i} className="px-12 py-14 flex flex-col justify-between gap-8">
            {/* teal quote mark — the single most visible teal element in this zone */}
            <span className={`${fed.className} text-5xl text-teal-400/60 leading-none select-none`}>
              {`"`}
            </span>
            <p className="text-white/55 text-sm leading-[1.95] max-w-md -mt-4">
              {t.quote}
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400/70" />
              <div>
                <p className={`${fed.className} text-base text-white/80`}>{t.name}</p>
                <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase mt-0.5">{t.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Full-width CTA Banner ── */}
      <div className="relative border-t border-white/10 overflow-hidden">
        <div className="relative md:px-12 px-2 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* very faint teal gradient wash behind — barely visible */}
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative">
            <p className="text-xs tracking-[0.45em] text-teal-400/70 uppercase mb-3">
              Ready to Ride?
            </p>
            <h3 className={`${fed.className} text-3xl md:text-4xl`}>
              YOUR HORSE IS WAITING.
            </h3>
          </div>

          <div className="relative flex items-center gap-4">
            <a
              href="#contact"
              className="text-xs tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors duration-300"
            >
              Call Us First
            </a>
            <button className="px-8 py-3 bg-white text-black rounded-full text-xs tracking-[0.3em] uppercase hover:bg-teal-400 transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-white/10" />
    </section>
  )
}

export default Preview