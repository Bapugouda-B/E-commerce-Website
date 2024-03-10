import React from 'react'
import Carousel from '../../component/HeaderBody/Carousel.js'
import HomeCarousel from '../../component/HomeCarousel/homeCarousel.js'
import { menKurta } from '../../Data/Men/Kurta.js'

function Home() {
  return (
    <div>
        <Carousel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
            <HomeCarousel data={menKurta} sectionName={"Men's Kurta"}/>
            <HomeCarousel data={menKurta} sectionName={"Men's Shoes"}/>
            <HomeCarousel data={menKurta} sectionName={"Men's Shirts"}/>
            <HomeCarousel data={menKurta} sectionName={"Women's Saree"}/>
        </div>
      
    </div>
  )
}

export default Home
