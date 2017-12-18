import React, { Component } from 'react';
import { BrowserRouter, Route, history, browserHistory } from 'react-router-dom';
import Home from '../components/Home/Home';
import { Products } from '../components/Products/Products';
import AgreementProducts from '../components/AgreementProducts/AgreementProduct';
import AboutUs from '../components/AboutUs/AboutUs';
import Enquiry from '../components/Enquiry/Enquiry';
import RegisterMain from '../components/Register/RegisterMain';
import Documents from '../components/Documents/Documents';
import StartABusiness from '../components/StartABusiness/StartABusiness';
import PaymentPages from '../components/PaymentPages/PaymentPages';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter history={browserHistory}>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/registerLogin' component={RegisterMain} />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/enquiry' component={Enquiry} />
            <Route path='/documents' component={Documents} />
            <Route path='/agreements' component={Products} />
            <Route path='/agreementProducts' component={AgreementProducts} />
            <Route path='/business' component={StartABusiness} />
            <Route path='/PaymentPages' component={PaymentPages} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
