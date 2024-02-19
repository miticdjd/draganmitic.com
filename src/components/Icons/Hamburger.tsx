import React from 'react';

export interface LogoProps {
    width?: string;
    height?: string;
    fill?: string;
}

export const Hamburger = ({ width = '37px', height = '36px', fill = 'var(--navy-100)' }: LogoProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 37 36"
            fill={fill}
        >
            <path d="M4.56848 6H31.5685V9H4.56848V6ZM13.5685 16.5H31.5685V19.5H13.5685V16.5ZM4.56848 27H31.5685V30H4.56848V27Z" />
        </svg>
    );
};
