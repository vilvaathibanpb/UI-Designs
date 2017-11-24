import React, { Component } from 'react';
import '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/agreementsProducts.css';
import '/home/rahul/Desktop/dockettech_frontend/src/style.css';
// import '/home/rahul/Desktop/dockettech_frontend/src/components/Home/home.css';
import AggrementQuestionImage from '/home/rahul/Desktop/dockettech_frontend/images/Agreement_Product/Image_Questions_BG.png';


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