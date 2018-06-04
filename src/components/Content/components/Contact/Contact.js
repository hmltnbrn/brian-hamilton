import React from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SendEmail from 'material-ui/svg-icons/content/send';
import Clear from 'material-ui/svg-icons/content/clear';

import './Contact.css';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      bodyText: "",
      nameError: false,
      emailError: false,
      subjectError: false,
      bodyError: false,
      messageSent: false,
      sendLabel: "Send Email",
      sendDisabled: false,
      dialogOpen: false
    };
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubjectChange(event) {
    this.setState({subject: event.target.value});
  }

  handleBodyChange(event) {
    this.setState({bodyText: event.target.value});
  }

  handleSendEmail() {

    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    let validEmail = true;

    this.state.name === "" ? this.setState({nameError: "Required field"}) : this.setState({nameError: false});
    this.state.subject === "" ? this.setState({subjectError: "Required field"}) : this.setState({subjectError: false});
    this.state.bodyText === "" ? this.setState({bodyError: "Required field"}) : this.setState({bodyError: false});

    if (this.state.email === "") {
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

    if (this.state.name !== "" && validEmail === true && this.state.subject !== "" && this.state.bodyText !== "") {
      this.setState({
        sendLabel: "Sending...",
        sendDisabled: true,
        nameError: false,
        emailError: false,
        subjectError: false,
        bodyError: false
      }, this.sendEmail);
    }
  }

  sendEmail() {
    var data = { name: this.state.name, email: this.state.email, subject: this.state.subject, bodyText: this.state.bodyText };
    var url = process.env.REACT_APP_API + '/send';

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
          messageSent: response.sent
        }, this.handleAfterSent);
      });
  }

  handleAfterSent() {
    if (this.state.messageSent === true) {
      this.setState({
        sendLabel: "Send Email",
        sendDisabled: false,
        name: "",
        email: "",
        subject: "",
        bodyText: "",
        dialogOpen: true
      });
    }
    else {
      this.setState({
        sendLabel: "Send Email",
        sendDisabled: false,
        dialogOpen: true
      });
    }
  }

  handleClear() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      bodyText: "",
      nameError: false,
      emailError: false,
      subjectError: false,
      bodyError: false
    });
  }

  handleClose() {
    this.setState({dialogOpen: false});
  }

  render() {

    const textFieldStyle = {
      underlineStyle: {
        borderColor: "#CCA677",
      },
      floatingLabelStyle: {
        color: "#CCA677",
      }
    }

    const contentStyle = {
      width: this.props.windowWidth > 600 ? '60%' : '80%'
    };

    const actions = [
      <FlatButton
        label="Close"
        onClick={this.handleClose.bind(this)}
        onTouchTap={this.handleClose.bind(this)}
      />
    ];

    return (
      <div className="section">
        <div className="section-title">Contact</div>
        <div className={this.props.windowWidth > 800 ? "section-paper flex left" : "section-paper flex"}>
          <Paper className="contact-paper">
            <div className="flex flex-column">
              <div className="flex justify-start">
                <p className="contact-text">If you would like to get in contact about a job opportunity or freelance work, please email me at <a href="mailto:hmltnbrn@gmail.com">hmltnbrn@gmail.com</a> or use the form below. My phone number is also included on the downloadable version of my resume.</p>
              </div>
              <TextField
                hintText="John Smith"
                floatingLabelText="Full Name *"
                value={this.state.name}
                errorText={this.state.nameError}
                onChange={this.handleNameChange.bind(this)}
                floatingLabelFocusStyle={textFieldStyle.floatingLabelStyle}
                underlineFocusStyle={textFieldStyle.underlineStyle}
              />
              <TextField
                hintText="first.last@domain.com"
                floatingLabelText="Email Address *"
                type="email"
                value={this.state.email}
                errorText={this.state.emailError}
                onChange={this.handleEmailChange.bind(this)}
                floatingLabelFocusStyle={textFieldStyle.floatingLabelStyle}
                underlineFocusStyle={textFieldStyle.underlineStyle}
              />
              <TextField
                hintText="Great News"
                floatingLabelText="Subject *"
                value={this.state.subject}
                errorText={this.state.subjectError}
                onChange={this.handleSubjectChange.bind(this)}
                floatingLabelFocusStyle={textFieldStyle.floatingLabelStyle}
                underlineFocusStyle={textFieldStyle.underlineStyle}
              />
              <TextField
                className="contact-message"
                hintText="Hello, Brian! Have I got news for you."
                floatingLabelText="Message *"
                multiLine={true}
                rows={2}
                fullWidth={true}
                value={this.state.bodyText}
                errorText={this.state.bodyError}
                onChange={this.handleBodyChange.bind(this)}
                floatingLabelFocusStyle={textFieldStyle.floatingLabelStyle}
                underlineFocusStyle={textFieldStyle.underlineStyle}
                hintStyle={{paddingBottom: 24}}/>
              <div className="flex justify-center" style={{marginTop: 10}}>
                <FlatButton
                  label="Clear"
                  type="submit"
                  icon={<Clear />}
                  onClick={this.handleClear.bind(this)}
                  onTouchTap={this.handleClear.bind(this)}
                />
                <FlatButton
                  label={this.state.sendLabel}
                  disabled={this.state.sendDisabled}
                  type="submit"
                  icon={<SendEmail />}
                  onClick={this.handleSendEmail.bind(this)}
                  onTouchTap={this.handleSendEmail.bind(this)}
                />
              </div>
              <div className="flex justify-start">
                <p className="required">* indicates required field</p>
              </div>
            </div>
          </Paper>
        </div>
        <Dialog
          actions={actions}
          contentStyle={contentStyle}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleClose.bind(this)}
        >
          {this.state.messageSent === true ?
            "Message sent successfully! I will get back to you as soon as I can." :
            "Oops, sending failed. Email me the old-fashioned way and let me know this happened."
          }
        </Dialog>
      </div>
    );
  }
};

export default Contact;
