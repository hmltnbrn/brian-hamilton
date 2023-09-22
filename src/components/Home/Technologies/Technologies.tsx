import { FC } from 'react';

import angular from '../../../images/tech-logos/angular.png';
import d3 from '../../../images/tech-logos/d3.png';
import nodejs from '../../../images/tech-logos/nodejs.png';
import postgresql from '../../../images/tech-logos/postgresql.png';
import python from '../../../images/tech-logos/python.png';
import react from '../../../images/tech-logos/react.png';
import { ButtonLink } from '../../Local/Button/Button';
import Technology from './Technology/Technology';

import styles from './Technologies.module.scss';

const Technologies: FC = () => {
    return (
        <div className={styles.homeTechnologies}>
            <p>
                Working with modern frameworks and languages, I build
                comprehensive web projects and interactive data visualizations.
            </p>
            <div className={styles.allTech}>
                <Technology
                    href="https://angular.io/"
                    src={angular}
                    alt="Angular Logo"
                    title="Angular"
                />
                <Technology
                    href="https://d3js.org/"
                    src={d3}
                    alt="D3.js Logo"
                    title="D3.js"
                />
                <Technology
                    href="https://nodejs.org/en/"
                    src={nodejs}
                    alt="Node.js Logo"
                    title="Node.js"
                />
                <Technology
                    href="https://www.postgresql.org/"
                    src={postgresql}
                    alt="PostgreSQL Logo"
                    title="PostgreSQL"
                />
                <Technology
                    href="https://www.python.org/"
                    src={python}
                    alt="Python Logo"
                    title="Python"
                />
                <Technology
                    href="https://reactjs.org/"
                    src={react}
                    alt="React Logo"
                    title="React"
                />
            </div>
            <div className={styles.resumeLinkContainer}>
                <ButtonLink type="link" to="/resume" inverse>
                    Take a Look at My Resume
                </ButtonLink>
            </div>
        </div>
    );
};

export default Technologies;
