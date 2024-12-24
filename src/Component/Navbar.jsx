import React from 'react';
import './style.css';
import {NavLink} from 'react-router'

function Navbars() {
  return (
    <div>
      <div className='Header'>
        <div className='header-contain'>
         <NavLink to="./Home" className="home">Home</NavLink>
         <NavLink to="./Product">Product</NavLink>
         <NavLink to="./AddProduct">AddProduct</NavLink>
         <NavLink to="./Login">Login</NavLink>
         </div>
      </div>
    </div>
  );
}

export default Navbars;
