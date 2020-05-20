import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from './context'
import '../App.css';
class ProductList extends Component {
  
  
    render() { 
        return ( 
            <React.Fragment>
         
                  <div className='product-container'>
                <div className='text-title'>
                    our product
                </div>
                         
               <ProductConsumer>
                   {value=>{
                       return value.products.map(product=>{
                           return < Product key={product.key} product={product} />;
                       })
                   }}
               </ProductConsumer>

               
                
            </div>

            </React.Fragment>
          
         );
    }
}
 
export default ProductList;