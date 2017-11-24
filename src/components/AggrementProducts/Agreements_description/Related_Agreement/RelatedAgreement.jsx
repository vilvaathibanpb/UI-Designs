import React, { Component } from 'react';
import '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/agreementsProducts.css';
import '/home/rahul/Desktop/dockettech_frontend/src/style.css';

export default class RelatedAgreement extends Component {
    render() 
    
    {
        return (
                <button className="agreement_product_btn2 margin-left-2" type="button">
                    <span className="dropbtn">RELATED AGREEMENT<i className="fa fa-caret-down"></i></span>
                        <div id="relatedAgreement" className="dropdown-content">
                            <a href="#">AGREEMENT1</a>
                            <a href="#">AGREEMENT2</a>
                            <a href="#">AGREEMENT3</a>
                        </div>
                </button>
           
        );
    }
}