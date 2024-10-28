"use client";
import { DOMAttributes, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ss1 from "../assets/images/what/screenshot-1.png";
import ss2 from "../assets/images/what/screenshot-2.png";
import ss3 from "../assets/images/what/screenshot-3.png";

type ProgressButtonProps = {
  label: string;
  active?: boolean;
  progress?: number;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
};

function ProgressButton({
  label,
  active,
  progress,
  onClick,
}: ProgressButtonProps) {
  return (
    <div className="space-y-8">
      <div className="h-0.5 bg-neutral-200 relative">
        <div
          className="absolute inset-0 w-0 bg-[rgb(155,14,141)] h-full"
          style={{ width: progress ? `${progress}%` : "0%", opacity: 1 }}
        ></div>
      </div>
      <button
        onClick={onClick}
        className={`tracking-[-0.04em] text-2xl transition-opacity duration-300 ${active ? "opacity-100" : "opacity-30"}`}
      >
        {label}
      </button>
    </div>
  );
}

export default function What() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const displays = [
    {
      label: "Save hundreds of hours on research",
      img: ss1,
    },
    {
      label: "Be the first to find top talent & founders",
      img: ss2,
    },
    {
      label: "Track your portfolio in one place",
      img: ss3,
    },
  ];

  useEffect(() => {
    setProgress(0);
    let elapsed = 0;
    let IID = setInterval(() => {
      if (elapsed >= 7000) {
        setActiveIdx((prev) => (prev + 1) % 3);
      }
      setProgress((elapsed / 7000) * 100);
      elapsed += 10;
    }, 10);
    return () => {
      clearInterval(IID);
    };
  }, [activeIdx]);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-14">
      {/* Larger screens, with button and timer */}
      <div className="hidden md:block space-y-16">
        <div>
          <p className="tracking-[-0.015em] text-lg">What is Aviato?</p>
          <h2 className="mt-4 text-5xl max-w-2xl text-pretty text-left tracking-[-0.04em] leading-[58px]">
            The most comprehensive view on private markets there is, made
            accessible to you
          </h2>
        </div>
        <div className="flex flex-row gap-16">
          <div className="w-[40%] flex flex-col justify-between shrink-0 ">
            <div className="space-y-8">
              {displays.map((display, idx) => {
                return (
                  <ProgressButton
                    key={display.label}
                    label={display.label}
                    active={idx === activeIdx}
                    progress={idx === activeIdx ? progress : undefined}
                    onClick={() => setActiveIdx(idx)}
                  />
                );
              })}
            </div>
            <div className="space-y-4">
              <p className="text-lg tracking-[-0.015em] leading-6">
                Get exclusive data on any private <br />
                company you can imagine
              </p>
              <Button className="bg-black text-white font-medium px-4 py-2.5 rounded-md leading-none">
                Try it
              </Button>
            </div>
          </div>
          <div className="rounded-l-3xl bg-[rgb(3,62,52)] col-span-4 p-[4.5rem] overflow-x-hidden h-[500px] overflow-y-hidden relative w-full">
            {displays.map((display, idx) => {
              return (
                <Image
                  key={display.label}
                  src={display.img}
                  className="block shrink-0 rounded-xl absolute h-[609px] aspect-[101/76] resize-none object-cover object-left-top"
                  alt={`screenshot ${idx + 1}`}
                  style={{ opacity: idx === activeIdx ? 1 : 0 }}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Smaller screens, showing all */}
      {/* TODO */}
      <div className="md:hidden block space-y-16 text-center">
        <div>
          <p className="tracking-[-0.015em] text-lg">What is Aviato?</p>
          <h2 className="mt-2 text-3xl max-w-2xl text-balance text-center tracking-[-0.045em] leading-[38px]">
            The most comprehensive view on private markets there is, made
            accessible to you
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 text-left">
          {
            displays.map(display => {
              return (
                <div
                  key={display.label}
                  className="space-y-5 py-8 border-t border-t-[#B9BDCC]"
                >
                  <h3 className="text-2xl tracking-[-0.045em]">{display.label}</h3>
                  <img 
                    src={display.img.src}
                    className="w-full rounded-xl relative"
                  />
                  <Button className="bg-black text-white font-medium px-4 py-2.5 rounded-md leading-none">
                    Try it
                  </Button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
