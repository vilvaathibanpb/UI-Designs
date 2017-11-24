import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';

export default class NavBar extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }

    render() {
        // Navbar and dropdowns
        var toggle = document.getElementsByClassName('navbar-toggle')[0],
        collapse = document.getElementsByClassName('navbar-collapse')[0],
        dropdowns = document.getElementsByClassName('dropdown');;

        // Toggle if navbar menu is open or closed
        function toggleMenu() {
            collapse.classList.toggle('collapse');
            collapse.classList.toggle('in');
        }
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
                        <button type="button" className="pull-left navbar-toggle collapsed margin-left-5 " data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" onClick={openNav}>
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

                    <div id="mySidenav" class="sidenav navbar-custom custom-navbar-agrreement">
                        <ul class="nav navbar-nav navbar-right navbar-custom-margin">
                            <a href="javascript:void(0)" class="visible-xs closebtn" onClick={closeNav}>×</a>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Enquiry</a></li>
                            <li class="custom-navbar-menu">
                            <span><a href="#toregister" className="header-btn">Register</a>
                            </span>|
                            <span><a href="#tologin" className="header-btn">Login</a>
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