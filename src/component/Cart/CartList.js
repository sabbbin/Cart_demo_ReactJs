import React, { Component } from 'react';
import Cartitems from './Cartitem';
import {ProductConsumer}  from '../context';

const CartList = ({value}) => {
    const {cart}=value;

    return (
    
     
     
      <div>
 {   cart.map(item =>{
                    return <Cartitems key={item.id} item={item}  value={value}/>
               })
            }
      </div>
                 


            
       
            
       

       
       
     );
}
 
export default CartList;