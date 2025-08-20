import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mountain, Camera, Utensils, Waves, TreePine, Sun } from "lucide-react"
import Image from "next/image"

export default function ExperiencesPage() {
  const experiences = [
    {
      icon: Mountain,
      title: "Himalayan Trekking",
      description: "Guided treks through pristine mountain trails with breathtaking views of the Annapurna range",
      image: "/luxury-himalayan-resort.png",
      duration: "Half day to multi-day",
      price: "From $120",
    },
    {
      icon: Waves,
      title: "Phewa Lake Adventures",
      description: "Kayaking, boating, and fishing on Nepal's second-largest lake",
      image: "/elegant-resort-mountain-view.png",
      duration: "2-4 hours",
      price: "From $80",
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning landscapes and local culture with professional guides",
      image: "/luxury-spa-mountain-view.png",
      duration: "Full day",
      price: "From $200",
    },
    {
      icon: Utensils,
      title: "Culinary Experiences",
      description: "Learn traditional Nepali cooking and enjoy farm-to-table dining",
      image: "/mountain-view-restaurant.png",
      duration: "3-4 hours",
      price: "From $150",
    },
    {
      icon: TreePine,
      title: "Nature Walks",
      description: "Peaceful walks through rhododendron forests and terraced fields",
      image: "/luxury-himalayan-resort.png",
      duration: "2-3 hours",
      price: "From $60",
    },
    {
      icon: Sun,
      title: "Sunrise Viewpoints",
      description: "Early morning excursions to witness spectacular Himalayan sunrises",
      image: "/elegant-resort-mountain-view.png",
      duration: "4-5 hours",
      price: "From $100",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-amber-50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Unforgettable Experiences
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the magic of Nepal through carefully curated adventures that showcase the natural beauty and rich
              culture of the Pokhara region.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <experience.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-3">{experience.title}</h3>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">{experience.duration}</span>
                    <span className="text-lg font-bold text-primary">{experience.price}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white">
                    Book Experience
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
