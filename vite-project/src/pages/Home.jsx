import React from 'react'
import FoodList from '../components/FoodList'

const Home = ({foodData}) => {
  return (
    <div>
      <FoodList foodData={foodData} />
    </div>
  )
}

export default Home
