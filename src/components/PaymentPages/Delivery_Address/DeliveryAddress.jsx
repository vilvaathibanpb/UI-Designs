
import React, { Component } from 'react';
import { registerActions } from '../../../actions/register_actions';
import fb_icon from '../../../../images/login_icon/Icon_FB.svg';
import Icon_Google from '../../../../images/login_icon/Icon_Google.svg';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';


class DeliveryAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delivery: {
                address1: '',
                address2: '',
                city: '',
                state: '',
                pin: '',
                phone: '',
                otp: ''
            },
            submitted: false,
            submittedOTP: false

        }
        this.getotp = this.getotp.bind(this);
        this.submitDetails = this.submitDetails.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        const { delivery } = this.state;
        this.setState({
            delivery: {
                ...delivery,
                [name]: value
            }
        });
        console.log(delivery.phone);
    }

    getotp(e) {
        e.preventDefault();
        const { delivery } = this.state;
        const { dispatch } = this.props;
        this.setState({ submittedOTP: true });
        if (localStorage.getItem('jwt')) {
            console.log(delivery.phone);
            dispatch(registerActions.otpRequest(delivery.phone))
        }
        else {
            Alert.error('Please login to get the otp', {
                position: 'top-right',
                effect: 'slide',
                timeout: 5000
            });
        }
    }

    submitDetails(e) {
        e.preventDefault();
        const { delivery } = this.state;
        const { dispatch } = this.props;
        this.setState({ submitted: true });

    }

    render() {
        const { delivery } = this.state;
        const { loggedIn, otp_success } = this.props;
        if (otp_success) {
            Alert.success('OTP has sent to your registered mobile', {
                position: 'top-right',
                effect: 'slide',
                timeout: 5000
            });
        }
        return (
            <div>
                <form id="Deliveryform" className="form-horizontal Payment-login-form margin-top-5" role="form">
                    <h4 className="text-center bold-ptsans-font font-16">Delivery Address</h4>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="phoneNumber" type="number" name="phone" value={delivery.phone} placeholder="Phone Number" onChange={this.handleChange} />
                                <span>Phone Number</span>
                            </label>
                            {
                                !delivery.phone &&
                                this.state.submittedOTP &&
                                <div className="errorField" >Please enter the phone number</div>
                            }
                            {
                                !delivery.phone &&
                                this.state.submitted &&
                                <div className="errorField" >Please enter the phone number</div>
                            }
                        </div>
                    </div>
                    {otp_success &&
                        <div className="form-group">
                            <div className="col-md-12">
                                <label className="has-float-label">
                                    <input id="otp" type="number" name="otp" value={delivery.otp} placeholder="Enter OTP" onChange={this.handleChange} />
                                    <span>OTP</span>
                                </label>
                                {
                                    !delivery.phone &&
                                    this.state.submitted &&
                                    <div className="errorField" >Please enter the OTP</div>
                                }

                            </div>
                        </div>
                    }
                    {!otp_success &&
                        <div className="text-center"><button className="Payment-login-button  margin-top-5 font-stag bold" onClick={this.getotp}>GET THE OTP</button></div>
                    }
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="Addressfirst" type="text" name="address1" value={delivery.address1} placeholder="Address 1" onChange={this.handleChange} />
                                <span>Address 1</span>
                            </label>
                            {
                                !delivery.address1 &&
                                this.state.submitted &&
                                <div className="errorField" >Please enter the address 1</div>
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="Addresstwo" type="text" name="address2" value={delivery.address2} placeholder="Address 2" onChange={this.handleChange} />
                                <span>Address 2</span>
                            </label>
                            {
                                !delivery.address2 &&
                                this.state.submitted &&
                                <div className="errorField" >Please enter the address 2</div>
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12 padding-none">
                            <div className="col-md-6">
                                <label className="has-float-label">
                                    <select className="classic" name="city" value={delivery.city} onChange={this.handleChange}>
                                        <option value="city">City</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <label className="has-float-label">
                                    <select className="classic" name="state" value={delivery.state} onChange={this.handleChange}>
                                        <option value="state">State </option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="pin" type="text" name="pin" value={delivery.pin} placeholder="PIN" onChange={this.handleChange} />
                                <span>PIN</span>
                            </label>
                        </div>
                    </div>

                    {
                        otp_success &&
                        <div className="text-center"><button className="Payment-login-button  margin-top-10 font-stag bold" onClick={this.submitDetails}>SUBMIT</button></div>
                    }
                </form>
                <Alert stack={{ limit: 3 }} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering, registered } = state.registration;
    const { loggedIn } = state.login;
    const { otp_success } = state.otp_generation;
    return {
        registering, registered, loggedIn, otp_success
    }
}

const connectDeliveryAddressComponent = connect(mapStateToProps)(DeliveryAddress);
export { connectDeliveryAddressComponent as DeliveryAddress };



