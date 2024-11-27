import Image from "next/image"
import Button from "@/components/Button"

export default function Card({img, title, text, btnText, btnColor, btnBorderColor = 'white'}) {
  return (
    <div className={`p-6 bg-gradient-to-r from-[#ff575754] to-[#8c52ff54] rounded-3xl shadow-lg`} >
      <Image src={img} alt="" className='w-4/12 mb-3 '/>
      <h5 className="mb-2 text-2xl font-semibold tracking-tight dark:text-white">{title}</h5>
      <p className="mb-8">{text}</p>
      <div className="text-right">
        <Button text={btnText} text_bold btnColor={btnBorderColor} color={btnColor} />
      </div>
      
    </div>
  )
}
