import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerActions } from '../../../actions/register_actions';
import '../../../../src/style.css';
import '../../../css/register.css';
import Sliding_Paper from '../../../../images/Sliding Paper.png';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                email: '',
                password: ''
            },
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        const { login } = this.state;
        this.setState({
            login: {
                ...login,
                [name]: value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const dispatch = this.props;
        const { login } = this.state;
        this.setState({ submitted: true });
        dispatch(registerActions.login(login));

    }

    render() {
        const { login } = this.state;
        return (
            <div>
                <div id="login" className="col-md-4 col-md-offset-4 margin-top-2 animate form">
                    <img id="Sliding_paper" src={Sliding_Paper} alt="Login_paper" className="img-responsive login-image" />
                    <form id="loginform" className="form-horizontal login-form margin-top-10" role="form">
                        <h4 className="text-center font-stag bold">Login</h4>
                        <div className="form-group margin-top-10">
                            <div className="col-md-12">
                                <label className="has-float-label">
                                    <input id="email" type="email" name="email" value={login.email}
                                        placeholder="example@gmail.com" onChange={this.handleChange} />
                                    <span>Email id</span>
                                </label>
                            </div>
                            {
                                !login.email && this.state.submitted &&
                                <div className="errorField" >Please enter your Email</div>
                            }
                        </div>
                        <div className="form-group margin-top-10">
                            <div className="col-md-12">
                                <label className="has-float-label">
                                    <input id="password" type="password" name="password" value={login.password}
                                        placeholder="password" onChange={this.handleChange} />
                                    <span>Password</span>
                                </label>
                            </div>
                            {
                                !login.password && this.state.submitted &&
                                <div className="errorField" >Please enter your password</div>
                            }
                        </div>
                        <button className="login-button  margin-top-5 font-stag bold black" onClick={this.handleSubmit}>LOGIN</button>
                        <h6 className="text-center margin-top-15">
                            Register with Docket account
                            <span className="margin-left-2"><a href="#toregister" className="to_register" >Join us</a>
                            </span>
                        </h6>
                        {/* <div className="margin-top-15 Social-icon margin-bottom-5 text-center">
                            <span>
                                <img src="./images/login_icon/Icon_FB.svg" className="login_social_icon">
                            </span>
                            <span>
                                <img src="./images/login_icon/Icon_Google.svg" class="login_social_icon margin-left-5" >
                            </span>
                        </div>   */}
                    </form>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { login } = state.login;
    return {
        login
    }
}

const connectLoginComponent = connect(mapStateToProps)(Login);
export { connectLoginComponent as Login };