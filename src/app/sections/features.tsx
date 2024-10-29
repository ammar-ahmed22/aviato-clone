import Image from "next/image";
import topEngineers from "../assets/images/features/topEngineers.svg";
import dataPoints from "../assets/images/features/dataPoints.svg";
import integrations from "../assets/images/features/integrations.svg";
import vesting from "../assets/images/features/vesting.svg";
import emails from "../assets/images/features/emails.svg";
import competitors from "../assets/images/features/competitors.svg";
import { twMerge } from "tailwind-merge";

type FeatureCardProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

function FeatureCard({ title, children, className }: FeatureCardProps) {
  return (
    <div className="bg-[rgb(246,246,246)] rounded-3xl h-[420px] sm:h-[520px] overflow-hidden relative">
      <div className="mt-10 sm:mt-14 text-center relative z-10">
        <h3 className="text-2xl tracking-[-0.02em] sm:text-3xl z-10">
          {title}
        </h3>
      </div>
      <div
        className={twMerge(
          "flex-grow flex items-center justify-center mt-10 md:mt-14 scale-90 sm:scale-100",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default function Features() {
  const features = [
    {
      title: "Find top engineers",
      svg: topEngineers,
    },
    {
      title: "Get exclusive datapoints",
      svg: dataPoints,
    },
    {
      title: "Seamless integrations",
      svg: integrations,
      className:
        "absolute top-1/2 bottom-1/2  sm:w-full  left-0 flex-grow flex items-center justify-center scale-[1.35]  sm:scale-100",
    },
    {
      title: "Accurate employee vesting schedules",
      svg: vesting,
    },
    {
      title: "Company emails and contacts",
      svg: emails,
    },
    {
      title: "Competitor Maps",
      svg: competitors,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 mt-32">
      <div className="flex items-center justify-center flex-col gap-y-4 max-w-2xl mx-auto">
        <p className="text-lg tracking-[-0.015em] text-center">What we do</p>
        <h2 className="md:text-5xl text-3xl tracking-[-0.04em] text-center md:leading-[58px]">
          Powerful features and datasets for your analysis
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mt-20">
        {features.map((feature, i) => {
          return (
            <FeatureCard
              key={`feature-card-${i}`}
              title={feature.title}
              className={feature.className}
            >
              <Image src={feature.svg} alt="" />
            </FeatureCard>
          );
        })}
      </div>
    </div>
  );
}
