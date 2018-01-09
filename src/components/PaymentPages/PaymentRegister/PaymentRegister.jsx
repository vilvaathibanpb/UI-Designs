
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fb_icon from '../../../../images/login_icon/Icon_FB.svg';
import Icon_Google from '../../../../images/login_icon/Icon_Google.svg';
import { registerActions } from '../../../actions/register_actions';
// import { socialActions } from '../../../actions/social_actions';
import { base_url } from '../../../helpers/urls';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';


class PaymentRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                email: '',
                password: ''
            },
            user: {
                name: '',
                email: '',
                mobile: '',
                password: '',
                rePassword: ''
            },
            email_format: false,
            submittedLogin: false,
            submitted: false,
            passwordMatch: false
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
        this.facebook = this.facebook.bind(this);
        this.google = this.google.bind(this);

    }


    handleChange1(e) {
        const { name, value } = e.target;
        const { loginData } = this.state;
        this.setState({
            loginData: {
                ...loginData,
                [name]: value
            }
        });

    }

    handleChange2(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });

    }
    handleSubmitLogin(e) {
        e.preventDefault();
        const { dispatch, loggedIn } = this.props;
        const { loginData } = this.state;
        this.setState({ submittedLogin: true });
        dispatch(registerActions.login(loginData));
    }

    handleSubmitRegister(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { user } = this.state;
        if (user.email) {
            var x = user.email;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (!atpos < 1 || !dotpos < atpos + 2 || !dotpos + 2 >= x.length) {
                console.log('email');
                this.setState({ email_format: true });
            }
        }

        if (user.password === user.rePassword) {
            console.log('pwd' + user.password + user.rePassword);
            this.setState({ passwordMatch: true });
        }
        if (!this.state.email_format && !this.state.passwordMatch) {
            Alert.info('Please check all the fields and click on signup again', {
                position: 'top-right',
                effect: 'slide',
                timeout: 3000
            });
        }

        console.log(this.state.email_format, this.state.passwordMatch);
        this.setState({ submitted: true });
        if (user.name && user.email && user.mobile && user.password &&
            user.rePassword && this.state.email_format && this.state.passwordMatch) {
            dispatch(registerActions.register(user));
        }

    }

    facebook() {
        e.preventDefault();
        window.location.href = base_url + 'api/auth/facebook';

    }
    google(e) {
        e.preventDefault();
        window.location.href = base_url + 'api/auth/google';

    }
    render() {
        const { loginData, user } = this.state;
        const { loggedIn, data, registered } = this.props;
        if (loggedIn && this.state.submittedLogin) {
            Alert.success('You have successfully loggedin', {
                position: 'top-right',
                effect: 'slide',
                timeout: 3000
            });
        }
        if (registered && this.state.submitted) {
            Alert.success('You have successfully registered', {
                position: 'top-right',
                effect: 'slide',
                timeout: 3000
            });
        }

        return (
            <div>
                <input type='checkbox' id='form-switch' />
                <form id='login-form' className="form-horizontal Payment-login-form margin-top-5" role="form">
                    <h4 className="text-center bold-ptsans-font font-16">Login</h4>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="email" type="text" name="email" value={loginData.email} placeholder="email@example.com" onChange={this.handleChange1} />
                                <span>Email</span>
                            </label>
                            {
                                !loginData.email &&
                                this.state.submittedLogin &&
                                <div className="errorField" >Please enter your email</div>
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="password" type="text" name="password" value={loginData.password} placeholder="password" onChange={this.handleChange1} />
                                <span>Password<a href="#" className="custom-forgot-margin">Forgot?</a></span>
                            </label>
                            {
                                !loginData.password &&
                                this.state.submittedLogin &&
                                <div className="errorField" >Please enter your password</div>
                            }
                        </div>
                    </div>
                    <div className="text-center"><button className="Payment-login-button  margin-top-5 font-stag bold" onClick={this.handleSubmitLogin}>LOGIN</button></div>
                    <div className="margin-top-15 margin-bottom-5 text-center Social-icon">
                        <span>
                            <img id="fb_icon" src={fb_icon} alt="fb_icon" className="login_social_icon" onClick={this.facebook} />
                        </span>
                        <span>
                            <img id="Icon_Google" src={Icon_Google} className="login_social_icon margin-left-5" onClick={this.google} />
                        </span>
                    </div>
                    <h6 className="text-center margin-top-15">
                        New to Docket?
                            {/* <span className="margin-left-2"><a href="#" >Sign up</a>
                            </span> */}

                        <label htmlFor='form-switch'><span className="font-color-1db0e6">SignUp</span></label>
                    </h6>
                </form>
                <form id='register-form' className="form-horizontal Payment-login-form margin-top-2" role="form">
                    <h4 className="text-center font-stag bold ">SignUp</h4>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="FullName" type="text" name="name" value={user.name} placeholder="Your name" onChange={this.handleChange2} />
                                <span>FullName</span>
                            </label>
                            {
                                !user.name &&
                                this.state.submitted &&
                                <div className="errorField" >Please enter your name</div>
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="email" type="email" name="email" value={user.email} placeholder="email@example.com" onChange={this.handleChange2} />
                                <span>Email</span>
                            </label>
                            {
                                !user.email &&
                                this.state.submitted &&
                                <div className="errorField" >Please enter your email</div>
                            }
                            {
                                user.email &&
                                this.state.submitted &&
                                !this.state.email_format &&
                                <div className="errorField" >Please enter valid email</div>
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="mobile" type="number" maxLength={10} minLength={10} name="mobile" value={user.mobile} placeholder="Your Number" onChange={this.handleChange2} />
                                <span>Phone Number</span>
                            </label>
                            {
                                !user.mobile &&
                                this.state.submitted &&
                                <div className="errorField" >Please enter your number</div>
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="password" type="password" name="password" value={user.password} placeholder="password" onChange={this.handleChange2} />
                                <span>Password</span>
                            </label>
                            {
                                !user.password &&
                                this.state.submitted &&
                                <div className="errorField" >Please enter your password</div>
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="password" type="password" name="rePassword" value={user.rePassword} placeholder="password" onChange={this.handleChange2} />
                                <span>Confirm Password</span>
                            </label>
                            {
                                !user.rePassword &&
                                this.state.submitted &&
                                <div className="errorField" >Please re enter your password</div>
                            }
                            {
                                !this.state.passwordMatch && this.state.submitted && user.rePassword &&
                                <div className="errorField" >Passwords doesn't match</div>
                            }
                        </div>
                    </div>
                    <button className="Payment-signup-button font-stag bold" onClick={this.handleSubmitRegister}>SignUp</button>
                    <div className="margin-top-2 margin-bottom-2 text-center Social-icon">
                        <span>
                            <img id="fb_icon" src={fb_icon} alt="fb_icon" className="login_social_icon" onClick={this.facebook} />
                        </span>
                        <span>
                            <img id="Icon_Google" src={Icon_Google} className="login_social_icon margin-left-5" onClick={this.google} />
                        </span>
                    </div>
                    <h6 className="text-center margin-top-5">
                        <span>Already have a Docket Account?<label htmlFor='form-switch' className="font-color-1db0e6"> Login</label></span>
                    </h6>
                </form>
                <Alert stack={{ limit: 3 }} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering, registered } = state.registration;
    const { loggingIn, loggedIn, data } = state.login;
    return {
        registering, registered, loggingIn, loggedIn, data
    }
}

const connectRegisterLoginComponent = connect(mapStateToProps)(PaymentRegister);
export { connectRegisterLoginComponent as PaymentRegister };



