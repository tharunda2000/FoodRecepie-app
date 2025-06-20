import React from 'react'
import Search from './components/Search'
import { useState } from 'react';
import FoodList from './components/FoodList';
import Navbar from './components/Navbar';

const App = () => {

  const [foodData,setFoodData] = useState([]);

  return (
    <div>
      <Navbar foodData={foodData} setFoodData={setFoodData}/>
      
      <FoodList foodData={foodData} />
      
    </div>
  )
}

export default App
