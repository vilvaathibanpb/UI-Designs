import React, { Component } from 'react';






export default class PaymentOrder extends Component {
    render() {
        return (
            <div>
                <div id="Deliveryform" className=" Payment-order-form margin-top-2">
                    <h4 className="text-center bold-ptsans-font font-16">Order Summary</h4>
                    
                    <div className="table-responsive">
                        <table className="table table-condensed custom-table-padding">
                            <caption className="black bold-ptsans-font">Order D12345</caption>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody className="ordertable">
                                <tr className="highlight">
                                    <td>Rental Agreement</td>
                                    <td>1no</td>
                                    <td>457.00</td>
                                </tr>
                                <tr className="highlight">
                                    <td>Service Charges(18%)</td>
                                    <td></td>
                                    <td>50.00</td>
                                </tr>
                                <tr className="highlight">
                                    <td>Delivery Charges</td>
                                    <td></td>
                                    <td>99.00</td>
                                </tr>
                                <tr className="highlight">
                                    <td></td>
                                    <td>Total</td>
                                    <td>606.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-12 padding-none">
                        <div className="order_addressbox">
                            <h4 className="margin-left-2 font-color-bdbec2 bold-ptsans-font">Delivery Address</h4>
                            <div className="margin-left-2 font-color-bdbec2 normal-ptsans-font"> Docket Tech Solutions Private Limited<br/>
                                Newbridge Business Center,
                                Embassy Golf Links Business Park Block "B",1st Floor,Pebble Beach, 
                                Off Intermediate Ring Road, 
                                Domlur, Bangalore - 560071, Karnataka, India
                            </div>
                                                        
                        </div>
                    </div>
                    <div className="text-center"><button className="Payment-login-button  margin-top-10 bold-ptsans-font">NEXT</button></div>
                </div>
            </div>
        );
    }
}