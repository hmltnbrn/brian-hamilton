import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';

import styles from './App.module.scss';

const App: FC = () => {
    return (
        <div className={styles.appComponents}>
            <Header />
            <main>
                <TransitionGroup>
                    <CSSTransition
                        classNames={{
                            enter: styles.fadeEnter,
                            enterActive: styles.fadeEnterActive,
                            exit: styles.fadeExit,
                            exitActive: styles.fadeExitActive,
                        }}
                        timeout={300}
                        unmountOnExit
                    >
                        <section className={styles.routeSection}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/resume" element={<Resume />} />
                                <Route
                                    path="/portfolio"
                                    element={<Portfolio />}
                                />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
            </main>
            <Footer />
        </div>
    );
};

export default App;
