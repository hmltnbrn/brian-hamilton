import React from 'react';
import './Contact.css';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';

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
      messageError: false,
      emailDialog: false,
      phoneDialog: false
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
        emailDialog: false,
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
  };

  render() {

    return (
      <div className="contact-container">
        <div className="contact-top-container">
          <div className="contact-chooser">
            <div className="contact-option" onClick={() => this.setState({emailDialog: true})}>
              <i className="material-icons">email</i>
              <div className="contact-text">Shoot me an email</div>
            </div>
            <div className="contact-option" onClick={() => this.setState({phoneDialog: true})}>
              <i className="material-icons">phone</i>
              <div className="contact-text">Give me a ring</div>
            </div>
          </div>
        </div>
        <Dialog
          fullScreen={true}
          open={this.state.emailDialog}
          onClose={() => this.setState({emailDialog: false})}
        >
          <DialogContent className="email-dialog">
            <div className="dialog-exit" onClick={() => this.setState({emailDialog: false})} tabIndex="0"><i className="material-icons">clear</i></div>
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
                placeholder="Email Address *"
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
              <div className="dialog-button-container">
                <button type="button" className="button-link" onClick={this.clear}>Clear</button>
                <button type="submit" className="button-link">Send Email</button>
              </div>
            </form>
            <span></span>
          </DialogContent>
        </Dialog>
        <Dialog
          fullScreen={true}
          open={this.state.phoneDialog}
          onClose={() => this.setState({phoneDialog: false})}
        >
          <DialogContent className="email-dialog">
            <div className="dialog-exit" onClick={() => this.setState({phoneDialog: false})} tabIndex="0"><i className="material-icons">clear</i></div>
            <p>On a phone? Tap the button below.</p>
            <div className="dialog-button-container">
              <a href="tel:1-518-391-5033" className="round-button-link"><i className="material-icons">phone</i></a>
            </div>
            <p>Otherwise, call me at <strong>1-518-391-5033</strong>.</p>
            <span></span>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
};

export default withMobileDialog()(Contact);
