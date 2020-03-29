import React, { Component } from 'react';
import Axios from 'axios';

export default class SkillsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            api_url_image: 'https://angelajeff.in/portfolio_api/storage/app/',
            skill_id: atob(this.props.skills_data.skill_id),
        }
    }
    componentDidMount() {
        Axios.get('https://angelajeff.in/portfolio_api/api/skill/' + this.state.skill_id)
            .then(response => {
                this.setState({
                    skills: response.data,
                });
            });
    }
    render() {
        const image_style = {
            width: 684,
            height: 494
        };
        return (
            <section className="overview-four-section padding-bottom padding-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="overview-thumb text-right">
                                <img style={image_style} src={this.state.api_url_image + this.state.skills.image} alt="overview-thumb" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="overview-four-content sp-align ml-lg-15-xl">
                                <h2 className="title">{this.state.skills.skills_name}</h2>
                                <p>{this.state.skills.descriptions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
