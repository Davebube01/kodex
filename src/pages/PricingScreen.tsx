import heroBg from "../assets/backgrnd.svg";
import { Link } from "react-router-dom";
import { Zap, GraduationCap, CheckCircle } from "lucide-react";

export default function PricingScreen() {
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
            Invest in Your <span className="text-orange-500">Tech Future</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the program that
            fits your goals and career aspirations.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Short Courses */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 flex flex-col hover:border-orange-200 hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-orange-500"></div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Short Courses
                </h3>
                <p className="text-slate-500 text-sm">Core digital skills</p>
              </div>

              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-slate-900">
                  ₦150,000
                </span>
              </div>

              <div className="space-y-4 mb-8 grow">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>
                    <span className="font-bold">Duration:</span> 9 Weeks
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>
                    <span className="font-bold">Focus:</span> Core digital
                    skills acquisition
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>
                    <span className="font-bold">Learning Style:</span>{" "}
                    Intensive, hands-on practice, direct skill application
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>
                    <span className="font-bold">Outcome:</span> Fundamentals of
                    Product Design
                  </span>
                </div>
              </div>

              <Link
                to="/enroll"
                className="w-full py-4 text-center rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
              >
                Enroll
              </Link>
            </div>

            {/* Diploma Courses */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 flex flex-col hover:border-orange-200 hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-orange-500"></div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Diploma Courses
                </h3>
                <p className="text-slate-500 text-sm">
                  Advanced, in-depth learning
                </p>
              </div>

              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-slate-900">
                  ₦350,000
                </span>
              </div>

              <div className="space-y-4 mb-8 grow">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>
                    <span className="font-bold">Duration:</span> 13 Weeks
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>
                    <span className="font-bold">Focus:</span> Advanced, in-depth
                    learning, specialized expertise
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>
                    <span className="font-bold">Learning Style:</span> Projects
                    + dedicated mentorship, comprehensive immersion
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>
                    <span className="font-bold">Outcome:</span> Strong
                    Portfolio, career readiness for advanced roles, leadership
                  </span>
                </div>
              </div>

              <Link
                to="/enroll"
                className="w-full py-4 text-center rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
              >
                Enroll
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Payment Options */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Flexible Payment Options
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                We understand that investing in your education is a big step.
                Kodex 3 offers various payment plans and installment options to
                make your tech journey accessible. Contact our admissions team
                to discuss what works best for you.
              </p>
              <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                Discuss Payment Plans
              </button>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-slate-50 to-white opacity-50 z-0"></div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Partner with <span className="text-orange-500">Kodex 3</span> to
            Empower Your Students
          </h2>
          <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">
            Contact Us for Schools
          </button>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500">
            Have more questions about pricing or enrollment?{" "}
            <Link
              to="/faqs"
              className="text-orange-500 font-bold hover:underline"
            >
              Visit our FAQ page
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
