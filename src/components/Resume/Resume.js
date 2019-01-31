//@flow

import React from 'react';
import styles from './Resume.module.scss';

import classNames from 'classnames/bind';

import { ButtonLink } from '../Local/Button/Button';

import { MicrosoftWordIcon } from '../../icons/MicrosoftWord';
import { AdobeAcrobatReaderIcon } from '../../icons/AdobeAcrobatReader';

let cx = classNames.bind(styles);

class Resume extends React.Component<{}> {
  render() {
    return (
      <div className={cx("resume-page-container")}>
        <div className={cx("resume-download-container")}>
          <h2>Download resume as...</h2>
          <div className={cx("resume-download")}>
            <ButtonLink type="a" href="./files/resume/BrianHResume.docx" target="_blank"><MicrosoftWordIcon/>DOCX</ButtonLink>
            <ButtonLink type="a" href="./files/resume/BrianHResume.pdf" target="_blank"><AdobeAcrobatReaderIcon/>PDF</ButtonLink>
          </div>
        </div>
        <div className={cx("resume-container")}>
          <div className={cx("resume-section")}>
            <div className={cx("section-left")}>
              <h1>Skills</h1>
            </div>
            <div className={cx("section-right")}>
              <div className={cx("side-by-side")}>
                <div>
                  <h2 className={cx("primary-color")}>Software Development</h2>
                  <ul>
                    <li>Web Design
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3 / SASS</li>
                        <li>JavaScript / jQuery</li>
                        <li>TypeScript</li>
                        <li>PHP</li>
                        <li>Bootstrap</li>
                      </ul>
                    </li>
                    <li>Web Frameworks / Server-Side Tech
                      <ul>
                        <li>Node.js / Express</li>
                        <li>React</li>
                        <li>Angular 2+</li>
                        <li>Nginx</li>
                      </ul>
                    </li>
                    <li>Database / Data Visualization
                      <ul>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Oracle</li>
                        <li>Tableau</li>
                        <li>D3.js</li>
                        <li>JSON / XML</li>
                      </ul>
                    </li>
                    <li>Object-Oriented
                      <ul>
                        <li>Python</li>
                        <li>C++</li>
                        <li>Ruby</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className={cx("top-by-top")}>
                  <div>
                    <h2 className={cx("primary-color")}>Methodologies</h2>
                    <ul>
                      <li>Agile Software Development</li>
                      <li>Cross-Browser Compatibility</li>
                      <li>Database Normalization</li>
                      <li>Mobile Web Design</li>
                      <li>Responsive Web Design</li>
                      <li>REST API</li>
                      <li>Virtualization</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className={cx("primary-color")}>AWS Services</h2>
                    <ul>
                      <li>CloudFront</li>
                      <li>EC2</li>
                      <li>S3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("resume-section")}>
            <div className={cx("section-left")}>
              <h1>Experience</h1>
            </div>
            <div className={cx("section-right")}>
              <div className={cx("resume-experience")}>
                <div className={cx("resume-header")}>
                  <h2>Software Engineer</h2>
                  <h3>DGDean</h3>
                </div>
                <h4>New York, New York | July 2017 - Present</h4>
                <ul>
                  <li>Co-developer for the Sweet Defeat platform, using HTML5, CSS3, and PHP.</li>
                  <li>Maintained HelpRx and other associated ScriptRelief websites, using Ruby on Rails, Nginx, and Linux.</li>
                  <li>Developed an internal data manager for Steady with Node.js and Angular 5.</li>
                </ul>
              </div>
              <div className={cx("resume-experience")}>
                <div className={cx("resume-header")}>
                  <h2>Consultant Web Developer</h2>
                  <h3>New York City Transit</h3>
                </div>
                <h4>New York, New York | March 2015 - March 2017</h4>
                <ul>
                  <li>Built data visualizations for subway and bus performance, using BIRT reports, JavaScript, jQuery, HTML5, and SQL.</li>
                  <li>Created a dashboard for real-time data display, using Node.js, React.js, Socket.IO, and RabbitMQ.</li>
                  <li>Worked on adapting open-source projects for visualizing scheduled and real-time train movement, using Python, JavaScript (D3.js library), JSON, SQL, and Bootstrap.</li>
                  <li>Queried from an Oracle database, which included data for subway and bus ridership, daily arrival and departure times, and station information.</li>
                  <li>Used real-time and scheduled data feeds to build static JSON files.</li>
                </ul>
              </div>
              <div className={cx("resume-experience")}>
                <div className={cx("resume-header")}>
                  <h2>Network Engineer</h2>
                  <h3>Kraft Kennedy</h3>
                </div>
                <h4>New York, New York | July 2014 - October 2014</h4>
                <ul>
                  <li>Experience in configuring and using SCCM and MDT to image workstations.</li>
                  <li>Built and managed Active Directory, including the DHCP and DNS services.</li>
                  <li>Gained a certification to install and configure Windows Server 2012 R2 (MCSA 70-410).</li>
                  <li>Basic experience with VMware, Microsoft SQL Server, Microsoft Exchange, and Citrix XenApp.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx("resume-section")}>
            <div className={cx("section-left")}>
              <h1>Education</h1>
            </div>
            <div className={cx("section-right")}>
              <div className={cx("resume-education")}>
                <div className={cx("resume-header")}>
                  <h2>Graduate Center at the City University of New York</h2>
                </div>
                <h4>New York, New York | 2016 - Present</h4>
                <p>Studying for a Master of Arts in Liberal Studies, specializing in data visualization and digital humanities.</p>
              </div>
              <div className={cx("resume-education")}>
                <div className={cx("resume-header")}>
                  <h2>Rensselaer Polytechnic Institute</h2>
                </div>
                <h4>Troy, New York | 2010 - 2014</h4>
                <p>Graduated as a Bachelor of Science in Information Technology and Web Science, with a concentration in Civil Engineering.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("resume-contact-me")}>
          <div className={cx("contact-banner-overlay")}>
            <h1>Like what you see?</h1>
            <ButtonLink type="link" to="contact" white>Continue to Contact Me</ButtonLink>
          </div>
        </div>
      </div>
    );
  }
};

export default Resume;
