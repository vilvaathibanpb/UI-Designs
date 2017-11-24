import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/home.css';
import Cartbutton from '../../../assets/images/Home/Web Banner/Icon_Cart.png';

export default class CartButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <button className="cart-button">
                    <img src={Cartbutton} />
                    <span className="margin-left-2 margin-right-2">CART</span>
                    <span className="margin-left-2 margin-right-2">0</span></button>
            </div>


        );
    }
}