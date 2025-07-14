"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation";
const AboutSection = () => {
  const router = useRouter();
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative">
              <Image
                src="/images/about-1.jpg"
                alt="About Agriculture"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
              {/* Farmer Image */}
              <div className="absolute -bottom-8 -left-8 hidden md:block">
                <Image
                  src="/images/about-2.jpg?height=150&width=150"
                  alt="Farmer"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-blue-600">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-sm font-medium tracking-wide uppercase">V-Flex Solutions</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Engineered Flexible Hose & Hydraulic Solutions
            </h2>

            <p className="text-gray-600 text-lg">
              V-Flex Solutions is a leading manufacturer of S.S. wire braided, Teflon, and corrugated hoses, as well as hydraulic and rubber hose assemblies. Our V-Flex brand is trusted for stainless steel expansion joints, flexible hoses, and assemblies, serving a wide range of industries.
            </p>

            <p className="text-gray-600 text-lg">
              <strong>Mission:</strong> Delivering reliable, innovative, and safe hose solutions through advanced engineering and strict quality control.
            </p>

            {/* Core Values List */}
            <div className="space-y-3">
              {[
                "Quality and safety in every product",
                "Innovation in hose technology",
                "Strong customer relationships",
                "Responsible manufacturing",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <span className="font-semibold text-blue-600">Key Benefits of Our PTFE Hoses:</span>
              <ul className="list-disc pl-6 text-gray-600 text-base mt-2 space-y-1">
                <li>Wide temperature range (-70°C to +260°C)</li>
                <li>Chemically inert and weather resistant</li>
                <li>Lightweight, flexible, and durable</li>
              </ul>
            </div>

            <p className="text-gray-600 text-lg font-medium pt-4">
              <strong>ISO 9001:2015 Certified Manufacturer</strong>
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => router.push('/about-us')}>More About Us</Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
