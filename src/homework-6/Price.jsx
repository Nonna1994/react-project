import React from 'react';

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: props.value,
            currency:"$",
        }

    }

    handleClickChangeCurrency=()=>{
        if (this.state.currency === "$"){
            this.setState({
                price: this.state.price * 500,
                currency:"dram",
           })
        }
        else

        this.setState({
            price: this.state.price/500,
            currency:"$",
       })
    }

    render() {
        return (
            <div>
                <span> {this.state.price} {this.state.currency}</span>
                <button 
                onClick= {this.handleClickChangeCurrency}>
                    Change the currency
                </button>
            </div>

        );
    }

}

export default Price;
