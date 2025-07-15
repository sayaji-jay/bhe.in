import React from 'react'
import Image from "next/image"
import { Check, Microscope, Factory } from "lucide-react"

const facilities = [
  {
    title: "Pressure & Temperature Testing",
    description: "State-of-the-art equipment for testing hoses and assemblies under extreme pressure and temperature conditions."
  },
  {
    title: "Dimensional Accuracy Lab",
    description: "Precision measurement tools to ensure all hoses and fittings meet exact specifications."
  },
  {
    title: "Chemical Resistance Testing",
    description: "Advanced facilities to evaluate resistance to a wide range of chemicals and solvents."
  },
  {
    title: "Leak & Flexibility Testing",
    description: "Comprehensive testing for leak-proof performance and superior flexibility."
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
              Manufacturing & Testing <span className="text-blue-600 relative">Facilities<div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded" /></span>
            </h1>
            <p className="text-gray-600 text-lg">
              Our advanced manufacturing unit and quality control laboratory are equipped to deliver world-class S.S. wire braided, PTFE, and corrugated hoses, as well as hydraulic and rubber hose assemblies. Every product is crafted and tested to meet the highest standards of reliability and safety for industrial applications.
            </p>
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
                <h2 className="text-2xl font-bold text-gray-900">Advanced Manufacturing</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Our facility is equipped with fully and semi-automatic machinery for the production of flexible hoses, expansion joints, and assemblies. We utilize high-grade stainless steel, PTFE, and other materials to ensure durability and performance in every product.
              </p>
              <p className="text-gray-600 text-lg">
                The plant features dedicated lines for S.S. wire braided hoses, Teflon/PTFE hoses, corrugated hoses, and custom assemblies, all manufactured under strict quality protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control & Testing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-center space-x-3">
                <Microscope className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Quality Control & Testing</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Our in-house laboratory is equipped with advanced instruments for comprehensive quality assurance. Each hose and assembly undergoes rigorous testing to ensure compliance with international standards and customer specifications.
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
                Our team of experienced engineers and quality analysts ensure that every product is tested for pressure, temperature, chemical resistance, dimensional accuracy, and flexibility before dispatch.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/images/research.jpg"
                alt="Quality Control Lab"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/quality-assurance.jpg"
                alt="R&D Facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Microscope className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Research & Development</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Our dedicated R&D team is focused on continuous innovation in hose design, material science, and assembly techniques. We invest in new product development and process improvements to meet the evolving needs of industries worldwide.
              </p>
              <p className="text-gray-600 text-lg">
                Through ongoing research and adoption of the latest technologies, we ensure our products remain at the forefront of quality, safety, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FacilityPage