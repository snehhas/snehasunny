import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-image">
                    {/* You can add an image of yourself here */}
                    <img src="path-to-your-image" alt="Your Name" />
                </div>
                <div className="about-text">
                    {/* Add some text about yourself here */}
                    <p>
                        Hi, I'm [Your Name]. I'm a software developer specializing in building web applications.
                        I have experience in working with technologies like React, Node.js, and Python.
                    </p>
                    <p>
                        I am passionate about coding, learning new technologies, and contributing to open source projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
