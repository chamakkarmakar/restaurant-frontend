import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination,FreeMode, Navigation,Virtual } from 'swiper/modules';

const Category = () => {
    const categories = [
        {
            category: "Indian",
            img: "https://img.freepik.com/premium-photo/indian-delicious-food-top-view_960396-557461.jpg?w=740"
        },
        {
            category: "Japanese",
            img: "https://img.freepik.com/premium-photo/sushi-rolls-stone-plate-closeup-japanese-food_187166-57576.jpg?w=740"
        },
        {
            category: "Chinese",
            img: "https://img.freepik.com/premium-photo/chopsticks-picking-chinese-food-plate-meal-meat_53876-385830.jpg?w=740"
        },
        {
            category: "Indian",
            img: "https://img.freepik.com/premium-photo/indian-delicious-food-top-view_960396-557461.jpg?w=740"
        },
        {
            category: "Japanese",
            img: "https://img.freepik.com/premium-photo/sushi-rolls-stone-plate-closeup-japanese-food_187166-57576.jpg?w=740"
        },
        {
            category: "Chinese",
            img: "https://img.freepik.com/premium-photo/chopsticks-picking-chinese-food-plate-meal-meat_53876-385830.jpg?w=740"
        }
    ]
  return (
    <div className='w-11/12 mx-auto my-20'>
        <h1 className="text-3xl text-center">Category</h1>
            <Swiper
            style={{
                "--swiper-navigation-color": "#000",
                "--swiper-navigation-size": "25px",
              }}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                freeMode={true}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                
                navigation={true}
                modules={[Autoplay, Navigation,FreeMode]}
                className="mySwiper"
            >
                {
                    categories.map((cat, index) =>
                        <SwiperSlide key={index}>
                            <div className="p-4 min-w-full md:min-w-[40%]">
                                <div className="flex flex-col justify-center items-center h-[200px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(90,90,90,0.5), rgba(120,120,120,0.5)), url(${cat.img})` }}>
                                   
                                        <p className='text-2xl font-serif font-semibold text-center text-white py-3'>{cat.category}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
  )
}

export default Category
