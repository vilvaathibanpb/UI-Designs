import React, { Component } from 'react';
import '../../css/agreementsProducts.css';
import '../../css/style.css';
import AgreementHeader from '../AgreementProducts/AgreementHeader/AgreementHeader';
import AggrementQuestion from './AgreementsQuestions';
import ViewSampleAgreement from '../AgreementProducts/Agreements_description/Sample_agreement/ViewSampleAgreement';
import RelatedAgreement from '../AgreementProducts/Agreements_description/Related_Agreement/RelatedAgreement';
import AgreementDescription from '../AgreementProducts/Agreements_description/Description/description';
import Applicability from '../AgreementProducts/Agreements_description/Applicability/applicability';
import Process from '../AgreementProducts/Agreements_description/Process/process';
import ProsAndCons from '../AgreementProducts/Agreements_description/ProsAndCons/ProsAndCons';
import Footer from '../Footer/Footer';
import TypeformComponent from './Typeform';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class AgreementProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: ''
        }
    }
    componentWillMount() {
        var productName = decodeURI(this.props.location.search.slice(3));
        this.setState({ productName: productName });

    }
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <AgreementHeader />
                <div className="container">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <AggrementQuestion header={this.state.productName} />
                        </div>
                        <div className="col-md-6 margin-top-5">
                            <div className="col-md-12">
                                <span><ViewSampleAgreement />
                                    <RelatedAgreement />
                                </span>
                            </div>
                            <div className=" col-md-12 margin-top-5">
                                <AgreementDescription />
                            </div>
                            <div className="col-md-12 margin-top-5 ">
                                <Applicability />
                            </div>
                            <div className=" col-md-12 margin-top-5">
                                <Process />
                            </div>
                            <div className=" col-md-12 margin-top-5">
                                <ProsAndCons />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
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

const connectedAgreementProduct = withRouter(connect(mapStateToProps)(AgreementProduct));
export { connectedAgreementProduct as AgreementProduct }; 