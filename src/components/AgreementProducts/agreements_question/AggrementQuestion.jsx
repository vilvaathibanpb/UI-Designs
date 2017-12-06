import React, { Component } from 'react';
import '../../../css/agreementsProducts.css';
import '../../../css/style.css';
import AggrementQuestionImage from '../../../assets/images/Agreement_Product/Image_Questions_BG.png';


export default class AggrementQuestion extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var activeIndex = 0;
            var scrollTopPadding = -100;
            var wrapper;
            var offsetTop;
            var fields = [];
            function setActiveTab() {
                    fields = document.getElementsByClassName("field");
                    console.log(fields , document);
                    for(var i=0;i<fields.length;i++){
                    fields[i].classList.remove('active');
                }
                
                var activeField = fields[activeIndex];
                console.log(fields);
                //  activeField.classList.add(' active');
                activeField.classList += ' active';

                activeField.children[1].focus();
                }

            function scrollToActiveField(field) {
                console.log(field);    
                var index = null;
            
                for(var i=0;i<fields.length; i++){
                if(fields[i] === field){
                index = i; break;
                }
             }
             console.log("INDEX "+index);
                if (index !== activeIndex) {
                    activeIndex = index;
                    var offset = offsetTop;
                    console.log(field);
                    // wrapper.scrollTop = 200;
                    setActiveTab();
                    
                }
            }
            function scrollToActiveFieldByIndex(index) {    
                scrollToActiveField(fields.eq(index));
            }
         
            function init(){
                wrapper = document.getElementById("wrapper");
                var fields = document.getElementsByClassName("field");    
                for(var i=0; i<fields.length; i++){
                fields[i].addEventListener("click", function(){
                scrollToActiveField(fields[i]);
                });
                }
                var inputs = document.getElementsByClassName("inputs");
                for(var i=0; i<inputs.length; i++){
                inputs[i].addEventListener("focus",function(event){
            //      console.log(event.target.parentNode);      
                scrollToActiveField(event.target.parentNode);
                });
                inputs[i].addEventListener("keydown",function(event){
                    if (event.keyCode === 13 && this.validity.valid) {
                         var nextInputIndex = activeIndex + 1;
                         if (nextInputIndex < inputs.length) {
                             inputs[nextInputIndex].focus();
                         }
                     }
              });
             }            
            }
            
            window.onload = function () {
                
                setActiveTab();
                init();
                document.getElementById("top-header").classList.add('diagonal-transition');
        }
        
        return (
            <div className="custom-question-margin">
                    <div className="background-img-questions-blog">
                        <div className="container-questions-blog"  id="top-header">
                            <div  className="question-box">
                                <form className="form" action="">
                                    <div className="field">
                                        <label>First name</label>
                                        <input type="text" className="inputs" />
                                    </div>
                                    <div className="field">
                                        <label>Last name</label>
                                        <input type="text" className="inputs"/>
                                    </div>
                                    <div className="field">
                                        <label>Telephone</label>
                                        <input type="text" className="inputs" />
                                    </div>
                                    <div className="field">
                                        <label>Email</label>
                                        <input type="text"  className="inputs"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}