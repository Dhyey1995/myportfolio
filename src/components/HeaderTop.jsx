import React, { Component } from 'react';

export default class HeaderTop extends Component {
    render() {
        return (
            <div className="header-top d-none d-md-block bg-theme">
                <div className="container">
                    <div className="header-top-wrapper">
                        <div className="row">
                            <div className="col-md-8">
                                <ul>
                                    <li className="mr-3">
                                        <a href="Tel:839394845"><i className="fas fa-phone-square" />+9999 - 222 - 333</a>
                                    </li>
                                    <li>
                                        <a href="Mailto:messon@gmail.com"><i className="fas fa-envelope" />messon@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 d-flex flex-wrap align-items-center justify-content-end">
                                <ul className="social">
                                    <li>
                                        <a href="#0">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="select-area d-none d-md-block">
                                    <select className="select-bar">
                                        <option value={1}>English</option>
                                        <option value={2}>Bangla</option>
                                        <option value={3}>Hindi</option>
                                        <option value={4}>Urdu</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
