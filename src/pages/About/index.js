import React, { useState } from 'react';
import './index.scss';
import DownloadCV from '../../components/DownloadCV';
import Title from '../common/Title';
import { LinkedInIcon } from '../../components/Icons';

const About = () => {
    const [imgError, setImgError] = useState(false);
    const profilePhotoUrl = 'https://media.licdn.com/dms/image/v2/C5603AQGNRlPyLLw__g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1607113513974?e=1775088000&v=beta&t=J6_4dLao-jslNnyZ3nDXf9FhLPMANpMjN8xJfBuaqJ4';

    return (
        <div className="page" id="about">
            <div className="about-container">
                <div className="about-sidebar">
                    <div className="avatar">
                        {!imgError ? (
                            <img
                                className="avatar-image"
                                src={profilePhotoUrl}
                                alt="Majd Chagroufi"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <div className="avatar-placeholder">MC</div>
                        )}
                    </div>
                    <h1 className="name">MAJD CHAGROUFI</h1>
                    <h2 className="title-text">Senior SAP Basis & Authorization Consultant</h2>
                    
                    <div className="info-list">
                        <div className="info-item">
                            <span className="icon">📍</span> Casablanca, Morocco
                        </div>
                        <div className="info-item">
                            <span className="icon">🇬🇧</span> English · <span className="icon">🇫🇷</span> French · <span className="icon">🇲🇦</span> Arabic
                        </div>
                    </div>

                    <a href="https://linkedin.com/in/majdchagroufi" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
                        <LinkedInIcon size={18} /> LinkedIn
                    </a>

                    <div className="sidebar-download">
                        <DownloadCV />
                    </div>
                </div>

                <div className="about-content">
                    <Title>About Me</Title>
                    <p className="summary-text">
                        Senior SAP Basis & Authorization Consultant with 5+ years across 10+ enterprise engagements in Morocco, Africa, and Europe (France). Expert in S/4HANA 2023/2025 On-Premise installation (SWPM/HDBLCM), SAP HANA administration, SUM/DMO upgrades, and cloud-native identity governance via SAP IAS (SSO/IdP), SAP IPS (automated provisioning), and SAP IAG (BTP-native SoD enforcement — cloud successor to GRC AC), integrated directly with S/4HANA On-Premise. Skilled in SAML 2.0, OAuth 2.0, SSL/TLS, RFC/IDOC, and infrastructure automation (Ansible, Terraform, Azure, AWS). Engineering Degree BAC+5 / EQF Level 7. Bilingual EN/FR, Arabic native.
                    </p>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Client Engagements</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">3</div>
                            <div className="stat-label">SAP Certifications</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">3</div>
                            <div className="stat-label">Regions (Morocco, Africa, Europe)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
