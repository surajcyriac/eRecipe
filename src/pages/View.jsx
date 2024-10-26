import React, { useEffect, useState } from 'react'
import Header from '../components/Header.jsx';
import { useParams } from 'react-router-dom'


const View = () => {

    const {id} = useParams()
  // console.log(id);
  const [product,setProduct] = useState({})

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts?.find(item=>item.id==id))
    }
  },[])

  return (
    <>
        <Header/>   
        <div style={{paddingTop:'100px'}} className='flex content-center items-center mx-5'>
        <div className='grid grid-cols-2 items-center'>
          <img width={'80%'} height={'250px'} src={product?.image} alt="" />
          <div>
            <h1 className='text-5xl font-bold'>{product?.name}</h1>
            <h4 className='font-bold text-2xl'>Cuisine : <span className='text-orange-300'>{product?.cuisine}</span> </h4>
            <h4 className='font-bold'>Ingredients :</h4> <span>{product?.ingredients}</span>
            <h4>Category : {product?.category}</h4>
            <p>
              <span className='font-bold'>Instructions </span>: {product?.instructions}
            </p>
            <p><span className='font-bold my-5'>Client Rating </span>: {product?.rating}</p>
            <div className='text-yellow-400 space-x-2'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </>
   
  )
}