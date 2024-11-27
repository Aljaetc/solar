import Image from "next/image"


export default function MenuBtn({img}) {
  let content
  if (img) {content = img}
  else {content = (
    <> 
      <div className="bg-black h-[2px]  rounded transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-7"></div>
      <div className="bg-black h-[2px] w-8/12 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
      <div className="bg-black h-[2px]  rounded transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-7"></div>
    </>
  )}

  return (
    <button className="relative group ml-3">
    <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all duration-200 shadow-md">
      <div className="flex flex-col justify-between w-[17px] h-[17px] transform transition-all duration-300 origin-center overflow-hidden">
        {content}
      </div>
    </div>
  </button>
  )
}