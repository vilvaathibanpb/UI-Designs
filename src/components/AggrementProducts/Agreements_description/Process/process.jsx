import React, { Component } from 'react';
import '/home/rahul/Desktop/dockettech_frontend/src/components/AggrementProducts/agreementsProducts.css';
import '/home/rahul/Desktop/dockettech_frontend/src/style.css';

export default class Process extends Component {
    render() 
    
    {
        var divStyle = {
            display: "flex", 
            width: "70%",
            justifyContent: 'space-between'
          };
        return (
            <div>
                <h5 className="margin-top-5 bold font-18">Process</h5>
                    <div className="margin-top-5" style={divStyle} >
                        <div id="circle"></div>
                        <div id="circle"></div>
                        <div id="circle"></div>
                        <div id="circle"></div>
                    </div>
           </div>
        );
    }
}