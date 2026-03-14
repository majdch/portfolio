import React from 'react';

export const DownloadIcon = ({ size = 18 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M12 3v10m0 0 4-4m-4 4-4-4M5 17v3h14v-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const LinkedInIcon = ({ size = 20 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M4 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
            fill="currentColor"
        />
        <path d="M3 10.5h2.5V21H3V10.5Z" fill="currentColor" />
        <path
            d="M9 10.5h2.4v1.4h.1c.5-.9 1.8-1.7 3.6-1.7 2.6 0 4.4 1.6 4.4 5V21H17v-5.1c0-2-.7-3.2-2.5-3.2-1.4 0-2.3.9-2.6 1.8-.1.3-.1.7-.1 1.1V21H9V10.5Z"
            fill="currentColor"
        />
    </svg>
);
