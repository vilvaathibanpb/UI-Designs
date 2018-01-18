import React, { Component } from 'react';
import { BrowserRouter, Route, history, browserHistory } from 'react-router-dom';
import Home from '../components/Home/Home';
import { Products } from '../components/Products/Products';
import { AgreementProduct } from '../components/AgreementProducts/AgreementProduct';
import AboutUs from '../components/AboutUs/AboutUs';
import Enquiry from '../components/Enquiry/Enquiry';
import RegisterMain from '../components/Register/RegisterMain';
import Documents from '../components/Documents/Documents';
import StartABusiness from '../components/StartABusiness/StartABusiness';
import PaymentPages from '../components/PaymentPages/PaymentPages';
import { AuthToken } from '../components/Register/AuthTokenPage';
import { PaytmForm } from '../components/PaymentPages/PaytmForm';
import { PaymentStatus } from '../components/PaymentPages/PaymentStatus';
import DashBoard from '../components/DashBoard/DashBoard';
import Loading from 'react-loading-components';
import { PaymentRegister } from '../components/PaymentPages/PaymentRegister/PaymentRegister';
import { DeliveryAddress } from '../components/PaymentPages/Delivery_Address/DeliveryAddress';
import PaymentOrder from '../components/PaymentPages/Payment_Order/PaymentOrder';
import { PaymentOptins } from '../components/PaymentPages/Payment_Option/PaymentOption';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter history={browserHistory}>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/registerLogin' component={RegisterMain} />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/enquiry' component={Enquiry} />
            {/* <Route name='products' path='/products/:productName' component={Products} /> */}
            <Route path='/products' component={Products} />
            <Route path='/documents' component={Documents} />
            <Route path='/agreementProducts' component={AgreementProduct} />
            <Route name='agreementProducts' path='/agreementProducts/:agreementProduct' component={AgreementProduct} />
            <Route path='/business' component={StartABusiness} />
            <Route path='/PaymentPages' component={PaymentPages} />
            <Route path='/authToken' component={AuthToken} />
            <Route path='/paytm' component={PaytmForm} />
            <Route path='/payment/paytm/response' component={DashBoard} />
            <Route path='/paymentResponse' component={PaymentStatus} />

            {/* Payment Pages router */}
            <Route exact path='/payment' component={PaymentRegister} />
            <Route path='payment/paymentDelivery' component={DeliveryAddress} />
            <Route path='payment/paymentOrder' component={PaymentOrder} />
            <Route path='payment/paymentOptions' component={PaymentOptins} />

          </div>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
