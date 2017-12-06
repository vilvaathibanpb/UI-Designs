import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';
import ListSection from './ListSection';
import Form from './ProductEnquiryForm';
import RelatedDocs from './ProductRelatedDocs';

let dataProducts = [];
export default class ListContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        dataProducts = Object.keys(data['products']);
        let products = data['products'];
        return (
            <div>
                <section className="margin-top-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 clearfix">
                                <div className="col-md-9  clearfix">
                                    {
                                        dataProducts.map((content) =>
                                            <ListSection key={content.id} data={products[content]} listHeader={content} />
                                        )
                                    }
                                </div>

                                <div className="col-md-3 clearfix margin-top-2">
                                    <RelatedDocs />
                                    <div className="col-md-12 Section-agreement margin-top-5 padding-none bg-white">
                                        <h5 className="enquiry-form bold">ENQUIRY FOR AGREEMENT SERVICES</h5>
                                        <Form />
                                    </div>
                                </div>
                            </div>
                        </div></div>
                </section>


            </div>
        );
    }
}