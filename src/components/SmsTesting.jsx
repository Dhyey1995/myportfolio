import React, { Component } from 'react';

export default class SmsTesting extends Component {
    render() {
        return (
            <section className="sms-testing padding-bottom padding-top bg-ash">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="testing-item wow fadeInUp" data-wow-delay=".3s">
                                <h4 className="title">How can I help you contact me?</h4>
                                <form className="testing-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Country" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Registration Email" />
                                    </div>
                                    <div className="form-group w-100">
                                        <input type="tel" placeholder="Phone" />
                                    </div>
                                    <div className="form-group w-100">
                                        <textarea placeholder="SMS text write in here" defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" defaultValue="Submit Now" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="testing-item wow fadeInUp" data-wow-delay=".3s">
                                <h4 className="title">about our privacy</h4>
                                <p>A developer's role is to combine design and business logic to achieve a user-facing product. To do this successfully, a wide skill set is necessary to produce a quality user experience that leads to meeting business goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
