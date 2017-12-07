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
    /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
         myFlexitem(id) {
            if (event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
            // document.getElementsByClassName('dropdown-content').classList.remove("show");
            document.getElementById(id).classList.toggle("show");
        }

        // Close the dropdown if the user clicks outside of it
        // window.onclick = function(event) {
        //   if (!event.target.matches('.dropbtn')) {

        //     var dropdowns = document.getElementsByClassName("dropdown-content");
        //     var i;
        //     for (i = 0; i < dropdowns.length; i++) {
        //       var openDropdown = dropdowns[i];
        //       if (openDropdown.classList.contains('show')) {
        //         openDropdown.classList.remove('show');
        //       }
        //     }
        //   }
        // }

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
                    <div className="flex-item" onClick={this.myFlexitem.bind('document')}>
                        <span className="dropbtn">DOCUMENTS <i className="fa fa-caret-down" /></span>
                        <div id="document" className="dropdown-content">
                            <a href="#">Documents1</a>
                            <a href="#">Documents2</a>
                            <a href="#">Documents3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={this.myFlexitem.bind('list-box')}>
                        ON DEMAND <i className="fa fa-caret-down" />
                        <div id="list-box" className="dropdown-content">
                            <a href="#">List1</a>
                            <a href="#">List2</a>
                            <a href="#">List3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={this.myFlexitem.bind('startAbusiness')}>
                        START A BUSINESS  <i className="fa fa-caret-down" />
                        <div id="startAbusiness" className="dropdown-content">
                            <a href="#">Item1</a>
                            <a href="#">Item2</a>
                            <a href="#">Item3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={this.myFlexitem.bind('compliances')}>
                        COMPLIANCES <i className="fa fa-caret-down" />
                        <div id="compliances" className="dropdown-content">
                            <a href="#">Item1</a>
                            <a href="#">Item2</a>
                            <a href="#">Item3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={this.myFlexitem.bind('property')}>
                        PROPERTY <i className="fa fa-caret-down" />
                        <div id="property" className="dropdown-content">
                            <a href="#">PROPERTY1</a>
                            <a href="#">PROPERTY2</a>
                            <a href="#">PROPERTY3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={this.myFlexitem.bind('licences')}>
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