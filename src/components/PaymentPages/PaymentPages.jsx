import React, { Component } from 'react';
import '../../css/agreementsProducts.css';
import '../../css/paymentpages.css';
import '../../css/style.css';
import { Link } from 'react-router-dom';
import NavBar from '../AboutUs/NavBarwithBlack';
import logo from '../../assets/images/Docket Logo.svg';
import Footer from '../Footer/Footer';
import PaymentRegister from '../PaymentPages/PaymentRegister/PaymentRegister';
import DeliveryAddress from '../PaymentPages/Delivery_Address/DeliveryAddress';
import PaymentOrder from '../PaymentPages/Payment_Order/PaymentOrder';
import PaymentOption from '../PaymentPages/Payment_Option/PaymentOption';

export default class PaymentPages extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        var tabLinks = document.querySelectorAll('ul.tabs li a');
        
        for (var i = 0; i < tabLinks.length; i++) { 
          tabLinks[i].onclick = function() {
            var target = this.getAttribute('href').replace('#', '');
            var sections = document.querySelectorAll('section.tab-content');
            
            for(var j=0; j < sections.length; j++) {
              sections[j].style.display = 'none';
            }
            
            document.getElementById(target).style.display = 'block';
            
            for(var k=0; k < tabLinks.length; k++) {
              tabLinks[k].removeAttribute('class');
            }
            
            this.setAttribute('class', 'is-active');
            
            return false;
          }
        };
        return (
            <div>
                <div className="login-header-bg">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="col-md-6 visible-lg"><Link to="/"><img id="logo" src={logo} className="login-logo-margin" /></Link>   </div>
                            <div className="col-md-6"><NavBar /></div>
                        </div>
                    </div>
                </div>
                <div className="payment-bg">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="payment_box">
                                <div className="col-md-12 padding-none">
                                    <div className=" payment-sidebar padding-none ">
                                        <ul className="payment-list text-center tabs col-md-4 visible-lg">
                                            <li><a href="#tab-one" className="is-active ">Login or SignUp</a></li>
                                            <li><a href="#tab-two">Delivery Address</a></li>
                                            <li><a href="#tab-three">Order Summary</a></li>
                                            <li className="payment_option_border"><a href="#tab-four" >Payment Option</a></li>
                                        </ul>
                                        <section className="tab-content col-md-8" id="tab-one">
                                            <PaymentRegister />
                                        </section>
                                        <section className="tab-content col-md-8" id="tab-two">
                                            <DeliveryAddress/> 
                                        </section>
                                        <section className="tab-content col-md-8" id="tab-three">
                                            <PaymentOrder/>
                                        </section>
                                        <section className="tab-content col-md-8" id="tab-four">
                                            <PaymentOption/>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="footer-custom-margin">
                    <Footer/>
                </div>
            </div>
        );
    }
}