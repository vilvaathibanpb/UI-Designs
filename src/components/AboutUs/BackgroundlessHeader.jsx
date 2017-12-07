import React, { Component } from 'react';
import NavBar from './NavBarwithBlack';
import SearchBox from '../Home/SearchBox/SearchBox.jsx';
import CartButton from '../Home/CartButton/CartButton.jsx';
import DocketLogo from '../../assets/images/Docket Logo.svg';

export default class HomeHeader extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <section className="agreement-bg">
                    <div className="container">
                        <NavBar style={{color:'black !important'}} />
                        <div className="container custom-margin">
                            <div className="row">
                                <div className="col-md-2 visible-lg navbar-brand-custom">
                                    <a className="navbar-brand" href="#">
                                        <img id="logo" src={DocketLogo} alt="DocketTech_logo" className="navbar-brand-custom" />
                                    </a>
                                </div>
                                <div className="col-md-8">
                                    <SearchBox />
                                </div>
                                <div className="col-md-2 visible-lg visible-md visible-sm">
                                    <CartButton />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}