import React, { Component } from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './Emptycart';
import {ProductConsumer } from '../context';
import CartList from './CartList';
import CartTotals from './CartTotals';


class Cart extends Component {
 
    render() { 
        return ( 
            <section>
                <ProductConsumer>
                    {value=>{
                        const {cart}=value;
                      
                        if (cart.length>0){
                            return (
                                <React.Fragment>
                                   
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals  value={value}  />
                                    <h4>hellow </h4>
                                </React.Fragment>
                            );
                        } else{
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
         );
    }
}
 
export default Cart;
