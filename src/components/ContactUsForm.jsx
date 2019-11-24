import React, { Component } from 'react';

export default class ContactUsForm extends Component {
    render() {
        return (
            <section className="account-section padding-top padding-bottom bg_img bg_bottom_center bg_contain" data-background="assets/images/contact/contact-bg.png">
                <div className="container">
                    <div className="account-wrapper">
                        <div className="account-area">
                            <h3 className="account-title">send us a message</h3>
                            <form className="contact-form" id="contact_form_submit">
                                <div className="form-group">
                                    <input type="text" id="name" placeholder="Full Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <textarea id="message" placeholder="Message" defaultValue={""} />
                                </div>
                                <div className="form-group radio-group">
                                    <p>Preferred of mode Communication</p>
                                    <div className="radio-item">
                                        <input type="radio" defaultChecked name="mode" id="mode01" />
                                        <label htmlFor="mode01">Email</label>
                                    </div>
                                    <div className="radio-item">
                                        <input type="radio" name="mode" id="mode02" />
                                        <label htmlFor="mode02">Phone</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="submit" defaultValue="Send Message" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
