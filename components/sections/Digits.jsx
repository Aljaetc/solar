
import { unboundedBold } from "@/app/fonts"

const data = [
  {
    number: 400,
    text: "МВт помужносетй"
  },
  {
    number: 9,
    text: "Років досвіду"
  },
  {
    number: 87,
    text: "Задоволених партнерів"
  },
  {
    number: 8,
    text: "Зарубіжні партнери"
  },
]

export default function Digits() {
  return (
    <section className='text-center py-20 text-white bg-slate-500 bg-[url(/images/workersontheroof.jpg)] bg-blend-soft-light' >
      <div className="container px-6">
        <ul>
        {data.map(i => (
          <li className="mb-8 last:mb-0" key={i.text}>
            <h3 className={`text-2xl `}  >
              <span className={` ${unboundedBold.className} block text-4xl `}>{i.number}</span>
              {i.text}
            </h3>
          </li>
        ))}
        </ul>
      </div>
      
    </section>
  )
}