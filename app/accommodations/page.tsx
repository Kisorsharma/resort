import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Wifi, Car, Utensils, Waves, Dumbbell, Shield, Clock, Sparkles } from "lucide-react"
import Image from "next/image"

export default function AccommodationsPage() {
  const accommodations = [
    {
      name: "Himalayan Suite",
      description: "Luxurious suite with panoramic mountain views and private balcony",
      image: "/luxury-himalayan-resort.png",
      price: "$450/night",
      features: ["King bed", "Mountain view", "Private balcony", "Marble bathroom"],
    },
    {
      name: "Valley View Villa",
      description: "Spacious villa overlooking the serene Pokhara Valley",
      image: "/elegant-resort-mountain-view.png",
      price: "$650/night",
      features: ["2 bedrooms", "Living area", "Kitchen", "Garden terrace"],
    },
    {
      name: "Lake House Retreat",
      description: "Intimate lakeside accommodation with direct water access",
      image: "/luxury-spa-mountain-view.png",
      price: "$550/night",
      features: ["Lake view", "Private dock", "Outdoor shower", "Fireplace"],
    },
  ]

  const amenities = [
    { icon: Wifi, name: "High-Speed WiFi", description: "Complimentary internet throughout" },
    { icon: Car, name: "Airport Transfer", description: "Luxury vehicle service" },
    { icon: Utensils, name: "Fine Dining", description: "World-class restaurants" },
    { icon: Waves, name: "Infinity Pool", description: "Heated pool with mountain views" },
    { icon: Sparkles, name: "Luxury Spa", description: "Full-service wellness center" },
    { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art equipment" },
    { icon: Clock, name: "24/7 Room Service", description: "Round-the-clock dining" },
    { icon: Shield, name: "Security", description: "24/7 professional security" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-amber-50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Luxury Accommodations</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience unparalleled comfort in our carefully curated suites and villas, each offering breathtaking
              views of the Himalayas and Pokhara Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={accommodation.image || "/placeholder.svg"}
                    alt={accommodation.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">{accommodation.name}</h3>
                  <p className="text-muted-foreground mb-4">{accommodation.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">{accommodation.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {accommodation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Resort Amenities</h2>
            <p className="text-xl text-muted-foreground">Every comfort and convenience at your fingertips</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{amenity.name}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
