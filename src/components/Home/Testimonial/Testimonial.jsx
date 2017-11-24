import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';

export default class Testimonial extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        let data = this.props.data;
        console.log(data);
        return (
            <div className="mySlides">
                <div className="icons_container">
                    <p className="testimonial_left">{data.clientDesc}
                        <span className="line-break" />
                        <span className="line-break client-name">{data.clientName}</span>
                    </p>
                    <img className="testimonial_center" src={data.image_src}  width={220} height={185} />
                </div>
            </div>
        );
    }
}