import React, { Component } from 'react';






export default class PaymentOption extends Component {
    render() {
        return (
            <div>
                <div id="PaymentOptionform" className="Payment-order-form margin-top-5">
                    <h4 className="text-center bold-ptsans-font font-18">Payment Option</h4>
                    <div className="col-md-12 margin-top-5">
                        <div className="black bold-ptsans-font">Select Payment Option</div>
                        <div className="payment-option-box margin-top-5">
                            <div className="payment-option-border normal-ptsans-font">Paytm <span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-border normal-ptsans-font">Credit Card<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-border normal-ptsans-font">Debit Card<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-padding normal-ptsans-font">Net Banking<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}