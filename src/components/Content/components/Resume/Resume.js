import React from 'react';
import './Resume.css';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Word from 'material-ui/svg-icons/editor/insert-drive-file';
import PDF from 'material-ui/svg-icons/image/picture-as-pdf';
import Divider from 'material-ui/Divider';

class Resume extends React.Component {

  render() {

    return (
      <div className="section">
        <div className="section-title">Resume</div>
        <div className={this.props.windowWidth > 800 ? "section-paper flex left" : "section-paper flex"}>
          <Paper className="resume-paper" style={{backgroundColor:'#F8F9F3'}}>
            <div className="resume-header">Brian Hamilton</div>
            <div className="resume-title">EDUCATION</div>
            <div className="institution-title">Graduate Center at the City University of New York</div>
            <div className="location-years">New York, New York — 2016-Present</div>
            <div className="school-description">Studying for a Master of Arts in Liberal Studies, specializing in data visualization and digital humanities.</div>
            <div className="institution-title">Rensselaer Polytechnic Institute</div>
            <div className="location-years">Troy, New York — 2010-2014</div>
            <div>Graduated as a Bachelor of Science in Information Technology
            and Web Science, with a concentration in Civil Engineering.</div>
            <div className="resume-title">EXPERIENCE</div>
            <div className="institution-title">Software Engineer, DGDean</div>
            <div className="location-years">New York, New York — July 2017-Present</div>
            <ul className="experience-list">
              <li>Developed an internal data manager for Steady, using Node.js and Angular 5.</li>
              <li>Worked on the back-end API for Steady.</li>
            </ul>
            <div className="institution-title">Consultant Web Developer, New York City Transit</div>
            <div className="location-years">New York, New York — March 2015-March 2017</div>
            <ul className="experience-list">
              <li>Built data visualizations for subway and bus performance, using
                  BIRT reports, JavaScript, jQuery, HTML, and SQL.</li>
              <li>Created a dashboard for real-time data display, using Node.js and React.js, Socket.IO, and RabbitMQ.</li>
              <li>Worked on adapting open-source projects for visualizing scheduled
                  and real-time train movement, using Python, JavaScript (D3 library), JSON, and SQL.</li>
              <li>Queried from an Oracle database, which included data for subway
                  and bus ridership, daily arrival and departure times, and station information.</li>
              <li>Used real-time and scheduled data feeds to build static JSON files.</li>
            </ul>
            <div className="institution-title">Network Engineer, Kraft Kennedy</div>
            <div className="location-years">New York, New York — July 2014-October 2014</div>
            <ul className="experience-list">
              <li>Experience in configuring and using SCCM and MDT to image workstations.</li>
              <li>Built and managed Active Directory, including the DHCP and DNS services.</li>
              <li>Gained a certification to install and configure Windows Server 2012 R2 (MCSA 70-410).</li>
              <li>Basic experience with VMware, Microsoft SQL Server, Microsoft Exchange, and Citrix XenApp.</li>
            </ul>
            <div className="resume-title">SKILLS</div>
            <ul className="skills-list">
              <li>Proficient in basic web development technologies, including HTML5, CSS3, JavaScript, jQuery, JSON, and XML.</li>
              <li>Using object-oriented programming languages, such as Python, C++, and C#.</li>
              <li>Experience building full-stack applications with Node.js, .NET, React, Angular 2+, PostgreSQL, MySQL, and MongoDB.</li>
              <li>Creating databases, normalizing tables, and querying using SQL.</li>
              <li>Building data visualizations with D3.js.</li>
              <li>Knowledge of transportation and general engineering principles,
                  such as traffic engineering, statics, and rapid transit.</li>
            </ul>
            <div className="resume-title">PROJECTS</div>
            <ul className="skills-list">
              <li>Internal data manager for Steady. (DGDean)</li>
              <li>Co-developer on Mirror, Mirror 2017, a D3.js data report for the Commonwealth Fund. (Consultant)</li>
              <li>Back-end developer on end/line, a web application for TEI encoding of poetry. (CUNY – Spring 2017)</li>
              <li>Node.js, React.js, and PostgreSQL application for a small classroom library. (Personal)</li>
              <li>Dashboard for visualizations and real-time data for the Rail Control Center. (New York City Transit)</li>
              <li>Visualization for real-time train movement and daily ridership. (New
                  York City Transit)</li>
            </ul>
            <Divider style={{width:'100%',marginTop:20,marginBottom:5}}/>
            <div className="download-buttons">
              <FlatButton
                label="DOCX"
                href="/files/BrianHResume.docx"
                target="_blank"
                style={{color:"#0472C4"}}
                icon={<Word color="#0472C4"/>}
              />
              <FlatButton
                label="PDF"
                href="/files/BrianHResume.pdf"
                target="_blank"
                style={{color:"#B10808"}}
                icon={<PDF color="#B10808"/>}
              />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
};

export default Resume;
