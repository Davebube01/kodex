import heroBg from "../assets/backgrnd.svg";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  FacebookIcon,
  Instagram,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

const socialIcons = [
  {
    icon: FacebookIcon,
  },
  {
    icon: Instagram,
  },
  {
    icon: TwitterIcon,
  },
  {
    icon: LinkedinIcon,
  },
];

export default function ContactScreen() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Get In Touch With <span className="text-orange-500">Kodex 3</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            We're here to answer your questions and help you start your tech
            journey. Reach out to us through any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Send Us a Message
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-colors appearance-none bg-white text-slate-500">
                    <option>Select a subject</option>
                    <option>Course Inquiry</option>
                    <option>Enrollment Support</option>
                    <option>Partnership</option>
                    <option>General Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Our Details Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Details
            </h2>
            <p className="text-slate-600">
              Find us, call us, or email us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Phone Support</h3>
              <p className="text-xs text-orange-500 font-semibold mb-1">
                Nigeria: +234 803 049 6000
              </p>
              <p className="text-xs text-orange-500 font-semibold">
                Kenya: +254 100 728 411
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-xs text-orange-500 font-semibold mb-1">
                info@kodex3.com
              </p>
              <p className="text-xs text-slate-500">
                We typically respond within 24 hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Our Location</h3>
              <p className="text-xs text-slate-500">
                Plot 1422, Independence Ave, Central Business District, Abuja.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Operating Hours</h3>
              <p className="text-xs text-slate-500 mb-1">
                Monday - Friday: 9:00 AM - 5:00 PM WAT
              </p>
              <p className="text-xs text-slate-500">
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Connect & Map Placeholder */}
      <section className="bg-white pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Connect With Us
          </h2>
          <div className="flex justify-center gap-4">
            {socialIcons.map((item, index) => (
              <div
                key={index}
                className="w-10 h-10 bg-slate-100 hover:bg-orange-500 hover:text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer text-slate-600"
              >
                <item.icon />
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="w-full h-80 bg-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold">
            Map Integration Placeholder
          </div>
        </div>
      </section>
    </div>
  );
}
