import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';


export default class ProductEnquiryForm extends Component {

    render() {

        return (
            <div>
                <form className="enquiry">
                    <div className="form-group">
                        <input type="name" className="form-control enquiry-input" placeholder="Full Name" id="name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control enquiry-input" placeholder="Email" id="email" />
                    </div>
                    <div className="form-group">
                        <input type="mobile" className="form-control enquiry-input" id="mobile" placeholder="Mobile" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control enquiry-input" rows={3} id="ENQUIRY" placeholder="Your Enquiry" defaultValue={""} />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn enquiry-btn-blue bold">SUBMIT</button>
                        <div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}