"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"


const FacebookSection = () => {
  const facebookUrl = "linemarkcropcare"
  return (
    <div className="w-full bg-gradient-to-b from-black/95 to-blue-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Facebook Iframe Section */}
          <div className="w-full h-[500px]">
          <iframe 
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${facebookUrl}&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                width="340"
                height="500"
                style={{
                  border: 'none',
                  overflow: 'hidden',
                  maxWidth: '100%',
                  display: 'block',
                  margin: '0 auto',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
          </div>

          {/* Contact Section */}
          <motion.div 
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="text-white space-y-6 p-8"
>
  <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
    Get in Touch
  </h2>
  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600" />

  <p className="text-lg text-white/80 leading-relaxed">
    We manufacture high-quality flexible hoses, S.S. braided, Teflon, rubber hose assemblies, and expansion joints under our trusted brand <strong className="text-white">V-Flex</strong>.
  </p>

  <p className="text-lg text-white/80 leading-relaxed">
    Ideal for industrial, chemical, and automotive use — our hoses ensure flexibility, durability, and resistance in extreme conditions.
  </p>

  <Button 
    asChild
    size="lg" 
    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-2 border-white/20 rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mt-6"
  >
    <Link href="/contact">
      Contact Us Now
    </Link>
  </Button>
</motion.div>


        </div>
      </div>
    </div>
  )
}

export default FacebookSection