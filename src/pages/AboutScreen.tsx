import {
  Target,
  Eye,
  Heart,
  Handshake,
  Lightbulb,
  Users,
  Award,
  Globe,
  ArrowRight,
} from "lucide-react";
import heroBg from "../assets/backgrnd.svg"; // Reusing the background or I can use a different one if available.
import Enroll from "./Enroll";

export default function AboutScreen() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Using a placeholder dark overlay or image if available. Reusing heroBg for texture if desired, opacity lowered. */}
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 to-slate-900"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Bridging the{" "}
            <span className="text-orange-500">Digital Skills Gap</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Empowering individuals and institutions with job-ready tech skills
            for a thriving digital future.
          </p>
        </div>
      </section>

      {/* Our Story & Purpose */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Story & Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Video Placeholder */}
            <div className="bg-slate-100 rounded-3xl h-[400px] w-full flex items-center justify-center border border-slate-200 shadow-inner">
              <span className="text-slate-400">Image / Video Placeholder</span>
            </div>

            {/* Right: Text Content */}
            <div className="text-left">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                <span className="font-bold text-orange-500">Kodex 3</span>{" "}
                exists to bridge the gap between traditional education and the
                dynamic demands of the real-world tech industry. We believe that
                practical hands-on experience, coupled with expert mentorship,
                is the most effective way to cultivate job-ready talent.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                Founded on the principles of accessible, high-quality tech
                education, we are committed to nurturing the next generation of
                innovators, problem-solvers, and digital leaders, from young
                learners to seasoned professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Why We Exist */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To provide intensive, project-based tech training programs that
                equip individuals with industry-relevant skills and practical
                experience, fostering successful careers in the digital economy.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be the leading platform for tech skills acquisition in
                Africa, recognized for our innovative curriculum, expert
                mentorship, and unwavering commitment to student success and
                societal impact.
              </p>
            </div>

            {/* Why We Exist */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-6">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Why We Exist
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To empower a diverse community of learners to confidently
                navigate and thrive in the rapidly evolving technology
                landscape, turning aspirations into tangible career
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Sydani */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50/80 rounded-3xl p-8 md:p-16 text-center border border-slate-100 shadow-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-orange-400 via-orange-500 to-orange-600"></div>

            <p className="text-slate-500 uppercase tracking-widest text-sm mb-6">
              Proudly powered by
            </p>

            {/* Sydani Logo Placeholder */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {/* Assuming Sydani logo is text-based or icon + text. Using text representation matching the image. */}
              <div className="flex flex-col items-center">
                <div className="text-4xl font-black text-slate-800 tracking-tighter uppercase flex items-center gap-2">
                  <div className="w-10 h-10 bg-slate-800 rounded-tl-xl rounded-br-xl"></div>{" "}
                  {/* Symbol placeholder */}
                  SYDANI
                </div>
                <div className="text-xl font-bold text-orange-500 tracking-widest uppercase">
                  TECHNOLOGIES
                </div>
              </div>
            </div>

            <p className="text-slate-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
              Sydani Technologies Limited brings a wealth of industry experience
              and a commitment to innovation, ensuring Kodex 3 delivers
              cutting-edge, relevant, and impactful tech education. Our
              partnership guarantees a robust foundation and a forward-thinking
              approach to training.
            </p>

            <button className="px-8 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 inline-flex items-center gap-2">
              Learn More About Sydani <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600">
              These principles guide every aspect of Kodex 3, from our
              curriculum to our community interactions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Handshake,
                title: "Integrity",
                desc: "Upholding honesty and ethical standards in all our endeavors.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Continuously evolving our methods and curriculum to stay ahead.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "Fostering a supportive and collaborative learning environment.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "Committing to the highest standards in education and outcomes.",
              },
              {
                icon: Globe,
                title: "Impact",
                desc: "Focusing on creating tangible positive change in careers and society.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Enroll/>

      {/* Footer is part of specific pages layout for now, let's include it or assume a global footer.
          Currently HomeScreen has its own Footer. I should probably refactor Footer into a component.
          For this task, I will add the Footer here as well to be safe, or user might want me to refactor.
          Given "implement about page", I'll add the Footer here similar to Home for consistency if not refactored.
          Ideally I should put Footer in Layout.tsx. 
          The user prompt 0 had "create this ui in the home page...". 
          I'll duplicate the footer for now to ensure About page looks complete, but I'll make a note to refactor later.
       */}
    </div>
  );
}
