// @flow

import React from 'react';
import './Input.scss';

type Props = {
  type: string,
  name: string,
  placeholder: string,
  value?: string,
  errorText?: string | boolean,
  onChange: (e:SyntheticEvent<HTMLButtonElement>) => void
};

class Input extends React.Component<Props> {
  render() {
    return (
      <div className="form-group">
        <input
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={(e:SyntheticEvent<HTMLButtonElement>) => this.props.onChange(e)}
          className={this.props.errorText ? 'error' : ''}
        />
        <div className="error-alert">{this.props.errorText}</div>
      </div>
    );
  }
};

export default Input;
