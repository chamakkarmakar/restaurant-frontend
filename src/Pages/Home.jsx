import React from 'react'
import Banner from '../Components/Banner/Banner'
import Testimonial from '../Components/Testimonial/Testimonial'
import Category from '../Components/Category/Category'
import Chef from '../Components/Chefs/Chef'

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Chef />
      <Testimonial />
    </div>
  )
}

export default Home
