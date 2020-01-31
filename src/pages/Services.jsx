import React, { Component } from 'react';

const Header = React.lazy(() => import('../components/Header'));
const PageHead = React.lazy(() => import('../components/PageHead'));
const Breadcrumb = React.lazy(() => import('../components/Breadcrumb'));
const WhatWeDo = React.lazy(() => import('../components/WhatWeDo'));
const Footer = React.lazy(() => import('../components/Footer'));




export default class Services extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <PageHead headValue={'Our Services'} />
                <Breadcrumb pageName={'Services'} />
                <WhatWeDo />
                <Footer />
            </React.Fragment>
        );
    }
}