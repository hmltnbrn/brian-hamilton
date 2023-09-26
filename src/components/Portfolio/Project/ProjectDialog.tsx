import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import classNames from 'classnames';
import parse from 'html-react-parser';
import { FC } from 'react';

import { ProjectLinkType, ProjectType } from '../../../helpers/constants';
import { ButtonLink } from '../../Local/Button/Button';

import styles from './ProjectDialog.module.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    project: ProjectType;
};

const ProjectDialog: FC<Props> = ({ isOpen, onClose, project }) => {
    const projectStyle = {
        background: `url(${
            project?.background ? project?.background?.src : ''
        }) no-repeat top center`,
        backgroundSize: 'cover',
    };
    const projectLinks = project?.links || [];
    const projectTech = project?.technology || [];
    return (
        <Dialog
            fullScreen={false}
            open={isOpen}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            scroll={'body'}
        >
            <DialogContent
                className={classNames(styles.projectDialog, styles.center)}
            >
                <div className={styles.dialogBanner} style={projectStyle}>
                    <div className={styles.dialogBannerOverlay} />
                </div>
                <div className={styles.exitContainer}>
                    <div className={styles.drawerExit} onClick={onClose}>
                        <i className="material-icons" tabIndex={0}>
                            clear
                        </i>
                    </div>
                </div>
                <div className={styles.activeContainer}>
                    <div
                        className={classNames(styles.activeDot, {
                            [styles.inactive]: !project?.active,
                        })}
                    />
                    <h4
                        className={classNames({
                            [styles.inactive]: !project?.active,
                        })}
                    >
                        {project?.active ? 'Active' : 'Inactive'}
                    </h4>
                </div>
                <h2>{project?.title}</h2>
                {!project?.endYear ? (
                    <h3>{project?.startYear}</h3>
                ) : (
                    <h3>
                        {project?.startYear} - {project?.endYear}
                    </h3>
                )}
                <div className={styles.badgeContainer}>
                    {projectTech.map((tech: string, index: number) => {
                        return (
                            <div key={index} className={styles.techBadge}>
                                {tech}
                            </div>
                        );
                    })}
                </div>
                <p>{parse(project?.description || '')}</p>
                <div className={styles.projectLinks}>
                    {projectLinks.map(
                        (link: ProjectLinkType, index: number) => {
                            return (
                                <ButtonLink
                                    type="a"
                                    key={index}
                                    href={link?.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link?.text}
                                </ButtonLink>
                            );
                        },
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectDialog;
