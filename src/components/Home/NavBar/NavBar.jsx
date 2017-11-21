import React, { Component } from 'react';
import '../home.css';
import '/home/chaithra/react_apps/docket/src/style.css';

export default class NavBar extends Component {
    constructor() {
        super();
    }
    componentDidMount(){
        
    }

    render() {
        function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }


        return (
            <div>
                <nav className="navbar navbar-default navbar-custom-bg">
                    <div className="navbar-header">
                        <button type="button" className="pull-left navbar-toggle collapsed margin-left-5 " data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" onClick={this.openNav}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <span className="pull-left margin-top-2 font-20 visible-xs visible-md font-weight-600">Dockettech</span>
                        <button type="button" className="navbar-toggle pull-right  visible-xs add-to-cart-m" data-toggle="collapse" data-target=".navbar-add-to-cart">
                            <span className="glyphicon glyphicon-shopping-cart" />
                        </button>
                    </div>
                    <div id="mySidenav" className="sidenav navbar-custom">
                        <ul className="nav navbar-nav navbar-right navbar-custom-margin">
                            <a href="javascript:void(0)" className="visible-xs closebtn" onClick={this.closeNav}>×</a>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Enquiry</a></li>
                            <li className="custom-navbar-menu">
                                <span><a href="#" className="header-btn">Register</a>
                                </span>|
              <span><a href="#" className="header-btn">Login</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                    </div>
                    {/*/Sidenav */}
                </nav>

            </div>
        );
    }
}