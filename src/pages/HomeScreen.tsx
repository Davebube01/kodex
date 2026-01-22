import {
  Search,
  PenTool,
  BarChart,
  Code,
  Briefcase,
  Users,
  FileCheck,
  Calendar,
  GraduationCap,
  Zap,
  Globe,
  CheckCircle,
  Star,
  Smartphone,
} from "lucide-react";
import heroBg from "../assets/backgrnd.svg";
import web from "@/assets/img/web.png"
import prod from "@/assets/img/prod-design.png"
import mobile from "@/assets/img/mobile.png"
import data from "@/assets/img/data-analysis.png"
import digital from "@/assets/img/digital-marketing.png"
import project from "@/assets/img/product-management.png"
import kodex3 from "@/assets/kodex3.svg"

// Mock Data for Courses
const courses = [
  {
    id: 1,
    title: "Web Design (HTML, CSS, JavaScript)",
    image: web,
    description: "Master the foundations of web development.",
    tags: ["Frontend", "Design"],
  },
  {
    id: 2,
    title: "Product Design (UI/UX)",
    image: prod,
    description: "Learn to design user-centric interfaces.",
    tags: ["UI/UX", "Figma"],
  },
  {
    id: 3,
    title: "Mobile App Development (Flutter)",
    image: mobile,
    description: "Build cross-platform mobile apps.",
    tags: ["Mobile", "Flutter"],
  },
  {
    id: 4,
    title: "Data Analysis (Excel, SQL, Power BI)",
    image: data,
    description: "Analyze and visualize data effectively.",
    tags: ["Data", "Analysis"],
  },
  {
    id: 5,
    title: "Digital Marketing",
    image: digital,
    description: "Master online marketing strategies.",
    tags: ["Marketing", "SEO"],
  },
  {
    id: 6,
    title: "Project Management",
    image: project,
    description: "Lead projects to success.",
    tags: ["Management", "Agile"],
  },
];

