import React, { Component } from 'react';
import '../../css/documents.css';
import '../../css/home.css';
import '../../css/style.css';
import NavBar from '../Home/NavBar/NavBar';
import SearchBox from '../Home/SearchBox/SearchBox';
import CartButton from '../Home/CartButton/CartButton';
import DocketLogo from '../../assets/images/Docket Logo.svg';

export default class DocumentHeader extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section class="document-bg">
                    <div className="container">
                        <NavBar style={{ color: 'black !important' }} />
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
                        <div class="row">
                            <div class="col-md-12 text-center margin-top-5 margin-bottom-10">
                                <h1 class="font-40 banner-header">Documents</h1>
                                <div class="col-md-3 col-sm-12 col-xs-12"></div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <p class="banner-para">Lorem Ipsum is simply dummy text of the printing ...when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.</p>
                                </div>
                                <div class="col-md-3"></div>
                            </div>
                        </div>
                    </div>

                </section>



            </div>
        );
    }
}