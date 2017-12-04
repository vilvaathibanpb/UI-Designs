import React from 'react';
<<<<<<< HEAD
import ReactDOM, { render } from 'react-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Enquiry from './components/Enquiry/Enquiry';
import Documents from './components/Documents/Documents';
import AgreementProduct from './components/AgreementProducts/AgreementProduct';
import RegisterMain from './components/Register/RegisterMain';
// import SearchBox from '/home/rahul/Desktop/dockettech_frontend/src/components/Home/SearchBox/SearchBox.jsx';



render(<AgreementProduct />, document.getElementById("app"));
=======
import { render } from 'react-dom';
import App from './App/App';
import { Provider } from 'react-redux';
import { store } from './helpers/store';




render(<Provider store={store}><App /></Provider>, document.getElementById("app"));
>>>>>>> 45f23a6b07bdd4c35a18e54b68b271ae39125dc5
