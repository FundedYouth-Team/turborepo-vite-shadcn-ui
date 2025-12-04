// src/pages/Volunteers.tsx

import {
  Clock,
  GraduationCap,
  Heart,
  Wrench,
  Users,
  Briefcase,
  ChevronRight,
  MapPin
} from "lucide-react";

interface PerkCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
}

function PerkCard({ icon, title, description, highlight }: PerkCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          {highlight && (
            <p className="text-green-600 font-semibold text-sm mt-2">{highlight}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function VolunteerJourney() {
  const steps = [
    {
      number: "01",
      title: "Apply",
      description: "Fill out our volunteer application and tell us about yourself and your interests.",
    },
    {
      number: "02",
      title: "Get Trained",
      description: "Complete our free introductory 3D printing course to build your skills and confidence.",
    },
    {
      number: "03",
      title: "Volunteer",
      description: "Help out at events, assist in the makerspace, and support learners of all ages.",
    },
    {
      number: "04",
      title: "Lead & Teach",
      description: "Once approved by a board member, lead classes and inspire new makers in the community.",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full">
            <div className="text-4xl font-bold text-green-200 mb-4">{step.number}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <ChevronRight className="hidden lg:block absolute top-1/2 -right-5 w-10 h-10 text-green-300 -translate-y-1/2" />
          )}
        </div>
      ))}
    </div>
  );
}

export function Volunteers() {
  const perks = [
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Earn Free 3D Printing Time",
      description: "Your volunteer hours directly translate to printing credits you can use for your own projects.",
      highlight: "1 point for every 1-hour you volunteer",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-green-600" />,
      title: "Free Training & Certification",
      description: "Gain free access to all introductory courses and instructional material.",
      highlight: "A $500 value",
    },
    {
      icon: <Heart className="w-6 h-6 text-green-600" />,
      title: "Community Service Hours",
      description: "Your volunteer time counts toward community service and outreach requirements—great for students, professionals, and those looking to give back.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-green-600" />,
      title: "Hands-on Experience",
      description: "Work with cutting-edge technology in 3D printing, CAD design, and fabrication while building real-world skills.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Networking & Mentorship",
      description: "Connect with industry professionals, educators, and local businesses invested in STEM education and manufacturing.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-green-600" />,
      title: "Resume & Career Boost",
      description: "Develop marketable skills in a growing industry while making a positive community impact.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-teal-800 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join Us in Empowering the Future Through Innovation
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Become a FundedYouth volunteer and help make hands-on, high-tech learning accessible to our community.
          </p>
          <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg text-lg">
            Apply to Volunteer
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Heart className="w-4 h-4" />
                501(c)(3) Nonprofit
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision for the Community
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                FundedYouth is a registered 501(c)(3) nonprofit (EIN: 93-4090260) on a mission to make hands-on, high-tech learning accessible to our community.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                One of our current goals is to transform our space at Parkway Plaza into a vibrant hub where the public can easily explore, learn, and create—starting with 3D printing.
              </p>
              <div className="flex items-center gap-2 text-gray-500 mt-6">
                <MapPin className="w-5 h-5" />
                <span>Parkway Plaza, San Diego</span>
              </div>
            </div>
            <div className="flex-shrink-0 lg:w-80">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">93-4090260</div>
                <p className="text-gray-600">EIN Number</p>
                <div className="mt-6 pt-6 border-t border-green-200">
                  <p className="text-sm text-gray-500">
                    Your contributions and volunteer time may be tax-deductible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Do Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Do as a Volunteer
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              As a FundedYouth volunteer, you won't just help out—you'll become part of the learning experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Every volunteer will be trained in our introductory 3D printing course, giving you the confidence and skills to eventually teach the material to others.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Once approved by a board member, you'll have the opportunity to <span className="font-semibold text-green-600">lead classes and inspire new makers</span> in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Journey */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Volunteer Journey
            </h2>
            <p className="text-gray-600 text-lg">
              From application to leading classes—here's your path with FundedYouth
            </p>
          </div>
          <VolunteerJourney />
        </div>
      </section>

      {/* Perks Section */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Volunteer Perks & Benefits
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Curious about what's in it for you? Check out the amazing benefits of joining our volunteer team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <PerkCard key={index} {...perk} />
            ))}
          </div>
        </div>
      </section>

      {/* About FundedYouth */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            FundedYouth is a 501(c)(3) nonprofit dedicated to STEM education and on-demand manufacturing through 3D printing, CAD design, and rapid prototyping. As a volunteer, you'll gain hands-on experience while making a real impact in the community.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our team of dedicated volunteers and help inspire the next generation of makers, creators, and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg">
              Apply Now
            </button>
            <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
