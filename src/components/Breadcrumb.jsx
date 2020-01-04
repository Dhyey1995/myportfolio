import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

export default class Breadcrumb extends Component {

    state = {
        redirect: false
    }

    redirectToTarget = () => { 
        this.setState({
            redirect:true,
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />;
        }
        return (
            <div className="breadcrumb-section">
                <div className="container">
                    <ul className="breadcrumb">
                        <li>
                            <a onClick={this.redirectToTarget}>Home</a>
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
