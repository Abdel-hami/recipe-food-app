import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './pages/home'
import Favorites from './pages/favorites'
import Details from './pages/details'
export default function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
          <Route path='/recipe-items/:id' element={<Details />}></Route>
        </Routes>
      </div>
    </div>
  )
}
