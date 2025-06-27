import React from 'react'
import FoodItem from './FoodItem'

const FoodList = ({foodData}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-25 p-4 pt-40 lg:ms-20 lg:me-20 lg:mt-0'>

    {foodData.map((foodItem)=>
        <FoodItem foodItem={foodItem} key={foodItem.id}/>
    )}
      
    </div>
  )
}

export default FoodList
