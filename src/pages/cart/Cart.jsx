import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, addCart,removeCart } from '../../redux/action';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./cart.css"

const Cart = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteCart(item));
  }

  const handleRemove = (item) => {
    dispatch(removeCart(item));
  }
  const handleAdd = (item) => {
    dispatch(addCart(item));
  }


  const cartItems = (cartItem) => {

    return (
      <>
      <table className="table">
      <tbody className="col" key={cartItem.id}>
        <tr className="topCol">
          <td className="left">
            <img src={cartItem.image} alt={cartItem.title} />
            <h3>{cartItem.title}</h3>
          </td>   
          <td className="right">
            ${cartItem.price}
          </td>
            <td className='middle'>
            <button className='minus' onClick={()=>handleDelete (cartItem)}>
            -
            </button>
            {cartItem.qty}
            <button className='plus' onClick={()=>handleAdd(cartItem)}>
              +
            </button>
            </td>
            <td className="right">
            <span>${cartItem.qty*cartItem.price}</span>
          </td>
            <td><button  className='remove'  onClick={() =>handleRemove(cartItem)}><i className="fa-sharp fa-solid fa-xmark"></i></button></td>
           </tr>
      </tbody>
      </table>
      </>  
    );
  }

  const emptyCart = () => {
    return (
      <div className="emptyBox">
        <h1>Shopping Cart</h1>
        <span><i class="fa-solid fa-cart-arrow-down"></i></span>
        <h3>Your Cart is Empty</h3>
        <Link to="/" className='button'>Return To Shop</Link>
      </div>
    );
  }

  const buttonCheckout = () => {
    return (
      <div className="col">
        <Link to="/checkout" className='button'>Proceed to Checkout</Link>
      </div>
    );
  }

  return (
    <>
        <div className='cart'>
          <div className="container"> 
          {
            state.length>0&&
            <>
              <div className="back">
                <button
                onClick={() => navigate(-1)}>
                Back
                </button>
              </div>
              <table className='table'>
                  <tbody >
                      <tr className='description'>
                      <td className='product'>Product</td>
                      <td>Price</td>
                      <td>Quantity</td>
                      <td>Total</td>
                      <td>Remove</td>
                      </tr>
                    </tbody>
                </table>  
              </>

             }                  
                <div className="row">
                  {state.length === 0 && emptyCart()}
                  {state.length !== 0 && state.map(cartItems)} 
                  {state.length !== 0 && buttonCheckout()} 
                </div>
            </div> 
        </div>
    </>
  )
}

export default Cart