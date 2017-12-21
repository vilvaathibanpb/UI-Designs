import React, { Component } from 'react';
import '../../css/agreementsProducts.css';
import '../../css/style.css';
import AggrementQuestionImage from '../../assets/images/Agreement_Product/Image_Questions_BG.png';
import Icon1 from '../../assets/images/Agreement_Product/Icon1.png';
import Icon2 from '../../assets/images/Agreement_Product/Icon2.png';

let questionsArray = {
    productName: 'Flat Agreement',
    price: '199',
    questions: [
        {
            type: 'radio',
            question: 'Do you have your own format?'
        },
        {
            type: 'radio',
            question: 'Do you need eStamp?'
        },
        {
            type: 'select',
            question: 'How do you want to document to be processed?'
        },
        {
            type: 'text',
            question: 'Enter the deliver address'
        },
        {
            type: 'checkbox',
            question: 'Accept the terms and conditions'
        }
    ],
    estamp: [

    ]
}
export default class AgreementsQuestions extends Component {
    constructor(props) {
        super(props);
        let inputDetails = {};
        if (localStorage.getItem('inputArray')) {
            inputDetails = localStorage.getItem('inputArray');
            console.log(JSON.stringify(inputDetails));
        }
        this.state = {
            i: parseInt(0),
            error_message: false,
            inputArray: {
                inputValue0: inputDetails['inputValue0'] ? inputDetails['inputValue0'] : '',
                inputValue1: inputDetails['inputValue1'] ? inputDetails['inputValue1'] : '',
                inputValue2: inputDetails['inputValue2'] ? inputDetails['inputValue2'] : '',
                inputValue3: inputDetails['inputValue3'] ? inputDetails['inputValue3'] : '',
                inputValue4: inputDetails['inputValue4'] ? inputDetails['inputValue4'] : ''
            }
        }
        this.onclickDec = this.onclickDec.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.incrementIndex = this.incrementIndex.bind(this);

    }
    componentDidMount() {
        document.getElementById('top-header').classList.add('diagonal-transition');
    }

    handleChange(e) {
        const { name, value } = e.target;
        const { inputArray } = this.state;
        inputArray[e.target.name] = e.target.value;
        this.setState(inputArray);
        localStorage.setItem("inputArray", inputArray);
        console.log(inputArray);
    }

    incrementIndex(e) {
        e.preventDefault();
        let i = this.state.i;
        let inputValue = document.getElementById('inputValue' + i);
        let up = document.getElementById('up');
        let down = document.getElementById('down');
        let radio = document.getElementsByName('select');

        const { inputArray } = this.state;
        if (i == 0) {
            down.onclick = null;
        }
        if (i == questionsArray['questions'].length - 1) {
            up.onclick = null;
        }
        if (inputArray['inputValue' + i] == '') {
            this.setState({ error_message: true });

        }

        if (i != questionsArray['questions'].length - 1 && !inputArray['inputValue' + i] == '') {
            inputValue.classList.add('up-transition');
            if (inputValue.classList.contains('up-transition') || inputValue.classList.contains('down-transition')) {
                inputValue.classList.remove('up-transition');
                inputValue.classList.remove('down-transition');
                window.requestAnimationFrame(function () {
                    inputValue.classList.add('up-transition');
                });
            }
            this.setState({ i: i + 1, error_message: false });
        }
    }

