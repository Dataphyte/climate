'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import img1 from '@/images/avg-monthly-temp.png';
import img2 from '@/images/proj-avg-percipitation.png';
import img3 from '@/images/proj-avg-temp.png';

const HomeSwiper = () => {
  const images = [img1, img2, img3];
  return (
    <Swiper
      loop
      autoplay
      modules={[Autoplay]}
      className='bg-white w-full h-[250px] shadow-lg flex items-center justify-center'
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
