import React from 'react'
import bannerImg from '../assets/bannerImg.jpg'


const Homebanner = () => {
  return (
    <div className='flex pt-15 mt-40 gap-20'>
        <img className='flex flex-col  h-150 ms-30 rounded-l-full' src={bannerImg} alt="" />
        <div className='flex flex-col mt-20 ms-10'>
            <h1 className='Signika font-extrabold text-7xl  text-green-800' >Cook Smart, Eat Better</h1>
            <div className='ms-10 mt-10 text-4xl my-10 font-bold text-green-600'>
                <h1 className='my-6 '><i className="ri-bread-fill mx-4  "></i>Discover 1000+ easy-to-make recipes </h1>
                <h1 className='my-6' ><i className="ri-bread-fill mx-4"></i>From quick bites to healthy dinners </h1>
                <h1 className='my-6'><i className="ri-bread-fill mx-4"></i>Explore global dishes, made simple </h1>
                <h1 className='my-6'><i className="ri-bread-fill mx-4"></i>New meals to try every day </h1>
                <h1 className='my-6'><i className="ri-bread-fill mx-4"></i>Perfect for students, foodies & busy people  </h1>
                
            </div>
        </div>
    </div>
  )
}

export default Homebanner
