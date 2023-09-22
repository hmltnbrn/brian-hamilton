import { FC, useState } from 'react';

import { ProjectType } from '../Portfolio';
import ProjectDialog from './ProjectDialog';

import styles from './Project.module.scss';

type Props = {
    project: ProjectType;
};

const Project: FC<Props> = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const projectStyle = {
        background: `url(${project.background.src}) no-repeat ${project.background.position}`,
        backgroundSize: 'cover',
    };

    return (
        <>
            <div
                className={styles.project}
                style={projectStyle}
                onClick={() => setIsModalOpen(true)}
            >
                <div className={styles.projectOverlay} tabIndex={0}>
                    <div className={styles.projectTitle}>{project.title}</div>
                </div>
            </div>
            <ProjectDialog
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={project}
            />
        </>
    );
};

export default Project;
