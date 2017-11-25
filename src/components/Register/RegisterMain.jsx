import React, { Component } from 'react';
import '../../../src/style.css';
import '../../css/register.css';
import NavBar from '../../components/Home/NavBar/NavBar.jsx';
import logo from '../../../images/Home/Web Banner/Docket Logo.svg';
import Login from '../../components/Register/Login/login.jsx';
import Register from '../../components/Register/Register/register.jsx';
import LoginPaperImage from '../../../images/Paper.png';

export default class RegisterMain extends Component {
    render() {
        return (
            <div>
                <div className="login-header-bg">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="col-md-6 visible-lg"><img id="logo" src={logo} alt="DocketTech_logo" className="login-logo-margin" />   </div>
                            <div className="col-md-6"><NavBar /></div>
                        </div>
                    </div>
                </div>
                <div className="login-section-bg">
                    <div className="container-fluid">
                        <a href="" id="toregister"></a>
                        <a href="" id="tologin"></a>
                        <div className="col-md-4 col-md-offset-4 margin-top-5">
                            <img id="login_image" src={LoginPaperImage} alt="login-form-image" className="img-responsive login-Paper-img" />
                        </div>
                        <div id="wrapper">
                            <Login />
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}