import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';
import docketGif from '../../assets/images/Animated-logo.gif';
import ProductsHeader from './ProductsHeader';
import ProductsSearch from './ProductsSearchSection';
import {ListContent} from './ListContent';
import Footer from '../Footer/Footer';
import { productsActions } from '../../actions/products_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Typeahead } from 'react-bootstrap-typeahead';

let data = {};
class Products extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        dispatch(productsActions.productsList('agreements'))
    }

    componentWillMount() {
        const { match, location, history } = this.props;
        console.log(this.props.location.search);
    }

    render() {
        const { requestingProducts, receivedProducts, productData } = this.props;
        console.log(requestingProducts, receivedProducts, productData);
        return (
            <div>
                {receivedProducts && localStorage.getItem('products') &&
                    <div>
                        <ProductsHeader data={productData['product_category']} />
                        {/* <ProductsSearch /> */}
                        <ListContent data={productData['products']} />
                        <Footer />
                    </div>
                }
                {requestingProducts &&
                    <div className="centerImage">
                        <img src={docketGif} />
                    </div>
                }

            </div>
        );
    }
}
function mapStateToProps(state) {
    const { requestingProducts, receivedProducts, productData } = state.productsList;
    return {
        requestingProducts,
        receivedProducts,
        productData
    }
}

const connectAgreementsComponent = connect(mapStateToProps)(Products);
export { connectAgreementsComponent as Products };