import React, { Component } from 'react';
import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import ProjectSection from '../components/ProjectSection';
import CounterUp from '../components/CounterUp';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <>
                <Header />
                <PageHead headValue={'My projects'} />
                <Breadcrumb pageName={'Projects'} />
                <ProjectSection />  
                <CounterUp />
                <Blog />
                <Footer />
            </>
        );
    }
}
