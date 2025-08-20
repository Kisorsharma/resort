"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "/luxury-himalayan-resort.png",
    "/elegant-resort-mountain-view.png",
    "/placeholder-3nc6a.png",
    "/luxury-spa-mountain-view.png",
    "/mountain-view-restaurant.png",
  ]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${image}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      ))}

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-accent" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
          Pokhara Paradise
          <span className="block text-accent font-serif">Resort</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto font-body font-light px-2">
          Experience the ultimate luxury mountain retreat where the majestic Himalayas meet world-class hospitality in
          the heart of Nepal's most beautiful valley.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 font-medium w-full sm:w-auto min-w-[200px]"
            >
              Explore Accommodations
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 bg-transparent font-medium backdrop-blur-sm w-full sm:w-auto min-w-[200px]"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Watch Our Story
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            setInterval(() => {
              const event = new CustomEvent('nextImage');
              window.dispatchEvent(event);
            }, 5000);
          `,
        }}
      />
    </section>
  )
}
