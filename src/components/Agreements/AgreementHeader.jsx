import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';

export default class AgreementHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let header = this.props.data;
        return (
            <div>
                <header className="header-agreements">
                    <div className="container">
                        <div className="row">
                            <h1 className="font-color-1db0e6 font-weight margin-left-2">{header} <span className="pull-right Agreement-close-btn margin-right-2">X</span></h1>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}