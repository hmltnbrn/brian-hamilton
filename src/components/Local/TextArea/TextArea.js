import React from 'react';
import './TextArea.css';

class TextArea extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() {

    return (
      <div className="form-group">
        <textarea rows={this.props.rows} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} onChange={this.handleChange} className={this.props.errorText && !this.props.value ? 'error' : ''} />
        <div className="error-alert">{this.props.errorText}</div>
      </div>
    );
  }
};

export default TextArea;
