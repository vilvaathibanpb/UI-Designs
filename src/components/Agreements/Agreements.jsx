import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';
import AgreementsHeader from './AgreementHeader';
import AgreementsSearch from './AgreementsSearchSection';
import ListSection from './ListSection';
import Footer from '../Footer/Footer';
import { agreementsActions } from '../../actions/agreements_actions';
import { connect } from 'react-redux';

let data = {};
class Agreements extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        dispatch(agreementsActions.agreementsList('agreements'));
    }

    componentWillMount() {
        if (localStorage.getItem('agreements')) {
            data = JSON.parse(localStorage.getItem('agreements'));
        }
    }


    render() {
        return (
            <div>
                <AgreementsHeader />
                <AgreementsSearch />
                <ListSection data={data} />



                <Footer />
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { requestingAgreements } = state.agreementsList;
    return {
        requestingAgreements
    }
}

const connectAgreementsComponent = connect(mapStateToProps)(Agreements);
export { connectAgreementsComponent as Agreements };