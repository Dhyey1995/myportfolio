import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import Loading from '../pages/Loading';

export default class WhatWeDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            loading_status: false,
            api_url_image: 'http://dhyeyrathod.rf.gd/api_project/',
        }
    }
    componentDidMount() {
        this.setState({ loading_status: true });
        Axios.get('http://dhyeyrathod.rf.gd/api_project/API/all_skill/' + this.props.limit)
            .then(response => {
                this.setState({ 
                    skills: response.data.skills,
                });
                this.setState({ loading_status: false });
            });
    }
    render() {
        const image_style = {
            width: "350px",
            height: "235px"
        };

        return (
            <section className="service-section padding-bottom padding-top">
                <div className="container">
                    <div className="section-header wow fadeInUp">
                        <h2 className="title">what I do</h2>
                    </div>
                    <div className="row justify-content-center mb-30-none">
                        <Loading loading_status={this.state.loading_status} />
                        {this.state.skills.map((skills_data, index) => (
                            <div className="col-sm-10 col-md-6 col-lg-4" key={index}>
                                <div className="case-item">
                                    <div className="case-thumb">
                                        {console.log(this.state.api_url_image + skills_data.image)}
                                        <NavLink to={`${skills_data.skills_name}/skills_details/${btoa(skills_data.id)}`}>
                                            <img style={image_style} src={this.state.api_url_image + skills_data.image} alt="case" />
                                        </NavLink>
                                    </div>
                                    <div className="case-content">
                                        <h4 className="title">
                                            <NavLink to={`${skills_data.skills_name}/skills_details/${btoa(skills_data.id)}`}> {skills_data.skills_name} </NavLink>
                                        </h4>
                                        <p> {skills_data.descriptions.substr(0, 100)} </p>
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
