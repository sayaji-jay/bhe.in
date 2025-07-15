import React from 'react';
import { ScanHeart, Brain, Zap, FlaskConical, Target, BarChart3, ShieldCheck, Earth, CheckCircle, Wrench, Layers, PackageSearch, Award, Factory } from 'lucide-react';

const AboutUsPage = () => {
  const strengths = [
    {
      title: "Advanced Manufacturing Facilities",
      icon: Factory,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Custom Engineering Solutions",
      icon: Wrench,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Stringent Quality Assurance",
      icon: ShieldCheck,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Technical Expertise",
      icon: Brain,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Wide Product Range",
      icon: Layers,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "On-Time Delivery",
      icon: PackageSearch,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const qualityPolicies = [
    "We are committed to delivering products that meet or exceed international quality standards for industrial hoses, bellows, and assemblies.",
    "Every product undergoes rigorous inspection and testing for pressure, temperature, chemical resistance, and dimensional accuracy.",
    "We continually improve our processes and invest in advanced technology to ensure consistent quality and customer satisfaction."
  ];

  const healthSafetyPolicies = [
    "We maintain a safe and sustainable workplace, providing all employees with necessary safety equipment and training.",
    "All staff are required to follow safety protocols and procedures at every stage of manufacturing and testing.",
    "We are committed to preventing workplace injuries and maintaining a healthy environment for our team and visitors."
  ];

  const environmentPolicies = [
    "We minimize our environmental impact by optimizing resource consumption and reducing waste in our manufacturing processes.",
    "We comply with all applicable environmental regulations and promote pollution prevention practices.",
    "We invest in technologies and processes that support sustainability and environmental stewardship."
  ];

  const productCategories = [
    { name: "Hoses", description: "Industrial hoses for air, steam, chemical, and hydraulic applications." },
    { name: "Bellows", description: "Flexible components for piping systems to absorb movement and vibration." },
    { name: "Hose Assemblies", description: "Pre-assembled hoses with fittings for specific industrial needs." },
    { name: "Fittings & Couplings", description: "Customized fittings, cam lock and QRC couplings for industrial connections." },
  ];

  const aboutPoints = [
    "Best Hydraulic Engineering is a leading manufacturer of S.S. wire braided, PTFE, and corrugated hoses, hydraulic hoses, rubber hose assemblies, bellows, and industrial fittings.",
    "Our state-of-the-art manufacturing facility is equipped with advanced machinery and a dedicated quality control laboratory, ensuring every product meets the highest standards of reliability and safety.",
    "We serve a wide range of industries including chemical, pharmaceutical, automotive, power, and general engineering, providing custom solutions tailored to each client's requirements.",
    "Our experienced engineering team and skilled workforce are committed to continuous innovation, product development, and process improvement.",
    "We pride ourselves on our ability to deliver high-quality products on time, backed by responsive customer service and technical support.",
    "Our product portfolio includes hoses, bellows, assemblies, and fittings designed for demanding industrial applications, with a focus on durability, flexibility, and performance."
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white pt-20">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200 rounded-full opacity-20" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-blue-200 rounded-full opacity-20" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-200 rounded-full opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-px bg-blue-600/30" />
              <span className="text-sm font-medium tracking-wide uppercase text-blue-800">About Us</span>
              <div className="w-8 h-px bg-blue-600/30" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Engineering Excellence for <span className="text-blue-600 relative">Industrial Solutions<div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200 rounded" /></span>
            </h1>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6">
            {aboutPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-lg text-blue-900 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Product Range
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {productCategories.map((cat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white border border-blue-100 text-center"
              >
                <Award className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{cat.name}</h3>
                <p className="text-blue-700 text-base">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strength Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Strengths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white border border-blue-100 text-center"
              >
                <div className={`w-16 h-16 rounded-lg ${strength.color} flex items-center justify-center mb-4 mx-auto`}>
                  <strength.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">
                  {strength.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Policies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Core Policies
          </h2>

          {/* Quality Policy */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-blue-800">Quality Policy</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {qualityPolicies.map((policy, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <div className="flex items-start">
                    <ShieldCheck className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-blue-700">{policy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health & Safety Policy */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <ScanHeart className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-blue-800">Health & Safety Policy</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthSafetyPolicies.map((policy, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <div className="flex items-start">
                    <ScanHeart className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-blue-700">{policy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Environment Policy */}
          <div>
            <div className="flex items-center justify-center mb-6">
              <Earth className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-blue-800">Environment Policy</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {environmentPolicies.map((policy, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <div className="flex items-start">
                    <Earth className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-blue-700">{policy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutUsPage;
