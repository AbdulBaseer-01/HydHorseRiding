import Image from 'next/image'
import React from 'react'
import { Federant, Merriweather } from 'next/font/google'

const fed = Federant({
  weight: ['400'],
})

const merri = Merriweather({
  weight: ['300'],
})

const stats = [
  { value: '7+', label: 'Years in the Saddle' },
  { value: '40+', label: 'Horses in Our Stable' },
  { value: '2000+', label: 'Riders Trained' },
  { value: '12', label: 'Expert Trainers' },
]

const pillars = [
  {
    index: '—01',
    title: 'The Land',
    body: 'Nestled on the outskirts of Hyderabad, our grounds span acres of open trail, shaded forest paths, and a covered arena — a world apart from the city.',
  },
  {
    index: '—02',
    title: 'The Horses',
    body: 'Each of our horses is chosen for temperament, health, and heart. They are not equipment — they are partners, cared for with the same devotion we give our riders.',
  },
  {
    index: '—03',
    title: 'The People',
    body: 'Our trainers are lifelong equestrians. They bring patience, precision, and a genuine belief that every person can find their rhythm in the saddle.',
  },
]

const About = () => {
  return (
    <section className={`${merri.className} bg-[#0c0b09] text-white overflow-hidden`}>

      {/* ── Top Rule ── */}
      <div className="w-full h-px bg-white/10" />

      {/* ── Main Grid: Story + Image ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">

        {/* Left — Story */}
        <div className="flex flex-col justify-between px-2 md:px-12 py-20 border-r border-white/10">
          <div>
            <p className="text-xs tracking-[0.45em] text-white/35 uppercase text-center mb-6">
              Our Story
            </p>
            <h2 className={`${fed.className} text-5xl md:text-[3.5rem] leading-[1.1] text-center mb-10`}>
              BORN FROM A <br />
              LOVE OF HORSES <br />
              AND OPEN SKY.
            </h2>
            <div className="w-8 h-px bg-white/30 mb-10" />
            <p className="text-white/55 text-sm leading-[1.9] max-w-sm mb-6">
              HydHorseRiding began in 2018 with a single stable, three horses,
              and a stubborn conviction: that Hyderabad deserved a place where
              people could truly connect with these extraordinary animals.
            </p>
            <p className="text-white/40 text-sm leading-[1.9] max-w-sm">
              What started as a weekend riding school has grown into a full
              equestrian retreat — offering structured training programmes,
              open hourly rides, and a community of riders who keep coming
              back, not just for the horses, but for what it feels like
              to be here.
            </p>
          </div>

          {/* Signature line */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className={`${fed.className} text-2xl text-white/70`}>
              Arjun 
            </p>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mt-1">
              Founder & Head Trainer
            </p>
          </div>
        </div>

        {/* Right — Image with overlay text */}
        <div className="relative min-h-[60vh] md:min-h-full">
          <Image
            src="/hero.png"
            alt="About HydHorseRiding"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#0c0b09]/60 via-transparent to-[#0c0b09]/80" />

          {/* Floating quote */}
          <div className="absolute bottom-10 left-10 right-10">
            <span className={`${fed.className} text-4xl text-white/15 leading-none select-none`}>
              {`"`}
            </span>
            <p className={`${fed.className} text-xl md:text-2xl text-white/80 leading-snug mt-1`}>
              THE FOREST DOESN{`'`}T<br />JUDGE YOUR PACE.
            </p>
            <div className="w-6 h-px bg-white/30 mt-4" />
          </div>

          {/* Corner tag */}
          <span className="absolute top-8 right-8 text-[10px] tracking-[0.35em] border border-white/20 text-white/40 px-3 py-1 rounded-full uppercase backdrop-blur-sm">
            Since 2018
          </span>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="border-t border-white/10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group px-10 py-10 flex flex-col gap-2 hover:bg-white/3 transition-colors duration-300"
          >
            <span className={`${fed.className} text-4xl md:text-5xl text-white group-hover:text-white/80 transition-colors`}>
              {s.value}
            </span>
            <span className="text-xs tracking-[0.25em] text-white/30 uppercase">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Pillars ── */}
      <div className="border-t border-white/10 px-12 py-20">
        <p className="text-xs tracking-[0.45em] text-white/35 uppercase mb-14">
          What We{`'`}re Built On
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {pillars.map((p) => (
            <div key={p.index} className="group px-0 md:px-10 first:pl-0 last:pr-0 py-8 md:py-0">
              <p className="text-xs tracking-widest text-white/25 mb-6 font-mono">
                {p.index}
              </p>
              <h3 className={`${fed.className} text-2xl mb-5 group-hover:text-white/70 transition-colors duration-300`}>
                {p.title}
              </h3>
              <p className="text-white/45 text-sm leading-[1.85]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Full-width closing image strip ── */}
      <div className="relative w-full h-[30vh] overflow-hidden">
        <Image
          src="/hero.png"
          alt="The stables at HydHorseRiding"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0c0b09]/65" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className={`${fed.className} text-3xl md:text-5xl tracking-[0.2em] text-white/20 uppercase select-none text-center`}>
            Hyderabad&apos;s Equestrian Home
          </p>
        </div>
      </div>

      {/* ── Bottom Rule ── */}
      <div className="w-full h-px bg-white/10" />

    </section>
  )
}

export default About