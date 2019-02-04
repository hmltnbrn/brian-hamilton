// @flow

import React from 'react';
import styles from './TextArea.module.scss';

import classNames from 'classnames/bind';

type Props = {
  rows: number,
  name: string,
  placeholder: string,
  value?: string,
  errorText?: string | boolean,
  onChange: (e:SyntheticEvent<HTMLButtonElement>) => void
};

let cx = classNames.bind(styles);

class TextArea extends React.Component<Props> {
  render() {
    return (
      <div className={cx("form-group")}>
        <textarea
          rows={this.props.rows}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={(e:SyntheticEvent<HTMLButtonElement>) => this.props.onChange(e)}
          className={cx({"error": this.props.errorText && !this.props.value})}
        />
        <div className={cx("error-alert")}>{this.props.errorText}</div>
      </div>
    );
  }
};

export default TextArea;
