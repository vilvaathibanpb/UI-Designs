import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../src/style.css';
import '../../css/register.css';
import NavBar from '../AboutUs/NavBarwithBlack';
import logo from '../../assets/images/Docket Logo.svg';
import { Login } from '../Register/Login/login';
import { Register } from '../Register/Register/Register';
import LoginPaperImage from '../../assets/images/Paper.png';

export default class RegisterMain extends Component {
    render() {
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
                <div className="login-section-bg">
                    <div className="container-fluid">
                        <a id="toregister"></a>
                        <a id="tologin"></a>
                        <div className="col-md-4 col-md-offset-4 margin-top-2">
                            <img id="login_image" src={LoginPaperImage} className="img-responsive login-Paper-img" />
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


