import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GloalContext } from '../../context';

export default function Details() {
  const params = useParams();
  const [recipeDetailsData,setRecipeDetailsData] = useContext(GloalContext)
  return (
    <div>index</div>
  )
}
