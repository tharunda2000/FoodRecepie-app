import React from 'react'
import FoodList from '../components/FoodList'
import Navbar from '../components/Navbar'

const SearchPage = ({foodData,setFoodData}) => {
  return (
    <div>
        <Navbar foodData={foodData} setFoodData={setFoodData}/>
        <FoodList foodData={foodData} />
    </div>
  )
}

export default SearchPage
