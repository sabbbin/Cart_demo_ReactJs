import React, { Component, setState } from 'react';
import '../App.css';
import Output from './todoitem';
class Input extends Component {
    constructor(props){
      super(props);
    
      this.state = { 
          items:[],
          title:'',
          ud:0,
          edititems:false
       };
    
    
    }
    
    
    
    
    
    handleChange=(e)=>{
      let nam=e.target.name;
      let val=e.target.value;   
      this.setState({
        [nam]:val
      });
    
    }
    
    handleSubmit=e=>{
      e.preventDefault();
    
    
    const newItem={
      id:0,
      title:this.state.title
    }
    
    
    const updatedItems=[...this.state.items, newItem];
    
    this.setState({
      items: updatedItems,
    
      title:'',
      id:0,
      edititems:false
    });
    
    
    console.log(this.state.items)
    }
    
    render() { 
     
      
    
    
      return (
      
        <div className='item'>
            <div className='iteminput'>
                <div className='itemheader'>
                    <h3> add item </h3>
                     
                </div>
                <div className='itemfield' >
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} placeholder='enter the title of items' />
                        
                </div>
                <div className='itembutton'>
                <button type={"submit"} onClick={this.handleSubmit} >
                        submit
                </button>
    
                </div>
    
            </div>
    
            <div className='iteminput itembutton'>
                <h3> list of items</h3>
                <ul>
                <Output items={this.state.items} />
                </ul>
              

          
                        <button  > clear list</button>
            </div>
    
          </div>
 
      )
    
    }
    }
    
    export default Input;
   

