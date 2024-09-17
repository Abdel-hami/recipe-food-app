import React, { useContext } from 'react'
import { GloalContext } from '../../context';
import RecipesItem from '../../components/recipe-item';

export default function Favorites() {
  const {favoritesList} = useContext(GloalContext);
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>

      {
        favoritesList && favoritesList.length > 0
        ? favoritesList.map((item)=> <RecipesItem item={item}/>)
        : <div>
          <p className='lg:text-4xl text-2xl text-center text-black font-extrabold'>Nothing Added</p>
        </div>
      }

    </div>
  )
}
