// src/pages/TeachersAndSchools.tsx

import { TaglineBanner } from "../components/TaglineBanner";
import { FeatureShowcase } from "../components/FeatureShowcase";

// Camp topic data
const trainingCamps = [
  {
    title: "3D Printing",
    description: "From basic operations to advanced techniques, students master the full 3D printing workflow.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "3D Modeling",
    description: "Learn TinkerCAD, Fusion 360, and industry-standard CAD tools for digital design.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Coding",
    description: "Python, JavaScript, and block-based coding for all skill levels.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "AI Tools",
    description: "Practical AI integration including prompt engineering and AI-assisted design.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Robotics",
    description: "Build, program, and compete with robots using industry-leading platforms.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Electronics",
    description: "Circuits, soldering, Arduino, and Raspberry Pi projects from beginner to advanced.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

// Responsibility levels for STEAM Lab
const responsibilityLevels = [
  {
    level: "Explorer",
    color: "bg-green-500",
    description: "New members learning safety protocols and basic tool operation",
    access: "Supervised access to beginner tools",
  },
  {
    level: "Builder",
    color: "bg-blue-500",
    description: "Demonstrated competency in multiple areas with consistent safety practices",
    access: "Independent use of standard equipment",
  },
  {
    level: "Maker",
    color: "bg-purple-500",
    description: "Advanced skills with leadership qualities and mentorship capabilities",
    access: "Full lab access including advanced machinery",
  },
  {
    level: "Mentor",
    color: "bg-orange-500",
    description: "Student leaders who assist with training and supervising other students",
    access: "After-hours access and project leadership",
  },
];

export function TeachersAndSchools() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/stem-classroom-v2.png')" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/90 to-teal-800/90" />

        <div className="relative container mx-auto max-w-4xl text-center">
          <p className="text-teal-200 font-semibold uppercase tracking-wide mb-4">
            For Educators & Administrators
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Turnkey STEAM Integration for Your School
          </h1>
          <p className="text-xl text-teal-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            We bring industry-standard maker education directly to your campus. Teachers learn alongside students during school hoursno extra prep time, no out-of-pocket costs, just real skills that transform classrooms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors shadow-lg">
              Schedule a Consultation
            </button>
            <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors">
              Download Info Packet
            </button>
          </div>
        </div>
      </section>

      {/* Teacher Benefits Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
              Teacher Benefits
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Learn While You TeachOn the Clock
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our on-campus instruction model means teachers gain new skills during regular school hours while earning their full salary. No weekend workshops. No expensive certifications. Just practical training that works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Paid to Learn</h3>
              <p className="text-gray-600">
                Professional development happens during contract hours. No unpaid evenings or weekends required.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Learn With Your Students</h3>
              <p className="text-gray-600">
                FundedYouth instructors lead the class while you observe, participate, and build confidence with new tools.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Certification</h3>
              <p className="text-gray-600">
                Earn recognized credentials alongside your studentsadd valuable skills to your professional portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Banner */}
      <TaglineBanner
        backgroundImage="/images/tagline-bg-classroom.png"
        overlayColor="rgba(0, 150, 137, 0.85)"
      >
        <p className="text-2xl sm:text-3xl leading-tight">
          Two-week intensive camps that <span className="font-bold">certify students</span> and <span className="font-bold">empower teachers</span>all during regular school hours.
        </p>
      </TaglineBanner>

      {/* Training Camps Section */}
      <section className="relative bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              On-Campus Training Camps
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Two-Week Intensive Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each camp is a focused, two-week immersive experience. Our instructors come to your campus and deliver hands-on training that results in real certifications for every participant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingCamps.map((camp) => (
              <div
                key={camp.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {camp.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{camp.title}</h3>
                <p className="text-gray-600 text-sm">{camp.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">Custom camp topics available upon request</p>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              View Full Camp Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Student Benefits Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">
                Student Benefits
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Certification + Credits = Real Rewards
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every student who completes a training camp earns an official FundedYouth certificationa credential they can add to portfolios and college applications. But that's not all.
              </p>

              <div className="space-y-6">
                {/* Certification */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Official Certification</h3>
                    <p className="text-gray-600">Industry-recognized credentials that demonstrate real skills to colleges and employers.</p>
                  </div>
                </div>

                {/* Credits */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">FundedYouth Credits</h3>
                    <p className="text-gray-600">Redeemable at any FundedYouth retail location for materials, classes, or makerspace access.</p>
                  </div>
                </div>

                {/* Portfolio */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Project Portfolio</h3>
                    <p className="text-gray-600">Students leave each camp with completed projects they designed and built themselves.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/classroom-full-tinkercad-v1.png"
                  alt="Students working in a FundedYouth training session"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">100% Certified</p>
                    <p className="text-sm text-gray-500">Every student, every camp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase - Classroom Training */}
      <FeatureShowcase
        eyebrow="On-Campus Integration"
        title="Your Classroom, Our Expertise"
        description="Our instructors seamlessly integrate into your school day, bringing equipment, curriculum, and hands-on expertise. Teachers observe, participate, and build skillsall while students get world-class STEAM education."
        buttonText="Schedule a Demo"
        buttonHref="#contact"
        mediaType="image"
        mediaSrc="/images/classroom-tutoring-v1.png"
        backgroundColor="bg-gray-50"
        titleColor="text-teal-600"
        buttonColor="bg-teal-600"
        imagePosition="left"
      />

      {/* STEAM Lab Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">
              Turnkey Solution
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              On-Campus STEAM Lab
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform any space into a fully-equipped makerspace. Our turnkey STEAM Lab solution includes equipment, curriculum, and a progressive responsibility system that rewards students with increasing access as they demonstrate competency.
            </p>
          </div>

          {/* Lab Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Equipment */}
            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Full Equipment Package</h3>
              <ul className="space-y-3">
                {["3D Printers & Filament", "Laser Cutters", "Electronics Workstations", "Computer Lab Setup", "Hand Tools & Safety Equipment", "Project Materials & Supplies"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Ongoing Support</h3>
              <ul className="space-y-3">
                {["Initial Setup & Installation", "Staff Training Program", "Curriculum & Lesson Plans", "Equipment Maintenance", "Quarterly Check-ins", "Direct Line to FundedYouth Support"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Responsibility Levels */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Student Responsibility Levels</h3>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Our progressive system rewards students with increased access and responsibilities as they demonstrate competency and leadership.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {responsibilityLevels.map((level, index) => (
                <div key={level.level} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-8 h-8 ${level.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      {index + 1}
                    </span>
                    <h4 className="font-bold text-gray-900">{level.level}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{level.description}</p>
                  <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                    <span className="font-semibold">Access:</span> {level.access}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Banner 2 */}
      <TaglineBanner
        backgroundImage="/images/tagline-bg-3dprinting.png"
        overlayColor="rgba(37, 99, 235, 0.85)"
      >
        <p className="text-2xl sm:text-3xl leading-tight">
          From <span className="font-bold">concept to creation</span>giving students the tools to build their futures.
        </p>
      </TaglineBanner>

      {/* CTA Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how FundedYouth can bring maker education to your campus. Schedule a free consultation to explore training camps, STEAM labs, or a custom solution for your school.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-lg">
              Schedule Free Consultation
            </button>
            <button className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>schools@fundedyouth.org</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
