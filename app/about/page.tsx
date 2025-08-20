"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Award,
  Users,
  Leaf,
  Mountain,
  Heart,
  Wifi,
  Car,
  Utensils,
  Waves,
  Dumbbell,
  SpadeIcon as Spa,
  Coffee,
  Shield,
} from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 bg-gradient-to-b from-amber-50 to-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Where Dreams Meet the Himalayas
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed px-2">
              Discover Pokhara Paradise Resort - an extraordinary sanctuary where luxury transcends expectations,
              nestled in Nepal's most breathtaking valley beneath the towering Annapurna peaks.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                A Legacy Born from Passion
              </h2>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  In 2018, a dream took shape among the clouds. Visionary founders, captivated by the mystical allure of
                  the Himalayas and the soul-stirring beauty of Pokhara Valley, embarked on an extraordinary journey to
                  create Nepal's most enchanting luxury retreat.
                </p>
                <p>
                  Born from an unwavering commitment to sustainable luxury and deep reverence for Nepalese culture,
                  Pokhara Paradise Resort emerged as a testament to what happens when passion meets purpose. Every
                  stone, every garden, every carefully crafted detail tells the story of our dedication to creating
                  moments that transcend the ordinary.
                </p>
                <p>
                  Today, we stand as guardians of an experience that honors both the majestic wilderness of the
                  Annapurna range and the timeless traditions of Himalayan hospitality, creating memories that linger
                  long after your journey home.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <img
                src="/placeholder-mlli4.png"
                alt="Pokhara Paradise Resort nestled in the mountains"
                className="rounded-lg shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Nature's Masterpiece</h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Perched like a jewel in the crown of Pokhara Valley, our resort commands breathtaking panoramic views
                  of the legendary Annapurna massif. Wake each morning to the ethereal sight of Machapuchare's sacred
                  peak piercing the dawn sky, painted in hues that defy description.
                </p>
                <p>
                  Adventure beckons just beyond our gates—the shimmering waters of Phewa Lake reflect ancient temples
                  and bustling markets, while hidden trails lead to mystical caves and cascading waterfalls. Yet within
                  our sanctuary, time moves at the gentle pace of mountain breezes and prayer flags dancing in the wind.
                </p>
                <p>
                  Whether you seek the thrill of high-altitude trekking, the serenity of lakeside meditation, or the
                  rich tapestry of Nepalese culture, our location serves as your gateway to experiences that will
                  forever change how you see the world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resort Features & Amenities Section */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Luxury Redefined
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Immerse yourself in a world where every detail has been meticulously crafted to exceed your expectations.
              From sunrise yoga sessions to starlit dinners, every moment is designed to be extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Wifi,
                title: "Seamless Connectivity",
                desc: "Lightning-fast WiFi keeps you connected to what matters most",
              },
              { icon: Car, title: "Royal Arrival", desc: "Luxury fleet service from the moment you land" },
              {
                icon: Utensils,
                title: "Culinary Artistry",
                desc: "Award-winning chefs create gastronomic journeys across cultures",
              },
              {
                icon: Waves,
                title: "Infinity & Beyond",
                desc: "Heated infinity pool where sky meets mountain majesty",
              },
              {
                icon: Spa,
                title: "Himalayan Wellness",
                desc: "Ancient healing traditions meet modern luxury spa treatments",
              },
              {
                icon: Dumbbell,
                title: "Peak Performance",
                desc: "State-of-the-art fitness with panoramic mountain inspiration",
              },
              {
                icon: Coffee,
                title: "Around-the-Clock Care",
                desc: "Dedicated concierge service anticipating your every need",
              },
              {
                icon: Shield,
                title: "Peace of Mind",
                desc: "Comprehensive security ensuring your complete tranquility",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-0 shadow-lg bg-background h-full">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              The Heart of Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Our values aren't just words on a wall—they're the living principles that guide every interaction, every
              decision, and every moment of your stay with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Leaf,
                title: "Guardians of Nature",
                desc: "We're passionate stewards of the Himalayas, pioneering eco-luxury practices that preserve this pristine paradise for generations to come while creating unforgettable experiences.",
              },
              {
                icon: Heart,
                title: "Heartfelt Hospitality",
                desc: "Every smile, every gesture, every service comes from the depths of genuine care. We don't just serve guests—we welcome family into our mountain home with authentic Nepalese warmth.",
              },
              {
                icon: Users,
                title: "Community Champions",
                desc: "Our success is intertwined with our community's prosperity. Through meaningful partnerships, education initiatives, and cultural preservation, we're building a brighter future together.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg bg-background">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">{value.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <img
                src="/pokhara-valley-annapurna-phewa.png"
                alt="Pokhara Valley with mountain views"
                className="rounded-lg shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Nature's Masterpiece</h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Perched like a jewel in the crown of Pokhara Valley, our resort commands breathtaking panoramic views
                  of the legendary Annapurna massif. Wake each morning to the ethereal sight of Machapuchare's sacred
                  peak piercing the dawn sky, painted in hues that defy description.
                </p>
                <p>
                  Adventure beckons just beyond our gates—the shimmering waters of Phewa Lake reflect ancient temples
                  and bustling markets, while hidden trails lead to mystical caves and cascading waterfalls. Yet within
                  our sanctuary, time moves at the gentle pace of mountain breezes and prayer flags dancing in the wind.
                </p>
                <p>
                  Whether you seek the thrill of high-altitude trekking, the serenity of lakeside meditation, or the
                  rich tapestry of Nepalese culture, our location serves as your gateway to experiences that will
                  forever change how you see the world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Excellence Recognized Worldwide
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Our unwavering dedication to creating extraordinary experiences has earned acclaim from the world's most
              prestigious travel authorities and discerning guests who've made us their Himalayan home.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Award, title: "TripAdvisor", subtitle: "Travelers' Choice Award 2023" },
              { icon: Mountain, title: "Condé Nast", subtitle: "Best Mountain Resort Asia 2023" },
              { icon: Leaf, title: "Green Key", subtitle: "Eco-Certification Gold Level" },
              { icon: Users, title: "World Travel", subtitle: "Leading Luxury Resort Nepal" },
            ].map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <award.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{award.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{award.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 sm:py-20 bg-amber-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Your Himalayan Adventure Awaits
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
            Step into a world where every sunrise brings new wonder, every meal tells a story, and every moment becomes
            a treasured memory. Your journey to paradise begins with a single click.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 w-full sm:w-auto min-w-[180px]"
              >
                Begin Your Journey
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="px-6 sm:px-8 py-3 bg-transparent w-full sm:w-auto min-w-[180px]"
              >
                Explore Our Suites
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
