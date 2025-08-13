import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Luffy from '../assets/Luffy_Gear5.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from '../components/Card/Card';

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
                <SwiperSlide>
                    <div className='w-full flex justify-center'>
                        <img src={Luffy} alt="Error" className='h-80 w-[90%] items-center rounded-lg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full flex justify-center'>
                        <img src={Luffy} alt="Error" className='h-80 w-[90%] items-center rounded-lg' />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='flex gap-8 mt-5 px-5'>
                <Card />
            </div>

        </>
    )
}

export default HomePage