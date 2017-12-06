import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';
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
        dispatch(productsActions.productsList('agreements'));
    }

    componentWillMount() {
        if (localStorage.getItem('products')) {
            data = JSON.parse(localStorage.getItem('products'));
        }
    }


    render() {
        return (
            <div>
                <ProductsHeader data={data["product_category"]} />
                <ProductsSearch />
                <ListContent data={data} />
                <Footer />
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { requestingProducts } = state.productsList;
    return {
        requestingProducts
    }
}

const connectAgreementsComponent = connect(mapStateToProps)(Products);
export { connectAgreementsComponent as Products };