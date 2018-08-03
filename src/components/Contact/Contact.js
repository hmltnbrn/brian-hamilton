import React from 'react';
import './Contact.css';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import Input from '../Local/Input/Input';
import TextArea from '../Local/TextArea/TextArea';
import CustomSnackbar from '../Local/CustomSnackbar/CustomSnackbar';

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
      phoneDialog: false,
      emailSnackbar: false
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
        emailDialog: false
      }, this.sendEmail);
    }
    event.preventDefault();
  }

  sendEmail() {
    var data = { name: this.state.name, email: this.state.email, subject: this.state.subject, message: this.state.message };
    var url = `${process.env.REACT_APP_API}/send`;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data), 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        this.setState({
          emailSnackbar: true,
          name: "",
          nameError: false,
          email: "",
          emailError: false,
          subject: "",
          subjectError: false,
          message: "",
          messageError: false
        });
      });
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
        <div className="contact-map"></div>
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
          <DialogContent className="contact-dialog">
            <div className="dialog-exit"><i className="material-icons" onClick={() => this.setState({emailDialog: false})} tabIndex="0">clear</i></div>
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
                rows={6}
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
          </DialogContent>
        </Dialog>
        <Dialog
          fullScreen={true}
          open={this.state.phoneDialog}
          onClose={() => this.setState({phoneDialog: false})}
        >
          <DialogContent className="contact-dialog center">
            <div className="dialog-exit"><i className="material-icons" onClick={() => this.setState({phoneDialog: false})} tabIndex="0">clear</i></div>
            <p>On a phone? Tap the button below.</p>
            <div className="dialog-button-container">
              <a href="tel:1-518-391-5033" className="round-button-link" onClick={() => this.setState({phoneDialog: false})}><i className="material-icons">phone</i></a>
            </div>
            <p className="phone-wrap"><span>Otherwise, call me at </span><span><strong>(518) 391-5033</strong>.</span></p>
            <span></span>
          </DialogContent>
        </Dialog>
        <CustomSnackbar open={this.state.emailSnackbar} message="Email sent!" onClose={() => this.setState({emailSnackbar: false})}/>
      </div>
    );
  }
};

export default withMobileDialog()(Contact);
