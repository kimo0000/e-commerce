import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import Data from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetail = () => {

   const [ cartBtn, setCartBtn ] = useState('Add To Cart')

   const dispatch = useDispatch();


   const proid = useParams();
   const proDetail = Data.filter((x) => (x.id == proid.id))
   const product = proDetail[0]
    console.log(proDetail);


    const HandleCart = (product) => {
         if(cartBtn === 'Add To Cart') {
             dispatch(addItem(product))
             setCartBtn('Remove From Cart')
         }else {
             dispatch(delItem(product))
             setCartBtn('Add To Cart')
         }
    }
   


    return(
        <>
       <div className='container mt-5 py-5 bg-light py-5'>
           <div className='row'>
               <div className='col-6 d-flex justify-content-center product'>
                   <img src={product.img} alt={product.title} height='300px' />
               </div>
               <div className='col-6'>
                   <h1 className='display-4 fw-bold'>{product.title}</h1>
                   <hr />
                   <h5 className='h5 display-6 fw-bold mt-5'>$ {product.price}</h5>
                   <p className='lead'>{product.desc}</p>
                   <button className='btn btn-outline-primary mt-2' onClick={() => HandleCart(product)}>{cartBtn}</button>
               </div>
           </div>
       </div>
       </>
    )
}

export default ProductDetail;