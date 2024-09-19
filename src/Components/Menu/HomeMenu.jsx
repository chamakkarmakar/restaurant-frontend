import React from 'react'

const HomeMenu = () => {
    const foodItems =[ 
        {
            dish: "Roasted Chieken",
            img: "https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10655.jpg?t=st=1725259747~exp=1725263347~hmac=f131eb8b9443d1acf11926b81fefef79c38040f04790a92467182d861b8f1a3f&w=740",
            description: "Roast chicken should contain juicy meat with a golden-brown, crispy skin. It should burst with flavor, with just the right blend of fresh herbs, spices, and seasonings.",
            price: "10.20"
        },
        {
            dish: "American Chopsuey",
            img: "https://img.freepik.com/free-photo/gourmet-seafood-meal-with-fresh-lime-cilantro-generated-by-ai_188544-33249.jpg?t=st=1725259871~exp=1725263471~hmac=ed4209ecabc7e0898c56df33a87f427e10e2618b3a598631fc6f24ed06ef7330&w=826",
            description: "chop suey, Chinese American dish consisting of bits of meat, bean sprouts, water chestnuts, and other vegetables, stir-fried and then served with rice.",
            price: "10.20"
        },
        {
            dish: "Ramen",
            img: "https://img.freepik.com/premium-photo/traditional-japanese-ramen-noodle-soup-with-brisket-spinach-egg-black-background_1287927-3276.jpg?w=740",
            description: "Ramen is a Japanese noodle dish. It consists of Chinese-style wheat noodles served in a broth; common flavors are soy sauce and miso.",
            price: "10.20"
        },
        {
            dish: "Chieken Steak",
            img: "https://img.freepik.com/premium-photo/tantalizing-grilled-chicken-breast_974629-481005.jpg?w=740",
            description: " Steak can be diced, cooked in sauce, such as in steak and kidney pie, or minced and formed into patties, such as hamburgers.",
            price: "10.20"
        }
    ]
    return (
        <div className='my-20 w-11/12 mx-auto '>
            <h1 className="text-3xl font-bold mb-10 text-center">Our Specialties</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                {
                    foodItems.map((item,index)=> 
                        <div key={index} className='flex md:flex-row flex-col items-center shadow-2xl border border-gray-200 md:w-[550px] w-[295px] mx-auto'>
                            <img src={item.img} className='w-72 h-48' alt={item.dish} />
                            <div className='text-center p-5'>
                                <h2 className="text-xl font-semibold">{item.dish}</h2>
                                <p className='text-sm'>{item.description}</p>
                                <p className='font-extrabold'>${item.price}</p>
                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default HomeMenu
