import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css'
import { Link } from 'react-router-dom';

function Product() {

    let [ProductData, SetProductData] = useState([]);
    let [currentPage,SetCurrentPage]=useState(1);
    
    let Page=5;

    // display Data
    function FetchData() {
        axios.get("http://localhost:3000/products")
            .then((res) => {
                console.log(res.data);
                SetProductData(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        FetchData()
    }, [])

//   delete Data
   
function handleDelete(id) {
    axios.delete(`http://localhost:3000/products/${id}`)
    .then(() => {
    alert("Product successfully deleted.")
    })
    .catch((err) => {
    console.log(err);
    })
    }


    // Pagination logic

    
    const totalPage=Math.ceil(ProductData.length/Page)
    console.log(totalPage);

    const changePage = (direction) => {
        SetCurrentPage((prev) => {
          if (direction === "prev") return Math.max(prev - 1, 1);
          if (direction === "next") return Math.min(prev + 1, totalPage);
          return prev;
        });
        
      };

     
      const current = ProductData.slice((currentPage - 1) * Page, currentPage * Page);
        console.log(current);



    return (
        <div>
            <div className='contain'>
                <div className='container-data'>
                    {current.map((e ,index) => {
                        return (
                            <div className='Main-Container' key={index}>
                                <div className='contain-image'>
                                <img src={e.image} alt={e.title} />
                            </div>
                                <div className='container-title'>
                                    <h3>{e.title}</h3>
                                    <p>{(e.category)}</p>

                                </div>
                                <div className='Container-PRICE'>
                                    <h2>{`${e.price}$`}</h2>
                                </div>
                                <div className='Container-dec'>
                                    <p>{e.description}</p>
                                </div>
                                <div style={{ padding: '10px', textAlign: 'center' }}>
                                    <button

                                        style={{
                                            marginRight: '10px',
                                            color: 'black',
                                            padding: '8px 12px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            marginTop:'10px'
                                        }}
                                        onClick={(el)=>{handleDelete(e.id,el )}}
                                    >
                                        Delete
                                    </button>
                                    <Link to="/Update" state={{
                                        id:e.id,
                                        image:e.image,
                                        title:e.title,
                                        price:e.price,
                                        description:e.description
                                    }}
                                    style={{
                                        marginRight: '10px',
                                        color: 'black',
                                        padding: '8px 12px',
                                        border: 'none',
                                        borderRadius: '4px',
                                    }}>Edit</Link>


                                </div>


                            </div>)
                    })}

                </div>
                {/* pagination next or prev btn  */}
                <div className='pagination-btn'>
                <button onClick={()=>{changePage("prev")}}  disabled={currentPage===1}>Prew</button>
                <span style={{paddingRight:"10px"}}>{currentPage}</span>
                    <button onClick={() => changePage("next")} disabled={currentPage===totalPage}>Next</button>
                    
                </div>


            </div>

        </div>
    )
}

export default Product
