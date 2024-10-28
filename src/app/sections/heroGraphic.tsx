import Image from "next/image";
import {
  HeroHeadcountHeaderGraph,
  HeroHeadcountGraph,
  HeroTrafficGraph,
} from "../assets/images/hero/heroGraph";
import heroImage1 from "../assets/images/hero/hero-image-1.png";
import heroImage2 from "../assets/images/hero/hero-image-2.png";
import heroImage3 from "../assets/images/hero/hero-image-3.png";

export default function HeroGraphic() {
  return (
    <div className="absolute w-fit mt-20 left-1/2 right-1/2 -translate-x-[50%] *:shrink-0 flex items-center gap-4 *:h-64 2xl:scale-[1.2]">
      <div className="w-[22rem]">
        <Image
          alt="hero image 1"
          src={heroImage1}
          className="rounded-2xl size-full block object-fill"
        />
      </div>
      <div className="w-[24rem]">
        <Image
          alt="hero image 1"
          src={heroImage2}
          className="rounded-2xl size-full block object-fill"
        />
      </div>
      <div className="relative w-[24rem] rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border-white/20 border overflow-clip">
        <div className="flex justify-between items-start p-5">
          <p className="text-xl select-none text-white leading-none tracking-[-0.04em]">
            Company Headcount
          </p>
          <HeroHeadcountHeaderGraph />
        </div>
        <div className="absolute bottom-16 left-0 w-full border-b border-b-black/10"></div>
        <div className="absolute bottom-32 left-0 w-full border-b border-b-black/10"></div>
        <div className="absolute bottom-48 left-0 w-full border-b border-b-black/10"></div>
        <HeroHeadcountGraph />
      </div>
      <div className="w-[13rem] flex flex-col items-center justify-between rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border-white/20 border py-5">
        <div className="w-full flex items-center justify-center">
          <p className="text-xl select-none text-white leading-none tracking-[-0.04em]">
            Web Traffic
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 w-full text-white">
            <p className="text-center text-2xl tabular-nums tracking-[-0.01em] select-none leading-none">
              74K
            </p>
            <p className="text-center mt-1 text-[9px] font-medium select-none leading-none">
              Total Traffic
            </p>
          </div>
          <HeroTrafficGraph />
        </div>
        <p className="select-none rounded-full bg-primary-400 text-[9px] px-2 py-1 font-medium">
          Recent spike in monthly web traffic
        </p>
      </div>
      <div className="w-[22rem]">
        <Image
          src={heroImage3}
          alt="hero image 3"
          className="rounded-2xl size-full block object-fit"
        />
      </div>
    </div>
  );
}
