import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Router, Route, history } from 'react-router-dom';
import { connect } from 'react-redux';

class PaymentStatus extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { match, location, history } = this.props
        var successUrl = this.props.location.search.slice(1);
        console.log(successUrl);
    }

    render() {
        return (<div style={{ color: 'green' }}>Please wait for some time ....</div>)
    }

}


function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedPaymentStatus = withRouter(connect(mapStateToProps)(PaymentStatus));
export { connectedPaymentStatus as PaymentStatus }; 