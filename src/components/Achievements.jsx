import React from 'react';

const Achievements = () => {
    return (
        <section id="achievements" className="section">
            <h2 className="section-title fade-in">Achievements</h2>
            <div className="achievements-list fade-in-up">
                <div className="achievement-item">
                    <span>🏆 <strong>Founder, NSCC KIET (now <a href="https://cpbyte.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>CPBYTE</a>):</strong> Established the college technical club NSCC KIET (now <a href="https://cpbyte.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>CPBYTE</a>) in partnership with Newton School, fostering coding and tech initiatives on campus.</span>
                </div>
                <div className="achievement-item">
                    <span>🏆 <strong>DSA Trainer:</strong> Trained 70+ pre-final year students in Data Structures Algorithms, contributing to improved coding proficiency and placement readiness.</span>
                </div>
                <div className="achievement-item">
                    <span>🏆 <strong>Speaker/Instructor:</strong> Conducted a 2-day on-ground workshop on Git/GitHub, guiding participants through hands-on exercises and real-world use cases.</span>
                </div>
                <div className="achievement-item">
                    <span>🏆 <strong>Runner-up, KICCS-D-HACK 23.5:</strong> Secured 2nd place in a highly competitive coding competition organized at the college.</span>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
