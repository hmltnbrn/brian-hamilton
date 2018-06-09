import React from 'react';
import './Header.css';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { NavLink } from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawer: false
    };
  }

  render() {

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
