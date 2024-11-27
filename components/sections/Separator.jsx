import Image from "next/image"

import { unbounded, unboundedBold } from "@/app/fonts"

import Phone from "@/components/Phone"


export default function Separator({title, text, img, item}) {
  return (
    <section className={`relative py-12 text-centerf text-white text-center`} >
      <div className="absolute inset-0 -z-10 bg-slate-600"><Image src={img} alt="" className="w-full h-full object-cover opacity-40"/></div>
      <div className="container px-5">
        <div className='mb-4'>
          <h3 className={`${unboundedBold.className} text-2xl mb-2`} >{title}</h3>
          <p className={`${unbounded.className}`}>{text}</p>
          {item ? item : ""}
        </div>
        <div>
          <a href="tel:+380672033031" className={`${unboundedBold.className} text-2xl stroke_white flex flex-wrap gap-3 justify-center items-center`}>
            <div className="w-10 animate-wiggle">
              <Phone color="white" width={2}/>
            </div>
            <span>+38 067 203 30 31</span></a>
        </div>
      </div>
    </section>
  )
}