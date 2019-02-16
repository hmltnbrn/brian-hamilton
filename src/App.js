//@flow

import React from 'react';
import styles from './App.module.scss';

import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import classNames from 'classnames/bind';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

type Props = {
  location: Object
};

let cx = classNames.bind(styles);

class App extends React.Component<Props> {
  render() {
    return (
      <div className={cx("app-components")}>
        <Header/>
          <main>
            <TransitionGroup>
              <CSSTransition
                key={this.props.location.key}
                classNames={{
                  enter: cx("fade-enter"),
                  enterActive: cx("fade-enter-active"),
                  exit: cx("fade-exit"),
                  exitActive: cx("fade-exit-active")
                }}
                timeout={300}
                unmountOnExit
              >
                <section className={cx("route-section")}>
                  <Switch location={this.props.location}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={NotFound}/>
                  </Switch>
                </section>
              </CSSTransition>
            </TransitionGroup>
          </main>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
