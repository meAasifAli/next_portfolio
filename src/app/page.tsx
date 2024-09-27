'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

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
      <div className="animated-gradient2"></div>
    </div>
  )
}
