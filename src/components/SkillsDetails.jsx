import React, { Component } from 'react';
import Axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class SkillsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            api_url_image: 'http://dhyeyrathod.rf.gd/api_project/',
            skill_id: atob(this.props.skills_data.skill_id),
        }
    }
    componentDidMount() {
        Axios.get('http://dhyeyrathod.rf.gd/api_project/API/skill_detail/' + this.state.skill_id)
            .then(response => {
                this.setState({
                    skills: response.data.skills,
                });
            });
    }
    render() {
        const image_style = {
            width: 684,
            height: 494
        };
        return (
            <React.Fragment>
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
                <section>
                    <div className="section-header">
                        <h4 className="title">Technical skills which i workd on.</h4>
                        <ProgressBar variant="success" now={this.state.skills.lavel} label={`${this.state.skills.lavel}%`} />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
