// components
import Image from 'next/image'

import Button from '@/components/Button'

// images
import img from '@/img/workersontheroof.jpg'

// fonts
import { unbounded, unboundedBold } from "@/app/fonts"


export default function Hero () {
  return (
    <section className={`py-16 bg-gradient-to-r from-[#ff5757dd] to-[#8c52ffc8] relative`} >
      <div className='container px-6 mx-auto' >
        <div className="absolute inset-0 -z-10"><Image src={img} alt="" className="object-cover w-full h-full"></Image></div>
        
        <div className="">
          <h1 className={`mb-10 ${unbounded.className} text-3xl text-white`} >
            <span className={`${unboundedBold.className}`}>РаДія</span> - нова енергія для кожної мрії
          </h1>
          <div className="mb-20">

            <Button text="Для дому" text_bold color='white' btnColor="amber-500" />
            <Button text=" Для бізнесу" text_bold color='white' btnColor="amber-500" />
          </div>
          <h3 className={`text-right w-10/12 ml-auto text-lg text-white`} >Найбільш оптимальні та продуктивні конфігурації обладнання, якісний сервіс з монтажу та обслуговування</h3>
        </div>

      </div>

    </section>
  )
}