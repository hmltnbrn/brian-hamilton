import React from 'react';
import './Header.css';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { NavLink } from 'react-router-dom';

import { LinkedInIcon } from '../../icons/LinkedIn';
import { GitHubIcon } from '../../icons/GitHub';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawer: false
    };
  }

  render() {

    return (
      <header>
        <div className="header-container">
          <div className="header-left">
          {this.props.windowWidth < 800 ?
            <i className="material-icons drawer-opener" onClick={() => this.setState({drawer: true})}>menu</i>
            : <span></span>
          }
          </div>
          <div className="header-right">
            {this.props.windowWidth >= 800 ?
              <div className="header-links">
                <NavLink exact to="/" className="header-link" activeClassName="active">Home</NavLink>
                <NavLink to="/resume" className="header-link" activeClassName="active">Resume</NavLink>
                <NavLink to="/portfolio" className="header-link" activeClassName="active">Portfolio</NavLink>
                <NavLink to="/contact" className="header-link" activeClassName="active">Contact</NavLink>
                <div className="vertical-rule"></div>
                <a href="https://www.linkedin.com/in/brian-hamilton-520835a8" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href="https://github.com/hmltnbrn" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
              </div>
              : 
              <div className="header-links">
                <a href="https://www.linkedin.com/in/brian-hamilton-520835a8" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href="https://github.com/hmltnbrn" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
              </div>
            }
          </div>
        </div>
        <SwipeableDrawer
          open={this.state.drawer}
          onClose={() => this.setState({drawer: false})}
          onOpen={() => this.setState({drawer: true})}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.setState({drawer: false})}
            onKeyDown={() => this.setState({drawer: false})}
          >
            <div className="links-container">
              <NavLink exact to="/" className="drawer-link" activeClassName="active">Home</NavLink>
              <NavLink to="/resume" className="drawer-link" activeClassName="active">Resume</NavLink>
              <NavLink to="/portfolio" className="drawer-link" activeClassName="active">Portfolio</NavLink>
              <NavLink to="/contact" className="drawer-link" activeClassName="active">Contact</NavLink>
            </div>
          </div>
        </SwipeableDrawer>
      </header>
    );
  }
};

export default Header;
