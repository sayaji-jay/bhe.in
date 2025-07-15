import React from 'react'
import Image from "next/image"
import { Check, Microscope, Factory } from "lucide-react"

const facilities = [
  {
    title: "GLC",
    description: "Advanced chromatography analysis"
  },
  {
    title: "HPLC",
    description: "High-performance liquid chromatography"
  },
  {
    title: "UV Spectrophotometer",
    description: "Precise spectral analysis"
  },
  {
    title: "Brookfield viscometer",
    description: "Accurate viscosity measurement"
  }
]

const FacilityPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-sm font-medium tracking-wide uppercase text-blue-600">Our Facilities</span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Manufacturing Unit and{" "}
              <span className="text-blue-600 relative">
                R&D
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/research.jpg"
                alt="Manufacturing Facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Factory className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Manufacturing</h2>
              </div>
              <p className="text-gray-600 text-lg">
                We have recently invested in construction of a state-of-the-art formulation plant in Halol, Gujarat, backed by excellent quality control laboratory and well-trained R&D personnel for the synthesis of vital active ingredients.
              </p>
              <p className="text-gray-600 text-lg">
                Spread over 7000 sq. meters the plant will be equipped with advanced fully and semi-automatic manufacturing equipments and Analytical instruments to manufacture quality AI and formulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-center space-x-3">
                <Microscope className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Research and Development</h2>
              </div>
              <p className="text-gray-600 text-lg">
                To ensure the reliability and performance of all our technologies and products, we significantly invest in a fully integrated research laboratory with advanced instruments.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {facilities.map((facility, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{facility.title}</h3>
                        <p className="text-sm text-gray-600">{facility.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-lg mt-6">
                We are privileged with a team of expert Chemists and Agriculture Scientists with years of experience in their respective fields. With this facility, we will be able to cater to the rising demands of the global agrochemical market.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/images/research.jpg"
                alt="R&D Facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FacilityPage