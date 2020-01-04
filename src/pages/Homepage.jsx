import React, { Component } from 'react';

const Header = React.lazy(() => import('../components/Header'));
const SearchForm = React.lazy(() => import('../components/SearchFrom'));
const Banner = React.lazy(() => import('../components/Banner'));
const ChooseUs = React.lazy(() => import('../components/ChooseUs'));
const BulkSms = React.lazy(() => import('../components/BulkSms'));
const WhatWeDo = React.lazy(() => import('../components/WhatWeDo'));
const WhatWeOffer = React.lazy(() => import('../components/WhatWeOffer'));
const ClientSay = React.lazy(() => import('../components/ClientSay'));
const CounterUp = React.lazy(() => import('../components/CounterUp'));
const SmsTesting = React.lazy(() => import('../components/SmsTesting'));
const PricingTable = React.lazy(() => import('../components/PricingTable'));
const Blog = React.lazy(() => import('../components/Blog'));
const Footer = React.lazy(() => import('../components/Footer'));

export default class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SearchForm />
                <Banner />
                <ChooseUs />
                <BulkSms />
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
