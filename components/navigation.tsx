"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Accommodations", href: "/accommodations" },
    { name: "Experiences", href: "/experiences" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-lg flex items-center justify-center shadow-xl border-2 border-amber-200 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/synexis%20softech-GpXHlrdi5NPGTNfH98Wsff5g7GyVGO.png"
                alt="Synexis Softech Logo"
                width={48}
                height={48}
                className="object-contain w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12"
              />
            </div>
            <Link href="/">
              <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent hover:from-amber-600 hover:to-amber-800 transition-all duration-300 cursor-pointer whitespace-nowrap">
                Pokhara Paradise Resort
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-amber-700 transition-all duration-300 font-medium px-3 lg:px-4 py-2 rounded-lg hover:bg-amber-50 hover:shadow-md relative group text-sm lg:text-base"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 text-white shadow-xl hover:shadow-2xl px-4 lg:px-8 py-2 lg:py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 text-sm lg:text-base">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-card border-t border-border shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:text-amber-700 transition-colors duration-200 rounded-md hover:bg-amber-50 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg rounded-full py-3 text-base font-semibold">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
