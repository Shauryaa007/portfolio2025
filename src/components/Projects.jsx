import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-title fade-in">Key Projects</h2>
            <div className="projects-grid fade-in-up">
                <div className="project-card">
                    <h3>New York City Taxi Data Analysis</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>Delta Lake | Delta Table | Spark (Core, SQL) | Pyspark</p>
                    <ul className="project-list">
                        <li>Built a case study project titled ‘New York City Taxi Analysis’ using the Databricks Lakehouse Platform to process and analyze taxi trip data.</li>
                        <li>Ingested large-scale datasets from Yellow and Green utilizing Auto Loader and processing them through a Multi Hop (Medallion) Architecture comprising Bronze, Silver, and Gold layers.</li>
                    </ul>
                </div>
                <div className="project-card">
                    <h3>BOOK BROWSE</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>React, Context-API, React-Bootstrap, Firebase, Vercel</p>
                    <ul className="project-list">
                        <li>Designed and deployed a fully fledged online book marketplace using ReactJS and Firebase, enabling users to buy and sell books with ease streamlining user workflow by 90%.</li>
                        <li>Implemented user authentication using Firebase Authentication, ensuring secure access to the platform. Users can register and log in.</li>
                    </ul>
                </div>
                <div className="project-card">
                    <h3>BLOOD CONNECT</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>ReactJS, NodeJS, ExpressJS, MySQL</p>
                    <ul className="project-list">
                        <li>Pioneered the development of a Web App, enhancing the way blood requesters connect with the donors by 90%.</li>
                        <li>Engineered a robust search functionality that improving search effectiveness by 75% to efficiently locate nearest blood donors by location and blood type filters.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Projects;
