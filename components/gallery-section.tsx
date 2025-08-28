"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/placeholder-23s8k.png",
      alt: "Lodge Exterior",
      category: "Accommodations",
    },
    {
      src: "/african-elephants-watering-hole.png",
      alt: "Wildlife",
      category: "Wildlife",
    },
    {
      src: "/african-wilderness-dining.png",
      alt: "Dining Experience",
      category: "Dining",
    },
    {
      src: "/placeholder-qvuhr.png",
      alt: "Suite Interior",
      category: "Accommodations",
    },
    {
      src: "/african-plains-balloon-sunrise.png",
      alt: "Balloon Safari",
      category: "Experiences",
    },
    {
      src: "/african-spa-mountain-view.png",
      alt: "Spa Wellness",
      category: "Wellness",
    },
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Immers ff yourself in the beauty of our sanctuary through these carefully curated moments that capture the
            essence of luxury safari living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-sm font-medium">{image.category}</p>
                  <p className="text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div clvfassName="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="max-w-4xl max-h-full">
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4 text-white">
                <p className="text-sm">{images[selectedImage].category}</p>
                <p className="text-lg font-semibold">{images[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
