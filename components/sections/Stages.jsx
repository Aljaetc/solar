import Image from 'next/image'

import checkmark from "@/img/checkmark.webp"

// fonts
import { unboundedBold } from "@/app/fonts"

export default function Stages({stages}) {
  return (
    <section className="py-12">
      <div className='container px-6'>
        <h3 className={`${unboundedBold.className} text-2xl mb-8`} >Також пропонуємо</h3>
        <ul>
          {stages.map(stage => (
            <li className="mb-8" key={stage.title} >
            <div className="flex items-center mb-2">
              <Image src={checkmark} alt="checkmark" className="w-8 mr-4" />
              <h5 className={`${unboundedBold.className}`} >{stage.title}</h5>
              </div>
            <p>{stage.text}</p>
          </li>
          ))}
        </ul>
      </div>
    </section>
  )
}