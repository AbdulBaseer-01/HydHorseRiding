// import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Merriweather, Federant } from 'next/font/google'

const fed = Federant({
    weight: ["400"],
})

const merri = Merriweather({
    weight: ["300"],
})

const Hero = () => {
  return (
    <section className="relative w-screen h-screen min-h-150">
      <Image
        src="/hero.png"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />
      <div className='absolute w-full h-full bg-black/52'/>

      <div className={`${merri.className} absolute flex flex-col md:flex-row items-end justify-end text-white h-full w-full px-6 md:px-12 overflow-hidden py-8 md:py-12 gap-6`}>

        {/* Headline */}
        <div className='w-full md:w-auto'>
          <h2 className={`${fed.className} text-4xl sm:text-5xl md:text-6xl leading-tight`}>
            ESCAPE TO THE <br className="hidden sm:block" />
            PEACE. AWAKEN IN <br className="hidden sm:block" />
            THE FOREST.
          </h2>
        </div>

        {/* Description + CTA */}
        <div className='w-full md:w-auto md:shrink-0'>
          <div className='mb-0'>
            <p className='text-base md:text-xl max-w-xl mb-6 md:mb-8 text-white/85'>
              Ride Beyond the Ordinary.
              Where strength meets serenity.
              Feel the rhythm of true freedom.
              Welcome to HydHorseRiding.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className='px-6 py-2.5 bg-white text-black rounded-full text-sm md:text-base hover:bg-teal-400 transition-colors duration-300'>
                BOOK YOUR ESCAPE
              </button>
              {/* teal dot accent — minimal hierarchy signal */}
              <span className="flex items-center gap-2 text-xs tracking-[0.3em] text-white/40 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                Hyderabad
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero