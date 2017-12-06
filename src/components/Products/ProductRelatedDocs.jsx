import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';


export default class ProductRelatedDocs extends Component {

    render() {

        return (
            <div className="col-md-12 Section-agreement bg-0c385b padding-none " id="agreements-item">
                <h5 className="font-color-fff bold margin-left-5 margin-top-5 related-padding">RELATED DOCUMENTS</h5>
                <hr className="custom-line-agreement" />
                <ul className="agreement-list-item related-font-color margin-left-5 margin-top-5">
                    <li>Renting a shop in mall</li>
                    <li>NOC from Landlord</li>
                    <li>Rental Agreement of different states</li>
                    <li>Commercial Lease</li>
                    <li>Residential Lease</li>
                </ul>
            </div>
        );
    }
}