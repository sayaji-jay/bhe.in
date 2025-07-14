"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import clsx from "clsx"
import Image from "next/image"

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" }, 
    { href: "/quality-assurance", label: "Quality Assurance" },
    { href: "/facility", label: "Facility" },
    { href: "/careers", label: "Careers" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  // Determine header background style
  const headerBg = isHomePage
    ? isScrolled
      ? "bg-white/95 backdrop-blur-sm shadow-sm"
      : "bg-transparent"
    : "bg-white/95 backdrop-blur-sm shadow-sm"

  // Determine which logo to show
  const shouldShowWhiteLogo = isHomePage && !isScrolled
  const logoSrc = shouldShowWhiteLogo ? "/images/bhe-logo.jpg" : "/images/bhe-logo.jpg"

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      headerBg
    )}>
      <div className="container mx-auto px-4 md:px-6 flex h-24 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image 
              src={logoSrc} 
              alt="BHE-logo" 
              width={70} 
              height={70}
              className="transition-opacity duration-300"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-base font-medium tracking-wide transition-colors border-b border-transparent hover:border-current",
                isHomePage && !isScrolled
                  ? "text-white"
                  : "text-blue-800"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/LMCC_Eng_brochure.pdf" target="_blank" className="hidden md:flex">
            <Button 
              variant={isHomePage && !isScrolled ? "secondary" : "outline"}
              size="sm" 
              className={clsx(
                "gap-2 transition-all duration-300 rounded-full px-6",
                isHomePage && !isScrolled
                  ? "bg-white/10 text-white hover:bg-white/20 border-white/20"
                  : "border-blue-600 bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-700"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>Download Brochure</span>
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant={isHomePage && !isScrolled ? "secondary" : "outline"}
                size="icon" 
                className={clsx(
                  "md:hidden transition-all duration-300 rounded-full",
                  isHomePage && !isScrolled
                    ? "bg-white/10 text-white hover:bg-white/20 border-white/20"
                    : "border-blue-600 bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                )}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[80%] sm:w-80 p-0 bg-white"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex flex-col items-center justify-center py-8 px-4 border-b border-blue-100 bg-blue-50">
                  {/* Use the colored logo in mobile menu */}
                  <Image 
                    src="/logo.svg" 
                    alt="Linemark Crop Care" 
                    width={120} 
                    height={32}
                    className="mb-2"
                  />
                  <p className="text-sm text-blue-600 mt-2">
                    An ISO 9001 : 2015 Certified Company
                  </p>
                </div>

                {/* Mobile Nav */}
                <nav className="flex flex-col p-6">
                  <h3 className="text-sm uppercase text-blue-800 font-semibold mb-4 tracking-wider">Menu</h3>
                  <div className="space-y-3">
                    {navItems.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={clsx(
                          "flex items-center text-base font-medium transition-colors py-2 px-3 rounded-lg",
                          pathname === href 
                            ? "text-blue-800 bg-blue-50 shadow-sm" 
                            : "text-blue-700 hover:text-blue-800 hover:bg-blue-50/50"
                        )}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto p-6 border-t border-blue-100">
                  <Link href="/brochure.pdf" target="_blank" onClick={() => setIsOpen(false)}>
                    <Button 
                      className="w-full gap-2 py-6 text-base bg-white hover:bg-blue-50 text-blue-700 shadow-sm font-medium border border-blue-200 mb-3"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      <span>Download Brochure</span>
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button 
                      className="w-full gap-2 py-6 text-base bg-blue-600 hover:bg-blue-700 text-white shadow-sm font-medium"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Contact Us</span>
                    </Button>
                  </Link>
                  <div className="text-center text-sm text-blue-700 mt-4">
                    <p>Call us at:</p>
                    <a href="tel:+917862819867" className="font-medium hover:text-blue-800">+91 7862819867</a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
