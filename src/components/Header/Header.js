import React from 'react';
import Scroll from 'react-scroll';
import {white} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Email from 'material-ui/svg-icons/communication/email';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import './Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawer: false
    };
    this.scroller = Scroll.scroller;
  }

  handleToggle() {
    this.setState({drawer: !this.state.drawer});
  }

  scrollToElement(element) {
    this.setState({drawer: false});
    this.scroller.scrollTo(element, {
      duration: 1000,
      smooth: true,
      offset: -64
    });
  }

  render() {

    const toolStyle = {
      backgroundColor: 'inherit',
      overflowX: 'auto',
      overflowY: 'hidden',
      position: 'relative',
      width: '100%',
      height: 64
    };

    const appBarStyle = {
      backgroundColor: "#CCA677"
    };

    const buttonStyle = {
      color: 'inherit',
      margin: 10
    };

    const leftGroupStyle = {
      alignItems: "center",
      position: 'absolute',
      left: 0,
      height: 64
    };

    const rightGroupStyle = {
      alignItems: "center",
      height: 64,
      position: 'absolute',
      right: 0
    };

    const spanButtonStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    };

    const separatorStyle = {
      top: 0,
      marginRight: 30
    };

    const iconButtonStyle = {
      marginRight: 24
    };

    const iconEmailButtonStyle = {
      marginRight: 24,
      color: 'inherit',
      transition: 'none'
    };

    const menuItemStyle = {
      padding: 4
    };

    //https://github.com/danleech/simple-icons
    const GitHubIcon = () => (
      <svg className="header-button" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
        <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/>
      </svg>
    );

    //https://github.com/danleech/simple-icons
    const LinkedInIcon = () => (
      <svg className="header-button" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
        <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fillRule="nonzero"/>
      </svg>
    );

    return (
      <header>
        <Toolbar style={toolStyle}>
          <ToolbarGroup style={leftGroupStyle}>
            {this.props.windowWidth < 800 ?
              <IconButton
                style={{transition: 'none'}}
                touch={true}
                onClick={this.handleToggle.bind(this)}
              >
                <NavigationMenu color={'inherit'} />
              </IconButton> :
              <span></span>
            }
          </ToolbarGroup>
          <ToolbarGroup style={rightGroupStyle}>
            {this.props.windowWidth >= 800 ?
              <div style={spanButtonStyle}>
                <FlatButton label="About Me" style={buttonStyle} onClick={() => this.scrollToElement("about")}/>
                <FlatButton label="Resume" style={buttonStyle} onClick={() => this.scrollToElement("resume")}/>
                <FlatButton label="Projects" style={buttonStyle} onClick={() => this.scrollToElement("projects")}/>
                <FlatButton label="Contact" style={buttonStyle} onClick={() => this.scrollToElement("contact")}/>
                <ToolbarSeparator className="header-separator" style={separatorStyle}/>
              </div> :
              <div></div>
            }
            <IconButton style={iconEmailButtonStyle} href="mailto:hmltnbrn@gmail.com">
              <Email color={'inherit'}/>
            </IconButton>
            <IconButton style={iconButtonStyle} href="https://www.linkedin.com/in/brian-hamilton-520835a8" target="_blank">
              <LinkedInIcon/>
            </IconButton>
            <IconButton style={iconButtonStyle} href="https://github.com/hmltnbrn" target="_blank">
              <GitHubIcon/>
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
        <Drawer
          docked={false}
          open={this.state.drawer}
          onRequestChange={(drawer) => this.setState({drawer})}
        >
          <AppBar
            title="Sections"
            style={appBarStyle}
            zDepth={1}
            iconElementLeft={
            <IconButton
              touch={true}
              onClick={this.handleToggle.bind(this)}
            >
              <NavigationMenu color={white} />
            </IconButton>}
          />
          <MenuItem
            onClick={() => this.scrollToElement("about")}
            style={menuItemStyle}
          >
            About Me
          </MenuItem>
          <MenuItem
            onClick={() => this.scrollToElement("resume")}
            style={menuItemStyle}
          >
            Resume
          </MenuItem>
          <MenuItem
            onClick={() => this.scrollToElement("projects")}
            style={menuItemStyle}
          >
            Projects
          </MenuItem>
          <MenuItem
            onClick={() => this.scrollToElement("contact")}
            style={menuItemStyle}
          >
            Contact
          </MenuItem>
        </Drawer>
      </header>
    );
  }
};

export default Header;
