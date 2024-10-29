import { Button } from "@/components/ui/button"
import img1 from "../assets/images/apiCta/api-cta-1.png"
import img2 from "../assets/images/apiCta/api-cta-2.png"
import img3 from "../assets/images/apiCta/api-cta-3.png"
import img4 from "../assets/images/apiCta/api-cta-4.png"


export default function APICTA() {
  const images = [img1, img2, img3, img4];
  return (
    <div className="max-w-7xl mx-auto md:px-4 mt-20">
      <div className="hidden md:flex rounded-3xl bg-[rgb(155,14,141)] p-12 text-white relative overflow-x-hidden">
        <div className="w-[55%]">
          <h3 className="text-3xl tracking-[-0.02em]">Work wherever you work with our API</h3>
          <p className="mt-2 text-balance text-lg leading-6 tracking-[-0.015em]">Aviato connects seamlessly with top CRMs and tools. Powerful API enables an easy transition to data-driven choices, no process disruption.</p>
          <Button
            className="px-4 py-2.5 rounded-md font-medium leading-none bg-white hover:bg-white/90 text-black mt-6"
          >Try it</Button>
        </div>
        <div className="absolute left-[57%] bottom-0 h-full flex items-center justify-start gap-x-6">
          {
            images.map((image, i) => {
              return (
                <img 
                  key={`md-api-cta-image-${i + 1}`}
                  alt="woman working on laptop"
                  src={image.src}
                  className="h-48 rounded-[96px]"
                />
              )
            })
          }
        </div>
      </div>
      <div className="flex md:hidden px-4 bg-[rgb(155,14,141)] py-12 text-white relative overflow-x-hidden flex-col items-start justify-start text-center">
          <div className="h-full flex items-center -translate-x-[12%] justify-start gap-x-6">
          {
            images.map((image, i) => {
              return (
                <img 
                  key={`api-cta-image-${i + 1}`}
                  alt="woman working on laptop"
                  src={image.src}
                  className="h-48 rounded-[96px]"
                />
              )
            })
          }
          </div>
          <div className="w-full pt-12">
          <h3 className="text-3xl tracking-[-0.02em] text-balance">Work wherever you work with our API</h3>
          <p className="mt-2 text-balance md:text-lg text-base leading-6 tracking-[-0.015em]">Aviato connects seamlessly with top CRMs and tools. Powerful API enables an easy transition to data-driven choices, no process disruption.</p>
          <Button
            className="px-4 py-2.5 rounded-md font-medium leading-none bg-white text-black mt-6 hover:bg-white/90"
          >Try it</Button>
          </div>
      </div>
    </div>
  )
}