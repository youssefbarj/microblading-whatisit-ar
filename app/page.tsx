"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowLeftRight } from "lucide-react"
import Slide1 from "@/components/slides/slide-1"
import Slide2 from "@/components/slides/slide-2"
import Slide3 from "@/components/slides/slide-3"

export default function SlidingPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)

  const slides = [<Slide1 key="slide-1" />, <Slide2 key="slide-2" />, <Slide3 key="slide-3" />]

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(currentSlide - 1)
    }
  }

  // Handle swipe gestures
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      goToPrevSlide()
    } else if (info.offset.x < -swipeThreshold) {
      goToNextSlide()
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNextSlide()
      } else if (e.key === "ArrowLeft") {
        goToPrevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  return (
    <div className="bg-[#C3B1E1] min-h-screen flex flex-col">
      <div className="px-2 sm:px-4 mb-1 sm:mb-2 text-center pt-2 sm:pt-0">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#2D1B40] leading-tight">
          WHAT IS MICROBLADING?
        </h1>
      </div>

      <div className="px-2 sm:px-4 mb-4 sm:mb-6 text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 max-w-4xl mx-auto border border-white/30 shadow-lg">
          <p className="text-sm sm:text-base text-[#2D1B40] leading-relaxed font-medium">
            Microblading is a manual semi-permanent makeup technique that reshapes eyebrows
            naturally, <span className="font-semibold text-[#1A0F2E]">hair by hair</span>. The practitioner
            uses a manual pen fitted with micro-needles to insert pigment just beneath the skin surface.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2D1B40] to-[#6B46C1] mx-auto my-3 sm:my-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-[#2D1B40] leading-relaxed font-medium">
            To fully understand this technique, it must be distinguished from other permanent makeup methods.
            <span className="font-semibold text-[#1A0F2E]">Here are the key differences:</span>
          </p>
        </div>
      </div>

      <div
        className="flex-1 flex flex-col items-center justify-start px-2 sm:px-4 overflow-hidden pt-0"
        ref={constraintsRef}
      >
        <div className="relative w-full max-w-sm sm:max-w-3xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: direction > 0 ? -1000 : 1000,
                opacity: 0,
              }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="w-full cursor-grab active:cursor-grabbing"
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>

          {/* Desktop arrows - hidden on mobile */}
          <motion.button
            onClick={goToPrevSlide}
            disabled={currentSlide === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden sm:block absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white to-gray-50 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-200 ${
              currentSlide === 0
                ? "opacity-30 cursor-not-allowed"
                : "opacity-90 hover:opacity-100 hover:shadow-xl hover:border-gray-300"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#2D1B40]" />
          </motion.button>

          <motion.button
            onClick={goToNextSlide}
            disabled={currentSlide === slides.length - 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden sm:block absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white to-gray-50 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-200 ${
              currentSlide === slides.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "opacity-90 hover:opacity-100 hover:shadow-xl hover:border-gray-300"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#2D1B40]" />
          </motion.button>
        </div>

        <div className="mt-4 sm:mt-6 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1)
                setCurrentSlide(index)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index ? "bg-[#2D1B40] scale-110" : "bg-[#2D1B40]/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile swipe hint with icon */}
        <div className="sm:hidden mt-3 flex items-center justify-center gap-2">
          <motion.div
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowLeftRight className="w-5 h-5 text-[#2D1B40]/60" />
          </motion.div>
          <p className="text-[#2D1B40]/60 text-sm">Swipe to navigate</p>
        </div>
      </div>
    </div>
  )
}
