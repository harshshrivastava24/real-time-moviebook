import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Luffy from '../../assets/Luffy_Gear5.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from '../Card/Card';

const HomePage = () => {
    return (
        <>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay]}
                className="mySwiper mt-2"
            >
                <SwiperSlide><img src={Luffy} alt="Error" className='h-80 w-[96%] items-center rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={Luffy} alt="Error" className='h-80 w-[96%] items-center rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={Luffy} alt="Error" className='h-80 w-[96%] items-center rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={Luffy} alt="Error" className='h-80 w-[96%] items-center rounded-lg' /></SwiperSlide>
            </Swiper>

            <Card />
        </>
    )
}

export default HomePage