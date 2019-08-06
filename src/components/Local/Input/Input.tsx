import React from 'react';
import styles from './Input.module.scss';

import classNames from 'classnames/bind';

type Props = {
  type: string,
  name: string,
  placeholder: string,
  value?: string,
  errorText?: string | boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

let cx = classNames.bind(styles);

const Input = ({ type, name, placeholder, value, errorText, onChange }: Props) => {
  return (
    <div className={cx("form-group")}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        className={cx({"error": errorText})}
      />
      <div className={cx("error-alert")}>{errorText}</div>
    </div>
  );
};

export default Input;
