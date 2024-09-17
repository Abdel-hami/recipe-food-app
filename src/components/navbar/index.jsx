import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GloalContext } from '../../context';
export default function NavBar() {
    const {searchParams, setSearchParams,handleSubmit} = useContext(GloalContext);
    return (
        <nav className='flex items-center justify-between container py-8 mx-auto flex-col lg:flex-row gap-5 lg:gap-0' >
            <h1 className='text-3xl font-semibold'>
                <NavLink to={'/'}>
                    FoodRecipe
                </NavLink>
            </h1>

            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name='search' 
                value={searchParams}
                onChange={(e)=>{
                    setSearchParams(e.target.value)
                }}
                placeholder='enter items' 
                className='bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 text-center' />
            </form>
            <ul className='flex items-center gap-5 text-xl'>
                <li>
                    <NavLink to={'/'} className='text-black hover:text-gray-700 duration-300'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/favorites'} className='text-black hover:text-gray-700 duration-300'>Favorites</NavLink>
                </li>
            </ul>
        </nav>
    )
}
