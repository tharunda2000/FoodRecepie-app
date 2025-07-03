import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = "1326c5cd15c145e187ae20ef2ca01df1"

const Search = ({setFoodData}) => {

    const [query,setQuery] = useState("");
    const [inputValue,setInputValue] = useState("");
    const navigate = useNavigate();
     const [showLogin,setShowLogin] = useState(false);

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
        <i class="ri-account-circle-fill  bg-green-600 rounded-full p-2 px-2 cursor-pointer  hover:bg-green-700 text-2xl m-1" onClick={()=>{setShowLogin(!showLogin)}}></i>
        <div className={showLogin?'flex flex-col absolute w-35 bg-green-500 mt-11  h-28 z-60 right-10 rounded-b-4xl ':'hidden'}>
          <input type="button" value="Sign Up" className='my-2 cursor-pointer bg-green-600 h-8 rounded-b-3xl hover:bg-green-700' />
          <input type="button" value="Sign In" className='my-2 cursor-pointer bg-green-600 h-8 rounded-b-3xl hover:bg-green-700'/>
        </div>
      </div>
    </div>
  )
}

export default Search
