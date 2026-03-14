import React, { useState } from 'react';
import './index.scss';

const ResumeItem = ({date, title, company, location, logo, projects = [], classNames = ''}) => {
    const [imgError, setImgError] = useState(false);
    const [expandedProjects, setExpandedProjects] = useState({});

    const getInitials = (name) => {
        if (!name) return 'C';
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    const toggleProject = (index) => {
        setExpandedProjects(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className={`resume-item ${classNames}`}>
            <div className="resume-item__dot"></div>
            
            <div className="resume-item__header">
                <div className="resume-item__logo-container">
                    {(!logo || imgError) ? (
                        <div className="resume-item__fallback-logo">
                            {getInitials(company)}
                        </div>
                    ) : (
                        <img 
                            src={logo} 
                            alt={company} 
                            onError={() => setImgError(true)} 
                        />
                    )}
                </div>
                
                <div className="resume-item__info">
                    <h3 className="resume-item__title">{title}</h3>
                    <div className="resume-item__meta">
                        <span className="resume-item__company">{company}</span>
                        <span className="resume-item__separator">·</span>
                        <span className="resume-item__date">{date}</span>
                    </div>
                    {location && <div className="resume-item__location">{location}</div>}
                </div>
            </div>

            {projects && projects.length > 0 && (
                <div className="resume-item__projects">
                    {projects.map((project, index) => (
                        <div key={index} className={`project-accordion ${expandedProjects[index] ? 'expanded' : ''}`}>
                            <div 
                                className="project-header" 
                                onClick={() => toggleProject(index)}
                            >
                                <span className="project-chevron">{expandedProjects[index] ? '▴' : '▾'}</span>
                                <h4>{project.title}</h4>
                            </div>
                            
                            {expandedProjects[index] && (
                                <div className="project-content">
                                    {project.points && project.points.length > 0 && (
                                        <ul>
                                            {project.points.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {project.tools && (
                                        <div className="project-tools">
                                            Tools: {project.tools}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResumeItem;
