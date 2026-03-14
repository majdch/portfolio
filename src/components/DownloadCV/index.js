import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import { DownloadIcon } from '../Icons';

const DownloadCV = ({ inMenu = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const containerClass = `download-cv ${inMenu ? 'in-menu' : ''}`;

    return (
        <div className={containerClass} ref={dropdownRef}>
            <button className="download-btn" onClick={toggleDropdown}>
                {inMenu ? (
                    <>
                        <DownloadIcon size={18} />
                        Download CV
                    </>
                ) : (
                    <>
                        <DownloadIcon size={18} />
                        Download CV
                        <span className="download-cv__chevron">{isOpen ? '▴' : '▾'}</span>
                    </>
                )}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <a href={`${process.env.PUBLIC_URL}/Majd_Chagroufi_CV.pdf`} download="Majd_Chagroufi_CV.pdf" onClick={() => setIsOpen(false)}>
                        📄 Download PDF
                    </a>
                    <a href={`${process.env.PUBLIC_URL}/Majd_Chagroufi_CV.docx`} download="Majd_Chagroufi_CV.docx" onClick={() => setIsOpen(false)}>
                        📝 Download Word
                    </a>
                </div>
            )}
        </div>
    );
};

export default DownloadCV;
