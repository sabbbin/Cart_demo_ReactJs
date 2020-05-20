import React, { Component } from 'react';
import abc from './todolist'

class Output extends Component {
    
     
    render() { 
        const {items}=this.props;
        return (  
            <div className='output'>
                {items.map(item=>{
                    console.log(item.title)
                    return <abc  key={item.id} item={item.title} />;

                })}


            </div>

        );
    }
}
 
export default Output;