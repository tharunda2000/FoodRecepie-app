import React, { useState } from 'react'

const FoodItem = ({foodItem,key}) => {

  const [isFavourite,setFavourite] = useState(false);
  return (
    <div className=''>
      <div className='bg-green-200 rounded-3xl h-75 sm:h-100'>

        <img src={foodItem.image} alt="" className='w-100  rounded-t-3xl p-5'/>
        <h1 className='hidden lg:flex m-3 ms-5'>{foodItem.title.split(" ").slice(0, 5).join(" ")}</h1>
        <h1 className=' m-3 ms-5 lg:hidden'>{foodItem.title.split(" ").slice(0, 3).join(" ")}</h1>

        <div>
          <button className=' mx-3 mt-5 bg-green-400 p-2 hover:bg-green-500 cursor-pointer rounded-full w-30'>Show Recepie</button>
          <i className={!isFavourite?"ri-heart-fill text-2xl text-gray-400 cursor-pointer":"ri-heart-fill text-2xl text-red-400 cursor-pointer"} onClick={()=>setFavourite(!isFavourite)}></i>
        </div>

      </div>
      
    </div>
  )
}

export default FoodItem
