import React from 'react';
import styles from './App.module.scss';

import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import classNames from 'classnames/bind';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

const cx = classNames.bind(styles);

const App = ({ location }: RouteComponentProps): JSX.Element => {
  return (
    <div className={cx('app-components')}>
      <Header />
      <main>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames={{
              enter: cx('fade-enter'),
              enterActive: cx('fade-enter-active'),
              exit: cx('fade-exit'),
              exitActive: cx('fade-exit-active')
            }}
            timeout={300}
            unmountOnExit={true}
          >
            <section className={cx('route-section')}>
              <Switch location={location}>
                <Route exact={true} path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </div>
  );
};

export default withRouter(App);
