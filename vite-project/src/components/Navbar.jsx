import React from 'react'
import Search from './Search'

const Navbar = ({foodData,setFoodData}) => {
  return (
    <div className=' fixed top-0 left-0 flex bg-green-400 h-30 w-full  mb-5 shadow-lg justify-between items-center'>

        <i className="ri-restaurant-fill text-5xl ms-20 text-green-800  font-extrabold text-shadow-sm text-shadow-green-950 "></i>
        <h1 className=' hidden sm:flex text-green-900 text-4xl font-extrabold text-shadow-md text-shadow-green-950' >Let's make it</h1>
        <Search foodData={foodData} setFoodData={setFoodData}/>
      
    </div>
  )
}

export default Navbar
