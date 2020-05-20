import React, { Component } from 'react';
import ProductList from './Productlist';
import {storeProducts ,detailsproducts } from '../data';

const ProductContext=React.createContext();

class ProductProvider extends Component{

    state={
        products:[],
        detailsproducts:detailsproducts,
        cart:storeProducts,
        modalOpen:true,
        modalProduct:detailsproducts,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0


    };

    componentDidMount (){
        this.storeProducts();
    }

    getItem=id=>{
        const product=this.state.products.find(item=>item.id==id);
        return product;
    }
    handleDetail=(id)=>{
      const product=this.getItem(id);
      this.setState(()=>{
          return{detailsproducts:product }
      })
    };
    addToCart=(id)=>{
        let tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.incart=true;
        product.count=1;
        const price=product.price;
        product.total=price;
        this.setState(()=>{
            return {products:tempProducts, cart:[...this.state.cart, product]}
        },()=>{
            this.addTotals();
        })
      
         
        
    }

    addTotals=()=>{
        let subtotal=0;
        this.state.cart.map(item=>(
            subtotal+=item.total
        ))
       const tempTax=subtotal*0.1;
       const tax=parseFloat(tempTax.toFixed(2));
       const total=subtotal+tax;
       this.setState(()=>{
         return {
        cartSubTotal:subtotal,
        cartTax:tax,
        cartTotal:total}
       })

    }

    clearCart=()=>{
        this.setState(()=>{
            this.setState(()=>{
                return {cart:[]}
            })
        }, ()=>{
            this.storeProducts();
            this.addTotals();
        }
       
        )
    }
    removeItems=id=>{
        let tempProducts=[...this.state.products];
        let tempCart=[...this.state.cart];
        tempCart=tempCart.filter(item=>item.id==id);
        const index=tempProducts.indexOf(this.getItem(id));
        let removedProduct=tempProducts[index];
        removedProduct.incart=false;
        removedProduct.count=0;
        removedProduct.total=0;
        this.setState(()=>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            }
        }, ()=>{
            this.addTotals();
        }
     
        )

    }
    decrement=(id)=>{
        let tempCart=[...this.state.cart];
       
        const index=tempCart.indexOf(this.getItem(id));
        const product=tempCart[index];
        product.count=product.count-1;
        if (product.count<=0){
            this.removeItems(id);
        }else {
        product.total=product.count*product.price;
        this.setState(()=>{
            return {cart:tempCart}
        }, ()=>{
            this.addTotals();
        })
        }

    }
    

    increment=(id)=>{
        let tempCart=[...this.state.cart];
       
        const index=tempCart.indexOf(this.getItem(id));
        const product=tempCart[index];
        product.count=product.count+1;
     
        product.total=product.count*product.price;
        this.setState(()=>{
            return {cart:tempCart}
        })        }

 
  

        storeProducts=()=>{
            let tempProducts=[];
            storeProducts.forEach(item=>{
                const singleItem={...item};
                tempProducts=[...tempProducts, singleItem];
            });
            this.setState(()=>{
                return {products:tempProducts};
            })
        }

        openModal=id=>{
            const product=this.getItem(id);
            this.setState(()=>{
                return {modalProduct:product,modalOpen:true} ;
            })

        }

        closeModal=()=>{
            this.setState(()=>{
                return {modalOpen:false}
            }) 
        }

    render(){
        return(

            <ProductContext.Provider value ={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItems:this.removeItems
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider, ProductConsumer};