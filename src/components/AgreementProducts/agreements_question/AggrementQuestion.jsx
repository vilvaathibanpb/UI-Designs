import React, { Component } from 'react';
import '../../../css/agreementsProducts.css';
import '../../../css/style.css';
import AggrementQuestionImage from '../../../assets/images/Agreement_Product/Image_Questions_BG.png';


export default class AggrementQuestion extends Component {
    render() {
        window.onload = function () {
            document.getElementById("top-header").classList.add('diagonal-transition');
        }
        return (
            <div className="custom-question-margin">
                    <div className="background-img-questions-blog">
                        <div className="container-questions-blog"  id="top-header">
                        </div>
                    </div>
            </div>
        );
    }
}