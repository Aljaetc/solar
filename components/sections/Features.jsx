import Card from '@/components/Card'

import { unboundedBold } from '@/app/fonts'

// img
import autonomy from '@/img/icons/10.png'
import security from '@/img/security.png'
import efficiency from '@/img/efficiency.webp'

const ourPros = [
  {
    img: autonomy,
    title: "Автономна станція",
    text: "Сонячне випромінювання не постійне, тому генерація електроенергії з фотомодулів не завжди відповідає її споживанню. Акумуляторні батареї (АКБ) використовують для накопичення надлишкової енергії і використання її, коли споживання перевищує виробіток.",
    btnText: "Детальніше"
  },
  {
    img: security,
    title: "Мережева cтанція",
    text: "Мережева сонячна електростанція призначена для власного споживання споживачів або вироблення енергії за Зеленим тарифом, Net-Billing або Net-Metering. Підключення інвертора до загальної мережі виконується через розподільний щит споживача. Обов’язковою умовою генерації електроенергії в мережу є наявність напруги в мережі.",
    btnText: "Детальніше"
  },
  {
    img: efficiency,
    title: "Гібридна станція",
    text: "Гібридні сонячні станції працюють на будь-яких об’єктах, де є доступ до електромережі і використовуються не тільки як резервне джерело живлення, а і як спосіб продажу надлишків електроенергії в мережу за допомогою Зеленого тарифу, Net-Metering або Net-Billing для заробітку або додаткової економії.",
    btnText: "Детальніше"
  }
]

export default function Features() {
  return (
    <section className="py-8" >
      <div className="container mx-auto px-6">
        <h2 className={`${unboundedBold.className} text-2xl mb-5`}>Енергоефективні рішення для будинків і квартир</h2>
        <p>Завдяки власній сонячній генерації - у вашому будинку завжди буде доступна електроенергія</p>

        <div className="py-7 snap-x flex w-full overflow-auto gap-5 no-scrollbar snap-mandatory">
          {ourPros.map(i => (
            <div className='max-w-72 text-sm leading-[1.6] snap-start basis-10/12 shrink-0' key={i.title}>
              <Card title={i.title} text={i.text} img={i.img} btnText={i.btnText} btnColor='white' btnBorderColor="amber-500" />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
