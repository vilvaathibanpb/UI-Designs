import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Router, Route, history } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthToken extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { match, location, history } = this.props
        var jwt = this.props.location.search.slice(7);
        let dec = decodeURIComponent(jwt)
        localStorage.setItem('jwt', dec);
        if (dec != '') {
            this.props.history.push("/");
        }
        else {
            this.props.history.push("/registerLogin");
        }
    }

    render() {
        return (<div style={{ color: 'red' }}>Loading ....</div>)
    }

}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedJWT = withRouter(connect(mapStateToProps)(AuthToken));
export { connectedJWT as AuthToken }; 