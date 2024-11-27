import Link from "next/link"
import { unboundedBold } from "../app/fonts"

export default function Button({text, text_bold, btnColor = "white", color = "white"}) {
  const style=`${text_bold ? unboundedBold.className : ''}
  mr-3 mb-2 px-3 py-2 border-2 border-${btnColor} rounded-full text-xs uppercase text-${color} transition duration-150 ease-in-out hover:border-${color}  hover:text-${color} focus:border-${color} focus:text-${color} shadow-md`

  return (
    <Link
      href="/"
      className={style} >
      {text}
    </Link>
    
  )
}
