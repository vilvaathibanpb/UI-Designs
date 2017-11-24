import React, { Component } from 'react';
import '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/agreementsProducts.css';
import '/home/rahul/Desktop/dockettech_frontend/src/style.css';
import '/home/rahul/Desktop/dockettech_frontend/src/components/Home/home.css';
import SearchBox from '/home/rahul/Desktop/dockettech_frontend/src/components/Home/SearchBox/SearchBox.jsx';
import NavBar from '/home/rahul/Desktop/dockettech_frontend/src/components/Home/NavBar/NavBar.jsx';
import CartButton from '/home/rahul/Desktop/dockettech_frontend/src/components/Home/CartButton/CartButton.jsx';
import Applicability from '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/Agreements_description/Applicability/applicability.jsx';
import AggrementQuestion from '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/agreements_question/AggrementQuestion.jsx';
import ViewSampleAgreement from '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/Agreements_description/Sample_agreement/ViewSampleAgreement.jsx';
import RelatedAgreement from '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/Agreements_description/Related_Agreement/RelatedAgreement.jsx';
import AggrementDescription  from '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/Agreements_description/Description/description.jsx';
import Process from '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/Agreements_description/Process/process.jsx';
import ProsAndCons from '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/Agreements_description/ProsAndCons/ProsAndCons.jsx';
import logo from '/home/rahul/Desktop/dockettech_frontend/images/Home/Web Banner/Docket Logo.svg';

export default class AggrementProducts extends Component {
    render() {
        window.onload = function () {
            document.getElementById("top-header").classList.add('diagonal-transition');
        }
        return (
            <div>
                <div className="agreement-bg">
                    <div className="container">
                        <div className="col-md-12">
                            <NavBar />
                        </div>
                        <div className="col-md-12">
                        <div className="col-md-2 visible-lg navbar-brand-custom">
                            <a className="navbar-brand-logo" href="#">
                                <img id="logo" src={logo} alt="DocketTech_logo" className="logo_Docket_agreement"/>
                            </a>
                        </div>
                            <div className="col-md-8">
                                <SearchBox />
                            </div>
                            <div className="col-md-2">
                                <CartButton />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <AggrementQuestion />
                        </div>
                        <div className="col-md-6 margin-top-5">
                            <div className="col-md-12">
                                <span><ViewSampleAgreement />
                                <RelatedAgreement /></span>
                            </div>
                            <div className="margin-top-5 col-md-12">
                                <AggrementDescription />
                            </div>
                           <div className="margin-top-5 col-md-12">
                                <Applicability />
                            </div>
                            <div className="margin-top-5 col-md-12">
                                <Process />
                            </div>
                            <div className="margin-top-5 col-md-12">
                                <ProsAndCons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}