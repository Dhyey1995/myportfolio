import React, { Component } from 'react';
import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import BulkSms from '../components/BulkSms';
import SmsTesting from '../components/SmsTesting';
import ClientSay from '../components/ClientSay';
// import SponsorSection from '../components/SponsorSection';
import Blog from '../components/Blog';
import Footer from '../components/Footer';


export default class AboutPage extends Component {
  render() {
    return (
        <>
            <Header />  
            <PageHead headValue={'About Me'} />
            <Breadcrumb pageName={'About'} />
            <BulkSms />
            <SmsTesting />
            <ClientSay />
            {/* <SponsorSection /> */}
            <Blog />
            <Footer />
        </>
    );
  }
}
