import React, { Component } from 'react';






export default class PaymentOption extends Component {
    render() {
        return (
            <div>
                <div id="PaymentOptionform" className="Payment-order-form margin-top-5">
                    <h4 className="text-center font-stag bold">Payment Option</h4>
                    <div className="col-md-12 margin-top-5">
                        <div className="black bold">Select Payment Option</div>
                        <div className="payment-option-box margin-top-5">
                            <div className="payment-option-border">Paytm <span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-border">Credit Card<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-border">Debit Card<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-padding">Net Banking<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}