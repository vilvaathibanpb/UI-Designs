import React from 'react';
import TypeForm from 'react-typeform';
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
            type: 'text',
            question: 'What is your name ?'
        },
        {
            type: 'checkbox',
            question: 'Do you have your own format?'
        },
        {
            type: 'text',
            question: 'What is your age ?'
        }
    ]
}

class TypeFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.nextButtonClick = this.nextButtonClick.bind(this);
    }

    submit() {

    }
    nextButtonClick() {



    }
    render() {
        let type = questionsArray['questions'];
        console.log(JSON.stringify(questionsArray['questions']));
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
                            <TypeForm
                                onSubmit={this.submit}
                                nextBtnText="OK"
                                nextBtnOnClick={this.nextButtonClick}
                            >
                                {

                                    questionsArray['questions'].map((content, i) =>
                                        <div className="margin-top-40 margin-bottom-30 margin-left-4 margin-right-4 up down" >
                                            <div className="questionStyle">
                                                {i + 1}.{content['question']}
                                            </div>
                                            {/* {inputType} */}
                                            {/* {
                                                !this.state.inputArray && !this.state.inputArray['inputValue' + i] &&
                                                <div className="error_field">{this.state.error_message}</div>
                                            } */}
                                            {/* <input style={{ margin: '2px 8px' }} type={questionsArray['questions'][i]['type']} /> */}
                                            <button id={'inputValue' + i} className="okbutton" type="button" onClick={this.nextButtonClick}>
                                                OK
                                            </button>
                                        </div>

                                    )
                                }

                            </TypeForm>

                            <div className="updownImagesContainer">
                                <img id="up" src={Icon2} onClick={this.incrementIndex} />
                                <img style={{ backgroundColor: 'gray !important' }} id="down" src={Icon1} />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default TypeFormComponent;
