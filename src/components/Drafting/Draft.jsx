import React, { Component } from 'react';
import Pdfsrc from './incometaxform.pdf';

export default class Pdf extends Component {
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <iframe  height={800} width={800} src={Pdfsrc}></iframe>
            </div>
        )
    }
}