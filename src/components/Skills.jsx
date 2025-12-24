import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2 className="section-title fade-in">Technical Arsenal</h2>
            <div className="skills-grid fade-in-up">
                <div className="skill-category">
                    <h3>Data Engineering & Big Data</h3>
                    <div className="tags">
                        <span>Apache Spark</span>
                        <span>Big Data</span>
                        <span>Data Pipelines</span>
                        <span>ETL</span>
                        <span>Azure Databricks</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Cloud Platforms & Services</h3>
                    <div className="tags">
                        <span>AWS</span>
                        <span>Amazon S3</span>
                        <span>Amazon EC2</span>
                        <span>AWS Lambda</span>
                        <span>Amazon CloudWatch</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <div className="tags">
                        <span>Python</span>
                        <span>SQL</span>
                        <span>JavaScript</span>
                        <span>C++</span>
                        <span>C</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Data Analytics & Visualization</h3>
                    <div className="tags">
                        <span>Alteryx</span>
                        <span>Power BI</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Version Control & Collaboration</h3>
                    <div className="tags">
                        <span>Git</span>
                        <span>GitHub</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Web Development</h3>
                    <div className="tags">
                        <span>React.js</span>
                        <span>Bootstrap</span>
                        <span>HTML</span>
                        <span>HTML5</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
