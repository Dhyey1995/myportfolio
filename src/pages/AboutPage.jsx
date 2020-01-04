import React, { Component } from 'react';

const Header = React.lazy(() => import('../components/Header'));
const PageHead = React.lazy(() => import('../components/PageHead'));
const Breadcrumb = React.lazy(() => import('../components/Breadcrumb'));
const BulkSms = React.lazy(() => import('../components/BulkSms'));
const SmsTesting = React.lazy(() => import('../components/SmsTesting'));
const ClientSay = React.lazy(() => import('../components/ClientSay'));
const Blog = React.lazy(() => import('../components/Blog'));
const Footer = React.lazy(() => import('../components/Footer'));

export default class AboutPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <PageHead headValue={'About Me'} />
                <Breadcrumb pageName={'About'} />
                <BulkSms />
                <SmsTesting />
                <ClientSay />
                <Blog />
                <Footer />
            </React.Fragment>
        );
    }
}
