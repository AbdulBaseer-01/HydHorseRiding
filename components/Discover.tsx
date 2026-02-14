import Image from 'next/image'
import React from 'react'
import { Federant, Merriweather } from 'next/font/google'

const fed = Federant({
  weight: ['400'],
})

const merri = Merriweather({
  weight: ['300'],
})

const offerings = [
  {
    id: '01',
    tag: 'TRAINING',
    title: 'MASTER THE RIDE',
    description:
      'From your first trot to a confident canter — our seasoned trainers guide riders of every level through structured programs built on trust, technique, and the deep bond between horse and rider.',
    image: '/discover-1.png',
    cta: 'VIEW DETAILS',
    stat: '12+ Trainers',
  },
  {
    id: '02',
    tag: 'HOURLY RENTAL',
    title: 'RIDE ON YOUR TIME',
    description:
      'Already a rider? Book our stables by the hour. Choose your horse, set your pace, and lose yourself in open trails or our private arena — no commitment, just freedom.',
    image: '/discover-2.png',
    cta: 'BOOK AN HOUR',
    stat: 'From ₹800/hr',
  },
]

const Discover = () => {
  return (
    <section className={`${merri.className} bg-[#0c0b09] text-white`}>

      {/* ── Section Header ── */}
      <div className="md:px-12 px-2 md:pt-20 pt-8 pb-14 flex items-end justify-center tex-center md:justify-between border-b border-white/10">
        <div>
          <p className="text-xs tracking-[0.4em] text-center md:text-left text-white/40 mb-4 uppercase">
            What We Offer
          </p>
          <h2 className={`${fed.className} text-5xl md:text-6xl text-center md:text-left leading-tight`}>
            DISCOVER YOUR <br /> PATH TO THE SADDLE.
          </h2>
        </div>
        <p className="hidden md:block max-w-xs text-white/50 text-sm leading-relaxed text-right">
          Two ways to experience the forest. <br />
          Both lead to the same feeling — alive.
        </p>
      </div>

      {/* ── Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x px-6 divide-white/10 ">
        {offerings.map((item) => (
          <div key={item.id} className="group relative flex flex-col">

            {/* Image */}
            <div className="relative w-full h-[52vh] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              {/* gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0c0b09] via-[#0c0b09]/30 to-transparent" />

              {/* floating index */}
              <span
                className={`${fed.className} absolute top-6 left-8 text-7xl text-white/40 select-none leading-none`}
              >
                {item.id}
              </span>

              {/* tag pill */}
              <span className="absolute top-6 right-8 text-[10px] tracking-[0.35em] border border-white/30 text-white/60 px-3 py-1 rounded-full uppercase backdrop-blur-sm">
                {item.tag}
              </span>
            </div>

            {/* Content */}
            <div className="px-10 pt-8 pb-12 flex flex-col flex-1 justify-between">
              <div>
                <h3 className={`${fed.className} text-3xl md:text-4xl mb-5`}>
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between mt-10">
                <button className="group/btn flex items-center gap-3 px-6 py-2.5 border border-white/30 rounded-full text-xs tracking-[0.25em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300 w-full md:w-fit">
                  {item.cta}
                  <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                </button>
                <span className="hidden text-white/30 text-xs tracking-widest uppercase">
                  {item.stat}
                </span>
              </div>
            </div>

            {/* bottom border accent that grows on hover */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>

      {/* ── Bottom strip ── */}
      <div className="border-t border-white/10 px-2 md:px-12 py-6 flex items-center justify-between">
        <p className="text-white/20 text-xs tracking-widest uppercase">
          HydHorseRiding · Est. 2018
        </p>
        <p className="text-white/20 text-xs tracking-widest uppercase">
          Hyderabad, India
        </p>
      </div>

    </section>
  )
}

export default Discover