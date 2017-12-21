import React, { Component } from 'react';
import '../../../css/style.css';
import '../../../css/register.css';
import { connect } from 'react-redux';
import { registerActions } from '../../../actions/register_actions';
import Sliding_Paper from '../../../../images/Sliding Paper.png';
import fb_icon from '../../../../images/login_icon/Icon_FB.svg';
import Icon_Google from '../../../../images/login_icon/Icon_Google.svg'



class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                email: '',
                mobile: '',
                password: '',
                rePassword: ''
            },
            email_format: false,
            submitted: false,
            passwordMatch: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { user } = this.state;

        this.setState({ submitted: true });
        if (user.email) {
            const atpos = user.email.indexOf("@");
            const dotpos = user.email.indexOf(".");
            if (!(atpos < 1 && dotpos <= atpos + 2 && dotpos == user.email.length - 1)) {
                alert("email");
                this.setState({ email_format: true });
            }
        }

        if (user.password === user.rePassword) {
            alert("equal");
            this.setState({ passwordMatch: true });
            console.log(this.state.passwordMatch, this.state.email_format);
        }

        if (user.name && user.email && user.mobile && user.password &&
            user.rePassword && this.state.email_format && this.state.passwordMatch) {
            dispatch(registerActions.register(user));
        }
    }
    render() {
        const { user } = this.state;
        const { registered } = this.props;
        if (registered == true) {
            alert("you have been successfully registered");
        }
        // const {dispatch}
        return (
            <div className="totalRegisterPage">
                <div id="register" className="col-md-4 col-md-offset-4 margin-top-2 animate form" style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
                    <img id="Sliding_paper" src={Sliding_Paper} alt="Login_paper" className="register-image" />
                    <form id="loginform" className="form-horizontal login-form margin-top-8" role="form">
                        <h4 className="text-center bold-ptsans-font">Register</h4>
                        <div className="form-group margin-top-5">
                            <div className="col-md-12">
                                <label className="has-float-label">
                                    <input id="name" type="text" name="name" value={user.name} placeholder="Name" onChange={this.handleChange} />
                                    <span className="normal-ptsans-font">Full Name</span>
                                </label>
                                {
                                    !user.name && this.state.submitted &&
                                    <div className="errorField" >Please enter your name</div>
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="has-float-label">
                                    <input id="email" type="email" name="email" value={user.email} placeholder="email@example.com" onChange={this.handleChange} />
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
                                    this.state.email_format &&
                                    <div className="errorField" >Please enter valid email</div>
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="has-float-label">
                                    <input id="mobile" type="number" name="mobile" value={user.mobile} placeholder="yourmobile number" onChange={this.handleChange} />
                                    <span>Mobile</span>
                                </label>
                                {
                                    !user.mobile && this.state.submitted &&
                                    <div className="errorField" >Please enter your mobile number</div>
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="has-float-label">
                                    <input id="password" type="password" name="password" value={user.password} placeholder="Password" onChange={this.handleChange} />
                                    <span>Password</span>
                                </label>
                                {
                                    !user.password && this.state.submitted &&
                                    <div className="errorField" >Create your password</div>
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="has-float-label">
                                    <input id="repassword" type="password" name="rePassword" value={user.rePassword} placeholder="Re enter Password" onChange={this.handleChange} />
                                    <span>Confirm Password</span>
                                </label>
                                {
                                    !user.rePassword && this.state.submitted &&
                                    <div className="errorField" >Re enter your password</div>
                                }
                                {
                                    !this.state.passwordMatch && this.state.submitted && user.rePassword &&
                                    <div className="errorField" >Passwords doesn't match</div>
                                }
                            </div>
                        </div>

                        <button className="login-button  margin-top-2 normal-ptsans-font" onClick={this.handleSubmit}>Register</button>
                        <h6 className="text-center margin-top-8 normal-ptsans-font">
                            Already have a Docket account?
                                <span className="margin-left-2"><a href="#tologin" className="to_register">Login </a>
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

function mapStateToProps(state) {
    const { registering, registered } = state.registration;
    return {
        registering,
        registered
    }
}

const connectRegisterComponent = connect(mapStateToProps)(Register);
export { connectRegisterComponent as Register };