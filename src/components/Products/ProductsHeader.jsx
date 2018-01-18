import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';
import { Link } from 'react-router-dom';


export default class ProductsHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let header = this.props.data;
        let headerUpper = header.charAt(0).toUpperCase() + header.slice(1);
        console.log(header);
        return (
            <div>
                <header className="header-agreements">
                    <div className="container">
                        <div className="row">
                            <h1 className="font-color-1db0e6 font-weight margin-left-2">{headerUpper} <Link to='/'><span className="pull-right Agreement-close-btn margin-right-2">X</span></Link></h1>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}