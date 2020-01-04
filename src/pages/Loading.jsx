import React, { Component } from 'react';

export default class Loading extends Component {
   
    render() {
        return (
            <div className="preloader">
                <div className="preloader-wrapper">
                    <img src="https://dhyeyportfolioimages.s3.ap-south-1.amazonaws.com/assets/css/ajax-loader.gif" alt="ajax-loader" />
                </div>
            </div>
        );
    }
}


