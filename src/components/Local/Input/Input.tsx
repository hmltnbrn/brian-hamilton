import classNames from 'classnames';
import { ChangeEvent, FC, FocusEvent } from 'react';

import styles from './Input.module.scss';

type Props = {
    type: string;
    name: string;
    placeholder: string;
    value?: string;
    errorText?: string | boolean | null;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({
    type,
    name,
    placeholder,
    value,
    errorText,
    onChange,
    onBlur,
}) => {
    return (
        <div className={styles.formGroup}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e)}
                onBlur={(e) => onBlur?.(e)}
                className={classNames({ [styles.error]: errorText })}
            />
            <div className={styles.errorAlert}>{errorText}</div>
        </div>
    );
};

export default Input;
