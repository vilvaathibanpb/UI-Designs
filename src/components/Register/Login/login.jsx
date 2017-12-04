import React, { Component } from 'react';
import '../../../../src/style.css';
import '../../../css/register.css';
import Sliding_Paper from '../../../../images/Sliding Paper.png';
import fb_icon from '../../../../images/login_icon/Icon_FB.svg';
import Icon_Google from '../../../../images/login_icon/Icon_Google.svg';


export default class Login extends Component {
    render() {
        return (
            <div>
                 <div id="login" className="col-md-4 col-md-offset-4 margin-top-2 animate form">
                 <img id="Sliding_paper" src={Sliding_Paper} alt="Login_paper" className="img-responsive login-image" />
                    <form id="loginform" className="form-horizontal login-form margin-top-10" role="form">
                        <h4 className="text-center font-stag bold">Login</h4>
                        <div className="form-group margin-top-10">
                            <div className="col-md-12">
                                <label className="has-float-label">
                                    <input id="Mobile" type="text" name="Mobile"  value={this.mobileString}
                                      placeholder="type here" />
                                    <span>Email /Mobile Number</span>
                                </label>
                            </div>
                        </div>
                        <button className="login-button  margin-top-10 font-stag bold">GENRATE OTP</button>
                        <button className="login-button  margin-top-5 font-stag bold black">CANCEL</button>
                        <h6 className="text-center margin-top-15">
                            Register with Docket account
                            <span  className="margin-left-2"><a href="#toregister" className="to_register" >Join us</a>
                            </span>
                        </h6>
                        <div className="margin-top-15 margin-bottom-5 text-center Social-icon">
                                <span>
                                    <img id="fb_icon" src={fb_icon} alt="fb_icon" className="login_social_icon"/>
                                </span>
                                <span>
                                    
                                    <img id="Icon_Google" src={Icon_Google} className="login_social_icon margin-left-5" />
                                </span>
                        </div>  
                    </form>
                </div>
            </div>
        );
    }
}