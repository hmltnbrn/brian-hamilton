import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

import { AdobeAcrobatReaderIcon } from '../../icons/AdobeAcrobatReader';
import { MicrosoftWordIcon } from '../../icons/MicrosoftWord';
import { ButtonLink } from '../Local/Button/Button';

import styles from './Resume.module.scss';

const Resume: FC = () => {
    return (
        <>
            <Helmet>
                <title>Brian Hamilton | Resume</title>
            </Helmet>
            <div className={styles.resumeDownloadContainer}>
                <div className={styles.resumeDownloadInner}>
                    <h2>Download your own copy</h2>
                    <div className={styles.resumeDownload}>
                        <ButtonLink
                            type="a"
                            href="https://storage.brianhamilton.me/files/BrianResume.docx"
                            target="_blank"
                            white
                        >
                            <MicrosoftWordIcon />
                            DOCX
                        </ButtonLink>
                        <ButtonLink
                            type="a"
                            href="https://storage.brianhamilton.me/files/BrianResume.pdf"
                            target="_blank"
                            white
                        >
                            <AdobeAcrobatReaderIcon />
                            PDF
                        </ButtonLink>
                    </div>
                </div>
            </div>
            <div className={styles.resumeContainer}>
                <div className={styles.resumeSection}>
                    <div className={styles.sectionLeft}>
                        <h1>Skills</h1>
                    </div>
                    <div className={styles.sectionRight}>
                        <div className={styles.sideBySide}>
                            <div>
                                <h2>Software Development</h2>
                                <ul>
                                    <li>
                                        Web Design
                                        <ul>
                                            <li>HTML5</li>
                                            <li>CSS3 / SASS / JSS</li>
                                            <li>JavaScript / jQuery</li>
                                            <li>TypeScript / Flow</li>
                                            <li>PHP</li>
                                            <li>Bootstrap</li>
                                            <li>EJS / Handlebars</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Web Frameworks / Libraries
                                        <ul>
                                            <li>Node.js / Express</li>
                                            <li>React / Redux</li>
                                            <li>Next.js</li>
                                            <li>GraphQL / Relay</li>
                                            <li>React Native</li>
                                            <li>Angular 2+</li>
                                            <li>Ruby on Rails</li>
                                            <li>REST API</li>
                                            <li>Webpack / Babel</li>
                                            <li>PostCSS</li>
                                            <li>WordPress</li>
                                            <li>Progressive Web Apps</li>
                                            <li>Tailwind</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Database / Data Visualization
                                        <ul>
                                            <li>SQL / NoSQL</li>
                                            <li>PostgreSQL</li>
                                            <li>MySQL</li>
                                            <li>MongoDB</li>
                                            <li>OracleDB</li>
                                            <li>Tableau</li>
                                            <li>D3.js</li>
                                            <li>MALLET / NLP</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Object-Oriented
                                        <ul>
                                            <li>Python</li>
                                            <li>C++</li>
                                            <li>Ruby</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <h2>Methodologies</h2>
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
                                    <h2>AWS / Other Services</h2>
                                    <ul>
                                        <li>CloudFront</li>
                                        <li>EC2</li>
                                        <li>S3</li>
                                        <li>DynamoDB</li>
                                        <li>Heroku</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2>Operating Systems</h2>
                                    <ul>
                                        <li>Windows</li>
                                        <li>Mac</li>
                                        <li>Linux</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2>Image Editors</h2>
                                    <ul>
                                        <li>GIMP</li>
                                        <li>Inkscape</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.resumeSection}>
                    <div className={styles.sectionLeft}>
                        <h1>Experience</h1>
                    </div>
                    <div className={styles.sectionRight}>
                        <div className={styles.resumeExperience}>
                            <div className={styles.resumeHeader}>
                                <h2>Senior Software Engineer</h2>
                                <h3>1stDibs</h3>
                            </div>
                            <h4>
                                New York, New York | October 2021 - July 2023
                            </h4>
                            <ul>
                                <li>
                                    Developer for customer-facing projects on
                                    the frontend, with React, Relay, and SCSS.
                                </li>
                                <li>
                                    Built queries and mutations with GraphQL for
                                    interacting with the backend.
                                </li>
                                <li>
                                    Updated the tech stack with TypeScript and
                                    modern React components.
                                </li>
                                <li>
                                    Worked on the design, development, and A/B
                                    testing of new features.
                                </li>
                                <li>
                                    Responsible for researching and implementing
                                    new Web3 technologies.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.resumeExperience}>
                            <div className={styles.resumeHeader}>
                                <h2>Senior Software Engineer</h2>
                                <h3>HCTG, LLC</h3>
                            </div>
                            <h4>
                                New York, New York | July 2020 - September 2021
                            </h4>
                            <ul>
                                <li>
                                    Senior engineer for multiple platforms,
                                    using PHP, React, and Node.js.
                                </li>
                                <li>
                                    Lead React and Node.js engineer for
                                    development of a new company-wide CMS.
                                </li>
                                <li>
                                    Manager of multiple MySQL and MongoDB
                                    database systems.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.resumeExperience}>
                            <div className={styles.resumeHeader}>
                                <h2>Software Engineer</h2>
                                <h3>DGDean</h3>
                            </div>
                            <h4>
                                New York, New York | July 2017 - December 2019
                            </h4>
                            <ul>
                                <li>
                                    Node.js and React engineer for the National
                                    Kitchen and Bath Association platform.
                                </li>
                                <li>
                                    Co-developer for the Sweet Defeat platform,
                                    using HTML5, CSS3, and PHP.
                                </li>
                                <li>
                                    Maintained HelpRx and other associated
                                    ScriptRelief websites, using Ruby on Rails,
                                    Nginx, and Linux.
                                </li>
                                <li>
                                    Developed an internal data manager for
                                    Steady with Node.js and Angular 5.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.resumeExperience}>
                            <div className={styles.resumeHeader}>
                                <h2>Consultant Web Developer</h2>
                                <h3>New York City Transit</h3>
                            </div>
                            <h4>
                                New York, New York | March 2015 - March 2017
                            </h4>
                            <ul>
                                <li>
                                    Worked on adapting open-source projects for
                                    visualizing scheduled and real-time train
                                    movement, using Python, JavaScript (D3.js
                                    library), JSON, SQL, and Bootstrap.
                                </li>
                                <li>
                                    Built data visualizations for subway and bus
                                    performance, using BIRT reports, JavaScript,
                                    jQuery, HTML5, and SQL.
                                </li>
                                <li>
                                    Created a dashboard for real-time data
                                    display, using Node.js, React.js, Socket.IO,
                                    and RabbitMQ.
                                </li>
                                <li>
                                    Queried from an Oracle database, which
                                    included data for subway and bus ridership,
                                    daily arrival and departure times, and
                                    station information.
                                </li>
                                <li>
                                    Used real-time and scheduled data feeds to
                                    build static JSON files.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.resumeExperience}>
                            <div className={styles.resumeHeader}>
                                <h2>Network Engineer</h2>
                                <h3>Kraft Kennedy</h3>
                            </div>
                            <h4>
                                New York, New York | July 2014 - October 2014
                            </h4>
                            <ul>
                                <li>
                                    Experience in configuring and using SCCM and
                                    MDT to image workstations.
                                </li>
                                <li>
                                    Built and managed Active Directory,
                                    including the DHCP and DNS services.
                                </li>
                                <li>
                                    Gained a certification to install and
                                    configure Windows Server 2012 R2 (MCSA
                                    70-410).
                                </li>
                                <li>
                                    Basic experience with VMware, Microsoft SQL
                                    Server, Microsoft Exchange, and Citrix
                                    XenApp.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.resumeSection}>
                    <div className={styles.sectionLeft}>
                        <h1>Education</h1>
                    </div>
                    <div className={styles.sectionRight}>
                        <div className={styles.resumeEducation}>
                            <div className={styles.resumeHeader}>
                                <h2>
                                    Graduate Center at the City University of
                                    New York
                                </h2>
                            </div>
                            <h4>New York, New York | 2016 - 2020</h4>
                            <p>
                                Graduated as a Master of Arts in Liberal
                                Studies, specializing in Data Visualization and
                                Digital Humanities.
                            </p>
                        </div>
                        <div className={styles.resumeEducation}>
                            <div className={styles.resumeHeader}>
                                <h2>Rensselaer Polytechnic Institute</h2>
                            </div>
                            <h4>Troy, New York | 2010 - 2014</h4>
                            <p>
                                Graduated as a Bachelor of Science in
                                Information Technology and Web Science, with a
                                concentration in Civil Engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.resumeContactMe}>
                <div className={styles.contactBannerOverlay}>
                    <h1>Like what you see?</h1>
                    <ButtonLink type="link" to="/contact" white>
                        Continue to Contact Me
                    </ButtonLink>
                </div>
            </div>
        </>
    );
};

export default Resume;
