import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/home.css';
import HomeDataContainerHeading from './HomeDataContainerHeading.jsx';
import HomeDataBlock from './HomeDataBlock.jsx';

export default class HomeDataContainer extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        let data = this.props.data;
        let properties = data.products;
        return (
            <div>
                <section id="popular_services" className={this.props.color} >
                    <div className="container-fluid home-sections-margins" >
                        <div className="row home-data-row">
                            <div className="col-md-12 clearfix margin-top-2 margin-bottom-2">
                                <div className="col-md-1" />
                                <div className="col-md-2 col-sm-12 col-xs-12 home-center-data margin-top-5">
                                    <HomeDataContainerHeading data={data.title} />
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-6">
                                    <HomeDataBlock data={properties[0]} textColor={this.props.textColor} />
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-6">
                                    <HomeDataBlock data={properties[1]} textColor={this.props.textColor} />
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-6">
                                    <HomeDataBlock data={properties[2]} textColor={this.props.textColor}/>
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-6 offset-md-1">
                                    <HomeDataBlock data={properties[3]} textColor={this.props.textColor}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        );
    }
}