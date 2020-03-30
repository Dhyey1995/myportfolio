import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Banner extends Component {
    render() {
        return (
            <section className="banner-section">
                <div className="container">
                    <div className="banner-content  wow fadeInUp" data-wow-delay=".3s">
                        <span className="category">
                            Web and App Developer -
                        </span>
                        <h1 className="title">I design and code beautifully simple things, and I love what I do.</h1>
                        <div className="video-button-group">
                            <Link to="/contact" className="custom-button active">Contact me</Link>
                            <div className="v-button">
                                <a data-rel="lightcase:myCollection" href="https://www.youtube.com/embed/GT6-H4BRyqQ" className="video-button"><i className="flaticon-play-button" /></a>
                            </div>
                        </div>
                        <div className="round-shape">
                        </div>
                    </div>
                </div>
                <div className="maps-shape bg_img bg-contain" data-background="assets/images/banner/banner-bg01.png" />
                <div className="shape-thumb">
                    {/* <img className="wow slideInUp" data-wow-delay=".7s" src="/assets/images/banner/banner-shape01.png" alt="banner" /> */}
                </div>
            </section>
        );
    }
}
