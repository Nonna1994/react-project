import React from 'react';

class Name extends React.Component{
    render(){
        return(
            <h2> {this.props.value}</h2>
        );
    }

}

export default Name;
