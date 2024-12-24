import React from 'react'
import Home from '../Component/Home';
import Product from '../Component/Product';
import AddProduct from '../Component/AddProduct';
import Login from '../Component/Login';
import Update from '../Component/Update'
import { Routes, Route } from 'react-router-dom'
import {Privates} from '../Component/Private';


const Mainroutess = () => {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>

        <Route path='/Product' element={
          <Privates>
          <Product />
          </Privates>}></Route>
        <Route path="/AddProduct" element={<AddProduct />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path='/Update' element={<Update />}></Route>

        <Route path='*' element={<h1>404: Page not found</h1>}></Route>
              </Routes>
    </div>
  )
}

export default Mainroutess
