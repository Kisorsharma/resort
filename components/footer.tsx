"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-5 left-5 w-16 h-16 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <motion.h3
              className="text-lg sm:text-xl font-serif font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Pokhara Paradise Resort
            </motion.h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Where luxury meets mountain serenity in Nepal's most beautiful valley.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-amber-200 hover:bg-white/10 rounded-full p-2 w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h4 className="text-base sm:text-lg font-serif font-semibold text-amber-200">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Accommodations", "Experiences", "Dining", "About Us"].map((link, index) => (
                <motion.li key={link} whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-amber-200 transition-colors duration-300 text-sm flex items-center group py-1"
                  >
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-amber-200 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h4 className="text-base sm:text-lg font-serif font-semibold text-amber-200">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                { icon: MapPin, text: "Pokhara Valley, Nepal", href: "#" },
                { icon: Phone, text: "+977 123 456 789", href: "tel:+977123456789" },
                { icon: Mail, text: "info@pokharaparadise.com", href: "mailto:info@pokharaparadise.com" },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ scale: 1.02, x: 3 }}
                  className="flex items-center space-x-2 text-white/80 hover:text-amber-200 transition-colors duration-300 group text-sm py-1"
                >
                  <contact.icon className="h-3 w-3 sm:h-4 sm:w-4 text-amber-200 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="break-all sm:break-normal">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h4 className="text-base sm:text-lg font-serif font-semibold text-amber-200">Newsletter</h4>
            <p className="text-white/80 text-sm">Get exclusive offers and updates.</p>
            <div className="space-y-2">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm h-9 pr-10 focus:bg-white/20 transition-colors w-full"
                />
                <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-white/60" />
              </div>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button
                  onClick={handleSubscribe}
                  size="sm"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white border-0 h-9 text-sm"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? "✓ Subscribed!" : "Subscribe"}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-4 sm:mt-6 pt-3 sm:pt-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0"
        >
          <p className="text-white/60 text-xs text-center md:text-left">
            © 2024 Pokhara Paradise Resort. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-300 backdrop-blur-sm"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
