import Logo from '@/components/Logo'
import Animation from '@/components/Animation'
import Link from 'next/link'
import { unbounded, unboundedBold } from '@/app/fonts'

const data = [
  {
    title: "Для дому",
    items: [
     "Мережеві СЕС", "Автономні СЕС", "Гібрідні СЕС", "Резервне живлення WiFi", 'Економія разом з "нічний тариф"'
    ]
  },
  {
    title: "Для дому",
    items: [
     "Мережеві СЕС", "Автономні СЕС", "Гібрідні СЕС", "Резервне живлення WiFi", 'Економія разом з "нічний тариф"'
    ]
  },
  {
    title: "Для дому",
    items: [
     "Мережеві СЕС", "Автономні СЕС", "Гібрідні СЕС", "Резервне живлення WiFi", 'Економія разом з "нічний тариф"'
    ]
  },
  {
    title: "Для дому",
    items: [
     "Мережеві СЕС", "Автономні СЕС", "Гібрідні СЕС", "Резервне живлення WiFi", 'Економія разом з "нічний тариф"'
    ]
  },
  {
    title: "Для дому",
    items: [
     "Мережеві СЕС", "Автономні СЕС", "Гібрідні СЕС", "Резервне живлення WiFi", 'Економія разом з "нічний тариф"'
    ]
  },
  {
    title: "Для дому",
    items: [
     "Мережеві СЕС", "Автономні СЕС", "Гібрідні СЕС", "Резервне живлення WiFi", 'Економія разом з "нічний тариф"'
    ]
  }
]

export default function Footer() {``
  return (
    <footer className="w-full py-6 overflow-hidden" >
      <div className='container px-6'>

        <div className='flex flex-col items-center mb-3'>
          <Logo txtColor="#333" shineColor="yellow" width={120} height={60} />
          <h2 className='text-sm -mt-3 mb-5 uppercase'>Розумні енергетичні рішення</h2>
        </div>

        <div className='relative'>

          <div className='absolute -z-10 blur -right-72 -top-28 w-70 md:right-4'>
            <Animation />
          </div>

          <div className='flex flex-wrap backdrop-blur-lg py-4 rounded-xl' >
            <h3 className={`${unboundedBold.className} mb-3 mx-auto `}>Твоя енергія Сонця</h3>
            {data.map( (i, idx)=> (
              <div key={idx} className="basis-1/2 text-sm mb-7
              last:basis-full last:text-center first-of-type:basis-full">
                <h4 className={`${unbounded.className} mb-1`}>Для дому</h4>
                <ul className="pl-2">
                  <li className=""><Link href="/invertors/line">Мережеві СЕС</Link></li>
                  <li className=""><Link href="/invertors/line">Автономні СЕС</Link></li>
                  <li className=""><Link href="/invertors/line">Гібрідні СЕС</Link></li>
                  <li className="leading-5"><Link href="/invertors/line">Резервне живлення кртитичних вузлів</Link></li>
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </footer>
  )
}