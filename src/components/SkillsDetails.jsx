import React, { Component } from 'react';
import Axios from 'axios';

export default class SkillsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            skill_id: atob(this.props.skills_data.skill_id),
        }
    }
    componentDidMount() {
        Axios.get('http://localhost/dhyey_rathod/portfolioapi/api/skill/' + this.state.skill_id)
            .then(response => {
                this.setState({
                    skills: response.data,
                });
            });
    }
    render() {
        return (
            <section className="overview-four-section padding-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="overview-thumb text-right">
                                <img src="/assets/images/service/voice-message03.png" alt="overview-thumb" />
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
