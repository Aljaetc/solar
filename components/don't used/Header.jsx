import Link from "next/link"
import Logo from "@/components/Logo"

import {jura} from '../app/fonts'

const navLinks = [
  {slug:'/', text:"Для автономії"},
  {slug:'/economy', text:"Для економіі"},
  {slug:'/phases', text:"Етапи реалізації"},
  {slug:'/about-us', text:"Про компанію"},
]

export default function Header() {
  return (
    <header className="bg ">
      <div className="container mx-auto flex justify-between items-center" >
        <div><Logo txtColor="url(#Gradient2)" shineColor="#a0318c8a" width={200} height={80}/></div>
        {/* <nav className="text-yellow-950" >
          <ul className="flex items-center">
            {navLinks.map(navLink => (
              <li key={navLink.slug}>
                <Link className={` ${jura.className} text-xl ml-2 p-4`} href={navLink.slug} >{navLink.text}</Link>
              </li>
              ))}
          </ul>
        </nav> */}
      </div>
    </header>
  )
}