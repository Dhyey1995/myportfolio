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
                                {/*<img src="/assets/images/logo/logo01.png" alt="logo" />*/}
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
                    </div>
                </div>
            </div>
        );
    }
}
