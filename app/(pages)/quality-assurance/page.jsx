import React from 'react'
import { Check, Shield, Award, Target } from "lucide-react"
import Image from "next/image"

const checkingParameters = [
  { 
    title: "Material Inspection", 
    description: "Thorough inspection of raw materials such as S.S. wire, PTFE, and other critical components to ensure compliance with industrial standards.",
    icon: Shield
  },
  { 
    title: "Dimensional Accuracy", 
    description: "Precise measurement and verification of hose dimensions and fittings for perfect compatibility and safety.",
    icon: Target
  },
  { 
    title: "Pressure & Temperature Testing", 
    description: "Testing hoses and assemblies under extreme pressure and temperature ranges (-70°C to +260°C) to guarantee performance.",
    icon: Check
  },
  { 
    title: "Chemical Resistance Evaluation", 
    description: "Assessment of chemical inertness and resistance to weathering, oxidation, and surface fouling.",
    icon: Award
  },
  { 
    title: "Final Output Check", 
    description: "Comprehensive leak, flexibility, and durability testing of finished products.",
    icon: Shield
  },
  { 
    title: "Packaging Inspection", 
    description: "Ensuring tamper-free, reliable, and export-grade packaging for safe delivery.",
    icon: Target
  },
]

const ptfeBenefits = [
  "Wide operating temperature range (-70°C to +260°C)",
  "Inert to virtually all chemicals",
  "Weather/ageing resistant: unaffected by UV, oxidation, fouling, or discoloration",
  "Non-flammable",
  "Lightweight",
  "Superior flex fatigue life",
  "Low permeability",
  "Extremely low frictional properties",
  "Unlimited shelf life",
  "Solvent resistant"
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
              Quality Assurance in <span className="text-blue-600 relative">Flexible Hoses & Assemblies<div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded" /></span>
            </h1>
            <p className="text-gray-600 text-lg">
              We are committed to delivering the highest quality stainless steel wire braided, PTFE, and corrugated hoses, as well as hydraulic and rubber hose assemblies. Every product undergoes rigorous quality checks to ensure reliability and safety in critical industrial applications.
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
              <h2 className="text-2xl font-bold text-gray-900">Product Quality Parameters</h2>
              <p className="text-gray-600 text-lg">
                Our quality experts meticulously examine each hose and assembly on multiple parameters to ensure flawless performance and long-term reliability in demanding environments.
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

      {/* PTFE Hose Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our PTFE Hoses?</h2>
              <p className="text-gray-600 text-lg">
                Our PTFE hoses offer unmatched performance and durability, making them ideal for a wide range of industrial applications. Here are some of the key benefits:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ptfeBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-600 mt-1" />
                  <span className="text-gray-700 text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Quality</h2>
              <p className="text-gray-600 text-lg">
                Every hose and assembly is strictly inspected by our team of quality experts. Our comprehensive quality assurance process ensures that each product meets the highest standards before reaching our customers.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Quality Tested</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Monitoring</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-3xl font-bold text-blue-600">ISO</div>
                <div className="text-sm text-gray-600 mt-1">Certified</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-3xl font-bold text-blue-600">10+</div>
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