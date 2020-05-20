import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {ProductConsumer} from './context';

class Product extends Component {
    state = { 
      
     }
    render() { 
        const {id,  title, img,price,incart} =this.props.product;
        return ( 

            <div className='card'>

                <ProductConsumer>

                    {value=>(
                             <div className='img-container' onClick={()=>
                             value.handleDetail(id)
                             }>
                             <Link to='/details'>
                             <img  src={img} alt='product' className='card-img-top' />
             
                             
                             </Link>
                             <button className='cart-btn'
                                 disabled={incart?true:false}
                                 onClick={()=>{
                                   value.addToCart(id);
                                   value.openModal(id);}

                                }
                             >
                                     { incart?(<p disabled>{''} <strong>In Cart</strong></p>)
                                 :(<i className='fa fa-cart-plus'></i>)    
                                 }
                             </button>
                                
                             </div> 

                    )}
           

                </ProductConsumer>
            
                <div className='footer'>
                <p> {title}</p>
            <h6><span>$</span>{price}</h6>
                

                </div>
                
             
           
            </div>
         );
    }
}
 
Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        incart:PropTypes.bool
    }
      
    ).isRequired
}
export default Product;