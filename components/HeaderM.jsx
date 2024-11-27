import Link from "next/link"
import Logo from "@/components/Logo"

import {comfortaa, comfortaa_bold, jura} from '../app/fonts'
import MenuBtn from "@/components/MenuBtn"
import Phone from '@/components/Phone'

const navLinks = [
  {slug:'/', text:"Для автономії"},
  {slug:'/economy', text:"Для економіі"},
  {slug:'/phases', text:"Етапи реалізації"},
  {slug:'/about-us', text:"Про компанію"},
]

export default function Header() {
  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center" >
        <div className="relative px-3">
          <Logo txtColor="#000" shineColor="#f59e0b" width={110} height={60} />
          {/* <div className={`${comfortaa_bold.className} text-[#e8d8e1] text-xs text-center uppercase relative -top-4`} >Радіємо Сонцю<br />Разом!</div> */}
        </div>
        {/* <nav className="text-yellow-950" >
          <ul className="flex items-center">
            {navLinks.map(navLink => (
              <li key={navLink.slug}>
                <Link className={` ${jura.className} text-xl ml-2 p-4`} href={navLink.slug} >{navLink.text}</Link>
              </li>
              ))}
          </ul>
        </nav> */}
        <div className="px-4 flex">
          <MenuBtn img={<Phone color="black" width={2} />} />

          <MenuBtn />
        </div>
      </div>
    </header>
  )
}
