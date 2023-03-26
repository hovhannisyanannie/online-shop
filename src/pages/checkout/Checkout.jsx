import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./checkout.css"


const Checkout = () => {
    const state = useSelector((state) => state.CartReducer);
    const navigate = useNavigate();

    let total = 0;
    const itemList = (item) => {

        total = total + item.price*item.qty;

        return (
            <div className="content">
                <p>{item.title}</p>
                <span>${item.price}</span>
            </div>
        );
    }


  return (
    <>
        <div className='checkout'>
            <div className="container">
            <div className="back">
                    <button
                    onClick={() => navigate(-1)}>
                    Back
                    </button>
            </div>
            <div className="inner"> 
                <form className="box">
                <h2 className='title'>Billing details</h2>
                    <div className="form-group">
                        <label htmlFor="name">First Name</label>
                        <input type="text" id='name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id='address' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id='phone' />
                    </div>                   
                    <div className="form-group">
                        <button className='button'>Checkout</button>
                    </div>
                </form>
                <div className="box">
                    <div className="total-cart">
                        <h2 className='title'>Your Order <span>{state.length}</span></h2>
                        <p className='product'>Your Product</p>
                        <div className="total-info">
                            {state.map(itemList)}
                        </div>
                        <div className="total">
                            <p>Total:</p>
                            <span>${total}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Checkout
