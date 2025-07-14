"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

// Content array for rotating hero content
const heroContent = [
  {
    image: "/images/bg-pattern-2.jpg",
    heading: "Hydraulic Pressure Solutions",
    subheading: "Powering performance with advanced hydraulic technology",
    certification: "Trusted by Industry Leaders"
  },
  {
    image: "/images/bg-pattern-3.jpg",
    heading: "Innovation in Fluid Control",
    subheading: "Custom solutions for complex engineering challenges",
    certification: "Commitment to Excellence & Safety"
  },
  {
    image: "/images/bg-pattern-1.jpg",
    heading: "Precision Engineered Valves",
    subheading: "Delivering reliable flow control for every industry",
    certification: "An ISO 9001:2015 Certified Company"
  }
]

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={heroContent[currentIndex].image}
            alt="Agricultural landscape"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-900/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Heading with Gradient */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`heading-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80 drop-shadow-lg"
          >
            {heroContent[currentIndex].heading}
          </motion.h1>
        </AnimatePresence>

        {/* Presentation Template Style Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-white/30" />
          <AnimatePresence mode="wait">
            <motion.p
              key={`cert-${currentIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl uppercase tracking-[0.2em] text-white/90 font-light"
            >
              {heroContent[currentIndex].certification}
            </motion.p>
          </AnimatePresence>
          <div className="h-[1px] w-12 bg-white/30" />
        </div>

        {/* Subtitle with Gradient */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`subheading-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 font-light"
          >
            {heroContent[currentIndex].subheading}
          </motion.p>
        </AnimatePresence>

        {/* Stylized Button */}
        <Button 
          asChild
          size="lg" 
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-2 border-white/20 rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
        >
          <Link href="/contact">
            Get Help Now
          </Link>
        </Button>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  )
}

export default HeroSection
