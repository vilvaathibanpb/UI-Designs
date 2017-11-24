import React, { Component } from 'react';
import '../../css/aboutUs.css';
import '../../css/home.css';
import '../../css/style.css';
import Backgroundlessheader from './BackgroundlessHeader.jsx';
import Footer from '../Footer/Footer';
import WhoDocket from '../../assets/images/aboutUs/Who_Is_Docket.jpg';

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Backgroundlessheader />
                <section className="container-image-style container-image-style margin-top-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="row-background">
                                <span>
                                    <h1 className="banner-text">About Us</h1>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mission-background">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="mission-text">
                                <h4>Our Mission</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container container-image-style">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6 container-image-style">
                                    <img className="column-6-image" src={WhoDocket} />
                                </div>
                                <div className="col-md-6">
                                    <div className="docket-text">
                                        <h4>Who is DocketTech</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of type and scrambled it to make
                      a type specimen book. It was popularised in the 1960s with the release of Letraset sheets
                      containing Lorem Ipsum passages, and more recently with desktop publishing software like
                      Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
                      printing ... when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It was popularised in the 1960s with the release of Letraset sheets containing
                      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing ... when
                      an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker including versions
                      of Lorem Ipsum.
                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mission-background">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-5">
                                    <div className="docket-text">
                                        <h4>What does Docket Do ?</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of type and scrambled it to make
                      a type specimen book. It was popularised in the 1960s with the release of Letraset sheets
                      containing Lorem Ipsum passages... Lorem Ipsum is simply dummy text of the printing ... when
                      an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                                    </div>
                                    <div className="margin-top-10">
                                        <div className="col-md-5">
                                            <ul className="list-style" style={{ borderRight: '1px solid black', marginRight: '5%' }}>
                                                <li className="margin-top-5" id="step1">Step 1</li>
                                                <li className="margin-top-5" id="step2">Step 2</li>
                                                <li className="margin-top-5" id="step3">Step 3</li>
                                                <li className="margin-top-5" id="step4">Step 4</li>
                                                <li className="margin-top-5" id="step5">Step 5</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-7">
                                            <h5>
                                                <b>Drafting the legal documents</b>
                                            </h5>
                                            <p className="font-12">Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                      </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="row flex-row flex-nowrap">
                                        <ul className="images-container">
                                            <li className="ic-item">
                                                <span className="dotted-circle" id="circle1">
                                                    <span className="solid-circle">
                                                        <img src="./images/Icon1.png" className="image-style" />
                                                    </span>
                                                </span>
                                            </li>
                                            <li className="ic-item">
                                                <div className="dotted-circle" id="circle2">
                                                    <div className="solid-circle">
                                                        <img src="./images/Icon1.png" className="image-style" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ic-item">
                                                <div className="dotted-circle" id="circle3">
                                                    <div className="solid-circle">
                                                        <img src="./images/Icon1.png" className="image-style" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ic-item">
                                                <div className="dotted-circle" id="circle4">
                                                    <div className="solid-circle">
                                                        <img src="./images/Icon1.png" className="image-style" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ic-item">
                                                <div className="dotted-circle" id="circle4">
                                                    <div className="solid-circle">
                                                        <img src="./images/Icon1.png" className="image-style" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="col-md-4">
                                        </div>
                                        <div className="col-md-4">
                                            <div className="forw-back-buttons">
                                                <i className="fa fa-arrow-circle-o-left font-icon-style" aria-hidden="true" />
                                                <i className="fa fa-arrow-circle-o-right font-icon-style" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="mission-text">
                                <h4>Our Clients</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1" />
                            <div className="col-md-2">
                                <img src="./images/LogoBlue.png" width={100} height={90} />
                            </div>
                            <div className="col-md-2">
                                <img src="./images/LogoBlue.png" width={100} height={90} />
                            </div>
                            <div className="col-md-2">
                                <img src="./images/LogoBlue.png" width={100} height={90} />
                            </div>
                            <div className="col-md-2">
                                <img src="./images/LogoBlue.png" width={100} height={90} />
                            </div>
                            <div className="col-md-2">
                                <img src="./images/LogoBlue.png" width={100} height={90} />
                            </div>
                            <div className="col-md-1" />
                        </div>
                    </div>
                </section>
                <Footer />


            </div>
        );
    }
}