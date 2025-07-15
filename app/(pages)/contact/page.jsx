"use client"

import { Phone, Mail, Globe, Send, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("abcdefgh");

  if (state.succeeded) {
    return (
      <section className="py-20">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Thank you!</h1>
          <p className="text-lg text-gray-700">Your message has been successfully sent. We will get back to you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
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
              <span className="text-sm font-medium tracking-wide uppercase text-blue-800">Contact Us</span>
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

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-xl -mt-8 -mx-8 mb-8"></div>

            <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Details</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-600 text-sm">Phone Number</h3>
                  <div className="space-y-1">
                    <a href="tel:+917862819867" className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                      +91 7862819867
                    </a>
                    <a href="tel:+918347939699" className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                      +91 8347939699
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-600 text-sm">Email Address</h3>
                  <a href="mailto:linemarkcropcare@gmail.com" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    linemarkcropcare@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-600 text-sm">Website</h3>
                  <a href="https://www.linemarkcropcare.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    www.linemarkcropcare.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 mt-6">
                <div className="bg-blue-50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-600 text-sm">Survey Address</h3>
                  <p className="text-lg font-semibold text-gray-800">
                    Survey No : 91/ B, Part - II,<br />
                    Village - Ujjeti, Baska - Ujjeti Road,<br />
                    Taluka - Halol, Dist - Panchmahal,<br />
                    Gujarat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-xl -mt-8 -mx-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-colors"
                  placeholder="Enter your Name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-colors"
                  placeholder="Enter your Email"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-colors"
                  placeholder="How can we help you?"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-xl -mt-8 -mx-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Location</h2>
            <div className="w-full">
              <iframe




                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29502.333792139052!2d73.42077545211794!3d22.436863693640394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fd5c1e31b1c4d%3A0x509f8321225ee29e!2sUjeti%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1751691791736!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}