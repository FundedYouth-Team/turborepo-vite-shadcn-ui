// src/pages/Learn.tsx

import { TaglineBanner } from "../components/TaglineBanner";
import {
  Printer,
  Code,
  Calendar,
  Trophy,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  Rocket,
} from "lucide-react";

// Weekend courses
const weekendCourses = [
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Mechanical Mindset",
    description: "Master 3D printing, 3D modeling, and laser cutting. Learn to design, prototype, and manufacture physical objects from concept to creation.",
    duration: "6 weeks",
    level: "All Levels",
    color: "blue",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Coding and Integration",
    description: "Build the brain behind your projects. Learn programming, electronics, and how to integrate code with physical hardware for interactive creations.",
    duration: "6 weeks",
    level: "All Levels",
    color: "purple",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Product Development",
    description: "Take your ideas from concept to market-ready product. Learn design thinking, prototyping, iteration, and the full product development lifecycle.",
    duration: "8 weeks",
    level: "Intermediate",
    color: "orange",
  },
];

// Upcoming workshops
const upcomingWorkshops = [
  {
    title: "Laser Cutting 101",
    date: "Saturday, Dec 14",
    time: "10:00 AM - 1:00 PM",
    spots: 8,
    type: "Workshop",
  },
  {
    title: "Holiday Ornament Design",
    date: "Saturday, Dec 21",
    time: "2:00 PM - 5:00 PM",
    spots: 12,
    type: "Special Event",
  },
  {
    title: "Parent & Child 3D Printing",
    date: "Sunday, Dec 22",
    time: "10:00 AM - 12:00 PM",
    spots: 6,
    type: "Family Event",
  },
  {
    title: "New Year Maker Marathon",
    date: "Saturday, Jan 4",
    time: "9:00 AM - 5:00 PM",
    spots: 20,
    type: "Special Event",
  },
];

// Monthly challenges
const monthlyChallenges = [
  {
    title: "Design Challenge",
    description: "Create the most innovative 3D design based on a monthly theme. Winners get their designs printed and displayed.",
    prize: "Featured Project + 50 Credits",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "Speed Print Competition",
    description: "Optimize your print settings for the fastest successful print. Learn efficiency through friendly competition.",
    prize: "Makerspace Day Pass + 25 Credits",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: "Code Challenge",
    description: "Solve coding puzzles and build mini-projects. Great for beginners and experienced coders alike.",
    prize: "Course Discount + 30 Credits",
    icon: <Code className="w-6 h-6" />,
  },
];

// Mentorship programs
const mentorshipPrograms = [
  {
    title: "1-on-1 Mentorship",
    description: "Personalized guidance from experienced makers. Work on your own projects with expert support and feedback.",
    features: ["Weekly sessions", "Project-based learning", "Portfolio development", "Industry insights"],
    recommended: true,
  },
  {
    title: "Group Study Sessions",
    description: "Learn alongside peers in small group settings. Collaborative problem-solving and shared project work.",
    features: ["2-4 students per group", "Peer collaboration", "Structured curriculum", "Affordable option"],
    recommended: false,
  },
  {
    title: "Project Accelerator",
    description: "Intensive support for specific projects. Get your idea from concept to completion with dedicated mentor time.",
    features: ["Goal-focused sessions", "Rapid prototyping", "Technical deep-dives", "Completion guarantee"],
    recommended: false,
  },
];

