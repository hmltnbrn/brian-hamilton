//@flow

import React from 'react';
import './Contact.scss';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import ReCAPTCHA from "react-google-recaptcha";

import Input from '../Local/Input/Input';
import TextArea from '../Local/TextArea/TextArea';
import CustomSnackbar from '../Local/CustomSnackbar/CustomSnackbar';

type Props = {};

type State = {
  name: string,
  email: string,
  subject: string,
  message: string,
  recaptcha: string,
  nameError: boolean | string,
  emailError: boolean | string,
  subjectError: boolean | string,
  messageError: boolean | string,
  emailDialog: boolean,
  phoneDialog: boolean,
  emailSuccessSnackbar: boolean,
  recaptchaSnackbar: boolean,
  emailErrorSnackbar: boolean
};

class Contact extends React.Component<Props, State> {

  state = {
    name: "",
    nameError: false,
    email: "",
    emailError: false,
    subject: "",
    subjectError: false,
    message: "",
    messageError: false,
    recaptcha: "",
    emailDialog: false,
    phoneDialog: false,
    emailSuccessSnackbar: false,
    recaptchaSnackbar: false,
    emailErrorSnackbar: false
  };

  handleInputChange = (event:SyntheticEvent<HTMLButtonElement>):void => {
    const target = event.currentTarget;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event:SyntheticEvent<HTMLButtonElement>):void => {
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,63})+$/;
    let validEmail = true;

    !this.state.name ? this.setState({nameError: "Required field"}) : this.setState({nameError: false});
    !this.state.subject ? this.setState({subjectError: "Required field"}) : this.setState({subjectError: false});
    !this.state.message ? this.setState({messageError: "Required field"}) : this.setState({messageError: false});
    !this.state.recaptcha ? this.setState({recaptchaSnackbar: true}) : this.setState({recaptchaSnackbar: false});

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

    if (this.state.name && validEmail === true && this.state.subject && this.state.message && this.state.recaptcha) {
      this.setState({
        emailDialog: false,
      }, this.sendEmail);
    }
    event.preventDefault();
  };

  async sendEmail() {
    var data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
      recaptcha: this.state.recaptcha
    };
    var url = `${process.env.REACT_APP_API || ""}/send`;
    var json:{ sent:boolean } = {};
    try {
      var response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      });
      json = await response.json();
    } catch (e) {
      this.setState({emailErrorSnackbar: true});
    }

    if(json.sent === true) {
      this.setState({
        emailSuccessSnackbar: true,
        name: "",
        nameError: false,
        email: "",
        emailError: false,
        subject: "",
        subjectError: false,
        message: "",
        messageError: false,
        recaptcha: ""
      });
    }
    else {
      this.setState({
        emailErrorSnackbar: true,
        recaptcha: ""
      });
    }

  }

  clear = ():void => {
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
              <div className="recaptcha-container">
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                  onChange={(value:string) => this.setState({recaptcha: value})}
                />
              </div>
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
            <div className="dialog-button-container phone">
              <a href="tel:1-518-391-5033" className="round-button-link" onClick={() => this.setState({phoneDialog: false})}><i className="material-icons">phone</i></a>
            </div>
            <p className="phone-wrap"><span>Otherwise, call me at </span><span><strong>(518) 391-5033</strong>.</span></p>
            <span></span>
          </DialogContent>
        </Dialog>
        <CustomSnackbar
          open={this.state.emailSuccessSnackbar}
          message="Email sent!"
          onClose={() => this.setState({emailSuccessSnackbar: false})}
          type="success"
        />
        <CustomSnackbar
          open={this.state.recaptchaSnackbar}
          message="Are you a robot?"
          onClose={() => this.setState({recaptchaSnackbar: false})}
          type="warning"
        />
        <CustomSnackbar
          open={this.state.emailErrorSnackbar}
          message="Email failed to send"
          onClose={() => this.setState({emailErrorSnackbar: false})}
          type="error"
        />
      </div>
    );
  }
};

export default withMobileDialog()(Contact);
