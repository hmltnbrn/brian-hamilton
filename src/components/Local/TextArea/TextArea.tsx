import React from 'react';
import styles from './TextArea.module.scss';

import classNames from 'classnames/bind';

interface Props {
  rows: number;
  name: string;
  placeholder: string;
  value?: string;
  errorText?: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const cx = classNames.bind(styles);

const TextArea = ({
  rows,
  name,
  placeholder,
  value,
  errorText,
  onChange
}: Props): JSX.Element => {
  return (
    <div className={cx('form-group')}>
      <textarea
        rows={rows}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
          onChange(e)
        }
        className={cx({ error: errorText && !value })}
      />
      <div className={cx('error-alert')}>{errorText}</div>
    </div>
  );
};

export default TextArea;
