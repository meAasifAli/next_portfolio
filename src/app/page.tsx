'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

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
  }, [])

  const containerRef = useRef(null),
    [init, setInit] = useState(false)

  useEffect(() => {
    if (init) {
      return
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [init])

  const particlesLoaded = useCallback(
      (container) => {
        containerRef.current = container

        window.particlesContainer = container
      },
      [containerRef]
    ),
    options = useMemo(
      () => ({
        fullScreen: {
          zIndex: -1,
        },
        particles: {
          number: {
            value: 100,
          },
          links: {
            enable: true,
          },
          move: {
            enable: true,
          },
        },
        themes: [
          {
            name: 'light',
            default: {
              value: true,
              auto: true,
              mode: 'light',
            },
            options: {
              background: {
                color: '#ffffff',
              },
              particles: {
                color: {
                  value: '#000000',
                },
                links: {
                  color: '#000000',
                },
              },
            },
          },
          {
            name: 'dark',
            default: {
              value: true,
              auto: true,
              mode: 'dark',
            },
            options: {
              background: {
                color: '#000000',
              },
              particles: {
                color: {
                  value: '#ffffff',
                },
                links: {
                  color: '#ffffff',
                },
              },
            },
          },
        ],
      }),
      []
    ),
    lightTheme = () => {
      containerRef.current?.loadTheme('light')
    },
    darkTheme = () => {
      containerRef.current?.loadTheme('dark')
    }

  return (
    <div className="relative overflow-x-hidden">
      <div className="animated-gradient1"></div>

      <main className="w-full h-full">
        <div className="w-full max-w-full space-y-6 sm:max-w-screen-xl mx-auto">
          <div id="hero" className="p-4 sm:p-8 ">
            <Hero />
          </div>
          <div id="about" className="p-4 sm:p-8">
            <About />
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
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </div>
  )
}
