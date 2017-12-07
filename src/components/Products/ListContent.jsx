import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';
import ListSection from './ListSection';
import Form from './ProductEnquiryForm';
import RelatedDocs from './ProductRelatedDocs';

let dataProducts = [];
let products = {};
export default class ListContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            nullCheck: false
        }
    }
    componentWillMount() {
        let data = this.state.data;
        if (data != undefined) {
            dataProducts = Object.keys(data['products']);
            products = data['products'];
            this.setState({ nullCheck: true });
        }
    }

    render() {

        return (
            <div>
                <section className="margin-top-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 clearfix">
                                <div className="col-md-9  clearfix">
                                    {this.state.nullCheck &&
                                        dataProducts.map((content) =>
                                            <ListSection key={content.id} data={products[content]} listHeader={content} />
                                        )
                                    }
                                </div>
                                <div className="col-md-3 clearfix margin-top-2">
                                    <RelatedDocs />

                                    <Form />
                                </div>
                            </div>
                        </div></div>
                </section>


            </div>
        );
    }
}