'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import img1 from '@/images/avg-monthly-temp.png';
import img2 from '@/images/proj-avg-percipitation.png';
import img3 from '@/images/proj-avg-temp.png';
import img4 from '@/images/proj-change-in-cooling-degree.png';
import img5 from '@/images/proj-number-of-tropical-nights.png';

const HomeSwiper = () => {
  const images = [img1, img2, img3, img4, img5];
  return (
    <Swiper
      loop
      autoplay
      modules={[Autoplay]}
      className='bg-white w-full h-[350px]  shadow-lg flex items-center justify-center col-span-5 lg:col-span-2'
    >
      {images.map((item, idx) => (
        <SwiperSlide key={idx} className='w-full h-full relative'>
          <Image src={item} alt='new image' fill />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSwiper;
