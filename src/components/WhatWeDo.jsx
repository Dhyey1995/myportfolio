import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

export default class WhatWeDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
        }
    }
    componentDidMount() {
        Axios.get('https://angelajeff.in/portfolio_api/api/skill/limit-' + this.props.limit)
            .then(response => {
                this.setState({
                    skills: response.data.data,
                });
            });
    }
    render() {
        return (
            <section className="service-section padding-bottom padding-top">
                <div className="container">
                    <div className="section-header wow fadeInUp">
                        <h2 className="title">what I do</h2>
                    </div>
                    <div className="row justify-content-center mb-30-none">
                        {this.state.skills.map( (skills_data, index ) => (

                            <div className="col-md-6 col-lg-4" key={index}>
                                <div className="service-item text-center wow fadeInUp" data-wow-delay=".3s">
                                    <div className="service-content">
                                        <h4 className="title"><a href="#0"> {skills_data.skills_name} </a></h4>
                                        <p> { skills_data.descriptions.substr(0,100) } </p>
                                        <NavLink to={`${skills_data.skills_name}/skills_details/${btoa(skills_data.id)}`}>
                                            Find Out More <i className="fas fa-caret-right" />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>  
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
