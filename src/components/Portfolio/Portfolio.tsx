import axios from 'axios';
import classNames from 'classnames';
import { FC, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Project from './Project/Project';

import styles from './Portfolio.module.scss';

export type Links = {
    href: string;
    text: string;
};

export type Background = {
    src: string;
    position: string;
};

export type ProjectType = {
    id: number;
    background: Background;
    title: string;
    year: string;
    description: string;
    technology: string[];
    links: Links[];
    complete: boolean;
    active: boolean;
};

const BASE_URL =
    process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080';

const Portfolio: FC = () => {
    const [portfolio, setPortfolio] = useState<ProjectType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${BASE_URL}/api/portfolio`);
            setPortfolio(result.data as ProjectType[]);
        };
        fetchData();
    }, []);

    const completeProjects = useMemo(
        () =>
            portfolio
                .filter((project: ProjectType): boolean => project.complete)
                .map((project: ProjectType) => {
                    return <Project key={project.id} project={project} />;
                }),
        [portfolio],
    );

    const inCompleteProjects = useMemo(
        () =>
            portfolio
                .filter((project: ProjectType): boolean => !project.complete)
                .map((project: ProjectType) => {
                    return <Project key={project.id} project={project} />;
                }),
        [portfolio],
    );

    return (
        <>
            <Helmet>
                <title>Brian Hamilton | Portfolio</title>
            </Helmet>
            <div className={styles.leadContainer}>
                <div className={styles.leadText}>
                    <p>
                        Throughout my career, I've worked on a range of work and
                        personal projects. Below are some examples. Click on the
                        image to get further details of each.
                    </p>
                </div>
            </div>
            <div>
                <div
                    className={classNames(
                        styles.portfolioSection,
                        styles.completedProjects,
                    )}
                >
                    <h1>Completed projects</h1>
                    <div className={styles.portfolioProjectContainer}>
                        {completeProjects}
                    </div>
                </div>
                <div className={styles.portfolioSection}>
                    <h1>Under construction</h1>
                    <div className={styles.portfolioProjectContainer}>
                        {inCompleteProjects}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
