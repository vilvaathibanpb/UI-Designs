import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

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
                    <div id="mySidenav" className="sidenav custom-navbar-agrreement">
                        <ul className="nav navbar-nav navbar-right navbar-custom-margin">
                            <a href="javascript:void(0)" className="visible-xs closebtn" onClick={this.closeNav}>×</a>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutUs">About</Link></li>
                            <li><a href="blog.dockettech.com">Blog</a></li>
                            <li><Link to="/enquiry">Enquiry</Link></li>
                            <li class="custom-navbar-menu">
                                <span className="header-btn"><Link to="/registerLogin">Register</Link>
                                </span>|
                            <span className="header-btn"><Link to="/registerLogin">Login</Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/*/Sidenav */}
                </nav>
            </div>
        );
    }
}