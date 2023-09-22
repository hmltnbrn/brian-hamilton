import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import { FC } from 'react';

import styles from './CustomSnackbar.module.scss';

type Props = {
    type: string;
    message: string;
    open: boolean;
    onClose: () => void;
};

const CustomSnackbar: FC<Props> = ({ type, message, open, onClose }) => {
    const Icon = () => {
        switch (type) {
            case 'success':
                return <i className="material-icons">done</i>;
            case 'warning':
                return <i className="material-icons">warning</i>;
            case 'error':
                return <i className="material-icons">error</i>;
            case 'notification':
                return <i className="material-icons">notifications</i>;
            default:
                return null;
        }
    };

    const backgroundColor: Record<string, string> = {
        success: '#4caf50',
        warning: '#ff9800',
        error: '#f44336',
        notification: '#2196f3',
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
        >
            <SnackbarContent
                aria-describedby="bh-snackbar"
                style={{ backgroundColor: backgroundColor[type] }}
                message={
                    <span id="bh-snackbar" className={styles.snackbarMessage}>
                        {Icon()}
                        <span>{message}</span>
                    </span>
                }
                action={[
                    <div
                        key="clear"
                        onClick={onClose}
                        className={styles.snackbarClose}
                    >
                        <i className="material-icons">clear</i>
                    </div>,
                ]}
            />
        </Snackbar>
    );
};

export default CustomSnackbar;
