// @flow

import React from 'react';
import './TextArea.scss';

type Props = {
  rows: number,
  name: string,
  placeholder: string,
  value?: string,
  errorText?: string | boolean,
  onChange: (e:SyntheticEvent<HTMLButtonElement>) => void
};

class TextArea extends React.Component<Props> {
  render() {
    return (
      <div className="form-group">
        <textarea
          rows={this.props.rows}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={(e:SyntheticEvent<HTMLButtonElement>) => this.props.onChange(e)}
          className={this.props.errorText && !this.props.value ? 'error' : ''}
        />
        <div className="error-alert">{this.props.errorText}</div>
      </div>
    );
  }
};

export default TextArea;
