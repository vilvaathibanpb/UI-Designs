import React, { Component } from 'react';
import { base_url } from '../../../helpers/urls';
import { Router, Route, history } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// import bolt from './bolt.min.js';


class PaymentOption extends Component {
    constructor(props) {
        super(props);
        this.payumoney = this.payumoney.bind(this);
        this.paytm = this.paytm.bind(this);
    }
    componentWillMount() {
        if (localStorage.getItem('formData')) {
            console.log('true');
            localStorage.removeItem('formData');
        }
    }

    paytm() {
        let paytmdata = {
            ORDER_ID: 'ABCD12343434342347',
            CUST_ID: 'BCH234',
            TXN_AMOUNT: '1',
            MOBILE_NO: '9535136548',
            EMAIL: 'chaithrabhalli@gmail.com',
            CALLBACK_URL: base_url + 'payment/paytm/response'
        }

        let self = this;

        fetch(base_url + 'payment/paytm', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paytmdata)
        })
            .then(function (a) {
                return a.json(); // call the json method on the response to get JSON
            })
            .then(function (json) {
                localStorage.setItem('formData', JSON.stringify(json));
                console.log("obj" + json);
                self.redirectToPaytm();
            }).catch(function (errors) {
                console.log(errors);
            });
    }
    redirectToPaytm() {
        this.props.history.push("/paytm");
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
            hash: ''
        }

        let data = {
            'txnid': pd.txnid,
            'email': pd.email,
            'amount': pd.amount,
            'productinfo': pd.productinfo,
            'firstname': pd.firstname
        }

        let self = this;

        fetch(base_url + 'payment/payumoney', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(function (a) {
                return a.json(); // call the json method on the response to get JSON
            })
            .then(function (json) {
                console.log(json['hash'])
                pd.hash = json['hash']
                self.redirectToPayU(pd);
            });
    }
    redirectToPayU(pd) {
        bolt.launch(pd, {
            responseHandler: function (response) {
                // your payment response Code goes here
                // console.log(response);
                fetch(base_url + 'payment/payumoney/response', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(response.response)
                })
                    .then(function (a) {
                        return a.json(); // call the json method on the response to get JSON
                    })
                    .then(function (json) {
                        console.log(json);
                    });
            },
            catchException: function (response) {
                // the code you use to handle the integration errors goes here
                console.log(response);
            }
        });
    }

    render() {
        return (
            <div>
                <div id="PaymentOptionform" className="Payment-order-form margin-top-5">
                    <h4 className="text-center bold-ptsans-font font-18">Payment Option</h4>
                    <div className="col-md-12 margin-top-5">
                        <div className="black bold-ptsans-font">Select Payment Option</div>
                        <div className="payment-option-box margin-top-5">
                            <div className="payment-option-border normal-ptsans-font" onClick={this.paytm} style={{ cursor: 'default' }}>Paytm <span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-border normal-ptsans-font" onClick={this.payumoney} style={{ cursor: 'default' }}>PayUMoney <span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-border normal-ptsans-font" style={{ cursor: 'default' }}>Credit Card<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            <div className="payment-option-border normal-ptsans-font" style={{ cursor: 'default' }}>Debit Card<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div>
                            {/* <div className="payment-option-padding normal-ptsans-font">Net Banking<span className="pull-right"><i className="fa fa-angle-right font-22" aria-hidden="true"></i></span></div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedPayment = withRouter(connect(mapStateToProps)(PaymentOption));
export { connectedPayment as PaymentOption };