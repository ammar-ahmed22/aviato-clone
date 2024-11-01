import Hero from "./sections/hero";
import Partners from "./sections/partners";
import What from "./sections/what";
import APICTA from "./sections/apiCta";
import Features from "./sections/features";
import CTA from "./sections/cta";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen max-w-[100vw] overflow-x-hidden relative">
      <Hero />
      <Partners />
      <What />
      <APICTA />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
