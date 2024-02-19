import React from 'react';
import styled from "styled-components";

export interface LogoProps {
    width?: string;
    height?: string;
    fill?: string;
}

export const Linkedin = ({ width = '25px', height = '26px', fill = 'black' }: LogoProps) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 26" fill={fill}>
            <g clipPath="url(#clip0_102_194)">
                <path
                    d="M6.45898 22.375H1.92383V7.77051H6.45898V22.375ZM4.18896 5.77832C2.73877 5.77832 1.5625 4.57715 1.5625 3.12695C1.5625 2.43037 1.83922 1.76232 2.33177 1.26976C2.82433 0.777204 3.49238 0.500488 4.18896 0.500488C4.88555 0.500488 5.5536 0.777204 6.04616 1.26976C6.53871 1.76232 6.81543 2.43037 6.81543 3.12695C6.81543 4.57715 5.63867 5.77832 4.18896 5.77832ZM23.4326 22.375H18.9072V15.2656C18.9072 13.5713 18.873 11.3984 16.5493 11.3984C14.1914 11.3984 13.8301 13.2393 13.8301 15.1436V22.375H9.29981V7.77051H13.6494V9.7627H13.7129C14.3184 8.61523 15.7974 7.4043 18.0039 7.4043C22.5938 7.4043 23.4375 10.4268 23.4375 14.3525V22.375H23.4326Z" />
            </g>
            <defs>
                <clipPath id="clip0_102_194">
                    <rect width="25" height="25" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </Svg>
    );
};

const Svg = styled.svg`
    display: inline-block;
`;
