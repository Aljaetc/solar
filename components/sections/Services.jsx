'use client'

import { useState } from "react"

// fonts
import { unboundedBold } from "../../app/fonts"

// components
import Link from "next/link"
import Image from "next/image"

// images
import arrow from "@/img/arrow.png"

// data
import hbServices from "@/app/data/HBServices"


export default function Services() {
  const [activeTab, setActiveTab] = useState(hbServices[0].title)
  const [items, setItems] = useState(hbServices[0].items)

  function handleTabChange(newTab) {
    setActiveTab(newTab)
    const newList = hbServices.filter((i) => {
      return i.title === newTab
    })[0].items
    setItems(newList)
  }

  return (
    <section className={`py-8`}>
      <div className="container mx-auto  px-6">
        <h2 className={`${unboundedBold.className} text-2xl mb-5`}>Послуги</h2>


        <Tabs tabs={hbServices.map(item => item.title)} activeTab={activeTab} setActiveTab={handleTabChange} />

        <div className="py-8">
          <ul>
            {items.map(i => <ListItem key={i} text={i} />)}
          </ul>
        </div>

      </div>
    </section>
  )
}


function Tabs({tabs, activeTab, setActiveTab}){
  const style="inline-flex items-center justify-center p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
  const activeStyle="inline-flex items-center justify-center px-2 py-4 text-amber-500 border-b-2 border-amber-500 rounded-t-lg active dark:text-amber-500 dark:border-blue-500 group"
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {tabs.map(i => (
              <li 
                key={i}
                className={i === activeTab ? activeStyle : style}
                onClick={() => {setActiveTab(i)}}
              >{i}</li>
            ))}
          </ul>
      </div>
  )
}

function ListItem({text}) {
  return (
    <li className='py-4 flex justify-between border-b-2 border-black'>
      <h3 className={`${unboundedBold.className}`}>{text}</h3>
      <Image src={arrow} alt="" className='w-7'/>
    </li>
  )
}