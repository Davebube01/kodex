import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Step 1: Personal Info
function PersonalInfo({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
        Tell Us About Yourself
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block text-slate-400 text-sm mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>

        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 mt-4"
        >
          Next Step <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

// Step 2: Program Selection
function ProgramSelection({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
        Which Program Interests You?
      </h2>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-slate-400 text-sm mb-2">
            Program Type
          </label>
          <select className="w-full p-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white">
            <option>Select a program</option>
            <option>Short Course (9 Weeks)</option>
            <option>Diploma Course (13 Weeks)</option>
            <option>School Program</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-400 text-sm mb-2">Course</label>
          <select className="w-full p-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white">
            <option>Select a course</option>
            <option>Web Design</option>
            <option>Product Design</option>
            <option>Data Analysis</option>
            <option>Flutter Mobile Dev</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onBack}
          className="w-1/3 py-4 bg-white border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          className="w-2/3 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
        >
          Proceed to Payment <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function EnrollmentLayout() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Minimal Header */}
      <div className="bg-white border-b border-slate-100 py-4 px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-1">
          <span className="text-orange-500">Kodex</span>
          <span className="text-slate-900">3</span>
        </Link>
        <Link
          to="/"
          className="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          Cancel Enrollment
        </Link>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-slate-100">
        <div
          className="h-full bg-orange-500 transition-all duration-300"
          style={{ width: step === 1 ? "50%" : "100%" }}
        ></div>
      </div>

      <div className="grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full">
          {step === 1 && <PersonalInfo onNext={() => setStep(2)} />}
          {step === 2 && <ProgramSelection onBack={() => setStep(1)} />}
        </div>
      </div>
    </div>
  );
}
