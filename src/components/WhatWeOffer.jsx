import React, { Component } from 'react';

export default class WhatWeOffer extends Component {
    render() {
        return (
            <section className="offer-section bg-ash padding-top padding-bottom">
                <div className="container">
                    <div className="section-header wow fadeInUp">
                        <span className="cate">our offer</span>
                        <h2 className="title">what we offer</h2>
                    </div>
                </div>
                <div className="container mw-lg-100">
                    <div className="row align-items-center flex-wrap-reverse">
                        <div className="col-lg-6">
                            <div className="left-side-offer text-left wow fadeInUp" data-wow-delay=".3s">
                                <h4 className="title">get our best offer for your better business</h4>
                                <p>Porttitor vivamus, pellentesque praesent feugiat sitluportaarcu neque sed, augue magna, non libemaurisuricetiam erat, amet ac nulla lectus autem.</p>
                                <ul>
                                    <li>Vestibulum id rhoncus tempus nul ultrices sollicitudin</li>
                                    <li>Tellus fermentum a aenean varius morbi lorem lacinia</li>
                                    <li>Pulvinar cursus imperdiet montes </li>
                                    <li>Elementum purus maecenas condimentum sliquam amet inceptos</li>
                                    <li>Convallis mi suspendisse eaque consectetuer </li>
                                </ul>
                                <p>Convallis in amet justo. Tellus fermentum a aenelaoreet libero in, at convallis varius morbi lorem lacini Tcomentum id lacinia eros, lectus erat vel nullam, vel auctor.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-side-offer wow slideInRight" data-wow-delay=".3s">
                                <img src="https://dhyeyportfolioimages.s3.ap-south-1.amazonaws.com/assets/images/offer/offer01.png" alt="offer" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
