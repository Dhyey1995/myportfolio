import React, { Component } from 'react';
import Axios from 'axios';

export default class ProjectSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [],
            api_url : 'http://localhost/dhyey_rathod/portfolioapi/storage/app/',
        }
    }
    componentDidMount() {
        Axios.get('http://localhost/dhyey_rathod/portfolioapi/api/project')
            .then(response => {
                this.setState({
                    project: response.data.data,
                });
            });
    }
    render() {
        return (
            <section className="case-section padding-bottom padding-top">
                <div className="container">
                    <div className="row mb-30-none justify-content-center">

                        {this.state.project.map( (oneProject, index) => (
                            <div className="col-sm-10 col-md-6 col-lg-4" key={index}>
                                <div className="case-item">
                                    <div className="case-thumb">
                                        <a href="#0">
                                            <img src={this.state.api_url+oneProject.file_name} alt={oneProject.title} />
                                        </a>
                                    </div>
                                    <div className="case-content">
                                        <h4 className="title">
                                            <a href="#0">{oneProject.title} </a>
                                        </h4>
                                        {/* <p>Phasellus quis vel, lacus rutrfusce velit. Id dolorid ves etiam nec ante. Eget magnis aetiam eget mauris dolor mengo this over</p> */}
                                    </div>
                                </div>
                            </div>
                        ))}



                        {/* <div className="col-sm-10 col-md-6 col-lg-4">
                            <div className="case-item">
                                <div className="case-thumb">
                                    <a href="#0">
                                        <img src="/assets/images/case/case02.jpg" alt="case" />
                                    </a>
                                </div>
                                <div className="case-content">
                                    <h4 className="title">
                                        <a href="case-details.html">Placerat vitae nullam amquisduis </a>
                                    </h4>
                                    <p>Phasellus quis vel, lacus rutrfusce velit. Id dolorid ves etiam nec ante. Eget magnis aetiam eget mauris dolor mengo this over</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-6 col-lg-4">
                            <div className="case-item">
                                <div className="case-thumb">
                                    <a href="case-details.html">
                                        <img src="/assets/images/case/case03.jpg" alt="case" />
                                    </a>
                                </div>
                                <div className="case-content">
                                    <h4 className="title">
                                        <a href="case-details.html">Enteger a quam scele sque luctusin urna </a>
                                    </h4>
                                    <p>Phasellus quis vel, lacus rutrfusce velit. Id dolorid ves etiam nec ante. Eget magnis aetiam eget mauris dolor mengo this over</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-6 col-lg-4">
                            <div className="case-item">
                                <div className="case-thumb">
                                    <a href="case-details.html">
                                        <img src="/assets/images/case/case04.jpg" alt="case" />
                                    </a>
                                </div>
                                <div className="case-content">
                                    <h4 className="title">
                                        <a href="case-details.html">Condimentum magni velit mperdiet </a>
                                    </h4>
                                    <p>Phasellus quis vel, lacus rutrfusce velit. Id dolorid ves etiam nec ante. Eget magnis aetiam eget mauris dolor mengo this over</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-6 col-lg-4">
                            <div className="case-item">
                                <div className="case-thumb">
                                    <a href="case-details.html">
                                        <img src="/assets/images/case/case05.jpg" alt="case" />
                                    </a>
                                </div>
                                <div className="case-content">
                                    <h4 className="title">
                                        <a href="case-details.html">Scelerisque liberourn alesuada pellen</a>
                                    </h4>
                                    <p>Phasellus quis vel, lacus rutrfusce velit. Id dolorid ves etiam nec ante. Eget magnis aetiam eget mauris dolor mengo this over</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-6 col-lg-4">
                            <div className="case-item">
                                <div className="case-thumb">
                                    <a href="case-details.html">
                                        <img src="/assets/images/case/case06.jpg" alt="case" />
                                    </a>
                                </div>
                                <div className="case-content">
                                    <h4 className="title">
                                        <a href="case-details.html">Maecenas non quisull amcorperest </a>
                                    </h4>
                                    <p>Phasellus quis vel, lacus rutrfusce velit. Id dolorid ves etiam nec ante. Eget magnis aetiam eget mauris dolor mengo this over</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-6 col-lg-4">
                            <div className="case-item">
                                <div className="case-thumb">
                                    <a href="case-details.html">
                                        <img src="/assets/images/case/case07.jpg" alt="case" />
                                    </a>
                                </div>
                                <div className="case-content">
                                    <h4 className="title">
                                        <a href="case-details.html">Accumsan fringillaviva shabitantmi ultrices </a>
                                    </h4>
                                    <p>Phasellus quis vel, lacus rutrfusce velit. Id dolorid ves etiam nec ante. Eget magnis aetiam eget mauris dolor mengo this over</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-6 col-lg-4">
                            <div className="case-item">
                                <div className="case-thumb">
                                    <a href="case-details.html">
                                        <img src="/assets/images/case/case08.jpg" alt="case" />
                                    </a>
                                </div>
                                <div className="case-content">
                                    <h4 className="title">
                                        <a href="case-details.html">Interdum arcu lectus ridiculus. Maecenas </a>
                                    </h4>
                                    <p>Phasellus quis vel, lacus rutrfusce velit. Id dolorid ves etiam nec ante. Eget magnis aetiam eget mauris dolor mengo this over</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-6 col-lg-4">
                            <div className="case-item">
                                <div className="case-thumb">
                                    <a href="case-details.html">
                                        <img src="/assets/images/case/case09.jpg" alt="case" />
                                    </a>
                                </div>
                                <div className="case-content">
                                    <h4 className="title">
                                        <a href="case-details.html">Mauris libero commo dolacinia purus </a>
                                    </h4>
                                    <p>Phasellus quis vel, lacus rutrfusce velit. Id dolorid ves etiam nec ante. Eget magnis aetiam eget mauris dolor mengo this over</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="load-more-group">
                        <a href="case.html" className="load-more-button active custom-button">Load More Case</a>
                    </div>
                </div>
            </section>
        );
    }
}