export default function HomeScreen() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-16 pb-32 overflow-hidden">
        {/* Background Image - Absolute */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-b bg-transparent "></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <p className="text-orange-500 font-semibold mb-4 tracking-wide uppercase text-sm">
            Grow your skills
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Build Job-Ready <span className="text-orange-500">Tech Skills</span>{" "}
            <br className="hidden md:block" />
            for the Digital World
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Acquire skills that set you apart in the competitive tech landscape.
            Learn from industry experts and work on real-world projects.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16 relative">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Find a course..."
                className="w-full pl-6 pr-32 py-4 rounded-full border border-slate-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 bg-white/80 backdrop-blur-sm text-slate-800"
              />
              <div className="absolute right-2 top-2 bottom-2">
                <button className="h-full bg-slate-900 hover:bg-slate-800 text-white px-6 rounded-full font-medium transition-colors flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:block">
              {/* Alternate button styles if needed, currently using the one above */}
            </div>
          </div>

          {/* Feature Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Code, label: "Web Design" },
              { icon: PenTool, label: "Product Design" },
              { icon: Smartphone, label: "Mobile Dev" },
              { icon: BarChart, label: "Data Analysis" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white/50 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-default"
              >
                <div className="p-2 bg-slate-900/5 rounded-full text-slate-700">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-700 text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white" id="courses">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Courses
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our comprehensive curriculum designed to take you from
              beginner to job-ready professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <div className="flex gap-2 mb-3">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 grow">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm">
                      Learn More
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20 text-sm">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-700 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <h2 className="text-3xl md:text-5xl font-bold ">
              Why <span className="text-orange-500">Trust</span> 
              
            </h2>
            <img src={kodex3} alt="kodex"/>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We provide more than just tutorials. We offer a
              career-transforming experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white backdrop-blur border border-slate-700 p-8 rounded-2xl  transition-colors text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mx-auto mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">
                Hands-on, Project-based Learning
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Gain practical experience by building real-world projects from day one.
              </p>
            </div>
            <div className="bg-white backdrop-blur border border-slate-700 p-8 rounded-2xl transition-colors text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mx-auto mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">
                Industry-Relevant Skills
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
               Learn technologies and methodologies demanded by today’s tech companies.
              </p>
            </div>
            <div className="bg-white backdrop-blur border border-slate-700 p-8 rounded-2xl  transition-colors text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mx-auto mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Expert Mentorship</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Get personalised guidance from experienced tech professionals and instructors.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white backdrop-blur border border-slate-700 p-8 rounded-2xl  transition-colors text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mx-auto mb-6">
                <FileCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Portfolio-Driven Outcomes</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Graduate with a solid portfolio of projects.
              </p>
            </div>

            <div className="bg-white backdrop-blur border border-slate-700 p-8 rounded-2xl  transition-colors text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mx-auto mb-6">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Flexible Learning Options</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Choose from weekend or weekday schedules.
              </p>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Your Future, Your Program */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Your Future, Your Program
            </h2>
            <p className="text-slate-600">
              Select the path that fits your career goals and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Short Courses */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Zap className="w-32 h-32" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Short Courses
                </h3>
              </div>
              <p className="text-slate-500 mb-8">
                Rapidly upskill with focused, intensive modules designed for
                quick impact.
              </p>

              <div className="text-4xl font-bold text-slate-900 mb-8">
                ₦150,000{" "}
                <span className="text-lg font-normal text-slate-400">
                  / course
                </span>
              </div>

              <ul className="space-y-4 mb-8 grow">
                {[
                  "Duration: 6 - 8 Weeks",
                  "Weekend/Weekday Options",
                  "Project-based learning",
                  "Certificate of Completion",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                Enroll
              </button>
            </div>

            {/* Diploma Courses */}
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col text-white">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <GraduationCap className="w-32 h-32" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-white/10 text-orange-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Diploma Courses
                </h3>
              </div>
              <p className="text-slate-400 mb-8">
                Comprehensive, in-depth training for a complete career
                transformation.
              </p>

              <div className="text-4xl font-bold text-white mb-8">
                ₦350,000{" "}
                <span className="text-lg font-normal text-slate-500">
                  / program
                </span>
              </div>

              <ul className="space-y-4 mb-8 grow">
                {[
                  "Duration: 12 - 16 Weeks",
                  "Deep-dive curriculum",
                  "Internship Placement Support",
                  "Professional Diploma",
                  "Career Mentorship",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-white text-slate-900 font-bold text-lg hover:bg-slate-100 transition-colors">
                Enroll
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-orange-500">
              Who we serve
            </h2>
            <p className="text-slate-400">
              Kodex3 Ecosystem is built for learners at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Undergraduates",
                desc: "Build skills alongside your degree.",
              },
              {
                icon: Briefcase,
                title: "Graduates",
                desc: "Get job-ready for the tech market.",
              },
              {
                icon: Zap,
                title: "Professionals",
                desc: "Upskill or pivot your career.",
              },
              {
                icon: Globe,
                title: "Schools",
                desc: "Partnerships for young learners.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-colors text-center group"
              >
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors text-orange-500">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Hear From Our Students
            </h2>
            <p className="text-slate-600">
              Stories and experiences from alumni who have learned and grown
              with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "UX Designer @ Paystack",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
                text: "The project-based learning approach at Kodex3 was a game changer for me. I went from zero to a job offer in 4 months.",
                date: "Aug 2024",
              },
              {
                name: "Michael Okon",
                role: "Frontend Dev @ Interswitch",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
                text: "I loved the flexibility of the weekend program. The mentors were incredibly supportive and knowledgeable.",
                date: "Sep 2024",
              },
              {
                name: "Amaka Eze",
                role: "Product Manager @ Kuda",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
                text: "Kodex3 didn't just teach me skills, they taught me how to think like a product manager. Highly recommended!",
                date: "Oct 2024",
              },
              {
                name: "David Adeleke",
                role: "Data Analyst @ Cowrywise",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
                text: "Exceptional curriculum. The data analysis track was deep, practical, and very relevant to what I do now daily.",
                date: "Nov 2024",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                      {item.role}
                    </p>
                  </div>
                  <div className="ml-auto text-orange-400 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 italic mb-6 relative z-10">
                  "{item.text}"
                </p>
                <p className="text-xs text-slate-400 font-medium">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
