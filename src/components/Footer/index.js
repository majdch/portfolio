import React from 'react';
import './index.scss';
import { LinkedInIcon } from '../Icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    © {new Date().getFullYear()} Majd Chagroufi · Senior SAP Basis Consultant
                </div>
                <div className="footer-right">
                    <a href="https://linkedin.com/in/majdchagroufi" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
