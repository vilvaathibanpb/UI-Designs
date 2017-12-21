import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';
import HomeDataContainerHeading from '../HomeDataContainer/HomeDataContainerHeading.jsx';
import HomeDataBlock from '../HomeDataContainer/HomeDataBlock.jsx';
import Testimonial from './Testimonial';

export default class HomePropertyContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let data = this.props.data;
        let heading = data.title;
        let propertyServices = data.first;
        let clients = data.cilentTestimonial;
        let viewAllLink = this.props.viewAllLink;
        //image sliding
        var myIndex = 0;


        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) { myIndex = 1 }
            x[myIndex - 1].style.display = "block";
            // setTimeout(carousel, 5000); // Change image every 2 seconds
        }

        function carousel1() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex--;
            if (myIndex <= 0) { myIndex = x.length }
            x[myIndex - 1].style.display = "block";
            // setTimeout(carousel, 1000); // Change image every 2 seconds
        }
        return (
            <div>
                <section onLoad={carousel} id="property" className="home-sections-bg">
                    <div className="container-fluid  home-sections-margins-testimonial">
                        <div className="row">
                            <div className="col-md-12 clearfix padding-none">
                                <div className="col-md-1" />
                                <div className="col-md-2 col-sm-12 col-xs-12 home-center-data margin-top-5">
                                    <HomeDataContainerHeading data={heading} viewAllLink={viewAllLink} />
                                </div>
                                <div className="col-sm-3 col-sm-12 col-xs-12">
                                    <HomeDataBlock data={propertyServices} />
                                </div>
                                <div className="col-md-6 col-xs-12 col-sm-12 section-height clearfix" style={{ background: 'url("images/Home/Testimonial/Image_BG.jpg")no-repeat' }}>
                                    <h3 className="client-section-header">CLIENT TESTIMONIAL</h3>
                                    <div className="testimonial_container">

                                        <Testimonial data={clients[0]} />
                                        <Testimonial data={clients[1]} />
                                        <Testimonial data={clients[2]} />
                                        <div className="testimonial_block_right">
                                            <img src="images/Icon1.png" onClick={carousel} />
                                            <img src="images/Icon2.png" onClick={carousel1} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}