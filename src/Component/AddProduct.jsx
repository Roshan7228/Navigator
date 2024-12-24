import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
function AddProduct() {
  
 const  AddDataproduct={
  image:"",
  title:"",
  price:"",
  description:"",
  category:""
 }

  let [assing,setassing]=useState(AddDataproduct);

  function handalesSubmit(e){
     e.preventDefault();
    
     axios.post("http://localhost:3000/products",assing)
     .then((res)=>{
      setassing(res.data);
     }).catch((err)=>{
      console.log(err);
     })
    
 

  }

  const handlechange=(e)=>{
    setassing({...assing,[e.target.name]:e.target.value})
    console.log(e.target.value)
  }
   


  return (
    <div>
       <div className='adddata'>
       <h1>Addproduct</h1>  
        <form onSubmit={handalesSubmit} style={{padding:"10px"}}>
          <input type="text" placeholder='image'name='image' value={assing.image}  onChange={handlechange}  style={{width:"100%", padding:"10px",marginBottom:"10px",border:"1px solid black",outline:"none"}}/><br></br>
          <input type="text" placeholder='title' name='title' value={assing.title} onChange={handlechange}  style={{width:"100%", padding:"10px",marginBottom:"10px",border:"1px solid black",outline:"none"}} /><br></br>
          <select name="category" value={assing.category} onChange={handlechange}   style={{width:"100%", padding:"10px",marginBottom:"10px" ,border:"1px solid black",outline:"none"}}>
            <option value="">Select Category</option>
            <option value="Mens_Clothing">Men's Clothing</option>
            <option value="jewellery">Jewellery</option>
            <option value="electronics">Electronics</option>
            <option value="Womens_Clothing">Women's Clothing</option>
          </select><br></br>
          <input type="text" placeholder='Price' name='price' value={assing.price} onChange={handlechange} style={{width:"100%", padding:"10px",marginBottom:"10px" ,border:"1px solid black",outline:"none"}}/><br></br>
          <input type="text"  placeholder='Description' name='description' value={assing.description} onChange={handlechange} style={{width:"100%", padding:"10px",marginBottom:"10px" ,border:"1px solid black",outline:"none"}}/>
          <input type='submit' style={{padding : "8px 20px",marginLeft:"38%" ,cursor:"pointer"}}/><br /><br />
        </form>
           

       </div>
    </div>
  )
}

export default AddProduct
