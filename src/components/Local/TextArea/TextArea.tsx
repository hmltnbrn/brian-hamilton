import classNames from 'classnames';
import { ChangeEvent, FC } from 'react';

import styles from './TextArea.module.scss';

type Props = {
    rows: number;
    name: string;
    placeholder: string;
    value?: string;
    errorText?: string | boolean;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: FC<Props> = ({
    rows,
    name,
    placeholder,
    value,
    errorText,
    onChange,
}) => {
    return (
        <div className={styles.formGroup}>
            <textarea
                rows={rows}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
                className={classNames({ [styles.error]: errorText && !value })}
            />
            <div className={styles.errorAlert}>{errorText}</div>
        </div>
    );
};

export default TextArea;
