import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Sunrise, Utensils, Waves } from "lucide-react"

export function ExperiencesSection() {
  const experiences = [
    {
      title: "Game Drives",
      description: "Witness the Big Five in their natural habitat with expert guides",
      icon: <Camera className="h-8 w-8" />,
      image: "/african-safari-elephants-lions.png",
      duration: "3-4 hours",
      highlights: ["Big Five Sightings", "Professional Photography", "Expert Guides"],
    },
    {
      title: "Sunrise Balloon Safari",
      description: "Soar above the plains at dawn for breathtaking aerial views",
      icon: <Sunrise className="h-8 w-8" />,
      image: "/african-balloon-safari.png",
      duration: "4-5 hours",
      highlights: ["Champagne Breakfast", "Aerial Photography", "Certificate of Flight"],
    },
    {
      title: "Bush Dining",
      description: "Gourmet meals under the stars in the heart of the wilderness",
      icon: <Utensils className="h-8 w-8" />,
      image: "/luxury-bush-dining.png",
      duration: "2-3 hours",
      highlights: ["5-Course Menu", "Local Ingredients", "Traditional Entertainment"],
    },
    {
      title: "Spa Wellness",
      description: "Rejuvenate with treatments inspired by ancient African traditions",
      icon: <Waves className="h-8 w-8" />,
      image: "/luxury-african-spa.png",
      duration: "1-2 hours",
      highlights: ["Natural Ingredients", "Outdoor Treatments", "Holistic Healing"],
    },
  ]

  return (
    <section id="experiences" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Unforgettable Experiences</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From thrilling game drives to serene spa treatments, every experience is designed to create lasting memories
            and deepen your connection with the African wilderness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground p-2 rounded-lg">
                  {experience.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{experience.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{experience.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">Duration: {experience.duration}</div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Highlights:</h4>
                    <ul className="space-y-1">
                      {experience.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
