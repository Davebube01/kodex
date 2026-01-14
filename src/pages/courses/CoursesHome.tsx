import {
  Rocket,
  GraduationCap,
  School,
  ArrowRight,
  Code,
  PenTool,
  Smartphone,
  BarChart,
} from "lucide-react";
import heroBg from "../../assets/backgrnd.svg";
import { Link } from "react-router-dom";
import web from "@/assets/img/web.png"
import prod from "@/assets/img/prod-design.png"
import mobile from "@/assets/img/mobile.png"
import data from "@/assets/img/data-analysis.png"

// Mock Data for Popular Programs (reusing logic from Home but specific content)
const popularPrograms = [
  {
    title: "Web Design (HTML, CSS, JavaScript)",
    icon: Code,
    image: web,
    duration: "9 Weeks",
    type: "Multiple Options",
    description:
      "Responsive Web Development, Front-End Frameworks, Git & Version Control.",
    link: "/courses/diploma", // defaulting to diploma or short based on user flow, maybe specific later
  },
  {
    title: "Product Design (UI/UX)",
    image: prod,
    icon: PenTool,
    duration: "9 Weeks",
    type: "Multiple Options",
    description:
      "User Research & Persona Development, Wireframing & Prototyping, UI/UX Best Practices.",
    link: "/courses/diploma",
  },
  {
    title: "Mobile App Development (Flutter)",
    image: mobile,
    icon: Smartphone,
    duration: "9 Weeks",
    type: "Multiple Options",
    description:
      "Dart Programming Language, UI/UX for Mobile, Cross-Platform Development.",
    link: "/courses/diploma",
  },
  {
    title: "Data Analysis (Power BI, Excel, Python)",
    image:data,
    icon: BarChart,
    duration: "9 Weeks",
    type: "Multiple Options",
    description:
      "Data Cleaning & Transformation, Statistical Analysis, Data Visualization.",
    link: "/courses/diploma",
  },
];

export default function CoursesHome() {
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Explore Our{" "}
            <span className="text-orange-500">Tech Training Programs</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Find the perfect program to launch or advance your career in the
            digital world.
          </p>
        </div>
      </section>

      {/* Choose Your Learning Path */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-slate-600">
              Whether you're looking for a quick skill boost or an in-depth
              career transition, Kodex 3 has a program for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Short Courses */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow text-center flex flex-col h-full">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Short Courses
              </h3>
              <p className="text-slate-600 text-sm grow mb-8">
                Gain essential digital skills in 10 weeks. Perfect for quick
                career entry or skill enhancement.
              </p>
              <Link
                to="/courses/short"
                className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors"
              >
                View Short Courses
              </Link>
            </div>

            {/* Diploma Courses */}
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-shadow text-center flex flex-col h-full ring-2 ring-orange-500/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Diploma Courses
              </h3>
              <p className="text-slate-600 text-sm grow mb-8">
                Achieve in-depth expertise and advanced career readiness with
                our comprehensive 14-week programs.
              </p>
              <Link
                to="/courses/diploma"
                className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors"
              >
                Explore Diploma Courses
              </Link>
            </div>

            {/* School Programs */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow text-center flex flex-col h-full">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <School className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                School Program (Ages 8-15)
              </h3>
              <p className="text-slate-600 text-sm grow mb-8">
                Equip young minds with foundational tech skills, creativity, and
                digital literacy.
              </p>
              <Link
                to="/courses/school"
                className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Learn About School Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Popular Programs to Get You Started
            </h2>
            <p className="text-slate-600">
              Our most sought-after courses, carefully designed to kickstart
              your tech career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPrograms.map((prog, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <img src={prog.image} alt="" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {prog.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4">
                    <span className="px-2 py-0.5 bg-slate-100 rounded">
                      Duration: {prog.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                    <ul className="list-disc pl-4 space-y-1">
                      {prog.description.split(", ").map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </p>
                  <Link
                    to={prog.link}
                    className="w-full py-2 rounded border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - using reusable component logic if extracted, or inline for now */}
      <section className="py-10 rounded-lg  text-white mb-10 w-[85%] mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto bg-linear-to-r from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Build Your Tech Future?
              </h2>
              <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
