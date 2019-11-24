import React, { Component } from 'react';

export default class ChooseUs extends Component {
    render() {
        return (
            <>
                <section className="choose-us-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section-header wow fadeInUp">
                            <span className="cate">our feature</span>
                            <h2 className="title">why choose us</h2>
                        </div>
                        <div className="row mb-30-none justify-content-center">
                            <div className="col-md-6 col-lg-4">
                                <div className="choose-item text-center wow fadeInUp" data-wow-delay=".3s">
                                    <div className="choose-thumb">
                                        <i className="flaticon-global" />
                                    </div>
                                    <div className="choose-content">
                                        <h5 className="title">Global reach and local presence</h5>
                                        <p>Amet mus venenatis diccauctor amet amet eget seeacit over eget sempertatio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="choose-item text-center wow fadeInUp" data-wow-delay=".3s">
                                    <div className="choose-thumb">
                                        <i className="flaticon-ui" />
                                    </div>
                                    <div className="choose-content">
                                        <h5 className="title">customer user experience</h5>
                                        <p>Amet mus venenatis diccauctor amet amet eget seeacit over eget sempertatio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="choose-item text-center wow fadeInUp" data-wow-delay=".3s">
                                    <div className="choose-thumb">
                                        <i className="flaticon-clock" />
                                    </div>
                                    <div className="choose-content">
                                        <h5 className="title">fast &amp; Flexible solutions</h5>
                                        <p>Amet mus venenatis diccauctor amet amet eget seeacit over eget sempertatio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="bb-dashed"></div>
                </div>
            </>
        );
    }
}
