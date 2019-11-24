import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class Breadcrumb extends Component {
    render() {
        return (
            <div className="breadcrumb-section">
                <div className="container">
                    <ul className="breadcrumb">
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            {this.props.pageName}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
