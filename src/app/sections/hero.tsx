import Nav from "./nav";
import HeroGraphic from "./heroGraphic";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="pb-[calc(80px+256px+80px)] md:rounded-b-[40px] rounded-b-3xl bg-[rgb(3,62,52)] overflow-x-clip ">
      <Nav />
      <div className="lg:max-w-xl mx-auto w-full px-4">
        <h1 className="lg:text-[64px] lg:leading-[64px] sm:text-5xl sm:leading-[48px] text-4xl md:text-6xl md:leading-[60px] text-white text-balance tracking-[-0.04em] text-center pt-24">
          The analytical layer
          <br />
          for private markets
        </h1>
        <p className="text-white lg:px-8 md:px-12 leading-[24px] mt-4 text-center text-balance lg:text-pretty tracking-[-0.015em]">
          Aviato turns data into deals by delivering high-quality people and
          company intelligence to your fingertips
        </p>
        <div className="flex items-center justify-center">
          <Button className="bg-primary-400 hover:bg-primary-400/90 text-black mt-8 h-[51px] px-[18px] tracking-[-0.015em] font-medium shrink-0 text-[16px]">
            Book a demo
          </Button>
        </div>
      </div>
      <HeroGraphic />
    </div>
  );
}
