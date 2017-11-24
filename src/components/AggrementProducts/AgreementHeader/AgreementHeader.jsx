import React, { Component } from 'react';
import '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/agreementsProducts.css';
import '/home/rahul/Desktop/dockettech_frontend/src/style.css';
import NavBar from '../Home/NavBar/NavBar';
import SearchBox from '../Home/SearchBox/SearchBox';
import CartButton from '../Home/CartButton/CartButton';
// import AggrementQuestion from "/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/agreements_question/AggrementQuestion.jsx";


export default class AgreementHeader extends React.Component {
    render() {
      return (
          <div>
              <div className="Search"></div>
              <div className="NavBar"></div>
          </div>
      )
      ;
    }
  }