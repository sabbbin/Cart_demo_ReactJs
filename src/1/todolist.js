import React, { Component } from 'react';


class abc extends Component {
 
    render() { 
        const {title}=this.props;
        console.log('hello'+title)
        return ( 
            <li>
                {title}
            </li>
         );
    }
}
 
export default abc;