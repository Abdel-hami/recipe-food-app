import React, { useContext } from 'react'
import { GloalContext } from '../../context';
import RecipesItem from '../../components/recipe-item';

export default function Home() {
  const {recipesList,loading} = useContext(GloalContext);
  if (loading) return <div>Loading...Please wait!</div>
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>

      {
        recipesList && recipesList.length > 0
        ? recipesList.map((item)=> <RecipesItem item={item}/>)
        : <div>
          <p className='lg:text-4xl text-2xl text-center text-black font-extrabold'>Nothing To show Please Search Something</p>
        </div>
      }

    </div>
  )
}
