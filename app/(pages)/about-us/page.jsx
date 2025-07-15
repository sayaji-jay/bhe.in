import React from 'react';
import { ScanHeart, Brain, Zap, FlaskConical, Target, BarChart3, ShieldCheck, Earth, CheckCircle } from 'lucide-react';

const AboutUsPage = () => {
  const strengths = [
    {
      title: "Quick decision-making",
      icon: Zap,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Strong in Research & Development",
      icon: Brain,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Easy Adaptability for new Technology",
      icon: Target,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Strong in Formulations",
      icon: FlaskConical,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Strong Marketing Resources",
      icon: BarChart3,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const qualityPolicies = [
    "To Achieve and Enhance Customer Satisfaction we are committed to provide quality product and service on time.",
    "Manufacture products through processes developed using in-house research and development.",
    "To continually Evaluate and Improve the effectiveness of the Quality Management System by establishing and reviewing.",
  ];

  const healthSafetyPolicies = [
    "LINEMARK is committed to provide and maintain all its employees safe & sustainable work place with necessary safety gadgets and ensure safe working methods all the time.",
    "Every employee shall observe safety rules and regulation at all the times. He/she adopt safe and appropriate procedure during performing his/her duty.",
    "Every employee will assume self responsibility, take active part and extended fullest co-operation in maintaining and improving safety standards.",
    "It shall be the constant endeavour of the company to ensure that the surrounding environment is not endangered while carrying out its business operations.",
    "Company will impart necessary training to all its employees and will make them aware about how to perform their duties safety and effectively.",
    "LINEMARK will indulge knowledge for safety & health consciousness among all employees and contractors.",
    "Ensuring safety and preservation of any damage or injury to plant or person shall be the prime responsibility at all supervisory and managerial levels.",
  ];

  const environmentPolicies = [
    "Institutionalize and promote pollution prevention practice by implementing best operating practices.",
    "Comply with all applicable environmental and other requirements.",
    "Maintain the good standards of visual appearance, cleanliness and tidiness of our building by good housekeeping.",
    "Optimize consumption of resources especially electricity and water.",
    "Promote and enhance respect and necessary skills for environment preservation among our employees by effective training and involvement.",
    "To develop blue belt on the periphery of company and within the premise.",
    "Take into consideration of environmental issues when designing new product/new formulation.",
  ];

  const productCategories = [
    { name: "Insecticide", count: 16, color: "bg-blue-100 text-blue-600" },
    { name: "Fungicide", count: 10, color: "bg-blue-100 text-blue-600" },
    { name: "Herbicide", count: 5, color: "bg-emerald-100 text-emerald-600" },
    { name: "Plant Growth Regulator", count: 3, color: "bg-yellow-100 text-yellow-600" },
    { name: "Biostimulant", count: 7, color: "bg-orange-100 text-orange-600" },
    { name: "Fertilizers And Bio Fertilizers", count: 10, color: "bg-purple-100 text-purple-600" },
  ];

  const aboutPoints = [
    "Linermark Crop Care was founded in 2019 and is based in Vadodara, Gujarat. We serve rural India by manufacturing and supplying Agricultural Chemicals, Bio Stimulants, Seeds & Fertilizers.",
    "We leverage our capabilities to deliver trusted crop protection and plant nutrient products that help farmers cultivate high-quality crops and boost productivity.",
    "Our operations are supported by advanced manufacturing facilities, with strict quality control to ensure we deliver only the best to our customers.",
    "Our R&D team collaborates with farmers to develop innovative technologies and products that increase yield and solve real farming challenges.",
    "We maintain a strong local presence with a well-established sales network across India.",
    "We are committed to long-term rural support—continually upgrading our products and evolving our solutions to meet the ever-changing needs of agriculture."
  ];

  const totalProducts = productCategories.reduce((sum, category) => sum + category.count, 0);

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
              Empowering Farmers for a{" "}
              <span className="text-blue-600 relative">
                blueer Future
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200 rounded" />
              </span>
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

      {/* Our Strength Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Strength
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
