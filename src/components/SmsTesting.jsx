import React, { Component } from 'react';

export default class SmsTesting extends Component {
    render() {
        return (
            <section className="sms-testing padding-bottom padding-top bg-ash">
                <div className="container">
                    <div className="section-header wow fadeInUp">
                        <span className="cate">sms testing</span>
                        <h2 className="title">test your SMS delivery</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="testing-item wow fadeInUp" data-wow-delay=".3s">
                                <h4 className="title">send us your SMS text</h4>
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
                                <p>Menenatis malesuada at vestibulum, proin at nudit iaculis nullam ut, massa hac, arcu adipiscing in vel ac amllicitudin tempus dictum donec lorem libero. Turpis integpendisse felis, consectetuer odio, volutpat consectetuer erat tortor over hhead to do comeing </p>
                                <ul className="bullet-list">
                                    <li>
                                        Vestibulum id rhoncus tempus
                                    </li>
                                    <li>
                                        Tellus fermentum a aenean
                                    </li>
                                    <li>
                                        Pulvinar cursus imperdiet
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
