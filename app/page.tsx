import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <Hero />
        <FeaturedWork />
        <AboutTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
