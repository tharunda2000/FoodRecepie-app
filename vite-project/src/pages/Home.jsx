import React from 'react'
import FoodList from '../components/FoodList'
import Homebanner from '../components/Homebanner'


const Home = ({foodData}) => {
  return (
    <div className=''>
      <Homebanner/>
      <FoodList foodData={foodData} />
    </div>
  )
}

export default Home
