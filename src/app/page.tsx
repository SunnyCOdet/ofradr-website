import { Hero } from "../sections/Hero";
import CenteredLottieNavbar from "../sections/Header";
import Testimonials from "../sections/Testimonials";
import { CallToAction } from "../sections/CallToAction";
import Features from "../sections/Features";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <div>
        <div className="">
          <CenteredLottieNavbar />
        </div>
      </div>
      <Hero />
      <Testimonials />
      <CallToAction />
      <Features />
      <Footer />
    </div>
  );
}