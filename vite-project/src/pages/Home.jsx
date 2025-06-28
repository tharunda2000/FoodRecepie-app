import React from 'react'
import FoodList from '../components/FoodList'
import Homebanner from '../components/Homebanner'
import Navbar from '../components/Navbar'


const Home = ({foodData,setFoodData}) => {
  return (
    <div className=''>
      <Navbar foodData={foodData} setFoodData={setFoodData}/>
      <Homebanner/>
      <FoodList foodData={foodData} />
    </div>
  )
}

export default Home
