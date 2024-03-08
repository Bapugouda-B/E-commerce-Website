import React from 'react'
import Carousel from '../../component/HeaderBody/Carousel.js'
import HomeCarousel from '../../component/HomeCarousel/homeCarousel.js'

function Home() {
  return (
    <div>
        <Carousel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
            <HomeCarousel />
            <HomeCarousel />
        </div>
      
    </div>
  )
}

export default Home
