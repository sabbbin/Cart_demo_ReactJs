import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
          <nav className='navbar'>
              <div  className='navbar-nav'>
                  <ul >
                      <li>
                      <Link to='/'>
                   <img  src='img/product1.jpg' alt='store' className='navbar-band' />
                     </Link>
                    </li>
             
                      <li>
                      <Link to='/' className='nav-link'>
                          product
                      </Link>
                      </li>

                  </ul>
           
                    

              </div>
               
              <div className='navbar-button'>
               
                      <Link to='/cart' className='ml-auto'>
                          <button>
                         <span><i className='fa  fa-cart-plus'></i></span>  my cart
                          </button>
                         
                      </Link>

                  
              </div>

             

          </nav>
         );
    }
}
 
export default Navbar;