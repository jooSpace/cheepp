import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import bannerImg from '../assets/img/banner.png'
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const MainBanner = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={true}
            modules={[Pagination]}
        >
            <SwiperSlide>
                <img src={bannerImg} alt='banner'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={bannerImg} alt='banner'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={bannerImg} alt='banner'></img>
            </SwiperSlide>
        </Swiper>
    );
}

export default MainBanner;
