import React, { useEffect,useState } from 'react'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = "1326c5cd15c145e187ae20ef2ca01df1"

const Search = ({foodData,setFoodData}) => {

    const [query,setQuery] = useState("");

    useEffect(()=>{
        const fetchFood = async () => {
            const  res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`)
            const data = await res.json()
            setFoodData(data.results)
            

        }
        fetchFood();
    },[query])

  return (
    <div className='flex'>
      <input type="text" className='rounded-3xl bg-green-200 py-2 px-4 border-1 border-green-600 me-10 w-60' placeholder='Search' value={query} onChange={(e)=>setQuery(e.target.value)} />
      
    </div>
  )
}

export default Search
