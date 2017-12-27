import React, { Component } from 'react';
import '../../../../css/agreementsProducts.css';
import '../../../../css/style.css';

export default class Process extends Component {
    render() 
    
    {
        var divStyle = {
            display: "flex", 
            width: "70%",
            
            justifyContent: 'flex-start',
          };
        return (
            <div>
                <h5 className="margin-top-5 bold-ptsans-font font-16">Process</h5>
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