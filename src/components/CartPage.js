import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/actions/index';
import { NavLink } from 'react-router-dom';

const CartPage = () => {

   const state = useSelector((state) => state.ItemReducer);
   const dispatch = useDispatch();



   const HandleClose = (item) => {
       dispatch(delItem(item))
   }


  const cartItems = (cartItem) => {
          return(
              <div className='container py-5 my-5 bg-light' key={cartItem.id}>
                      <button className='btn btn-close float-end' onClick={() => HandleClose(cartItem)}></button>
                  <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src={cartItem.img} alt={cartItem.title} height='300px' />
                        </div>
                        <div className='col-6 '>
                            <h1>{cartItem.title}</h1>
                            <hr />
                            <h4 className='lead fs-2 fw-bold'>$ {cartItem.price}</h4>
                        </div>
                    </div>
                  </div>
              </div>
          );
  }


  const emptyCart = () => {
       return(
           <div className='py-5 my-5 bg-light'>
                  <div className='container display-5 fs-3 fw-bold'>
                      Your Cart Is Empty
                  </div>
           </div>
       );
  }


  const buttons = () => {
      return(
          <div className='container'>
              <div className='row'>
                   <NavLink to='/checkout' className='btn btn-outline-primary w-25 mx-auto'>
                      Proceed To Checkout
                   </NavLink> 
              </div>
          </div>
      );
  }


  return (
      <>
          { state.length === 0 && emptyCart() }
          { state.length !== 0 && state.map(cartItems) }
          { state.length !== 0 && buttons() }
      </>
      )
  }

export default CartPage;
