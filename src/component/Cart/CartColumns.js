import React, { Component } from 'react';
import '../../App.css';

class CartColumns extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='column'>
                <div className='columnwidth'>
                    image

                </div>
                <div className='columnwidth'>
                    Title

                </div>
                <div className='columnwidth'>
                    Perprice

                </div>
                <div className='columnwidth'>
             change

                </div>
                <div className='columnwidth'>
                 Remove

                </div>
                <div className='columnwidth'>
                    Total

                </div>

            </div>
         );
    }
}
 
export default CartColumns;