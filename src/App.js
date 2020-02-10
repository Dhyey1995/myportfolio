import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import Projetcs from './pages/Projects';
import Services from './pages/Services';
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';



export default class App extends Component {

    render() {
        return (
            <section>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/projects" component={Projetcs} />
                        <Route exact path="/service" component={Services} />
                        <Route exact path="/blog" component = {Blog} />
                        <Route exact path="/contact" component={ContactPage} />
                    </Switch>
                </BrowserRouter>
            </section>
        );
    }
}
