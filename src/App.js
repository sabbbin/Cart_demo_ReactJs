import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar.js';
import ProductList from './component/Productlist';
import Product from './component/Product';
import Default from './component/Default';
import Details from './component/Details';
import Cart from './component/Cart/Cart';
class App extends Component {

render() { 
 
  return ( 
    <React.Fragment>
      <Navbar />
     
      <Switch>
        <Route path='/' exact component={ProductList} ></Route>
        <Route path='/details' component={Details} ></Route>
        <Route path='/cart' component={Cart} ></Route>
        <Route path='/product' component={Product   } ></Route>
        <Route component={Default} ></Route>
      </Switch>
     
     

    </React.Fragment>
   );



 
  }
}
export default App;
