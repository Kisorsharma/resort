import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Users, Wifi, Car } from "lucide-react"

export function AccommodationsSection() {
  const accommodations = [
    {
      title: "Safari Suite",
      description: "Elegant comfort with panoramic savanna views",
      image: "/luxury-safari-suite.png",
      guests: "2 Guests",
      amenities: ["King Bed", "Private Deck", "Wi-Fi", "Game Drive Access"],
      price: "From $850/night",
    },
    {
      title: "Family Villa",
      description: "Spacious retreat perfect for families",
      image: "/luxury-african-villa.png",
      guests: "6 Guests",
      amenities: ["3 Bedrooms", "Private Pool", "Wi-Fi", "Butler Service"],
      price: "From $1,200/night",
    },
    {
      title: "Presidential Lodge",
      description: "Ultimate luxury with exclusive experiences",
      image: "/presidential-safari-lodge.png",
      guests: "4 Guests",
      amenities: ["2 Bedrooms", "Infinity Pool", "Private Chef", "Helicopter Access"],
      price: "From $2,500/night",
    },
  ]

  const getIcon = (amenity: string) => {
    if (amenity.includes("Bed") || amenity.includes("Bedroom")) return <Bed className="h-4 w-4" />
    if (amenity.includes("Guest")) return <Users className="h-4 w-4" />
    if (amenity.includes("Wi-Fi")) return <Wifi className="h-4 w-4" />
    if (amenity.includes("Access") || amenity.includes("Drive")) return <Car className="h-4 w-4" />
    return null
  }

  return (
    <section id="accommodations" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Luxury Accommodations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each accommodation is thoughtfully designed to provide the perfect blend of comfort and adventure, offering
            you a front-row seat to nature's greatest show.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={accommodation.image || "/placeholder.svg"}
                  alt={accommodation.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{accommodation.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{accommodation.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {accommodation.guests}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {accommodation.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        {getIcon(amenity)}
                        <span className="ml-2">{amenity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-semibold text-primary">{accommodation.price}</span>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Book Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
