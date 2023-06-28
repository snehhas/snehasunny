import React from 'react';
import './Project.css';

const Project = ({ title, description, technologies, imageUrl, codeUrl, liveUrl }) => {
    return (
        <div className="project-container">
            <div className="project-image">
                {imageUrl && <img src={imageUrl} alt={title} />}
            </div>

            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>Technologies Used:</h4>
                <ul>
                    {technologies && technologies.map((tech, index) => <li key={index}>{tech}</li>)}
                </ul>
                <div className="project-links">
                    {codeUrl && <a href={codeUrl} target="_blank" rel="noopener noreferrer">View Code</a>}
                    {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer">View Live</a>}
                </div>
            </div>
        </div>
    );
};

export default Project;
