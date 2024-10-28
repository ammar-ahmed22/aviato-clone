import Hero from "./sections/hero";
import Partners from "./sections/partners";

export default function Home() {
  return (
    <div className="min-h-screen max-w-[100vw] bg-[rgb(246,246,246)] w-screen overflow-x-hidden relative">
      <Hero />
      <Partners />
    </div>
  );
}
