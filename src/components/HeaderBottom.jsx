import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class HeaderBottom extends Component {
    render() {
        return (
            <div className="header-bottom">
                <div className="container">
                    <div className="header-area">
                        <div className="logo">
                            <NavLink to={'/'}>
                                {/*<img src="https://dhyeyportfolioimages.s3.ap-south-1.amazonaws.com/assets/images/logo/logo01.png" alt="logo" />*/}
                                <h2>Dhyey</h2>
                            </NavLink>
                        </div>
                        <ul className="menu">
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/projects'}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/service'}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/blog'}>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="header-bar d-lg-none">
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className="select-bar-bar">
                            <i className="fas fa-ellipsis-v" />
                        </div>
                        {/*<div className="d-flex select-career justify-content-end">
                            <select className="select-bar d-md-none">
                                <option value={1}>English</option>
                                <option value={2}>Bangla</option>
                                <option value={3}>Hindi</option>
                                <option value={4}>Urdu</option>
                            </select>
                            <a href="#0" className="search-bar">
                                <i className="flaticon-magnifying-glass" />
                            </a>
                        </div>*/}
                    </div>
                </div>
            </div>
        );
    }
}
