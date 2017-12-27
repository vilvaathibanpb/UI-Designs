import React, { Component } from 'react';


export default class PaymentOption extends Component {
    constructor(props) {
        super(props);
        this.payumoney = this.payumoney.bind(this);
    }

    payumoney() {
        var pd = {
            key: 'P1lS3b',
            txnid: '12vi12881243433',
            amount: 100.50,
            firstname: 'Vilva',
            email: 'vilva@gmail.com',
            phone: '6111111111',
            productinfo: 'Bag',
            surl: 'https://www.google.com',
            furl: 'https://www.facebook.com',
            // hash: '3AAD652205C17951C6B5B15EBBC42B4C8E6C89721B3E3DADD072581E08A5847DC8A3F1195D0C61344BABC30CE5466FADD03463F66B58805E143C877C6B2C7C22'
        }

        let data = {
            'txnid': pd.txnid,
            'email': pd.email,
            'amount': pd.amount,
            'productinfo': pd.productinfo,
            'firstname': pd.firstname
        }

        let request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        fetch(base_url + 'payment/payumoney', request).then(function (data) {
            console.log(data)
        }).catch(function (error) {
            console.log(error);
        });
        console.log("dsgfdfghgh");
        // bolt.launch(pd, {
        //     responseHandler: function (response) {
        //         // your payment response Code goes here
        //         console.log(response);
        //     },
        //     catchException: function (response) {
        //         // the code you use to handle the integration errors goes here
        //         console.log(response);
        //     }
        // });

    }

    render() {
        return (
            <div>
                <div id="PaymentOptionform" className="Payment-order-form margin-top-5">
                    <h4 className="text-center bold-ptsans-font font-18">Payment Option</h4>
                    <div className="col-md-12 margin-top-5">
                        <div className="black bold-ptsans-font">Select Payment Option</div>
                        <div className="payment-option-box margin-top-5">
                            <div className="payment-option-border normal-ptsans-font">Paytm <span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-border normal-ptsans-font" onClick={this.payumoney}>PayUMoney <span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-border normal-ptsans-font">Credit Card<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-border normal-ptsans-font">Debit Card<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            {/* <div className="payment-option-padding normal-ptsans-font">Net Banking<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}