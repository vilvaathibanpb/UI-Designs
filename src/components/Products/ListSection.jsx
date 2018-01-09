import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';
import { Link } from 'react-router-dom';


export default class ListSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.data,
            header: this.props.listHeader
        }
    }
    componentDidMount() {

    }

    render() {
        let products = this.props.data;
        let header = this.state.header;
        let list1 = [];
        let list2 = [];
        let list3 = [];
        let count = 1;
        const listItems = products.map((number) => {
            if (count == 1) {
                count++;
                list1.push(number);
                if (count == 2) {
                    return;
                }
            }
            if (count == 2) {
                count++;
                list2.push(number);
                if (count == 3) {
                    return;
                }

            }
            if (count == 3) {
                count = 1;
                list3.push(number);
                if (count == 1) {
                    return;
                }
            }
        }
        );
        const listItems1 = list1.map((content) =>
            <li><Link className="list-item-color" to={"/agreementProducts?/:" + content}>{content}</Link></li>
        );
        const listItems2 = list2.map((content) =>
            <li> <Link className="list-item-color" to={"/agreementProducts?/:" + content}>{content}</Link></li>
        );
        const listItems3 = list3.map((content) =>
            <li><Link className="list-item-color" to={"/agreementProducts?/:" + content}>{content}</Link></li>
        );
        return (
            <div className="col-md-12 Section-agreement bg-white margin-top-2">
                <div className="hr-sect margin-top-2 bold margin-bottom-2">{header}</div>
                <div className="col-md-4 padding-none" id="agreements-item">
                    <ul className="agreement-list-item" style={{ width: '250px' }} >
                        {listItems1}
                    </ul>
                </div>
                <div className="col-md-4 padding-none" id="agreements-item">
                    <ul className="agreement-list-item" style={{ width: '250px' }}>
                        {listItems2}
                    </ul>
                </div>
                <div className="col-md-4 padding-none" id="agreements-item">
                    <ul className="agreement-list-item" style={{ width: '250px' }}>
                        {listItems3}
                    </ul>
                </div>
            </div>
        );
    }
}