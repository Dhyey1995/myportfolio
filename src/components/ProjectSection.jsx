import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import Loading from '../pages/Loading';

export default class ProjectSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [],
            loading_status: false,
            api_url_image: 'https://angelajeff.in/portfolio_api/storage/app/',
        }
    }
    componentDidMount() {
        this.setState({ loading_status: true });
        Axios.get('https://angelajeff.in/portfolio_api/api/project')
            .then(response => {
                this.setState({
                    project: response.data.data,
                });
                this.setState({ loading_status: false });
            });
    }
    render() {
        return (
            <section className="case-section padding-bottom padding-top">
                <div className="container">
                    <div className="row mb-30-none justify-content-center">
                        <Loading loading_status={this.state.loading_status} />
                        {this.state.project.map((oneProject, index) => (
                            <div className="col-sm-10 col-md-6 col-lg-4" key={index}>
                                <div className="case-item">
                                    <div className="case-thumb">
                                        <NavLink to={`${oneProject.title}/details/${btoa(oneProject.id)}`}>
                                            <img src={this.state.api_url_image + oneProject.file_name} alt={oneProject.title} />
                                        </NavLink>
                                    </div>
                                    <div className="case-content">
                                        <h4 className="title">
                                            <NavLink to={`${oneProject.title}/details/${btoa(oneProject.id)}`}>
                                                {oneProject.title}
                                            </NavLink>
                                        </h4>
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
