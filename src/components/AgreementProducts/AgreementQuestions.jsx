import React, { Component } from 'react';
import '../../css/agreementsProducts.css';
import '../../css/style.css';
import AggrementQuestionImage from '../../assets/images/Agreement_Product/Image_Questions_BG.png';
import Icon1 from '../../assets/images/Agreement_Product/Icon1.png';
import Icon2 from '../../assets/images/Agreement_Product/Icon2.png';

let questionsArray = {
    productName: 'Flat Agreement',
    price: '1',
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
            type: 'checkbox',
            question: 'How do you want to document to be processed?'
        },
        {
            type: 'text',
            question: 'Enter the deliver address'
        },
        {
            type: 'tick',
            question: 'Accept the terms and conditions'
        }
    ],
    estamp: [

    ]
}
export default class AgreementQuestions extends Component {
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
    // componentWillMount() {
    //     for (var i=0; i< )

    // }
    componentDidMount() {
        document.getElementById('top-header').classList.add('diagonal-transition');
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        const { inputArray } = this.state;
        inputArray[e.target.name] = e.target.value;
        this.setState(inputArray);
        localStorage.setItem("inputArray", inputArray);
        console.log(e.target.value + JSON.stringify(inputArray));
    }

    incrementIndex(e) {
        e.preventDefault();
        // for ()        

    }

    onclickDec(e) {
        e.preventDefault();

    }
    render() {
        let i = this.state.i;
        let inputType = '';
        if (questionsArray['questions'][i]['type'] == 'text') {
            inputType = (<input name={'inputValue' + i} type="text" onChange={this.handleChange} />);

        }
        if (questionsArray['questions'][i]['type'] == 'tick') {
            inputType = (<input name={'inputValue' + i} type="checkbox" onChange={this.handleChange} />);

        }
        if (questionsArray['questions'][i]['type'] == 'radio') {
            inputType = (<div style={{ textAlign: 'left !important', display: 'block' }}>
                <input type="radio" value="YES" name={'inputValue' + i} onChange={this.handleChange} /> YES
                         <input type="radio" value="NO" name={'inputValue' + i} onChange={this.handleChange} /> NO
                     </div>)

        }
        if (questionsArray['questions'][i]['type'] == 'checkbox') {
            inputType = (<div style={{ textAlign: 'left !important', display: 'block' }}>
                <input type="checkbox" value="Notarized" name={'inputValue' + i} onChange={this.handleChange} /> Notarized
                     <input type="checkbox" value="Registered" name={'inputValue' + i} onChange={this.handleChange} /> Registered
                </div>)
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

                            <div>{
                                questionsArray['questions'].
                                    map((content) =>
                                        <div>{content['question']}</div>
                                    )
                            }
                            </div>



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