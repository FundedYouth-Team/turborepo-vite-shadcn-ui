import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const typingTexts = [
  "Public Makerspace",
  "On-Demand MFG",
  "A Fabrication Facility",
  "STEAM Education",
];

interface BlogPost {
  title: string;
  url: string;
  date: string;
  summary: string;
  coverImage: string;
}

const sponsors = [
  { name: "The Home Depot", image: "/assets/images/brands/The-Home-Depot-V2.png" },
  { name: "Hamel's", image: "/assets/images/brands/banner-slide-hamels.png" },
  { name: "Flag Pole Buddy", image: "/assets/images/brands/Flag-Pole-Buddy-Brand-Banner.png" },
  { name: "HiTEC Radio Control", image: "/assets/images/brands/HiTech-Radio-Control-Logo.png" },
  { name: "FIRST Inspires", image: "/assets/images/brands/First-Inspires-Logo-Horizontal.png" },
  { name: "Santana High School", image: "/assets/images/brands/Santana-High-School-V2.png" },
  { name: "West Hills High School", image: "/assets/images/brands/West-Hills-High-School-V2.png" },
  { name: "JB Construction", image: "/assets/images/brands/banner-slide-jb-construction.png" },
  { name: "Dream Academy Lakeside", image: "/assets/images/brands/Logo-Slide-DreamAcademy-Lakeside.png" },
];

export function HomePage() {
  const [typingText, setTypingText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visibleSponsors, setVisibleSponsors] = useState<number[]>([0, 1, 2]);
  const [latestPost, setLatestPost] = useState<BlogPost | null>(null);

  // Typing animation effect
  useEffect(() => {
    const currentText = typingTexts[textIndex];
    let timeout: number;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = window.setTimeout(() => {
          setTypingText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % typingTexts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        timeout = window.setTimeout(() => {
          setTypingText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        timeout = window.setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // Sponsor rotation effect
  useEffect(() => {
    const getGroupSize = () => (window.innerWidth < 768 ? 1 : 3);

    const interval = setInterval(() => {
      const groupSize = getGroupSize();
      setVisibleSponsors((prev) => {
        const start = (prev[0] + groupSize) % sponsors.length;
        return Array.from({ length: groupSize }, (_, i) => (start + i) % sponsors.length);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Fetch latest blog post
  useEffect(() => {
    fetch("/api/blog/index.json")
      .then((res) => res.json())
      .then((posts: BlogPost[]) => {
        if (posts && posts.length > 0) {
          setLatestPost(posts[0]);
        }
      })
      .catch((err) => console.error("Failed to fetch blog post:", err));
  }, []);

  // Format date for display
  const formatBlogDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 md:bg-none">
        {/* Decorative elements (Mobile only) */}
        <div className="absolute inset-0 overflow-hidden md:hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* YouTube Video Background (Desktop only) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <iframe
            className="absolute w-[177.77vh] min-w-full h-[56.25vw] min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube-nocookie.com/embed/CNUJpwsbtIQ?autoplay=1&mute=1&loop=1&playlist=CNUJpwsbtIQ&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0&playsinline=1"
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="text-orange-400 italic">Providing our youth with</span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="inline-block min-w-[200px] text-left text-white">
              <span>{typingText}</span>
              <span className="border-r-[3px] border-yellow-400 animate-pulse ml-1"></span>
            </span>
          </h2>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Our mission at FundedYouth is to solve for limited resources in education by
            empowering our youth with access to industrial manufacturing tools, STEAM educational
            services, and on-demand manufacturing certification programs.
          </p>
        </div>
      </section>

      {/* Mobile Video Section (Mobile only) */}
      <section className="block md:hidden px-4 py-6">
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/CNUJpwsbtIQ?rel=0&modestbranding=1"
            title="FundedYouth Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-gray-900 font-semibold text-xl mb-8">Our Sponsors</h2>
          <div className="overflow-hidden">
            <div className="flex items-center justify-center gap-12">
              {sponsors.map((sponsor, index) => (
                <img
                  key={sponsor.name}
                  src={sponsor.image}
                  alt={sponsor.name}
                  className={`h-14 w-auto object-contain flex-shrink-0 transition-opacity duration-300 ${
                    visibleSponsors.includes(index) ? "block" : "hidden"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mechanical Development Section */}
      <section id="classes" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gray-500 font-semibold tracking-widest text-sm mb-3">
                Hours of Operation and Class Details
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 leading-tight mb-6">
                3D Printing | 3D Modeling
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Parkway Plaza Mall 415 Parkway Plaza, El Cajon, CA 92020
                <br />
                <br />
                Near the Dick's Sporting Goods mall entrance and TheGym, and across from Winsor
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                <strong>Monday – Friday</strong>
                <br />
                Open Labs and Special Events
                <br />
                2:30 PM – 7:30 PM
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                <strong>Saturday & Sunday</strong>
                <br />
                STEAM Camps and Classes
                <br />
                1:00 PM – 5:00 PM
              </p>
              <Link
                to="/classes"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Register today
              </Link>
            </div>

            <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-lg">
              <video autoPlay muted loop playsInline className="w-full h-auto rounded-2xl">
                <source src="/assets/video/making-a-sword.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section 2: Portal + Volunteers */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile-only heading */}
          <div className="block md:hidden mb-6">
            <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-1">
              What's Happening
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Latest from FundedYouth</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Post Card */}
            {latestPost ? (
              <a
                href={`https://fundedyouth.org/blog${latestPost.url}`}
                className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative bg-gray-100">
                  {latestPost.coverImage && (
                    <img
                      src={latestPost.coverImage}
                      alt={latestPost.title}
                      className="w-full h-auto object-contain"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{latestPost.title}</h3>
                  {latestPost.date && (
                    <p className="text-gray-500 text-sm mb-3">{formatBlogDate(latestPost.date)}</p>
                  )}
                  <div className="text-gray-600 leading-relaxed">{latestPost.summary}</div>
                </div>
              </a>
            ) : (
              <div className="block bg-white rounded-2xl shadow-lg overflow-hidden p-6">
                <p className="text-gray-500">Loading latest blog post...</p>
              </div>
            )}

            {/* Volunteers Needed Card */}
            <div id="volunteer">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/Donate-Time-and-Earn-Rewards-1024x576.png"
                  alt="Donate Time and Earn Rewards"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteers Needed</h3>
                <ul className="space-y-4">
                  {[
                    "Earn 3D Printing Time",
                    "Free Training & Certification",
                    "Hands-on Experience",
                    "Community Service Hours",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-orange-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/volunteer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 mt-6"
                >
                  Become a volunteer
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Icons Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-3">
            <a
              href="https://www.instagram.com/FundedYouth/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/FundedYouth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@FundedYouth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/fundedyouth/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/FundedYouthOrg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 3D Printing Live Feed Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gray-500 font-semibold tracking-widest text-sm mb-3">
                Watch Us Create
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 leading-tight mb-6">
                3D Printing Live Feed
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Get a behind-the-scenes look at our 3D printers in action. Watch as we bring
                designs to life, layer by layer, using the latest in additive manufacturing
                technology.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our facility features industrial-grade 3D printers capable of producing everything
                from prototypes to functional parts. Students learn hands-on skills in design,
                slicing, and print optimization.
              </p>
              <p className="text-pink-500 text-sm font-medium mb-6">
                Live feed only available during active prints
              </p>
              <Link
                to="/classes"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Learn 3D Printing
              </Link>
            </div>

            <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="LiveStream"
                width="100%"
                height="400"
                frameBorder="0"
                src="https://oe.ink/l/utGuKPXI32"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
