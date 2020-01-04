import React, { PropTypes, Component } from 'react';
import { BrowserRouter, Switch, Route, Router, Link } from 'react-router-dom';
import './App.css';
import Loading from './pages/Loading';

const Homepage = React.lazy(() => import('./pages/Homepage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const Projetcs = React.lazy(() => import('./pages/Projects'));
const Services = React.lazy(() => import('./pages/Services'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

export default class App extends Component {

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <React.Suspense fallback={<div><Loading /></div>}>
                        <Switch>
                            <Route exact path="/" component={Homepage} />
                            <Route exact path="/about" component={AboutPage} />
                            <Route exact path="/projects" component={Projetcs} />
                            <Route exact path="/service" component={Services} />
                            <Route exact path="/contact" component={ContactPage} />
                        </Switch>
                    </React.Suspense>
                </BrowserRouter>
            </React.Fragment>   
        );
    }
}
