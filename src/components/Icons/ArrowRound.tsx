import React from 'react';

export interface LogoProps {
    width?: string;
    height?: string;
    fill?: string;
    background?: string;
}

export const ArrowRound = ({ width = '22px', height = '22px', fill = '#1F1F1F', background = '#F5F5FA' }: LogoProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="11" fill={background} />
            <path d="M6.91952 15.1772L14.3708 7.726" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.91953 7.72598L14.3708 7.72598L14.3708 15.1772" stroke={fill} strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    )
        ;
};
