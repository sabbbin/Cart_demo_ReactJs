import React, { Component } from 'react';
const Cartitems = ({item, value}) => {
    const {id, title, img, price,total,count} =item;
    const {increment ,decrement, removeItems}=value;

    return ( 
        <div class='column'>
             <div className='columnwidth'>
             <img src={img} style={{width:'5rem',height:'5rem'}}
         alt='product' />
             </div>
           
                <div className='columnwidth'>
                 {title}
                </div>
                <div className='columnwidth'>
                    {price}
               </div>
                  <div className='columnwidth'>
                      <span className='btns' onClick={()=>decrement(id)}>-</span>
          <span className='btns'>{count}</span>
          <span className='btns' onClick={()=>increment(id)}>+</span>
                  </div>

                        <div className='columnwidth'>
                            <i className='fa fa-remove' onClick={()=>removeItems(id)}></i>

                        </div>

                  <div className='columnwidth'>
                      {total}

                  </div>


        </div>

     );
}
 
export default Cartitems;