import React from 'react'

function ProductCarousel() {
  return (
    <div className='flex flex-col bg-white rounded-xl shadow-xl overflow-hidden w-[15rem] cursor-pointer mx-3 '>
      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_12.jpg" alt="" />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-green-800'>Hello</h3>
      </div>
    </div>
  )
}

export default ProductCarousel;
