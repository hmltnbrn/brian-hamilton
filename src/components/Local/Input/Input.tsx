import classNames from 'classnames';
import { ChangeEvent, FC } from 'react';

import styles from './Input.module.scss';

type Props = {
    type: string;
    name: string;
    placeholder: string;
    value?: string;
    errorText?: string | boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({
    type,
    name,
    placeholder,
    value,
    errorText,
    onChange,
}) => {
    return (
        <div className={styles.formGroup}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                    onChange(e)
                }
                className={classNames({ [styles.error]: errorText })}
            />
            <div className={styles.errorAlert}>{errorText}</div>
        </div>
    );
};

export default Input;
