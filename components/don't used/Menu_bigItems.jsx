"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import solarPanelIcon from '@/img/solar.avif'
import invertor from '@/img/invertor.avif'
import battery from '@/img/battery.png'
import green_energy from '@/img/green_energy.webp'
import kit from '@/img/kit.jpg'

const menuItems = [
  { name: "Сонячні панелі", href: "/solar-panels", icon: solarPanelIcon },
  { name: "Інвертори", href: "/inverters", icon: invertor },
  { name: "Акумуляторні батареї", href: "/batteries", icon: battery },
  { name: "Зелений тариф", href: "/green-tariff", icon: green_energy },
  { name: " Все разом", href: "/kit", icon: kit}
];

export default function MajorTopicsForUnderstanding() {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-gray-700 basis-1/4 p-3 m-3 rounded border shadow-md
            ${pathname === `/col${item.href}` ? "text-blue-500 border-b-0" : "hover:text-blue-400"}
          `}
        >
          
            {/* <Image src={item.icon} width={200} height={200} alt={item.name} className='mx-auto '/> */}
          
          <div className="text-xl text-center text-amber-600 font-bold uppercase">{item.name}</div>
        </Link>
      ))}
      </ul>
    </div>
  );
};
