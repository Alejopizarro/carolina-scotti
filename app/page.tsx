import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Courses from "@/components/courses";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import Services from "@/components/services";
import Tip from "@/components/tip";
import Carousel from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/short-background.png')] bg-cover bg-center">
        <Hero />
        <Features />
      </div>
      <Services />
      <div className="relative">
        <svg
          className="w-full rotate-180 h-16 sm:h-24 text-gray-100 bg-gray-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,20 C300,10 600,30 900,60 C1000,75 1100,85 1200,95 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="bg-[url('/short-background.png')] bg-cover bg-center pb-8 md:pb-16">
        <AboutMe />
        <Tip />
      </div>
      <div className="relative">
        <svg
          className="w-full h-16 sm:h-24 text-gray-100 bg-gray-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,20 C300,10 600,30 900,60 C1000,75 1100,85 1200,95 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="bg-[url('/background.png')] bg-cover bg-center">
        <Courses />
        <Contact />
      </div>
      <div className="relative">
        <svg
          className="w-full h-16 sm:h-24 text-gray-50 bg-gray-100"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,20 C300,10 600,30 900,60 C1000,75 1100,85 1200,95 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="bg-[url('/light-background.png')] bg-cover bg-center pb-8 md:pb-16">
        <Newsletter />
        <Carousel slides={[1, 2, 3, 4, 5]} />
      </div>
    </div>
  );
}
