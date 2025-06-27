import React from 'react'
import Search from './components/Search'
import { useState } from 'react';
import FoodList from './components/FoodList';
import Navbar from './components/Navbar';
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom' 

import Home from './pages/Home';

const App = () => {

  const [foodData,setFoodData] = useState([]);

  const router =createBrowserRouter([

  {
    path: '/',
    element: <Home foodData={foodData}/>
  }

]);

  return (
    <div className='bg-green-100'>
      <Navbar foodData={foodData} setFoodData={setFoodData}/>
      <RouterProvider router={router}/>
      
      
    </div>
  )
}

export default App
