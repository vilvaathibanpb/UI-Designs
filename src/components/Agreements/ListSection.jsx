import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';


export default class ListSection extends Component {

    render() {
        let agreements = this.props.data;
        let products = agreements.products;
        console.log(products);
        const listItems = products['rental'].map((number) =>
            <li key={number.toString()}>
                {number}
            </li>
        );
        return (
            <div className="col-md-12 Section-agreement bg-white">
                <div className="hr-sect margin-top-2 bold margin-bottom-2"></div>
                <div className="col-md-4 padding-none">
                    <ul className="agreement-list-item">
                        {listItems}
                    </ul>
                </div>
            </div>
        );
    }
}