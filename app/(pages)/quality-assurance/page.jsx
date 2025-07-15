import React from 'react'
import { Check, Shield, Award, Target } from "lucide-react"
import Image from "next/image"

const checkingParameters = [
  { 
    title: "Material Inspection", 
    description: "Thorough examination of raw materials and ingredients",
    icon: Shield
  },
  { 
    title: "Production Monitoring", 
    description: "Continuous monitoring of manufacturing processes",
    icon: Target
  },
  { 
    title: "Final Output Check", 
    description: "Comprehensive testing of finished products",
    icon: Check
  },
  { 
    title: "Performance Testing", 
    description: "Rigorous evaluation of product effectiveness",
    icon: Award
  },
  { 
    title: "International Standards", 
    description: "Compliance with global quality norms",
    icon: Shield
  },
  { 
    title: "Secure Packaging", 
    description: "Tamper-free and reliable packaging solutions",
    icon: Target
  },
]

const QualityAssurancePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-sm font-medium tracking-wide uppercase text-blue-600">Quality Assurance</span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ensuring Excellence in{" "}
              <span className="text-blue-600 relative">
                Every Product
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded" />
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              We prioritize quality above all. Our products are formulated by experienced professionals using supreme quality ingredients following international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/quality-assurance.jpg"
                alt="Quality Assurance"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Quality Tested</div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Products Checking Parameters</h2>
              <p className="text-gray-600 text-lg">
                Our quality experts examine products on varied parameters to ensure flawlessness and efficiency.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {checkingParameters.slice(0, 4).map((param, index) => {
                  const IconComponent = param.icon
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{param.title}</h3>
                        <p className="text-sm text-gray-600">{param.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Quality</h2>
              <p className="text-gray-600 text-lg">
                These parameters are strictly inspected by our team of rigid quality analyzers. Through our comprehensive quality assurance process, we ensure every product meets the highest standards of excellence before reaching our customers.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Quality Tested</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Monitoring</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">ISO</div>
                <div className="text-sm text-gray-600 mt-1">Certified</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">6+</div>
                <div className="text-sm text-gray-600 mt-1">Parameters</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default QualityAssurancePage