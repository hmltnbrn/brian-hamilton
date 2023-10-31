import classNames from 'classnames';
import { ChangeEvent, FC, FocusEvent } from 'react';

import styles from './TextArea.module.scss';

type Props = {
    rows: number;
    name: string;
    placeholder: string;
    value?: string;
    errorText?: string | boolean | null;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
};

const TextArea: FC<Props> = ({
    rows,
    name,
    placeholder,
    value,
    errorText,
    onChange,
    onBlur,
}) => {
    return (
        <div className={styles.formGroup}>
            <textarea
                rows={rows}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e)}
                onBlur={(e) => onBlur?.(e)}
                className={classNames({ [styles.error]: errorText && !value })}
            />
            <div className={styles.errorAlert}>{errorText}</div>
        </div>
    );
};

export default TextArea;
