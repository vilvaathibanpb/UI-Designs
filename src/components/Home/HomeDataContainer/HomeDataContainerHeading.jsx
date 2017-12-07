import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';
import { Link } from 'react-router-dom';


export default class HomeDataContainerHeading extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let data = this.props.data;
        let viewAllLink = this.props.viewAllLink;
        return (
            <div className="m-display-flex">
                <h3 className="home-section-header">{data}</h3>
                {data != "POPULAR SERVICES" && <Link to={viewAllLink}><button type="button" className="btn btn-info btn-info-mobile home-custom-btn-margin width-60">VIEW ALL</button></Link>}
            </div>
        );
    }
}