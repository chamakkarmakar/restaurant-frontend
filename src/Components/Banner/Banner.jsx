import React, { useEffect, useState } from 'react'

const Banner = () => {
    const [current, setCurrent] = useState(0);

    const images = [
        "https://img.freepik.com/free-photo/korean-food-kim-bap-steamed-rice-with-vegetables-seaweed_1150-42969.jpg?t=st=1720022935~exp=1720026535~hmac=aa1b8d0f7c9e222ef7016a56936d6db66c8bd2dc11081161ca0a5b2c9043b781&w=740",
            
         "https://img.freepik.com/premium-photo/irresistible-crispy-chicken-freshly-prepared-still-warm-incredibly-appetizing-paired-with-french-fries-sliced-onions-sliced-chilies-sliced-peppers-sliced-tomatoes-served-wooden-platter_634731-5267.jpg?w=740",
          
         "https://img.freepik.com/free-photo/lamp-design-with-digital-art-style_23-2151153879.jpg?t=st=1720022254~exp=1720025854~hmac=03d4d13197a40701599f30c8d44a6413dc516dfd98718f07b7701cbc4264cc76&w=826"
            ]

    useEffect(() => {
        const next = (current + 1) % images.length;
        const id = setTimeout(() => setCurrent(next), 7000); // Change image every 5 seconds
        return () => clearTimeout(id);
    }, [current]);

    return (
        <div className="w-full mt-[-60px] h-[650px] bg-no-repeat bg-cover bg-center font-serif" style={{ backgroundImage: `url(${images[current]})` }}>
        <div className="w-full h-full bg-opacity-25 bg-rose-50 flex flex-col justify-center items-center">
            <div className=" md:mt-52 mt-36 md:w-3/4 w-full">
                <h1 className="md:text-6xl text-3xl text-center font-semibold md:px-0 px-2">Amazing Food With Fresh Daily Product</h1>
                {/* <p className='py-3 md:px-20 text-center px-10 md:text-lg text-sm text-gray-700'> With thousands of reviews covering every genre, you'll never run out of amazing books to explore. Join our community of readers, share your insights, and help others find their next great read.</p> */}

                <div className="flex md:w-1/2 w-full mx-auto justify-around my-10 items-center">
                <button className="text-md w-32 h-14 bg-sky-500 text-white rounded-full relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Shop Now</button>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Banner
