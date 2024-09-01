import React from 'react'

const Chef = () => {
    const chefs = [
        {
            img: "https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208316.jpg?t=st=1725185642~exp=1725189242~hmac=8d47b15ef1216a564208ecb44cb61101681982d13b337ae5dba259d94dd3bb7f&w=740"
        },
        {
            img : "https://img.freepik.com/free-photo/female-chef-chopping-vegetables-kitchen_23-2148763134.jpg?t=st=1725185803~exp=1725189403~hmac=611a36709942356dd24a0e8bea4dd0958ab2ea0e1ce1fe1275131f78529b56e7&w=740"
        },
        {
            img : "https://img.freepik.com/premium-photo/chef-stands-front-plate-vegetables-vegetables_1239757-6189.jpg?w=740"
        },
        {
            img : "https://img.freepik.com/free-photo/cook-standing-with-sauce-bottle-salad_23-2148040164.jpg?t=st=1725185907~exp=1725189507~hmac=f9bcbd1d13ab7e1ed43004c8b49958aca0d5132bfbf5b315330224a1382b26ed&w=740"
        }
    ]
  return (
    <div className='my-20 md:w-11/12 w-full mx-auto'>
        <h1 className="text-center text-3xl font-bold font-serif">Our Chef</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-10">
            {
                chefs.map((chef,idx)=>
                    <div className="max-[300px] mx-auto space-y-4 rounded-2xl border  md:w-[300px] dark:border-zinc-700 dark:bg-zinc-900">
                {/* Card Image */}
                <img width={350} height={190} className="h-[190px] w-[300px] rounded-2xl bg-gray-400" src={chef.img} alt="card navigate ui" />
                {/* Card Heading */}
                <div className="space-y-2">
                    <h2 className="font-medium text-slate-800 p-2 text-center sm:text-lg md:text-xl dark:text-white/90">Chef</h2>
                </div>
                
              </div>
                )
            }
        </div>
      
    </div>
  )
}

export default Chef
