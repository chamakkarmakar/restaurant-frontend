import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const menuItems = [
    {
      menu: 'home',
      url: '/'
    },
    {
      menu: 'about',
      url: '/about'
    },
    {
      menu: 'menu',
      url: '/menu'
    }
    

  ]
  return (
    <footer className='w-full text-white mt-32 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `linear-gradient(to bottom, rgba(90,90,90,0.8), rgba(120,120,120,0.8)), url("https://img.freepik.com/free-photo/korean-food-kim-bap-steamed-rice-with-vegetables-seaweed_1150-42969.jpg?t=st=1720022935~exp=1720026535~hmac=aa1b8d0f7c9e222ef7016a56936d6db66c8bd2dc11081161ca0a5b2c9043b781&w=740")` }}>
      <div className='w-10/12 mx-auto py-20 grid md:grid-cols-3 grid-cols-1 justify-items-center place-content-center gap-10'>
        <div className='text-center'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid accusantium nesciunt deserunt dolorum quasi nihil similique officia autem nisi?</p>
        </div>
        <div className='text-center'>
          <h1 className='text-xl font-serif font-bold'>FoodKo</h1>
          <p>foodko@info.com</p>
          <p>+880 123456789</p>
        </div>
        <div className='flex flex-col justify-center '>
          {
            menuItems.map(item=>
              <Link 
              className='uppercase font-semibold hover:text-blue-500'
              to={item.url} 
              key={item.menu}
              >{item.menu}</Link>
            )
          }
        </div>

      </div>
    </footer>
  )
}

export default Footer
