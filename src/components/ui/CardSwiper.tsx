"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MemberCard from './MemberCard';

interface ImageSliderProps {
    images: {
      image: string;
      alt: string;
      name:string,
      position:string
    }[];
}

export default function CardSwiper({ images }: ImageSliderProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            className="w-full h-[300px] relative"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="w-full h-full">
                        <MemberCard
                        name={image.name}
                        image={image.image}
                        alt={image.alt}
                        position={image.position}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
  