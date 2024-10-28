import Image from "next/image"
import EightVCGraphic from "../assets/images/partners/eightVC"
import somaCapital from "../assets/images/partners/soma-capital.png"
import nea from "../assets/images/partners/nea.png"
import uber from "../assets/images/partners/uber.png"
import merrillLynch from "../assets/images/partners/merrill-lynch.png"

export default function Partners() {
  return (
    <div
      className="pt-8 pb-20 bg-[rgb(246,246,246)]"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-black/50 text-lg tracking-[-0.015em]">
          Trusted by industry leading teams
        </p>
        <div
          className="flex md:flex-row flex-col items-center justify-center gap-20 md:mt-10 mt-16 opacity-40"
        >
          <EightVCGraphic />
          <Image 
            alt="soma capital logo"
            src={somaCapital}
            className="h-[46px]"
          />
          <Image 
            alt="nea logo"
            src={nea}
            className="h-[37px]"
          />
          <Image 
            alt="uber logo"
            src={uber}
            className="h-[76px]"
          />
          <Image 
            alt="merrill lynch logo"
            src={merrillLynch}
            className="h-[76px]"
          />
        </div>
      </div>
    </div>
  )
}