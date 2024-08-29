import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Category = () => {
    const categories = [
        {
            category: "Indian",
            img: "https://img.freepik.com/premium-photo/indian-delicious-food-top-view_960396-557461.jpg?w=740"
        },
        {
            category: "Japanes",
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
            category: "Japanes",
            img: "https://img.freepik.com/premium-photo/sushi-rolls-stone-plate-closeup-japanese-food_187166-57576.jpg?w=740"
        },
        {
            category: "Chinese",
            img: "https://img.freepik.com/premium-photo/chopsticks-picking-chinese-food-plate-meal-meat_53876-385830.jpg?w=740"
        }
    ]
    const [currentSlider, setCurrentSlider]=useState(0);

    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? categories.length - 3 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === categories.length - 3 ? 0 : currentSlider + 1));

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    const isSmallScreen = window.innerWidth <= 768;
  return (
    <div className='my-20'>
    <h1 className="text-3xl font-serif text-center text-teal-800 font-semibold">Category</h1>
    <div className="max-w-full min-w-[400px] mx-auto h-[300px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
        <div className="relative overflow-hidden">
            <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                {/* arrow left */}
                <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <IoIosArrowBack className='w-10 h-10' />
                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <IoIosArrowForward className='w-10 h-10' />
                </button>
            </div>
            {/* slider container */}
            <div
                className="ease-linear duration-300 flex"
                style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)` }}>
                {/* sliders */}
                {categories.map((cat, idx) => (
                     <div key={idx} className="p-4 min-w-full md:min-w-[40%]">
                     <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                             <img className="w-full h-full flex-shrink-0 object-cover object-center" src={cat.img} alt={cat.name} />
                             <span className="flex-grow flex flex-col pl-4">
                                 <span className="title-font font-medium text-gray-900">{cat.name}</span>
                                 {/* <span className="text-gray-500 text-sm">{cat?.designation}</span> */}
                             </span>
                     </div>
                 </div>
                ))}
            </div>
        </div>
    </div>
</div>
  )
}

export default Category
