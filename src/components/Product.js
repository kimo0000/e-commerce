import React from 'react';
import Data from '../Data';
import { NavLink } from 'react-router-dom';

const Product = () => {

    const cartItem = (item) => {
         return (
                 <div className="card me-5 pt-2 ms-3 mb-5" key={item.id} style={{width: "18rem"}} >
                     <img src={item.img} className="card-img-top" height="300px" alt={item.title} />
                   <div className="card-body text-center">
                     <h5 className="card-title">{item.title}</h5>
                     <p className="card-text lead fw-bold">$ {item.price}</p>
                     <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">By Now</NavLink>
                   </div>
                 </div>
         );
    }


  return (
    <>
       <div className="container py-5">
         <div className="row">
           <div className="col-12 text-center display-5">
               <h1>Product</h1>
               <hr />
           </div>
         </div>
       </div>
       <div className='container'>
          <div className="row d-flex justify-content-center">
              {Data.map(cartItem)}
          </div>
       </div>
    </>
      
  )
};

export default Product;