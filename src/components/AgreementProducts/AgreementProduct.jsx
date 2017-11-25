import React, { Component } from 'react';
import '../../css/agreementsProducts.css';
import '../../css/style.css';
import AgreementHeader from '../AgreementProducts/AgreementHeader/AgreementHeader';
import AggrementQuestion from '../AgreementProducts/agreements_question/AggrementQuestion';
import ViewSampleAgreement from '../AgreementProducts/Agreements_description/Sample_agreement/ViewSampleAgreement';
import RelatedAgreement from '../AgreementProducts/Agreements_description/Related_Agreement/RelatedAgreement';
import AgreementDescription from '../AgreementProducts/Agreements_description/Description/description';
import Applicability from '../AgreementProducts/Agreements_description/Applicability/applicability';
import Process from '../AgreementProducts/Agreements_description/Process/process';
import ProsAndCons from '../AgreementProducts/Agreements_description/ProsAndCons/ProsAndCons';
import Footer from '../Footer/Footer';

export default class AgreementProduct extends Component {
    constructor(props) {
        super(props);
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
                            <AggrementQuestion />
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