
import Image from 'next/image'

import one from '@/img/icons/1.png'
import two from '@/img/icons/2.png'
import three from '@/img/icons/3.png'
import four from '@/img/icons/4.png'
// import one from '@/img/icons/1.png'
// import one from '@/img/icons/1.png'

import { unboundedBold } from "@/app/fonts"

const data = [
  {
    img: one,
    badgeTxt: "01",
    text: "Легкість у користуванні"
  },
  {
    img: two,
    badgeTxt: "02",
    text: "Передбачувані платежі"
  },
  {
    img: three,
    badgeTxt: "03",
    text: "25 років гарантії"
  },
  {
    img: four,
    badgeTxt: "04",
    text: "Встановлення включене"
  },
]

export default function () {
  return (
    <section className='text-left pt-20 pb-8' >
      <div className='container mx-auto px-6'>
  
          {data.map(i => (
          <div className="relative overflow-hidden rounded-lg mb-8" key={i.text} >
            <div className=" p-6 last:mb-0 bg " >
              <Image src={i.img} alt={i.text} className="w-44" w={150} />
              <h3 className={`text-lg ${unboundedBold.className} `}  >
                {i.text}
              </h3>
              {/* <h3 className={`text-xl uppercase`}  >
                {i.text}
              </h3> */}
              <div className="mb-2 text-5xl text-white absolute top-10 right-5 z-10">{i.badgeTxt}</div>
            </div>
            <div className="text-5xl absolute -top-5 -right-5 w-[120px] h-[120px] flex place-items-end place-content-start">
              <div className="absolute blur-lg bg-amber-500 inset-0 rounded-full"></div>
            </div>
          </div>
        ))}

      </div>
      
    </section>
  )
}