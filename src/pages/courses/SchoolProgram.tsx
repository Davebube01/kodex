import {
  Rocket,
  Puzzle,
  Shield,
  Brain,
  Code,
  Lock,
  Monitor,
  Bot,
} from "lucide-react";
import heroBg from "../../assets/backgrnd.svg";

export default function SchoolProgram() {
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
            Foundational Tech Skills for{" "}
            <span className="text-orange-500">Young Minds</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Empowering the next generation with essential digital literacy and
            creative tech skills from ages 8-15.
          </p>
        </div>
      </section>

      {/* Vision & Why Tech */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Vision for Young Learners
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At Kodex 3, we believe in nurturing digital literacy from an early
              age. Our Schools Program is meticulously designed to introduce
              children aged 8-15 to the exciting world of technology, equipping
              them with critical thinking, problem-solving, and creative skills
              that are vital for success in the 21st century. We partner with
              schools to integrate project-based learning that makes technology
              accessible, engaging, and fun.
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Why Tech for Kids?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Future-Proof Skills",
                desc: "Prepare students for a rapidly evolving world where digital competence is a cornerstone of every career.",
              },
              {
                icon: Puzzle,
                title: "Creative Problem Solving",
                desc: "Foster analytical thinking and innovative solutions through engaging tech challenges and projects.",
              },
              {
                icon: Shield,
                title: "Digital Citizenship",
                desc: "Educate on internet safety, responsible online behavior, and critical evaluation of digital information.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-transparent text-orange-500 mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-8 h-8" />
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

      {/* Levels */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Level 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-300 flex gap-6 items-start">
              <div className="p-3 bg-orange-100 rounded-lg text-orange-600 shrink-0">
                <Brain className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Level 1 (Ages 8-10): Digital Foundations
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Building essential computer literacy and online safety.
                </p>
                <ul className="space-y-1 text-xs text-slate-500">
                  <li>✓ Basic Computer Operations</li>
                  <li>✓ Introduction to Internet Safety</li>
                  <li>✓ Digital Storytelling & Presentation</li>
                  <li>✓ Creative Software Basics (e.g., Paint, Word)</li>
                </ul>
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-300 flex gap-6 items-start">
              <div className="p-3 bg-orange-100 rounded-lg text-orange-600 shrink-0">
                <Code className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Levels 2 (Ages 11-15): Creative Tech Skills
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Developing foundational coding and design principles.
                </p>
                <ul className="space-y-1 text-xs text-slate-500">
                  <li>✓ Scratch Coding & Game Design</li>
                  <li>✓ UI & Graphics Basics (Canva, Figma Intro)</li>
                  <li>✓ Web Design Fundamentals (HTML/CSS)</li>
                  <li>✓ Python for Beginners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What They'll Discover Grid */}
      <section className="py-20 bg-linear-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-12">
            What They'll Discover
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🐱", label: "Scratch Coding" },
              { icon: Monitor, label: "Computer Literacy" },
              { icon: Lock, label: "Internet Safety" },
              { icon: "🎨", label: "UI & Graphics Basics" },
              { icon: "🌐", label: "Web Design Basics" },
              { icon: "⚙️", label: "Python for Beginners" },
              { icon: "🎩", label: "Cyber Safety" },
              { icon: Bot, label: "Intro to Robotics" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg min-h-[160px]"
              >
                <div className="text-4xl text-orange-500">
                  {typeof item.icon === "string" ? (
                    item.icon
                  ) : (
                    <item.icon className="w-10 h-10" />
                  )}
                </div>
                <span className="font-bold text-slate-900 text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}

      <section className="py-10 rounded-lg  text-white mb-10 w-[95%] md:w-[85%] mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto bg-linear-to-r from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Partner with <span className="text-orange-500">Kodex 3</span> to
                Empower Your Students
              </h2>
              <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">
                Contact Us for Schools
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
