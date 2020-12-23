import React from 'react';
import Name from './Name';
import Description from './Description';
import Price from './Price';

class Product extends React.Component{

    render(){

        const {name, description, price}= this.props
        return(
            <div>
            <Name value ={name}/> 
            <Price value= {price}/>
            <Description value = {description}/>
            </div>
        );
    }

}

export default Product;
