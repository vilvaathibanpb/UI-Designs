import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';
import Search from '../../../assets/images/Home/Web Banner/Icon_Search.png';


export default class SearchBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="input-group">
                    <input className="form-control inputfield" placeholder="Search" name="search" type="text" />
                    <div className="input-group-btn">
                        <button className="btn btn-search" type="submit"><img src={Search} /></button>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="flex-item" onClick={myFlexitem('myDocument')}>
                        <span className="dropbtn">DOCUMENTS <i className="fa fa-caret-down" /></span>
                        <div id="myDocument" className="dropdown-content">
                            <a href="#">Documents1</a>
                            <a href="#">Documents2</a>
                            <a href="#">Documents3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={myFlexitem('onDemand')}>
                        ON DEMAND <i className="fa fa-caret-down" />
                        <div id="onDemand" className="dropdown-content">
                            <a href="#">List1</a>
                            <a href="#">List2</a>
                            <a href="#">List3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={myFlexitem('startAbusiness')}>
                        START A BUSINESS  <i className="fa fa-caret-down" />
                        <div id="startAbusiness" className="dropdown-content">
                            <a href="#">Item1</a>
                            <a href="#">Item2</a>
                            <a href="#">Item3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={myFlexitem('compliances')}>
                        COMPLIANCES <i className="fa fa-caret-down" />
                        <div id="compliances" className="dropdown-content">
                            <a href="#">Item1</a>
                            <a href="#">Item2</a>
                            <a href="#">Item3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={myFlexitem('property')}>
                        PROPERTY <i className="fa fa-caret-down" />
                        <div id="property" className="dropdown-content">
                            <a href="#">PROPERTY1</a>
                            <a href="#">PROPERTY2</a>
                            <a href="#">PROPERTY3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={myFlexitem('licences')}>
                        LICENCES <i className="fa fa-caret-down" />
                        <div id="licences" className="dropdown-content">
                            <a href="#">LICENCES1</a>
                            <a href="#">LICENCES2</a>
                            <a href="#">LICENCES3</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}