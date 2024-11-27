import Image from 'next/image'
import Link from 'next/link'

// comonents
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Separator from '@/components/sections/Separator'
import Stages from '@/components/sections/Stages'
import Features from '@/components/sections/Features'
import Digits from '@/components/sections/Digits'
import FeatureCards from '@/components/sections/FeatureCards'
import InWork from '@/components/sections/InWork'
import Slider from '@/components/Slider'

// fonts
import {unboundedBold, unboundedLight, unbounded} from '@/app/fonts'

// data
import { services } from '@/app/data/serviсes'

import sep1 from "@/img/panelsField.jpg"
import sep2 from "@/img/panels/14.jpg"


export default function Home() {

  return (
    <>
    <Hero />

    <FeatureCards />

    <Services />
    
    <Features />

    <Separator title="Залишились питання?" text="Отримайте професійну відповідь нашого менеджера" img={sep1} />

    <section className={`${unboundedLight.className} py-8 px-6 w-full`} >
      <h2 className={`${unboundedBold.className} text-2xl mb-5`}>Наша місія</h2>
      <p className='mb-5'>сприяти екологічній трансформації України, забезпечуючи якісні, ефективні та інноваційні рішення в галузі сонячної енергетики.</p>

      <Slider />
    </section>

    <Separator title="Залишились питання?" text="Отримайте професійну відповідь нашого менеджера" img={sep1} />

    <Stages stages={services}/>


    <Digits />
    
    <InWork />

    <Separator title="" text="Зробіть енергонезалежною свою домівку та отримуйте прибуток від сонячної електроенергії!" img={sep2} item={(
      <ul className={`${unbounded.className} text-sm text-left w-8/12 mx-auto list-disc my-4`}>
        <li className='mb-2'>Заощаджуйте на рахунках за електроенергію.</li>
        <li className='mb-2'>Зберігайте незалежність від тарифів та відключень.</li>
        <li className='mb-2'>Продавайте надлишки державі.</li>
      </ul>
    )} />
    </>
  )
}
// Вкажіть свої контактні дані та отримайте детальну консультацію та розрахунок вартості