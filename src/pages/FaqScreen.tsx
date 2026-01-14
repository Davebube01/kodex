import { useState } from "react";
import heroBg from "../assets/backgrnd.svg";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "General",
    question: "What are the admission requirements for Kodex 3?",
    answer:
      "Basic computer literacy is recommended but not mandatory for beginners. A passion for learning is the most important requirement.",
  },
  {
    category: "General",
    question: "What is project-based learning, and how does it work?",
    answer:
      "We focus on building real-world projects rather than just theory. You will complete multiple projects throughout the course to build a strong portfolio.",
  },
  {
    category: "Courses",
    question: "What is the difference between Short and Diploma Courses?",
    answer:
      "Short courses are intensive 9-week programs focused on core skills. Diploma courses are 13-week programs covering advanced topics, soft skills, and career readiness.",
  },
  {
    category: "Payment",
    question: "Are there installment payment plans available?",
    answer:
      "Yes, we offer flexible payment plans. You can pay in installments over the duration of the course. Please contact us for details.",
  },
  {
    category: "Enrollment",
    question: "What kind of career support is offered after graduation?",
    answer:
      "We offer CV review, interview preparation, and connect you with our hiring partners. We also have an alumni network for ongoing support.",
  },
  {
    category: "Technical",
    question: "Do I receive a certification upon completing a course?",
    answer:
      "Yes, upon successful completion of your projects and assessments, you will receive a certificate of completion from Kodex 3.",
  },
];

const categories = [
  "All",
  "General",
  "Courses",
  "Enrollment",
  "Payment",
  "Technical",
];

export default function FaqScreen() {
  const [activeTab, setActiveTab] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs =
    activeTab === "All" ? faqs : faqs.filter((f) => f.category === activeTab);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about our programs, enrollment, and
            learning experience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-4 rounded-md hover:bg-slate-800 transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-slate-100 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-sm font-semibold pb-2 px-2 transition-colors relative ${
                  activeTab === cat
                    ? "text-orange-500 after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-0.5 after:bg-orange-500"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100/50 transition-colors"
                >
                  <span className="font-medium text-slate-800">
                    {faq.question}
                  </span>
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {openIndex === idx && (
                  <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Can't Find Your Answer?</h2>
          <Link
            to="/contact"
            className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
