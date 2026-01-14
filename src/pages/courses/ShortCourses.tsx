import { useState } from "react";
import heroBg from "../../assets/backgrnd.svg";
import { Link } from "react-router-dom";

import web from "@/assets/img/web.png";
import prod from "@/assets/img/prod-design.png";
import mobile from "@/assets/img/mobile.png";
import data from "@/assets/img/data-analysis.png";
import digital from "@/assets/img/digital-marketing.png";
import project from "@/assets/img/product-management.png";

// Mock Data for Short Courses
const shortCourses = [
  {
    category: "Development",
    title: "Web Design (HTML, CSS, JavaScript)",
    duration: "9 Weeks",
    price: "₦150,000",
    image: web,
    features: [
      "Responsive Web Development",
      "Front-End Frameworks",
      "DOM Manipulation",
      "Git & Version Control",
    ],
  },
  {
    category: "Design",
    title: "Product Design (UI/UX)",
    duration: "9 Weeks",
    price: "₦150,000",
    image: prod,
    features: [
      "User Research & Persona Development",
      "Wireframing & Prototyping",
      "UI/UX Best Practices",
      "Figma & Adobe XD",
    ],
  },
  {
    category: "Development",
    title: "Mobile App Development (Flutter)",
    duration: "9 Weeks",
    price: "₦150,000",
    image: mobile,
    features: [
      "Dart Programming Language",
      "UI/UX for Mobile",
      "Cross-Platform Development",
      "State Management",
    ],
  },
  {
    category: "Data",
    title: "Data Analysis (Power BI, Excel, Python)",
    duration: "9 Weeks",
    price: "₦150,000",
    image: data,
    features: [
      "Data Cleaning & Transformation",
      "Statistical Analysis",
      "Data Visualization",
      "SQL Fundamentals",
    ],
  },
  {
    category: "Marketing",
    title: "Digital Marketing",
    duration: "9 Weeks",
    price: "₦150,000",
    image: digital,
    features: [
      "SEO & SEM Strategies",
      "Social Media Marketing",
      "Content Creation & Strategy",
      "Google Analytics & Reporting",
    ],
  },
  {
    category: "Management",
    title: "Product Management",
    duration: "9 Weeks",
    price: "₦150,000",
    image: project,
    features: [
      "Product Lifecycle Management",
      "Market Research & Validation",
      "Agile & Scrum Methodologies",
      "Roadmapping & Prioritization",
    ],
  },
];

const categories = [
  "All",
  "Design",
  "Development",
  "Data",
  "Marketing",
  "Management",
];

export default function ShortCourses() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCourses =
    activeTab === "All"
      ? shortCourses
      : shortCourses.filter((c) => c.category === activeTab);

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
            Short Courses:{" "}
            <span className="text-orange-500">Rapid Skills, Real Impact</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Master core tech skills in 9 weeks and kickstart your career with a
            job-ready foundation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === cat
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-4">
                    <span className="px-2 py-0.5 bg-slate-100 rounded">
                      Duration: {course.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6 grow">
                    {course.features.map((feat, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-600 flex items-start gap-2"
                      >
                        <span className="text-orange-500 mt-0.5">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between gap-4">
                    <button className="flex-1 py-2.5 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors text-sm shadow-md shadow-orange-500/10">
                      Enroll
                    </button>
                    <span className="text-xl font-bold text-slate-900">
                      {course.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}

      <section className="py-10 rounded-lg  text-white mb-10 w-[95%] md:w-[85%] mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto bg-linear-to-r from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready for a Deeper Dive?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
                Explore our comprehensive Diploma Programs for advanced,
                in-depth learning and career acceleration.
              </p>
              <Link
                to="/courses/diploma"
                className="px-8 py-3 bg-orange-500 text-white font-bold rounded-xl text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 inline-block"
              >
                Explore Diploma Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
