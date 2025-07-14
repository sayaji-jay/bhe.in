import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Home, Info, FileText, Phone as PhoneIcon,ShieldCheck ,Building2,Album   } from 'lucide-react'
import Image from 'next/image'
const SiteFooter = () => {
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: FileText },
    { href: "/quality-assurance", label: "Quality Assurance", icon: ShieldCheck  },
    { href: "/facility", label: "Facility", icon: Building2  },
    { href: "/careers", label: "Careers", icon: Album  },
    { href: "/about-us", label: "About Us", icon: Info },
    { href: "/contact", label: "Contact", icon: PhoneIcon },
  ]

  return (
    <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-100 border-t border-blue-100">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* <span className="text-2xl font-bold text-blue-800">Linemark</span> */}
              <Image src="/images/bhe-logo.jpg" alt="BHE-logo" width={100} height={100} />
            </Link>
            <p className="text-sm font-medium text-blue-700 text-center md:text-left">
              An ISO 9001 : 2015 Certified Company
            </p>
          </div>

          {/* Quick Links */}
          <div className="px-4">
            <h3 className="text-lg font-bold text-blue-800 mb-4">Quick Links</h3>
            <div className="space-y-3">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link 
                  key={href}
                  href={href}
                  className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className='text-sm'>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="px-4">
            <h3 className="text-lg font-bold text-blue-800 mb-4">Contact Us</h3>
            <div className="space-y-4">
              {/* <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-700 mt-1 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  Office: A#301, Gokulesh Res. Waghodia Dabhoi Ring Road, Vadodara, Gujarat.
                </p>
              </div> */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-700 flex-shrink-0" />
                <div className="text-sm text-blue-700">
                  <a href="tel:+917862819867" className="hover:text-blue-800 block">+91 7862819867</a>
                  <a href="tel:+918347939699" className="hover:text-blue-800 block">+91 8347939699</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-700 flex-shrink-0" />
                <a 
                  href="mailto:linemarkcropcare@gmail.com" 
                  className="text-sm text-blue-700 hover:text-blue-800"
                >
                  linemarkcropcare@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Survey Location */}
          <div className="px-4">
            <h3 className="text-lg font-bold text-blue-800 mb-4">Survey Location</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-700 mt-1 flex-shrink-0" />
              <p className="text-sm text-blue-700">
                Survery No: 91/B, Part-II, Village - Ujjeti, Baska - Ujjeti Road, Taluka - Halol, Dist - Panchmahal, Gujarat.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-100">
          <div className="container mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-blue-700 mb-4 md:mb-0">
              © {new Date().getFullYear()} Linemark Crop Care. All rights reserved.
            </div>
            <div className="text-sm text-blue-700">
              Made with ❤️ by <a href='https://www.sayajiinfotech.com/' target='_blank' className='hover:text-blue-800 font-medium'>Sayaji Infotech</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter