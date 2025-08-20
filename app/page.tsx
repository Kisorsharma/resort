import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AccommodationsSection } from "@/components/accommodations-section"
import { ExperiencesSection } from "@/components/experiences-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AccommodationsSection />
      <ExperiencesSection />
      <GallerySection />
      <Footer />
    </main>
  )
}