// Certification levels
const certificationLevels = [
  {
    level: "Explorer",
    color: "bg-green-500",
    description: "Complete introductory courses and demonstrate basic competency",
    benefits: ["Access to open lab hours", "Use of basic equipment", "Community Discord access"],
  },
  {
    level: "Builder",
    color: "bg-blue-500",
    description: "Pass skill assessments and complete intermediate projects",
    benefits: ["Extended lab hours", "Advanced equipment access", "Priority workshop registration"],
  },
  {
    level: "Maker",
    color: "bg-purple-500",
    description: "Demonstrate mastery through portfolio and advanced certifications",
    benefits: ["Full equipment access", "Guest privileges", "Teaching assistant opportunities"],
  },
  {
    level: "Mentor",
    color: "bg-orange-500",
    description: "Approved to teach and lead projects for other members",
    benefits: ["Lead workshops", "Earn teaching credits", "Shape curriculum"],
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
  green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
  orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
  teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200" },
  red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
};

export function Learn() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/classroom-full-tinkercad-v1.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-teal-700/90" />

        <div className="relative container mx-auto max-w-4xl text-center">
          <p className="text-green-200 font-semibold uppercase tracking-wide mb-4">
            Classes & Learning
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Learn to Create, Build & Innovate
          </h1>
          <p className="text-xl text-green-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            From weekend courses to hands-on workshops, discover the skills you need to bring your ideas to life. All skill levels welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg">
              Browse Courses
            </button>
            <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors">
              View Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Weekend Courses */}
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
              Weekend Courses
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onsite Classes Every Weekend
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hands-on courses taught by experienced instructors. Learn at your own pace with small class sizes and personalized attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weekendCourses.map((course) => {
              const colors = colorClasses[course.color];
              return (
                <div
                  key={course.title}
                  className={`bg-white rounded-xl p-6 border-2 ${colors.border} hover:shadow-lg transition-shadow`}
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text} mb-4`}>
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                      {course.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-md">
              View All Courses & Register
            </button>
          </div>
        </div>
      </section>

      {/* Workshops & Special Events */}
      <section className="relative bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">
              Workshops & Special Events
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Sessions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for hands-on workshops, special events, and family-friendly sessions. Limited spots available—register early!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingWorkshops.map((workshop) => (
              <div
                key={workshop.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{workshop.title}</h3>
                    </div>
                    <span className="inline-block text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full mb-3">
                      {workshop.type}
                    </span>
                    <p className="text-sm text-gray-500">
                      {workshop.date} • {workshop.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600 mb-2">{workshop.spots} spots left</p>
                    <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 text-purple-600 font-semibold rounded-lg border-2 border-purple-300 hover:bg-purple-50 transition-colors">
              View Full Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Monthly Challenges & Competitions */}
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-2">
              Monthly Challenges & Competitions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compete, Learn & Win
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Put your skills to the test with our monthly challenges. Earn credits, recognition, and prizes while pushing your abilities to new heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthlyChallenges.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-orange-600">
                    Prize: {challenge.prize}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-md">
              Join This Month's Challenge
            </button>
          </div>
        </div>
      </section>

      {/* Tagline Banner */}
      <TaglineBanner
        backgroundImage="/images/tagline-bg-3dprinting.png"
        overlayColor="rgba(22, 163, 74, 0.85)"
      >
        <p className="text-2xl sm:text-3xl leading-tight">
          Learning by doing—where <span className="font-bold">curiosity meets creation</span> every weekend.
        </p>
      </TaglineBanner>

      {/* Mentorship Programs */}
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Mentorship Programs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get the Support You Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're just starting or working on an ambitious project, our mentors are here to guide you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentorshipPrograms.map((program) => (
              <div
                key={program.title}
                className={`relative bg-white rounded-xl p-8 border-2 ${
                  program.recommended ? "border-blue-500 shadow-lg" : "border-gray-200"
                }`}
              >
                {program.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 font-semibold rounded-lg transition-colors ${
                    program.recommended
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Pathway */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <p className="text-indigo-200 font-semibold uppercase tracking-wide mb-2">
              Certification Pathway
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Certified, Gain Access
            </h2>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
              Progress through our certification levels to unlock premier tools, extended hours, and leadership opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationLevels.map((cert, index) => (
              <div key={cert.level} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-10 h-10 ${cert.color} rounded-full flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white">{cert.level}</h3>
                </div>
                <p className="text-indigo-100 text-sm mb-4">{cert.description}</p>
                <ul className="space-y-2">
                  {cert.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg">
              Start Your Certification Journey
            </button>
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="relative bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Learn With FundedYouth?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just teaching skills—we're building a community of makers who support each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Small Class Sizes</h3>
              <p className="text-sm text-gray-600">8-12 students per class ensures personalized attention and hands-on time with equipment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Printer className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Real Equipment</h3>
              <p className="text-sm text-gray-600">Learn on the same professional-grade tools you'll use in the makerspace and industry.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Earn Certifications</h3>
              <p className="text-sm text-gray-600">Complete courses to earn credentials that unlock makerspace access and opportunities.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Project-Based</h3>
              <p className="text-sm text-gray-600">Every course ends with a completed project you designed and built yourself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our next weekend course or drop in for a workshop. No experience necessary—just bring your curiosity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg">
              Register for a Course
            </button>
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors">
              Schedule a Tour
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>learn@fundedyouth.org</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Saturdays & Sundays</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
