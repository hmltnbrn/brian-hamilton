import { FC } from 'react';

import { ButtonLink } from '../../Local/Button/Button';
import Project from './Project/Project';

import styles from './Projects.module.scss';

const projectOneLinks = [
    {
        href: 'https://github.com/hmltnbrn/jeopardy-scrape',
        text: 'Python Repository',
    },
    {
        href: 'https://github.com/hmltnbrn/jeopardy-viz',
        text: 'JS Repository',
    },
    {
        href: 'https://jeopardy.brianhamilton.me/',
        text: 'Live Site',
    },
];

const projectTwoLinks = [
    {
        href: 'https://www.commonwealthfund.org/blog/2018/understand-how-consumers-are-faring-individual-health-insurance-markets-watch-states',
        text: 'Live Site',
    },
];

const Projects: FC = () => {
    return (
        <div className={styles.homeProjects}>
            <h1>Featured projects</h1>
            <div className={styles.projectContainer}>
                <Project
                    background={{
                        src: 'https://i.brianhamilton.me/jeopardy-exploration.png',
                        position: 'top center',
                    }}
                    title="A Data Exploration of Jeopardy! from 1984 to the Present"
                    links={projectOneLinks}
                />
                <Project
                    background={{
                        src: 'https://i.brianhamilton.me/health-insurance.png',
                        position: 'center center',
                    }}
                    title="What Is Your State Doing to Affect Access to Adequate Health Insurance?"
                    links={projectTwoLinks}
                />
            </div>
            <div className={styles.projectsLinkContainer}>
                <ButtonLink type="link" to="portfolio">
                    View More on My Portfolio
                </ButtonLink>
            </div>
        </div>
    );
};

export default Projects;
