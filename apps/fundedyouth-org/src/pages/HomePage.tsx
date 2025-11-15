// src/pages/HomePage.tsx

import { HeroWithFloatingVideo } from "../components/HeroWithFloatingVideo";

export function HomePage() {
  return (
    <>
      <HeroWithFloatingVideo
        youtubeVideoId="CNUJpwsbtIQ"
        floatingVideoUrl="https://www.youtube.com/watch?v=Fq6h5uhq4NQ"
      >
        {/* 👇 Add drop-shadow classes to the wrapper div */}
        <div className="w-full max-w-4xl text-center space-y-4 px-4 sm:space-y-6 drop-shadow-lg">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-7xl">
            All you need is a{" "}
            <span className="text-green-400 drop-shadow-lg">'what if...'</span>
          </h1>
          <p className="text-base text-white/90 drop-shadow-md sm:text-lg md:text-xl lg:text-2xl">
            Turn your ideas into reality with FundedYouth
          </p>
          <button className="px-6 py-2.5 bg-blue-600 text-white text-sm rounded-full font-semibold hover:bg-blue-700 transition-colors sm:px-8 sm:py-3 sm:text-base drop-shadow-lg">
            Get Started
          </button>
        </div>
      </HeroWithFloatingVideo>

      {/* Next Section - Much more padding on desktop for overlapping card */}
      <section className="relative bg-white pt-8 lg:pt-80 pb-20 px-4 xl:pt-85">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-6 lg:text-3xl">
            Your Next Section
          </h2>
          <p className="text-gray-600 text-center text-sm sm:text-base">
            Add your content here.
          </p>
        </div>
      </section>
    </>
  );
}