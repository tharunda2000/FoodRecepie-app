import React, { useState } from 'react'
import Search from './Search'
import { useNavigate } from 'react-router-dom';

const Navbar = ({foodData,setFoodData}) => {

  const navigate = useNavigate();
 

  return (
    <div>

      

      <div className=' fixed top-0  flex bg-green-400 h-30 w-full  mb-5 shadow-lg justify-between items-center'>

        

        <i className="ri-restaurant-fill text-7xl ms-20 text-green-800  font-extrabold text-shadow-sm text-shadow-green-950 cursor-pointer" onClick={()=>{navigate('/')} }></i>
        <h1 className=' hidden sm:flex text-green-900 text-6xl font-extrabold text-shadow-md text-shadow-green-950 cursor-pointer' onClick={()=>{navigate('/')} }>Let's make it</h1>
        
        
          <Search  setFoodData={setFoodData}/>
          
        
      
    </div>

    

    </div>
    
  )
}

export default Navbar
