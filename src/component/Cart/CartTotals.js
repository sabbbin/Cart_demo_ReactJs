import React, { Component } from 'react';


const CartTotals = ({value}) => {
    console.log(value.CartTotals)
    return (  
        <div>
          <div>
    <h5><strong>subtotal:</strong>{value.cartSubTotal}</h5>
          </div>
          <div>
    <h5><strong>tax:</strong>{value.cartTax}</h5>
          </div>
          <div>
    <h5><strong>subtotal:</strong>{value.cartTotal}</h5>
          </div>
        </div>
    );
}
 
export default CartTotals;