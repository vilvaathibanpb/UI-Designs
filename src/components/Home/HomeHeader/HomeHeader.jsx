import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import CartButton from '../CartButton/CartButton.jsx';
import DocketLogo from '../../../assets/images/Home/Web Banner/Logo.png';

export default class HomeHeader extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <section className="header-bg">
                    <div className="container">
                        <NavBar />
                        <div className="container custom-margin">
                            <div className="row">
                                <div className="col-md-2 visible-lg navbar-brand-custom">
                                    <a className="navbar-brand" href="#">
                                        <img id="logo" src={DocketLogo} alt="DocketTech_logo" />
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
                        <div className="row">
                            <div className="col-md-12 text-center margin-top-5 margin-bottom-10">
                                <h1 className="font-40 banner-header">Loreum ipsum</h1>
                                <div className="col-md-3 col-sm-12 col-xs-12" />
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <p className="font-16 banner-para margin-top-5">Lorem Ipsum is simply dummy text of the printing ...when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className="col-md-3" />
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        )
    }
}