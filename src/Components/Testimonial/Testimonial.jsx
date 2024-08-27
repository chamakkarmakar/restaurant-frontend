import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiSolidQuoteRight } from "react-icons/bi";
const Testimonial = () => {
    const reviews = [
        {
            name: 'John Doe',
            designation: 'Student',
            testimonialDescription: 'Being a student, Taskiee has been my go-to tool for organizing assignments and study schedules. The visual timeline and reminder features have helped me stay on top of my coursework',
            img: 'https://img.freepik.com/free-photo/close-up-portrait-frowning-angry-bearded-man_171337-4829.jpg?t=st=1724745031~exp=1724748631~hmac=6c5da76073496df11de8da704a0cde5da08d9e86500c2b448a9029d68abdcfb7&w=740'
        },
        {
            name: 'Jane Doe',
            designation: 'Freelancer',
            testimonialDescription: 'Taskiee has been a game-changer for my freelance work. It allows me to effortlessly prioritize tasks, set realistic deadlines, and maintain a healthy work-life balance',
            img: 'https://img.freepik.com/premium-photo/portrait-young-woman_774935-2740.jpg?w=740'
        },
        {
            name: 'Shiyam Sarker',
            designation: 'Entrepreneur',
            testimonialDescription: "Taskiee's collaborative features have been instrumental in streamlining tasks for my startup. The ability to share projects and track progress with the team has enhanced our efficiency.",
            img: 'https://img.freepik.com/premium-photo/happy-man-doing-advertisement-pose-product_758367-207977.jpg?w=740'
        },
        {
            name: 'Bob Smith',
            designation: 'Creative Professional',
            testimonialDescription: 'As a creative professional, Taskiee has simplified my project management. The clean design and goal tracking feature keep me inspired and organized throughout the creative process.',
            img: 'https://img.freepik.com/free-photo/close-up-portrait-frowning-angry-bearded-man_171337-4829.jpg?t=st=1724745031~exp=1724748631~hmac=6c5da76073496df11de8da704a0cde5da08d9e86500c2b448a9029d68abdcfb7&w=740'
        },
        {
            name: 'Eva Williams',
            designation: 'Remote Worker',
            testimonialDescription: "Taskiee's mobile app has made remote work a breeze for me. I can seamlessly manage tasks on the go, ensuring that I stay productive regardless of my location.",
            img: 'https://img.freepik.com/premium-photo/portrait-young-woman_774935-2740.jpg?w=740'

        },
        {
            name: 'Chris Brown',
            designation: 'Parent',
            testimonialDescription: 'Managing family schedules is no easy task, but Taskiee has made it seamless. From school activities to household chores, Taskiee keeps our family organized and on track.',
            img: 'https://img.freepik.com/premium-photo/happy-man-doing-advertisement-pose-product_758367-207977.jpg?w=740'
        },
        {
            name: 'Olivia Davis',
            designation: 'Health Professional',
            testimonialDescription: 'In the healthcare field, where time is crucial, Taskiee has become my ally. Its time tracking feature has allowed me to optimize patient care and manage administrative tasks efficiently.',
            img: 'https://img.freepik.com/premium-photo/portrait-young-woman_774935-2740.jpg?w=740'
        },
        {
            name: 'Liam Wilson',
            designation: 'Researcher',
            testimonialDescription: "Taskiee's analytics feature has proven invaluable in my research endeavors. It provides insightful data on my productivity patterns, helping me refine my workflow and achieve research goals",
            img: 'https://img.freepik.com/free-photo/close-up-portrait-frowning-angry-bearded-man_171337-4829.jpg?t=st=1724745031~exp=1724748631~hmac=6c5da76073496df11de8da704a0cde5da08d9e86500c2b448a9029d68abdcfb7&w=740'
        }
    ];

    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images reviews
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? reviews.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === reviews.length - 2 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className='my-20'>
            <h1 className="text-3xl font-serif text-center text-teal-800 font-semibold">Testimonial</h1>
            <div className="max-w-full min-w-[350px] mx-auto h-[300px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
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
                        {reviews.map((review, idx) => (
                            <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
                                <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                                    <BiSolidQuoteRight className='w-7 h-7' />
                                    <p className="leading-relaxed mb-6 text-gray-500">{review?.testimonialDescription}</p>
                                    <a className="inline-flex items-center">
                                        <img className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" src={review.img} alt={review.name} />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">{review.name}</span>
                                            <span className="text-gray-500 text-sm">{review?.designation}</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
