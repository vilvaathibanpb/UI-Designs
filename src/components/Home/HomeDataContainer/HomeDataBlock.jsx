import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';

export default class HomeDataBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        return (
            <div>
                <img src={data.image_src} className="img-responsive" />
                <h5 className={this.props.textColor}>{data.heading}</h5>
                <p className="home-section-text">{data.description}</p>
                <a className="home-section-link">READ MORE...</a>
            </div>
        );
    }
}