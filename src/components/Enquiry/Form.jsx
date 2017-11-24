import React, { Component } from 'react';
import '../../css/enquiry.css';
import '../../css/agreements.css';
import '../../css/style.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <form className="enquiry margin-form">
                    <div className="form-group">
                        <input className="form-control enquiry-input" placeholder="Name" id="name" type="name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control enquiry-input" placeholder="Email" id="email" type="email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control enquiry-input" id="mobile" placeholder="Mobile" type="mobile" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control enquiry-input" rows={3} id="ENQUIRY" placeholder="Your Message..." defaultValue={""} />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn enquiry-btn-blue bold">SUBMIT</button>
                    </div>
                </form>

            </div>
        );
    }
}