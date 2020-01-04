import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class WhatWeDo extends Component {
    render() {
        return (
            <section className="service-section padding-bottom padding-top">
                <div className="container">
                    <div className="section-header wow fadeInUp">
                        <h2 className="title">what we do</h2>
                    </div>
                    <div className="row justify-content-center mb-30-none">

                        <div className="col-md-6 col-lg-4">
                            <div className="service-item text-center wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-thumb">
                                    <i className="flaticon-love" />
                                </div>
                                <div className="service-content">
                                    <h4 className="title"><a href="#0">Mask SMS</a></h4>
                                    <p>Temporibus magnis. Aliquam netus phasellus wisi utacper fusce wold of messgeuing </p>
                                    <NavLink to={'/service'}>
                                        Find Out More <i className="fas fa-caret-right" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-4">
                            <div className="service-item text-center wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-thumb">
                                    <i className="flaticon-megaphone" />
                                </div>
                                <div className="service-content">
                                    <h4 className="title"><a href="#0">promo SMS</a></h4>
                                    <p>Temporibus magnis. Aliquam netus phasellus wisi utacper fusce wold of messgeuing </p>
                                    <NavLink to={'/service'}>
                                        Find Out More <i className="fas fa-caret-right" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-item text-center wow fadeInUp" data-wow-delay=".3s">
                                <div className="service-thumb">
                                    <i className="flaticon-paper-plane" />
                                </div>
                                <div className="service-content">
                                    <h4 className="title"><a href="#0">Email Service</a></h4>
                                    <p>Temporibus magnis. Aliquam netus phasellus wisi utacper fusce wold of messgeuing </p>
                                    <NavLink to={'/service'}>
                                        Find Out More <i className="fas fa-caret-right" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
