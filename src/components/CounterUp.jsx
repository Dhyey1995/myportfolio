import React, { Component } from 'react';

export default class CounterUp extends Component {
    render() {
        return (
            <section className="counter-up-section">
                <div className="container">
                    <div className="counter-wrapper">
                        <div className="counter-item wow fadeInUp" data-wow-delay=".3s">
                            <div className="counter-header">
                                <i className="flaticon-call-center" />
                                <h2 className="title">
                                    <span className="counter">1000</span>+
                                </h2>
                            </div>
                            <p>Support Countries</p>
                        </div>
                        <div className="counter-item wow fadeInUp" data-wow-delay=".3s">
                            <div className="counter-header">
                                <i className="flaticon-happiness" />
                                <h2 className="title">
                                    <span className="counter">35</span>k
                                </h2>
                            </div>
                            <p>happy customers</p>
                        </div>
                        <div className="counter-item wow fadeInUp" data-wow-delay=".3s">
                            <div className="counter-header">
                                <i className="flaticon-project" />
                                <h2 className="title">
                                    <span className="counter">230</span>
                                </h2>
                            </div>
                            <p>total project done</p>
                        </div>
                        <div className="counter-item wow fadeInUp" data-wow-delay=".3s">
                            <div className="counter-header">
                                <i className="flaticon-collaboration" />
                                <h2 className="title">
                                    <span className="counter">658</span>
                                </h2>
                            </div>
                            <p>team members</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
