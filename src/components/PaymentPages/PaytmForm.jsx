import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { paytm_url } from '../../helpers/urls';


class PaytmForm extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let json = JSON.parse(localStorage.getItem('formData'));
        console.log(json);
        var form = '';
        form = document.getElementById('form');
        if (json) {
            for (var key in json) {
                var input = document.createElement("input");
                input.type = "text";
                input.name = key;
                input.value = json[key];
                form.appendChild(input);
            }
            console.log(form);
            document.forms['paytmForm'].submit();
        }
    }

    render() {
        return (<div>
            <div>Please don't press back your transaction is under progress....</div>
            <form style={{ display: 'none' }} method='post' action={paytm_url} id='form' name='paytmForm'>

            </form>
        </div>)
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedPaytm = withRouter(connect(mapStateToProps)(PaytmForm));
export { connectedPaytm as PaytmForm };