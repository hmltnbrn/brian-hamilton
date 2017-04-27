import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import LinkIcon from 'material-ui/svg-icons/content/link';

class Projects extends React.Component {

  render() {

    //https://github.com/danleech/simple-icons
    const GitHubIcon = () => (
      <svg className="github-button" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" fill="#000000" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
        <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/>
      </svg>
    );

    return (
      <div className="section">
        <div className="section-title">Projects</div>
        <div className="section-paper projects-div flex flex-column align-center">
          <Card className="projects-paper">
            <CardMedia
              overlay={<CardTitle title="Classroom Library" subtitle="Check out/in system for a classroom library" />}
            >
              <img src="images/classroom-library.png" />
            </CardMedia>
            <CardText>
              Node.js application built with React, Express, Webpack, React Router, Passport, Material-UI, and PostgreSQL.<br/>
              Default usernames and passwords are listed on GitHub.
            </CardText>
            <CardActions>
              <FlatButton
                label="Repository"
                href="https://github.com/hmltnbrn/classroom-library"
                target="_blank"
                icon={<GitHubIcon/>}/>
              <FlatButton
                label="Live Demo"
                href="http://classroomlibrary.brianhamilton.me"
                target="_blank"
                style={{color:"#CCA677"}}
                icon={<LinkIcon color="#CCA677"/>}/>
            </CardActions>
          </Card>
          <Card className="projects-paper">
            <CardMedia
              overlay={<CardTitle title="end/line" subtitle="Web application for encoding poetry with TEI" />}
            >
              <img src="images/end-line.png" />
            </CardMedia>
            <CardText>
              Currently working as the back-end developer and lead developer on this project, which is now in beta.<br/>
              Node.js application built with Express, EJS, Bootstrap, and PostgreSQL.
            </CardText>
            <CardActions>
              <FlatButton
                label="Repository"
                href="https://github.com/end-line/end-line"
                target="_blank"
                icon={<GitHubIcon/>}/>
              <FlatButton
                label="Live Site"
                href="http://www.endlineproject.org/"
                target="_blank"
                style={{color:"#CCA677"}}
                icon={<LinkIcon color="#CCA677"/>}/>
            </CardActions>
          </Card>
          <Card className="projects-paper">
            <CardMedia
              overlay={<CardTitle title="NYCT Train Movement" subtitle="Subway visualization with animation" />}
            >
              <img src="images/train-movement.png" />
            </CardMedia>
            <CardText>
              Node.js application built with JavaScript, D3.js, jQuery, Bootstrap, and JSON.<br/>
              Stripped down version (only including publically available data) coming to GitHub soon.
            </CardText>
          </Card>
          <Card className="projects-paper">
            <CardMedia
              overlay={<CardTitle title="NYC School Crimes" subtitle="Data analysis of New York City school crimes" />}
            >
              <img src="images/school-crimes.png" />
            </CardMedia>
            <CardText>
              Data anaysis and visualization of an <a href="https://data.cityofnewyork.us/" target="_blank">NYC OpenData</a> dataset pertaining to school crimes.<br/>
              Cleaning and analysis done with Python and PostgreSQL.<br/>
              Web application built with Node.js, React, and the Google Maps API.
            </CardText>
            <CardActions>
              <FlatButton
                label="Repository"
                href="https://github.com/hmltnbrn/nyc-school-crimes"
                target="_blank"
                icon={<GitHubIcon/>}/>
              <FlatButton
                label="View Project"
                href="http://schools.brianhamilton.me"
                target="_blank"
                style={{color:"#CCA677"}}
                icon={<LinkIcon color="#CCA677"/>}/>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
};

export default Projects;
