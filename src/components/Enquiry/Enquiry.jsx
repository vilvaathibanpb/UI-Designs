import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import '../../css/enquiry.css';
import '../../css/style.css';
import Form from './Form';
import EnquiryImage from '../../assets/images/Enquiry/Image_Enquiry.jpg';

export default class Enquiry extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section>
                    <div className="container-fluid container-padding">
                        <div className="row">
                            <div className="col-md-12 container-padding">
                                <div className="col-md-6 col-xs-12 col-sm-12 container-padding">
                                    <div id="image">
                                        <img clas="img-responsive" src="images/Enquiry/Image_Enquiry.jpg" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12 col-sm-12 container-padding">
                                    <div id="image2" style={{ textAlign: 'right' }}>
                                    <Link to="/"><span className="enquiry-close-btn margin-right-5">X</span></Link>
                                    </div>
                                    <div className="hr-line padding-none"> </div>
                                    {/* <div class="right-align"></div> */}
                                    <div className="margin-left-5">
                                        <h1 className="stag-Medium">
                                            <b>Quick Enquiry</b>
                                        </h1>
                                        <h5 className="margin-top-2">WE'LL LOVE TO HEAR FROM YOU</h5>
                                        <h6 className="margin-top-2">Give us a call,send us an email or drop by to have a chat</h6>
                                        <p className="margin-top-2">We are here t help you in all possible ways.</p>
                                        <div className="flex-box">
                                            <div className="flex-left">
                                                <div className="flex-box">
                                                    <img clas="img-responsive" src="images/Enquiry/Icon_Mobile.svg" width={30} height={30} />
                                                    <h5>080-46564656</h5>
                                                </div>
                                            </div>
                                            <div className="flex-right">
                                                <div className="flex-box">
                                                    <img clas="img-responsive" src="images/Enquiry/Icon_Mail.svg" width={30} height={30} />
                                                    <h5>
                                                        <a>support@dockettech.com</a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="address-width margin-top-2">New bridge Business center,Embassay golf link business park Domlur, Bangalore-560071 </p>
                                        <Form />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        );
    }
}