import React from 'react';

export interface LogoProps {
    width?: string;
    height?: string;
    fill?: string;
}

export const Arrow = ({ width = '42px', height = '30px', fill = 'black' }: LogoProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 42 30"
            fill="none"
        >
            <g clipPath="url(#clip0_6_51)">
                <path d="M9.76936 23.9512L33.4241 7.98425" stroke={fill} strokeWidth="1" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M9.76915 7.98425L33.4239 7.98425L33.4239 23.9512" stroke={fill} strokeWidth="1"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_6_51">
                    <rect width="41.5771" height="30" transform="translate(41.6685 30) rotate(-180)"/>
                </clipPath>
            </defs>
        </svg>
    );
};
