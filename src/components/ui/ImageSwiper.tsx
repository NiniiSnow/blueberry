'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageSwiper({ images }: ImageSliderProps) {
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
              src={image.src}
              alt={image.alt}
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
