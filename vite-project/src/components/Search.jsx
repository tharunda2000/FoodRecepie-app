import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = "1326c5cd15c145e187ae20ef2ca01df1"

const Search = ({setFoodData}) => {

    const [query,setQuery] = useState("");
    const [inputValue,setInputValue] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchFood = async () => {
            
            const  res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`)
            const data = await res.json()
             
            setFoodData(data.results)
            

        }
        fetchFood();
        
    },[query])

    const handleKeyDown = (e) =>{
      if(e.key === 'Enter'){
        
        setQuery(inputValue)
        navigate('/search');
      }
      

    }

  return (
    <div className='flex me-10 items-center gap-2'>
      <input  type="text" className='rounded-3xl bg-green-200 py-2 px-4 border-1 border-green-600  w-60' placeholder='Search'  onChange={(e)=>setInputValue(e.target.value) } onKeyDown={handleKeyDown} />
      <i className="ri-search-2-line bg-green-600 rounded-full p-1 px-2 text-2xl cursor-pointer hover:bg-green-700" onClick={()=>{setQuery(inputValue)}} ></i>
      <div className=' bg-green-500 p-2 py-3 rounded-4xl'>
        <i class="ri-home-3-fill  bg-green-600 rounded-full p-2 px-2 cursor-pointer  hover:bg-green-700 text-2xl m-1"  onClick={()=>{navigate('/')}}></i>
        <i class="ri-account-circle-fill  bg-green-600 rounded-full p-2 px-2 cursor-pointer  hover:bg-green-700 text-2xl m-1"></i>
      </div>
    </div>
  )
}

export default Search
