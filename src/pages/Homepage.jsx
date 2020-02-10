import React, { Component } from 'react';

import Header from '../components/Header';
import SearchForm from '../components/SearchFrom';
import Banner from '../components/Banner';
import BulkSms from '../components/BulkSms';
import WhatWeDo from '../components/WhatWeDo';
import WhatWeOffer from '../components/WhatWeOffer';
import ClientSay from '../components/ClientSay';
import CounterUp from '../components/CounterUp';
import SmsTesting from '../components/SmsTesting';
import PricingTable from '../components/PricingTable';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default class Homepage extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <SearchForm />
                <Banner />
                <WhatWeDo />
                <WhatWeOffer />
                <ClientSay />
                <CounterUp />
                <SmsTesting />
                <PricingTable />
                <Blog />
                <Footer />
            </React.Fragment>
        );
    }
}
