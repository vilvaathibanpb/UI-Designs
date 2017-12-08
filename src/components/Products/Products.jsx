import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';
import docketGif from '../../assets/images/Animated-logo.gif';
import ProductsHeader from './ProductsHeader';
import ProductsSearch from './ProductsSearchSection';
import ListContent from './ListContent';
import Footer from '../Footer/Footer';
import { productsActions } from '../../actions/products_actions';
import { connect } from 'react-redux';

let data = {};
class Products extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        dispatch(productsActions.productsList('agreements'))
    }

    render() {
        const { requestingProducts, receivedProducts, productData } = this.props;
        console.log(requestingProducts, receivedProducts, productData);
        return (
            <div>
                {receivedProducts &&
                    <div>
                        <ProductsHeader data={productData['response']['product_category']} />
                        <ProductsSearch />
                        <ListContent  data={productData['response']} />
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