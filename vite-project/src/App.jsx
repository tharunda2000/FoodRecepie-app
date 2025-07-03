import React from 'react'
import Search from './components/Search'
import { useState } from 'react';
import FoodList from './components/FoodList';
import Navbar from './components/Navbar';
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom' 

import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import ViewRecepiePage from './pages/ViewRecepiePage';

const App = () => {

  const [foodData,setFoodData] = useState([]);

  const router =createBrowserRouter([

  {
    path: '/',
    element: <Home foodData={foodData} setFoodData={setFoodData}/>
  },
  {
    path: '/search',
    element: <SearchPage foodData={foodData} setFoodData={setFoodData}/>
    
  },
  {
    path: '/recepie/:id',
    element: <ViewRecepiePage foodData={foodData} setFoodData={setFoodData} />
    
  }

]);

  return (
    <div >
      
      <RouterProvider router={router}/>
      
      
    </div>
  )
}

export default App
