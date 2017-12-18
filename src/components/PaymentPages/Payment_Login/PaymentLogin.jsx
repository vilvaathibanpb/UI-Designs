
import React, { Component } from 'react';

import fb_icon from '../../../../images/login_icon/Icon_FB.svg';
import Icon_Google from '../../../../images/login_icon/Icon_Google.svg';



export default class PaymentLogin extends Component {
    render() {
        return (
            <div>
                <form id='login-form' className="form-horizontal Payment-login-form margin-top-5" role="form">
                    <h4 className="text-center font-stag bold ">Login</h4>
                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="has-float-label">
                                    <input id="email" type="text" name="email" value="" placeholder="email@example.com"/>
                                        <span>Email</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="has-float-label">
                                    <input id="password" type="text" name="password" value="" placeholder="password"/>
                                        <span>Password<a href="#" className="custom-forgot-margin">Forgot?</a></span>
                                </label>
                            </div>
                        </div>
                        <button className="Payment-login-button  margin-top-5 font-stag bold">LOGIN</button>
                        <div className="margin-top-15 margin-bottom-5 text-center Social-icon">
                            <span>
                                <img id="fb_icon" src={fb_icon} alt="fb_icon" className="login_social_icon"/>
                            </span>
                            <span>
                                <img id="Icon_Google" src={Icon_Google} className="login_social_icon margin-left-5" />
                            </span>
                        </div>
                        <h6 className="text-center margin-top-15">
                            New to Docket?
                            <span className="margin-left-2"><a href="#" >Sign up</a>
                            </span>
                        </h6>  
                </form>
            </div>
        );
    }
}



