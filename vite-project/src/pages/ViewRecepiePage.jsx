import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';

const ViewRecepiePage = ({foodData,setFoodData}) => {
    const { id } = useParams();
    const URL = `https://api.spoonacular.com/recipes/${id}/information`;
    const apiKey = "1326c5cd15c145e187ae20ef2ca01df1";
    const [food,setFood] = useState({})
    const [ingredients,setIngredients] = useState([])
    

    useEffect(()=>{
        async function fetchFood () {
            const res = await fetch(`${URL}?apiKey=${apiKey}`)
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIngredients(data.extendedIngredients);

        }
        
        fetchFood();
        
    },[])

  return (
    <div className=''>
        <Navbar foodData={foodData} setFoodData={setFoodData}/>
        
        <div className='p-10'>
            <h1 className='mt-40 text-3xl align-middle'> Let's make {food.title}</h1>    
            <div className='flex'>

                <div className='flex justify-center flex-col items-start'>
                    
                    <img src={food.image} alt="" srcset="" className='w-150 mt-10' />
                </div>

                <div className='flex  flex-col items-start ms-30'>
                    
                    <h1>Ingredients</h1>
                    <div>
                        {
                            ingredients.map((ingredient)=>{
                                <Ingredients ingredient={ingredient}/>
                            })
                        }
                        
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ViewRecepiePage
