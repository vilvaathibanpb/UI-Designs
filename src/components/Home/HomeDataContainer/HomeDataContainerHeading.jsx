import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';


export default class HomeDataContainerHeading extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let data = this.props.data;
        return (
            <div className="m-display-flex">
                <h3 className="home-section-header">{data}</h3>
                <button type="button" className="btn btn-info btn-info-mobile width-60">VIEW ALL</button>
            </div>
        );
    }
}