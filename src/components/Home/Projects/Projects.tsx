import axios from 'axios';
import { FC, useEffect, useMemo, useState } from 'react';

import { BASE_URL, ProjectType } from '../../../helpers/constants';
import { ButtonLink } from '../../Local/Button/Button';
import Project from './Project/Project';

import styles from './Projects.module.scss';

const Projects: FC = () => {
    const [projects, setProjects] = useState<ProjectType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `${BASE_URL}/api/portfolio/featured`,
            );
            setProjects(result.data as ProjectType[]);
        };
        fetchData();
    }, []);

    const featuredProjects = useMemo(
        () =>
            projects.map((project: ProjectType) => {
                return <Project key={project?.id} project={project} />;
            }),
        [projects],
    );

    return (
        <div className={styles.homeProjects}>
            <h1>Featured projects</h1>
            <div className={styles.projectContainer}>{featuredProjects}</div>
            <div className={styles.projectsLinkContainer}>
                <ButtonLink type="link" to="portfolio">
                    View More on My Portfolio
                </ButtonLink>
            </div>
        </div>
    );
};

export default Projects;
