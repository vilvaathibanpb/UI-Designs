import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';
import { Link } from 'react-router-dom';

export default class HomeDataBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        return (
            <div>
                <img src={data.image_src} className="img-responsive" />
                <h5 style={{ height: '35px' }} className={this.props.textColor}>{data.heading}</h5>
                <p className="home-section-text">{data.description}</p>
                {/* <Link to={"products/" + data.heading.toLowerCase()}><a className="home-section-link">Read More...</a></Link> */}
                <Link to={"products"}><a className="home-section-link">Read More...</a></Link>            
            </div>
        );
    }
}