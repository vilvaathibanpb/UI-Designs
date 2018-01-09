import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';
import Search from '../../../assets/images/Home/Web Banner/Icon_Search.png';


let array = [];
export default class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupVisible: false,
            toggleId: ''
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    toggleMenu(id) {

        this.setState({ toggleId: id });
        if (!array.includes(id)) {
            console.log(id);
            array.push(id);
        }
        for (var i = 0; i <= array.length - 1; i++) {
            if (array[i] != id) {
                document.getElementById(array[i]).style.display = "none";

            }
            else {
                var idName = document.getElementById(id);
                if (idName.style.display == "block") { // if is menuBox displayed, hide it
                    idName.style.display = "none";
                    this.setState({ popupVisible: false });

                    // this.windowOnclick();
                }
                else { // if is menuBox hidden, display it
                    idName.style.display = "block";
                    this.windowOnclick();
                }

            }
        }

    }
    windowOnclick() {
        console.log('clicked');
        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible,
        }));
        if (!this.state.popupVisible) {
            console.log('true');
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

    }

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
            console.log(this.node);
            return;
        }
        for (var j = 0; j <= array.length - 1; j++) {

            if (document.getElementById(array[j]).style.display == 'block') {
                console.log('dsfghj');
                document.getElementById(array[j]).style.display = 'none';
            }

        }
    }


    /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
    //  myFlexitem(id) {
    //     if (event.target.matches('.dropbtn')) {

    //     var dropdowns = document.getElementsByClassName("dropdown-content");
    //     var i;
    //     for (i = 0; i < dropdowns.length; i++) {
    //       var openDropdown = dropdowns[i];
    //       if (openDropdown.classList.contains('show')) {
    //         openDropdown.classList.remove('show');
    //       }
    //     }
    //   }
    //     // document.getElementsByClassName('dropdown-content').classList.remove("show");
    //     document.getElementById(id).classList.toggle("show");
    // }

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
                    <div className="flex-item" onClick={() => this.toggleMenu('document')}>
                        <span className="dropbtn">DOCUMENTS <i className="fa fa-caret-down" /></span>
                        <div id="document" className="dropdown-content" ref={node => { this.node = node; }}>
                            <a href="#">Documents1</a>
                            <a href="#">Documents2</a>
                            <a href="#">Documents3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={() => this.toggleMenu('onDemand')}>
                        ON DEMAND <i className="fa fa-caret-down" />
                        <div id="onDemand" className="dropdown-content" ref={node => { this.node = node; }}>
                            <a href="#">List1</a>
                            <a href="#">List2</a>
                            <a href="#">List3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={() => this.toggleMenu('startAbusiness')}>
                        START A BUSINESS  <i className="fa fa-caret-down" />
                        <div id="startAbusiness" className="dropdown-content" ref={node => { this.node = node; }}>
                            <a href="#">Item1</a>
                            <a href="#">Item2</a>
                            <a href="#">Item3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={() => this.toggleMenu('compliances')}>
                        COMPLIANCES <i className="fa fa-caret-down" />
                        <div id="compliances" className="dropdown-content" ref={node => { this.node = node; }}>
                            <a href="#">Item1</a>
                            <a href="#">Item2</a>
                            <a href="#">Item3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={() => this.toggleMenu('property')}>
                        PROPERTY <i className="fa fa-caret-down" />
                        <div id="property" className="dropdown-content" ref={node => { this.node = node; }}>
                            <a href="#">PROPERTY1</a>
                            <a href="#">PROPERTY2</a>
                            <a href="#">PROPERTY3</a>
                        </div>
                    </div>
                    <div className="flex-item dropbtn verticalLine" onClick={() => this.toggleMenu('licences')}>
                        LICENCES <i className="fa fa-caret-down" />
                        <div id="licences" className="dropdown-content" ref={node => { this.node = node; }}>
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