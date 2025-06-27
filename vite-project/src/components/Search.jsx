import React, { useEffect,useState } from 'react'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = "1326c5cd15c145e187ae20ef2ca01df1"

const Search = ({setFoodData}) => {

    const [query,setQuery] = useState("");
    const [inputValue,setInputValue] = useState("");

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
        setQuery(inputValue);
      }

    }

  return (
    <div className='flex me-10 items-center gap-2'>
      <input type="text" className='rounded-3xl bg-green-200 py-2 px-4 border-1 border-green-600  w-60' placeholder='Search'  onChange={(e)=>setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
      <i className="ri-search-2-line bg-green-600 rounded-full p-2 px-3 cursor-pointer hover:bg-green-700" onClick={()=>{setQuery(inputValue)}} ></i>
    </div>
  )
}

export default Search
