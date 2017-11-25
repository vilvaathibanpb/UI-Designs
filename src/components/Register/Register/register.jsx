import React, { Component } from 'react';
import '../../../../src/style.css';
import '../../../css/register.css';
import Sliding_Paper from '../../../../images/Sliding Paper.png';



export default class Register extends Component {
    render() {
        return (
            <div>
                 <div id="register" className="col-md-4 col-md-offset-4 margin-top-2 animate form">
                    <img id="Sliding_paper" src={Sliding_Paper} alt="Login_paper" className="img-responsive login-image"/>
                    <form id="loginform" className="form-horizontal login-form margin-top-10" role="form">
                            <h4 className="text-center font-stag bold ">Register</h4>
                            <div className="form-group margin-top-5">
                                <div className="col-md-12">
                                    <label className="has-float-label">
                                        <input id="name" type="text" name="name" value="" placeholder="Name" />
                                        <span>Full Name</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <label className="has-float-label">
                                        <input id="email" type="text" name="email" value="" placeholder="email@example.com" />
                                        <span>Email</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <label className="has-float-label">
                                        <input id="Mobile" type="text" name="Mobile" value="" placeholder="your mobile number" />
                                        <span>Mobile</span>
                                    </label>
                                </div>
                            </div>
                            <button className="login-button  margin-top-5 font-stag bold">Register</button>
                            <h6 className="text-center margin-top-15">
                                Already have a Docket account?
                                <span  className="margin-left-2"><a href="#tologin" className="to_register">Login </a>
                                </span>
                            </h6>
                            {/* <div className="margin-top-15 margin-bottom-5 text-center Social-icon">
                                <span>
                                    <img src="./images/login_icon/Icon_FB.svg" className="login_social_icon">
                                </span>
                                <span>
                                    <img src="./images/login_icon/Icon_Google.svg" className="login_social_icon margin-left-5" >
                                </span>
                            </div>   */}
                    </form>
                </div>
            </div>
        );
    }
}