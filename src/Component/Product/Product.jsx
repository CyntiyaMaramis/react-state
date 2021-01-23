import React, { Component } from 'react';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
        days:0
    }

    handlerDaysChange = (newvalue) =>{
        this.setState({days:newvalue})
    }

    render() {
      return (
      <div>
          <h1> Jumlah Hari : {this.state.days}</h1>
          <CardProduct onDaysChange={(value) => this.handlerDaysChange(value)}/>
      </div>
      );
    }
}

export default Product;