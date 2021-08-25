import React, { useState } from "react";
import './Cart.css'
import { CartState } from "./Context/Context";


export const Cart = () => {

const { state: { cart } } = CartState();


  const [cartRecords, setCartRecords] = useState(cart)

  const subTotal = cartRecords.reduce((a, c) => a + c.price *c.quantity, 0)
  const shippingPrice = 8
  const totalPrice = subTotal + shippingPrice



  function handleRemove(id) {
      const newList = cartRecords.filter((item) => item.id !== id)
      setCartRecords(newList)
  }


  return (
    <div className="cart">
      <div className="left">
        <h3>My Cart</h3>
        <hr></hr>

        <div className="cartRecordsList">
          {cartRecords.length === 0 && <div>Cart is empty</div>}
            {cartRecords.map((record) => 
            <div className="recordItemWrapper">
                <img src={record.picture} alt="" width="150"></img>
                <div className="informations">
                    <h2>{record.artist}</h2>
                    <p>{record.title}</p>
                    <p>Genre: {record.genre}</p>
                </div>
                <div className="quantityButton">
                    <button>-</button>
                    <span>{record.quantity}</span>
                    <button>+</button>
                </div>
                <div className="purchase">
                    <h3>{record.price}</h3>
                    <button onClick={()=> handleRemove(record.id)}>X</button>
                </div>
            </div>)}
        </div>
      </div>

      <div className="right">
        <h3>Order Summary</h3>
        <hr></hr>
        <span>Subtotal<span>{subTotal}</span></span>
        <span>Shipping<span>8,00€</span></span>
        <span>Berlin, Germany</span>
        <select>
          <option>Germany - 8,00€</option>
          <option>Pick up at the store</option>
        </select>
        <hr></hr>
        <h3>Total<pan>{totalPrice}</pan></h3>
        <span>Tax included</span>
        
      </div>

    </div>
  )
};
