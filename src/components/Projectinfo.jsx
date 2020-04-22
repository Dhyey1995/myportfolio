import React, { Component } from 'react';
import Axios from 'axios';

export default class Projectinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [],
            api_url_image: 'http://dhyeyrathod.rf.gd/api_project/',
            project_id: atob(this.props.project_id),
        }
    }
    componentDidMount() {
        Axios.get('http://dhyeyrathod.rf.gd/api_project/API/project_details/' + this.state.project_id)
            .then(response => {
                this.setState({
                    project: response.data.projects,             
                });
            });
    }
    render() {
        return (
            <section className="location-based-service padding-top padding-bottom">
                <div className="container">
                    <div className="row flex-wrap-reverse">
                        <div className="col-lg-12">
                            <div className="location-based-left">
                                {/* <h2 className="title">{this.state.project.title}</h2> */}
                                { this.state.project.description }
                            </div>
                        </div>
                        <br />
                        <div className="col-lg-12">
                            <div className="l-b-thumb">
                                <img src={this.state.api_url_image + this.state.project.file_name} alt="service" />
                            </div>
                        </div>
                    </div>
                    <div className="feature-area style-two w-100 text-left">
                        <div className="feature-item">
                            <div className="feature-content">
                                <a target="_blank" href={this.state.project.website_url}><h5 className="title">Go to website</h5></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
