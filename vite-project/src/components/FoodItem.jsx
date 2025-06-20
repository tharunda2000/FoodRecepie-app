import React from 'react'

const FoodItem = ({foodItem}) => {
  return (
    <div className=''>
      <div className='bg-green-200 '>

        <img src={foodItem.image} alt="" className=''/>
        <h1>{foodItem.title}</h1>

      </div>
      
    </div>
  )
}

export default FoodItem
