import React, { Component } from 'react';

export default class ClientSay extends Component {
    render() {
        return (
            <section className="client-say padding-bottom padding-top">
                <div className="container">
                    <div className="section-header wow fadeInUp">
                        <span className="cate">client feedback</span>
                        <h2 className="title">client what say about</h2>
                    </div>
                    <div className="client-say-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="client-item">
                                    <div className="client-thumb">
                                        <a href="#0"><img src="https://dhyeyportfolioimages.s3.ap-south-1.amazonaws.com/assets/images/client/client02.jpg" alt="client" /></a>
                                    </div>
                                    <div className="client-content">
                                        <h4 className="title"><a href="#0">fahad bin foyej</a></h4>
                                        <span>Business Man</span>
                                        <blockquote>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod teodunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risuodo viverra maecenas accumsan lacus vel facilisis.
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="client-item">
                                    <div className="client-thumb">
                                        <a href="#0"><img src="https://dhyeyportfolioimages.s3.ap-south-1.amazonaws.com/assets/images/client/client03.jpg" alt="client" /></a>
                                    </div>
                                    <div className="client-content">
                                        <h4 className="title"><a href="#0">Abu Raihan Rafuj</a></h4>
                                        <span>Business Man</span>
                                        <blockquote>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod teodunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risuodo viverra maecenas accumsan lacus vel facilisis.
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="client-pagination" />
                    </div>
                </div>
            </section>
        );
    }
}
