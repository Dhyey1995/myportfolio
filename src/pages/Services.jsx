import React, { Component } from 'react';

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import WhatWeDo from '../components/WhatWeDo';
import Footer from '../components/Footer';

export default class Services extends Component {
    render() {
        return (
            <>
                <Header />
                <PageHead headValue={'Our Services'} />
                <Breadcrumb pageName={'Services'} />
                <WhatWeDo />
                <Footer />
            </>
        );
    }
}
