'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { useEffect, useMemo, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine'

import { loadSlim } from '@tsparticles/slim'
import Experience from '@/components/Experience'

export default function Home() {
  const [showArrow, setShowArrow] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowArrow(true)
    } else {
      setShowArrow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: '#000' },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: { enable: true, mode: 'repulse' },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: '#ffffff' },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 80,
        },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  )

  return (
    <div className="relative overflow-x-hidden">
      {/* Particles Background */}
      {init && (
        <div className="absolute inset-0 -z-10">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
      )}

      {/* Content */}
      <div className="animated-gradient1"></div>
      <main className="w-full h-full">
        <div className="w-full max-w-full space-y-6 sm:max-w-screen-xl mx-auto">
          <div id="hero" className="p-4 sm:p-8">
            <Hero />
          </div>
          <div id="about" className="p-4 sm:p-8">
            <About />
          </div>
          <div id="experience" className="p-4 sm:p-8">
            <Experience />
          </div>
          <div id="work" className="p-4 sm:p-8">
            <Projects />
          </div>
          <div id="contact" className="p-4 sm:p-8">
            <Contact />
          </div>
        </div>
      </main>

      {showArrow && (
        <a
          href="#top"
          className="fixed z-50 right-4 bottom-4 bg-white text-black p-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
          <FaArrowUp />
        </a>
      )}
    </div>
  )
}
