// update data 
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css'
import axios from 'axios';
function UpdateData() {

 const location=useLocation();
 const navigate=useNavigate();
const {id,image,title,price,description}=location.state;


const [updateImage,setupdateImage]=useState(image);
const [updateTitle,SetUpdateTitle]=useState(title);
const [updatePrice,SetUpdatePrice]=useState(price);
const [updateDescripton,setupdateDescription]=useState(description);
  

function handleSubmite(e){
    e.preventDefault();
    axios.patch(`http://localhost:3000/products/${id}`,{
        image:updateImage,
        title:updateTitle,
        price:updatePrice,
        description:updateDescripton
    }).then(()=>{
        alert("Product successfully updated!");
        navigate('/Product')


    }).catch((err)=>{
        console.log(err);
    })
}


  return (
    <div>
         <div className='adddata'>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmite}>
                <input type="text" placeholder='image Url' value={updateImage} onChange={(e)=>{setupdateImage(e.target.value)}} style={{width:"100%", padding:"10px",marginBottom:"10px",border:"1px solid black",outline:"none"}} /><br></br>
                <input type="text" placeholder='Title' value={updateTitle}onChange={(e)=>{SetUpdateTitle(e.target.value)}} style={{width:"100%", padding:"10px",marginBottom:"10px",border:"1px solid black",outline:"none"}} /><br></br>
                <input type="text" placeholder='Price' value={updatePrice} onChange={(e)=>{SetUpdatePrice(e.target.value)}} style={{width:"100%", padding:"10px",marginBottom:"10px",border:"1px solid black",outline:"none"}} /><br></br>
                <textarea placeholder='Descriptiom' value={updateDescripton} onChange={(e)=>{setupdateDescription(e.target.value)}} style={{width:"100%", padding:"10px",marginBottom:"10px",border:"1px solid black",outline:"none"}}></textarea><br></br>
                <button type='submit' style={{padding : "8px 20px",marginLeft:"38%" ,cursor:"pointer"}}>update</button>
            </form>
         </div>
    </div>
  )
}

export default UpdateData;
