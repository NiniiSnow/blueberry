'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Images } from '@/types/about';
import { useEffect, useState } from 'react';


export default function ImageSwiper() {
  const [images, setImages] = useState<Images[]>([]);

  useEffect(() => {
    fetch('/images.json')
      .then((res) => res.json())
      .then((data) => setImages(data.images));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full h-[600px] relative"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <Image
              src={image.url}
              alt={image.description}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-main/60 to-transparent" /> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
