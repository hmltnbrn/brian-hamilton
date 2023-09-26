import { FC } from 'react';

import { ProjectLinkType, ProjectType } from '../../../../helpers/constants';
import { ButtonLink } from '../../../Local/Button/Button';

import styles from './Project.module.scss';

type Props = {
    project: ProjectType;
};

const Project: FC<Props> = ({ project }) => {
    const projectStyle = {
        background: `url(${project?.background?.src}) no-repeat ${project?.background?.position}`,
        backgroundSize: 'cover',
    };

    const buttonLinks = project?.links?.map((link: ProjectLinkType) => (
        <ButtonLink
            type="a"
            key={link?.text}
            href={link?.href}
            target="_blank"
            rel="noopener noreferrer"
            white
        >
            {link?.text}
        </ButtonLink>
    ));

    return (
        <div className={styles.project} style={projectStyle}>
            <div className={styles.projectOverlay} tabIndex={0}>
                <div className={styles.projectTitle}>{project?.title}</div>
                <div className={styles.projectLinks}>{buttonLinks}</div>
            </div>
        </div>
    );
};

export default Project;
