import React, { Component } from 'react';

export default class AddressInfo extends Component {
    render() {
        return (
            <section className="office-info padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <h2 className="title">
                            office contact info
                        </h2>
                    </div>
                    <div className="row justify-content-center mb-30-none">
                        <div className="col-md-6 col-sm-10 col-lg-4">
                            <div className="contact-item">
                                <div className="contact-thumb">
                                    {/* <img src="./assets/images/contact/destination.png" alt="contact"> */}
                                    <i className="flaticon-route" />
                                </div>
                                <div className="contact-content">
                                    <h4 className="title">office address</h4>
                                    <ul>
                                        <li>USA, Callifornia Fivenuen</li>
                                        <li>Callifornia Town Hall</li>
                                        <li>PO:2457-256</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-10 col-lg-4">
                            <div className="contact-item">
                                <div className="contact-thumb">
                                    {/* <img src="./assets/images/contact/call.png" alt="contact"> */}
                                    <i className="flaticon-call-center" />
                                </div>
                                <div className="contact-content">
                                    <h4 className="title">phone number</h4>
                                    <ul>
                                        <li><a href="Tel:939383883890">01478-878-6578-24545</a></li>
                                        <li><a href="Tel:939383883890">024178-2457-658777</a></li>
                                        <li><a href="Tel:939383883890">05478454254-10</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-10 col-lg-4">
                            <div className="contact-item">
                                <div className="contact-thumb">
                                    {/* <img src="./assets/images/contact/worldwide.png" alt="contact"> */}
                                    <i className="flaticon-global" />
                                </div>
                                <div className="contact-content">
                                    <h4 className="title">email address</h4>
                                    <ul>
                                        <li>
                                            <a href="Mailto:softkingsupport@.com">softkingsupport@.com</a>
                                        </li>
                                        <li>
                                            <a href="Mailto:wwwsmsio145.com">wwwsmsio145.com</a>
                                        </li>
                                        <li>
                                            <a href="Mailto:support24/7.com">support24/7.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
