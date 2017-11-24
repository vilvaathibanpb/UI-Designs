import React, { Component } from 'react';
import '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/agreementsProducts.css';
import '/home/rahul/Desktop/dockettech_frontend/src/style.css';

export default class AggrementDescription extends Component {
    render() 
    
    {
        return (
            <div>
                <h5 className="margin-top-5 bold font-18">Description</h5>
                <p className=" text-justify text-center font-color-8c8a8b">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    or randomised words alteration in some form, by injected humour, or randomised words which
                    don't look even slightly believable.</p>
                <p className=" text-justify text-center font-color-8c8a8b">There are many variations of passages or randomised words of Lorem Ipsum available.If you are
                    going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                    hidden in the middle of text.</p>
           </div>
        );
    }
}