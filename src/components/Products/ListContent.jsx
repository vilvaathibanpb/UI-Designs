import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';
import ListSection from './ListSection';
import Form from './ProductEnquiryForm';
import RelatedDocs from './ProductRelatedDocs';
import { Typeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { history } from 'react-router-dom';


let dataProducts = [];
let products = [];
let allProducts = [];
class ListContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            nullCheck: false,
            searchName: ''
        }
        this.selectOption = this.selectOption.bind(this);
    }
    componentWillMount() {
        let data = this.state.data;
        // var localProducts = JSON.parse(localStorage.getItem('products'));
        // products = localProducts['products'][0];
        products = data[0];
        if (data != undefined) {
            dataProducts = Object.keys(products);
            this.setState({ nullCheck: true });
            var array1 = products['contract'];
            var array2 = products['power_of_attorney'];
            var array3 = products['rental'];
            allProducts = array1.concat(array2, array3);
        }
    }

    selectOption(e) {
        this.setState({ searchName: e })
        this.props.history.push({
            pathname: '/agreementProducts',
            search: '/:'+e,
            state: { searchName: e }
        });
    }
    render() {
        const filterByCallback = (option, text) => {
            return (
                option.toLowerCase().indexOf(text.toLowerCase()) !== -1
            );
        };
        return (
            <div>
                <section className="margin-top-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 clearfix">
                                <div className="col-md-9  clearfix">
                                    <Typeahead
                                        filterBy={filterByCallback}
                                        labelKey="name"
                                        options={allProducts}
                                        placeholder="Search your product here...."
                                        onInputChange={value => this.selectOption(value)}
                                    />
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

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedProductContent = withRouter(connect(mapStateToProps)(ListContent));
export { connectedProductContent as ListContent }; 