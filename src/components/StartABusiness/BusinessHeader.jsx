import React, { Component } from 'react';
import '../../css/documents.css';
import '../../css/home.css';
import '../../css/style.css';
import NavBarwithBlack from '../AboutUs/NavBarwithBlack';
import SearchBox from '../Home/SearchBox/SearchBox';
import CartButton from '../Home/CartButton/CartButton';
import DocketLogo from '../../assets/images/Docket Logo.svg';

export default class BusinessHeader extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section className="business-bg">
                    <div className="container">
                        <NavBarwithBlack />
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
                            <div className="col-md-12 text-center margin-top-8 margin-bottom-5">
                                <p className="font-40 business-header">Start Business</p>
                                <div className="col-md-3 col-sm-12 col-xs-12"></div>
                                <div className="col-md-6 col-sm-12 col-xs-12 business-header-conent">
                                    <p>Lorem Ipsum is simply dummy text of the printing ...when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>

                </section>



            </div>
        );
    }
}