    onclickDec() {
        let i = this.state.i;
        console.log(i);
        var up = document.getElementById('up');
        var down = document.getElementById('down');
        let inputValue = document.getElementById('inputValue' + i);

        if (i == 0) {
            down.onclick = null;
        }
        if (i == questionsArray['questions'].length - 1) {
            up.onclick = null;
        }
        if (i != 0 && i <= questionsArray['questions'].length - 1) {
            if (inputValue.classList.contains('up-transition') || inputValue.classList.contains('down-transition')) {
                inputValue.classList.remove('up-transition');
                inputValue.classList.remove('down-transition');
                window.requestAnimationFrame(function () {
                    inputValue.classList.add('down-transition');
                });
            }
            this.setState({ i: i - 1, error_message: false });
        }
    }
    render() {
        let i = this.state.i;
        let inputType = '';
        switch (questionsArray['questions'][i]['type']) {
            case 'text':
                inputType = (<input name={'inputValue' + i} value={this.state.inputArray['inputValue' + i]} id={'inputValue' + i} type="text" onChange={this.handleChange} />);
            case 'checkbox':
                inputType = (<input name={'inputValue' + i} value={this.state.inputArray['inputValue' + i]} id={'inputValue' + i} type="checkbox" onChange={this.handleChange} />);
            case 'radio':
                inputType = (<div style={{ textAlign: 'left !important', display: 'block' }}>
                    <input type="radio" value="YES" name={'inputValue' + i} onChange={this.handleChange} /> YES
                    <input type="radio" value="NO" name={'inputValue' + i} onChange={this.handleChange} /> NO
                </div>)
            case 'select':
                inputType = (<select>
                    <option>Notarized</option>
                    <option>Registered</option>
                </select>)
            default:
                inputType = (<div></div>)

        }
        return (
            <div className="custom-question-margin">
                <div className="background-img-questions-blog">
                    <div className="container-questions-blog" id="top-header">
                        <form className="form margin" action="">
                            <div className="questionsBoxHeader">{questionsArray['productName']}</div>
                            <div style={{ display: 'flex', color: '#00a1e2' }}>
                                <div className="priceBox">
                                    <div style={{ display: 'flex' }}>
                                        <div className="priceBoxText">BEST <span style={{ display: 'block' }}>PRICE</span></div>
                                        <div className="priceText">₹{questionsArray['price']}</div>
                                    </div>
                                </div>
                                <div className="placeOrder">
                                    Place Your Order
                                    </div>
                            </div>
                            <hr />

                            <div id={'inputValue' + i} className="margin-top-40 margin-bottom-30 margin-left-4 margin-right-4 up down" >
                                <div>
                                    <div className="questionStyle">
                                        {i + 1}.{questionsArray['questions'][i]['question']}
                                    </div>
                                    {inputType}
                                    {
                                        this.state.error_message &&
                                        <div className="errorField">* Required</div>
                                    }
                                    {/* <input style={{ margin: '2px 8px' }} type={questionsArray['questions'][i]['type']} /> */}
                                    <button className="okbutton" type="button" onClick={this.incrementIndex}>
                                        OK
                                </button>
                                </div>
                            </div>

                            {/* <div id={'inputValue' + i} className="margin-top-40 margin-bottom-30 margin-left-4 margin-right-4 up down" >
                                <div>
                                    <div>
                                        <div className="questionStyle">
                                            Do you have your own format ??
                                        </div>
                                        <input type="radio" name="format" value="1" />YES
                                        <input type="radio" name="format" value="2" />NO
                                        {
                                            this.state.error_message &&
                                            <div className="errorField">* Required</div>
                                        }
                                        <button className="okbutton" type="button" onClick={this.incrementIndex}>
                                            OK
                                        </button>
                                    </div>
                                    <div style={{ display: 'none' }}>
                                        <div className="questionStyle">
                                            Do you need eStamp ??
                                        </div>
                                        <input type="radio" name="estamp" value="1" />YES
                                        <input type="radio" name="estamp" value="2" />NO
                                        {
                                            this.state.error_message &&
                                            <div className="errorField">* Required</div>
                                        }
                                        <button className="okbutton" type="button" onClick={this.incrementIndex}>
                                            OK
                                        </button>
                                    </div>
                                    <div style={{ display: 'none' }}>
                                        <div className="questionStyle">
                                            How do you want to document to be processed ??
                                        </div>
                                        <select>
                                            <option>Notarized</option>
                                            <option>Registered</option>
                                        </select>
                                        {
                                            this.state.error_message &&
                                            <div className="errorField">* Required</div>
                                        }
                                        <button className="okbutton" type="button" onClick={this.incrementIndex}>
                                            OK
                                        </button>
                                    </div>
                                    <div style={{ display: 'none' }}>
                                        <div className="questionStyle">
                                            Enter the delivery address
                                        </div>
                                        <input type="text" value="address" name="address" />
                                        {
                                            this.state.error_message &&
                                            <div className="errorField">* Required</div>
                                        }
                                        <button className="okbutton" type="button" onClick={this.incrementIndex}>
                                            OK
                                        </button>
                                    </div>
                                    <div style={{ display: 'none' }}>
                                        <div className="questionStyle">
                                            Accept the Terms and Conditions
                                            <input type="checkbox" value="terms" name="terms" />
                                        </div>
                                        {
                                            this.state.error_message &&
                                            <div className="errorField">* Required</div>
                                        }
                                        <button className="okbutton" type="button" onClick={this.incrementIndex}>
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>
 */}

                            <hr />
                            <div className="updownImagesContainer">
                                <img id="up" src={Icon2} onClick={this.incrementIndex} />
                                <img style={{ backgroundColor: 'gray !important' }} id="down" src={Icon1} onClick={this.onclickDec} />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}