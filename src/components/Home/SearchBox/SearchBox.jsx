import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';
import Search from '../../../assets/images/Home/Web Banner/Icon_Search.png';


export default class SearchBox extends Component {
    constructor(props) {
        super(props);
    }
    // toggleMenu() {
    //     var menuBox = document.getElementById('menu-box');  
    //     if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
    //       menuBox.style.display = "none";
    //     }
    //     else { // if is menuBox hidden, display it
    //       menuBox.style.display = "block";
    //     }
    //   }

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
                    <div className="flex-item">
                       <ul id="flex-item-list">
                            <li><a className="flex-item-list-data" href="#" tabIndex="1">DOCUMENTS <i className="fa fa-caret-down" /></a>
                                <ul className="flex-item-list-subdata">
                                    <li> <a href="#">Documents1</a></li>
                                    <li> <a href="#">Documents2</a></li>
                                    <li> <a href="#">Documents3</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="flex-item-list-data verticalLine" href="#" tabIndex="1">ON DEMAND <i className="fa fa-caret-down" /></a>
                                <ul className="flex-item-list-subdata">
                                    <li> <a href="#">List1</a></li>
                                    <li> <a href="#">List2</a></li>
                                    <li> <a href="#">List3</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="flex-item-list-data verticalLine" href="#" tabIndex="1">START A BUSINESS <i className="fa fa-caret-down" /></a>
                                <ul className="flex-item-list-subdata">
                                    <li> <a href="#">Item1</a></li>
                                    <li> <a href="#">Item1</a></li>
                                    <li> <a href="#">Item1</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="flex-item-list-data verticalLine" href="#" tabIndex="1">COMPLIANCES <i className="fa fa-caret-down" /></a>
                                <ul className="flex-item-list-subdata">
                                    <li> <a href="#">List1</a></li>
                                    <li> <a href="#">List2</a></li>
                                    <li> <a href="#">List3</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="flex-item-list-data verticalLine" href="#" tabIndex="1">PROPERTY <i className="fa fa-caret-down" /></a>
                                <ul className="flex-item-list-subdata">
                                    <li> <a href="#">PROPERTY1</a></li>
                                    <li> <a href="#">PROPERTY2</a></li>
                                    <li> <a href="#">PROPERTY3</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="flex-item-list-data verticalLine" href="#" tabIndex="1">LICENCES <i className="fa fa-caret-down" /></a>
                                <ul className="flex-item-list-subdata">
                                    <li> <a href="#">LICENCES1</a></li>
                                    <li> <a href="#">LICENCES2</a></li>
                                    <li> <a href="#">LICENCES3</a></li>
                                </ul>
                            </li>
                       </ul>
                    </div>
                    {/* <div className="flex-item dropbtn verticalLine" onClick={this.toggleMenu.bind('list-box')}>
                        ON DEMAND <i className="fa fa-caret-down" />
                        <div id="list-box" className="dropdown-content">
                            <a href="#">List1</a>
                            <a href="#">List2</a>
                            <a href="#">List3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={this.toggleMenu.bind('startAbusiness')}>
                        START A BUSINESS  <i className="fa fa-caret-down" />
                        <div id="startAbusiness" className="dropdown-content">
                            <a href="#">Item1</a>
                            <a href="#">Item2</a>
                            <a href="#">Item3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={this.toggleMenu.bind('compliances')}>
                        COMPLIANCES <i className="fa fa-caret-down" />
                        <div id="compliances" className="dropdown-content">
                            <a href="#">Item1</a>
                            <a href="#">Item2</a>
                            <a href="#">Item3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={this.toggleMenu.bind('property')}>
                        PROPERTY <i className="fa fa-caret-down" />
                        <div id="property" className="dropdown-content">
                            <a href="#">PROPERTY1</a>
                            <a href="#">PROPERTY2</a>
                            <a href="#">PROPERTY3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={this.toggleMenu.bind('licences')}>
                        LICENCES <i className="fa fa-caret-down" />
                        <div id="licences" className="dropdown-content">
                            <a href="#">LICENCES1</a>
                            <a href="#">LICENCES2</a>
                            <a href="#">LICENCES3</a>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}