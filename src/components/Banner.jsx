import React, { Component } from 'react';

export default class Banner extends Component {
    render() {
        return (
            <section className="banner-section">
                <div className="container">
                    <div className="banner-content  wow fadeInUp" data-wow-delay=".3s">
                        <span className="category">
                            Build a better customer experience
                        </span>
                        <h1 className="title">reach more customers with faster, more reliable SMS messaging</h1>
                        <div className="video-button-group">
                            <a href="#0" className="custom-button active">contact to expert</a>
                            <div className="v-button">
                                <a data-rel="lightcase:myCollection" href="https://www.youtube.com/embed/GT6-H4BRyqQ" className="video-button"><i className="flaticon-play-button" /></a>
                            </div>
                        </div>
                        <div className="round-shape">
                        </div>
                    </div>
                </div>
                <div className="maps-shape bg_img bg-contain" data-background="https://dhyeyportfolioimages.s3.ap-south-1.amazonaws.com/assets/images/banner/banner-bg01.png" />
                <div className="shape-thumb">
                    <img className="wow slideInUp" data-wow-delay=".7s" src="https://dhyeyportfolioimages.s3.ap-south-1.amazonaws.com/assets/images/banner/banner-shape01.png" alt="banner" />
                </div>
            </section>
        );
    }
}
