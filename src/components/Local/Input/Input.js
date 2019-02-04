// @flow

import React from 'react';
import styles from './Input.module.scss';

import classNames from 'classnames/bind';

type Props = {
  type: string,
  name: string,
  placeholder: string,
  value?: string,
  errorText?: string | boolean,
  onChange: (e:SyntheticEvent<HTMLButtonElement>) => void
};

let cx = classNames.bind(styles);

class Input extends React.Component<Props> {
  render() {
    return (
      <div className={cx("form-group")}>
        <input
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={(e:SyntheticEvent<HTMLButtonElement>) => this.props.onChange(e)}
          className={cx({"error": this.props.errorText})}
        />
        <div className={cx("error-alert")}>{this.props.errorText}</div>
      </div>
    );
  }
};

export default Input;
