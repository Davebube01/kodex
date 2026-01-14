import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center gap-1 mb-6 text-white"
          >
            <span className="text-orange-500">Kodex</span>
            <span>3</span>
          </Link>
          <p className="text-sm mb-6">
            Building the next generation of tech talent through immersive,
            project-based learning.
          </p>
          <div className="flex gap-4">
            {/* Social placeholders */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
              >
                #
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm cursor-default">
            <div className="flex gap-2 hover:text-white">
              <Phone size={18}/>
              <li>Nigeria: +234 803 049 6000</li>
            </div>
            <div className="flex gap-2 hover:text-white">
              <Phone size={18}/>
              <li>Kenya: +254 100 728 411</li>
            </div>
            <div className="flex gap-2 hover:text-white">
              <Mail size={18}/>
              <li>info@kodex3.com</li>
            </div>
            <div className="flex gap-2 hover:text-white">
              <Globe size={18}/>
              <li>www.kodex3.com</li>
            </div>
            <div className="flex gap-2 hover:text-white">
              <MapPin size={18}/>
              <li>Plot 1422, Independence Avenue,
Central Business District, Abuja</li>
            </div>
            
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-white transition-colors"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="hover:text-white transition-colors"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/courses/short"
                className="hover:text-white transition-colors"
              >
                Bootcamps
              </Link>
            </li>
            <li>
              <Link
                to="/courses/diploma"
                className="hover:text-white transition-colors"
              >
                Diploma Programs
              </Link>
            </li>
            <li>
              <Link
                to="/courses/school"
                className="hover:text-white transition-colors"
              >
                Kids Coding
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white mt-12 pt-8 text-center text-xs">
        &copy; {new Date().getFullYear()} Kodex3. All rights reserved. Powered by Sydani Technologies
      </div>
    </footer>
  );
}
