import React, { Component } from 'react';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';
import '../App.css';
class Details  extends Component {
    state = {  }
    render() { 
        return ( 
           <ProductConsumer>
               {value=>{
                   const{id, company ,img,price,incart,info,title}=value.detailsproducts;
                 
                   return(
                       <div className='detailcontainer '>
                           <div className='image-left'>
                               <img src={img} alt='image' className='img' />

                           </div>
                           <div className='text-right'>
                               <ul>
                                   <li>
                                    <strong>title:</strong> {title}
                                   </li>
                                   <li>

                                   <strong>made by:</strong>{company}
                                   </li>
                                   <li>
                              <strong>price</strong>:${price}
                                   </li>
                                   <li>
                              <strong>info</strong>:{info}
                                   </li>
                               </ul>
                            
                           <Link to ='/'>
                               <button className='continue-btn btn' >
                                   continue shopping
                               </button>
                           </Link>
                           <Link to='/cart'>
                               <button 
                               onClick={()=>{
                                   value.addToCart(id);
                                   
                                   value.openModal(id);
                               }}
                               disabled={incart?true:false} className={incart?'cart1 btn':'cart2 btn'}>
                                   {incart?(<p>incart</p>):(<p>Add to cart</p>)}
                               </button>
                           </Link>
                                                         
 
                           </div>

                       </div>
                   );
               }}
           </ProductConsumer>
         );
    }
}
 
export default Details ;