import React from 'react';
import './Contact.css';

import Input from '../Local/Input/Input';
import TextArea from '../Local/TextArea/TextArea';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: false,
      email: "",
      emailError: false,
      subject: "",
      subjectError: false,
      message: "",
      messageError: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,63})+$/;
    let validEmail = true;

    !this.state.name ? this.setState({nameError: "Required field"}) : this.setState({nameError: false});
    !this.state.subject ? this.setState({subjectError: "Required field"}) : this.setState({subjectError: false});
    !this.state.message ? this.setState({messageError: "Required field"}) : this.setState({messageError: false});

    if (!this.state.email) {
      this.setState({emailError: "Required field"})
      validEmail = false;
    }
    else if(!emailRegex.test(this.state.email)) {
      this.setState({emailError: "Not a valid email"});
      validEmail = false;
    }
    else {
      this.setState({emailError: false});
      validEmail = true;
    }

    if (this.state.name && validEmail === true && this.state.subject && this.state.message) {
      this.setState({
        nameError: false,
        emailError: false,
        subjectError: false,
        messageError: false
      }, this.sendEmail);
    }
    event.preventDefault();
  }

  sendEmail() {
    console.log("here")
  }

  clear = () => {
    this.setState({
      name: "",
      nameError: false,
      email: "",
      emailError: false,
      subject: "",
      subjectError: false,
      message: "",
      messageError: false
    });
  }

  render() {

    return (
      <div className="contact-container">
        <div className="contact-paper">
          <p>If you would like to get in contact, please email me at <a href="mailto:hmltnbrn@gmail.com">hmltnbrn@gmail.com</a> or use the form below.</p>
          <form onSubmit={this.handleSubmit} noValidate>
            <Input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={this.state.name}
              errorText={this.state.nameError}
              onChange={this.handleInputChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email *"
              value={this.state.email}
              errorText={this.state.emailError}
              onChange={this.handleInputChange}
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={this.state.subject}
              errorText={this.state.subjectError}
              onChange={this.handleInputChange}
            />
            <TextArea
              name="message"
              rows={5}
              placeholder="Message *"
              value={this.state.message}
              errorText={this.state.messageError}
              onChange={this.handleInputChange}
            />
            <div className="button-container">
              <button type="button" className="button-link" onClick={this.clear}>Clear</button>
              <button type="submit" className="button-link">Send Email</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Contact;
