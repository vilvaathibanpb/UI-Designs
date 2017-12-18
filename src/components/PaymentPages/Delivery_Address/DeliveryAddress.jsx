
import React, { Component } from 'react';

import fb_icon from '../../../../images/login_icon/Icon_FB.svg';
import Icon_Google from '../../../../images/login_icon/Icon_Google.svg';



export default class DeliveryAddress extends Component {
    render() {
        return (
            <div>
                <form id="Deliveryform" className="form-horizontal Payment-login-form margin-top-5" role="form">
                    <h4 className="text-center font-stag bold ">Delivery Address</h4>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="Addressfirst" type="text" name="address" value="" placeholder="Address 1"/>
                                <span>Address 1</span>
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="Addresstwo" type="text" name="address" value="" placeholder="Address 2"/>
                                <span>Address 2</span>
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12 padding-none">
                            <div className="col-md-6">
                            <label className="has-float-label">
                                    <select className="classic">
                                        <option value="city">City</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <label className="has-float-label">
                                    <select className="classic">
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
                                <input id="pin" type="text" name="pinNumber" value="" placeholder="PIN"/>
                                <span>PIN</span>
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <label className="has-float-label">
                                <input id="phoneNumber" type="text" name="phoneNumber" value="" placeholder="Phone Number"/>
                                <span>Phone Number</span>
                            </label>
                        </div>
                    </div>
                    <button className="Payment-login-button  margin-top-5 font-stag bold">GET THE OTP</button>  
                </form>
            </div>
        );
    }
}



