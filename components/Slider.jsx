'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from '@/components/Card';

import quality from '@/img/quality.png'
import security from '@/img/security.png'
import efficiency from '@/img/efficiency.webp'

const data = [
  {
    img: quality,
    title: "Якість",
    text: "Ми використовуємо лише перевірене обладнання від провідних світових виробників.",
    btnTxt: "Консультація",
  },
  {
    img: security,
    title: "Безпека",
    text: "Наші рішення відповідають найвищим стандартам безпеки на кожному етапі — від вибору компонентів до монтажу та обслуговування.",
    btnTxt: "Консультація",
  },
  {
    img: efficiency,
    title: "Швидкість і ефективність",
    text: "Ми забезпечуємо швидке встановлення та налаштування обладнання завдяки злагодженим процесам і досвідченій команді.",
    btnTxt: "Консультація",
  },{
    img: quality,
    title: "Якість",
    text: "Ми використовуємо лише перевірене обладнання від провідних світових виробників.",
    btnTxt: "Консультація",
  },
  {
    img: security,
    title: "Безпека",
    text: "Наші рішення відповідають найвищим стандартам безпеки на кожному етапі — від вибору компонентів до монтажу та обслуговування.",
    btnTxt: "Консультація",
  },
  {
    img: efficiency,
    title: "Швидкість і ефективність",
    text: "Ми забезпечуємо швидке встановлення та налаштування обладнання завдяки злагодженим процесам і досвідченій команді.",
    btnTxt: "Консультація",
  }
]

export default () => {
  return (
    <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y,]}
      spaceBetween={20}
      slidesPerView={1.2}
      breakpoints={{
        560: {
          slidesPerView: 2.2,
          spaceBetween: 20
        },
        1000: {
          slidesPerView: 3,
        }
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
        {data.map((i, idx) => (
          <SwiperSlide key={idx} >
            <Card img={i.img} text={i.text} title={i.title} btnText={i.btnTxt} />
          </SwiperSlide>
        ))}
        <div slot="container-start" className='h-[30px]'></div>
    </Swiper>
  );
};

{/* <div className="my-4 shrink-0 min-w- max-w-sm p-6 bg-gradient-to-r from-[#ff575754] to-[#8c52ff54] border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
<Image src={quality} alt="" className='w-4/12 mb-3 '/>
<a href="#">
    <h5 className="mb-2 text-2xl font-semibold tracking-tight dark:text-white">Якість:</h5>
</a>
<p className="mb-8">Ми використовуємо лише перевірене обладнання від провідних світових виробників.</p>
<Button text="Консультація" text_bold />
</div>
</SwiperSlide>
<SwiperSlide>
<div className="my-4 shrink-0 max-w-sm p-6 bg-gradient-to-r from-[#ff575754] to-[#8c52ff54] border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
<Image src={security} alt="" className='w-4/12 mb-3'/>
<a href="#">
    <h5 className="mb-2 text-2xl font-semibold tracking-tight dark:text-white">Безпека:</h5>
</a>
<p className="mb-3">Наші рішення відповідають найвищим стандартам безпеки на кожному етапі — від вибору компонентів до монтажу та обслуговування.</p>
<a href="/" className={`${unboundedBold.className} inline-flex font-medium items-center text-white hover:underline`}>
    Консультація
</a>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="my-4 max-w-sm p-6 bg-gradient-to-r from-[#ff575754] to-[#8c52ff54] border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
<Image src={efficiency} alt="" className='w-4/12 mb-3'/>
<a href="#">
    <h5 className="mb-2 text-2xl font-semibold tracking-tight dark:text-white">Швидкість і ефективність:</h5>
</a>
<p className="mb-3">Ми забезпечуємо швидке встановлення та налаштування обладнання завдяки злагодженим процесам і досвідченій команді.</p>
<a href="/" className={`${unboundedBold.className} inline-flex font-medium items-center text-white hover:underline`}>
    Консультація
</a>
</div> */}