import React from 'react'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Kids from './pages/Kids'
import Login from './pages/Login'
import Mens from './pages/Mens'
import Profile from './pages/Profile'
import Womens from './pages/Womens'
import Reg from './pages/Reg'
import { Route, Routes } from 'react-router-dom'
import MensPro from './pages/products/MensPro'

const RoutersAll = () => {
  return (
    <Routes>
     
     <Route  path={'/'} element={<Home/>} />
     <Route  path={'/Kids'} element={<Kids/>} />
     <Route  path={'/Login'} element={<Login/>} />
     <Route  path={'/Mens'} element={<Mens/>} />
     <Route  path={'/Womens'} element={<Womens/>} />
     <Route  path={'/Profile'} element={<Profile/>} />
     <Route  path={'/Reg'} element={<Reg/>} />
     <Route  path={'/CART'} element={<Cart/>} />

{/* products */}
     <Route  path={'MensPro'} element={<MensPro/>} />

      {/* <Cart/>
      
      <Kids/>
      <Login/>
      <Mens/>
      <Profile/>
      <Womens/>
      <Reg/> */}
    </Routes>
  )
}

export default RoutersAll
