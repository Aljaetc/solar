
import Image from 'next/image'

import one from '@/img/icons/1.png'
import two from '@/img/icons/2.png'
import three from '@/img/icons/3.png'
import four from '@/img/icons/4.png'
import img from "@/img/workersontheroof.jpg"

import { unboundedBold } from "@/app/fonts"
import { unbounded } from '../../app/fonts'
import Button from '@/components/Button'

const data = [
  {
    img: one,
    badgeTxt: "01",
    title: "Виїзд На Об'єкт",
    text: "Наші фахівці виїжджають до вас на об'єкт для виконання всіх необхідних вимірювань"
  },
  {
    img: two,
    badgeTxt: "02",
    title: "Проектування",
    text: "За виконаним виміром готуємо для вас комерційну пропозицію з використанням обладнання різної цінової категорії"
  },
  {
    img: three,
    badgeTxt: "03",
    title: 'Реалізація Проекту “під ключ”',
    text: "Виконання монтажних робіт виключно командою власних фахівців"
  },
  {
    img: four,
    badgeTxt: "04",
    title: "Введення",
    text: 'Підключення сонячної електростанції до «Зеленого тарифу»'
  },
]
// https://iskra-energy.com/ an example for a desctop version
export default function () {
  return (
    <section className='text-left py-12' >
      <div className='container px-6 flex flex-col'>
        {data.map(i => (
          <div className="pt-20 relative group" key={i.title}>
            
            <h3 className={`${unbounded.className} mb-1`}>{i.title}</h3>
            <p>{i.text}</p>
            <div className={`absolute -z-10
              ${unboundedBold.className} absolute top-3 text-8xl stroke_transparent group-hover:text-amber-500
              after:absolute after:content-* after:w-4 after:h-4 after:bg-amber-500 after:bottom-2 after:-right-1 after:rounded-full after:blur
              `}>
                {i.badgeTxt}
            </div>

          </div>
        ))}

      </div>
      
    </section>
  )
}
