import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <h2 className="section-title fade-in">Experience</h2>
            <div className="timeline fade-in-up">
                <div className="timeline-item">
                    <div className="timeline-date">Oct 2024 - Present</div>
                    <div className="timeline-content">
                        <h3>Advanced App Engineering Associate</h3>
                        <h4>Accenture | Client: Cigna Healthcare</h4>
                        <ul className="experience-list">
                            <li>Gained hands-on experience in designing and executing ETL workflows for reliable data extraction and transformation.</li>
                            <li>Worked on data ingestion using S3 connectivity, complex data transformations, and SCD Type 2 for historical tracking.</li>
                            <li>Built interactive dashboards and automated workflows to deliver clear and actionable business insights.</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-date">Jul 2024 - Sep 2024</div>
                    <div className="timeline-content">
                        <h3>DSA Trainer | Department of Computer Science</h3>
                        <h4>Kiet Group Of Institutions, Ghaziabad, IN</h4>
                        <ul className="experience-list">
                            <li>Conducted a 8-week DSA training for prefinal year undergraduates, covering all essential concepts for placements.</li>
                            <li>Developed and delivered a detailed curriculum, ensuring alignment with academic and industry standards.</li>
                            <li>Collaborated with faculty and received commendation from the Head of Department for teaching effectiveness.</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-date">Jul 2023 - Aug 2023</div>
                    <div className="timeline-content">
                        <h3>ReactJs Developer | TechBRJ</h3>
                        <h4>Remote</h4>
                        <ul className="experience-list">
                            <li>Developed a real-time Feedback Form using React JS within a tight 2-week timeframe during my internship.</li>
                            <li>Created a user-friendly interface that enabled users to provide 1 on 1 feedback on their experiences, enhancing the user engagement for our partner company by approx 25%.</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-date">Nov 2022 - Dec 2023</div>
                    <div className="timeline-content">
                        <h3>Vice President & DSA Lead, NSCC KIET (now <a href="https://cpbyte.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>CPBYTE</a>)</h3>
                        <h4>Technical Club, Kiet Group Of Institutions, Ghaziabad, IN</h4>
                        <ul className="experience-list">
                            <li>Orchestrated 3+ vigorous technical events, galvanizing engagement and fostering a culture of innovation.</li>
                            <li>Mentored and guided a cohort of 100+ students, elevating their skills and driving impactful learning journeys.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
