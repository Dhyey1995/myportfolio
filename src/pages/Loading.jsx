import React, { Component } from 'react';

export default class Loading extends Component {
   
    render() {
        return (
            <div className="preloader">
                <div className="preloader-wrapper">
                    <img src="/assets/css/ajax-loader.gif" alt="ajax-loader" />
                </div>
            </div>
        );
    }
}


