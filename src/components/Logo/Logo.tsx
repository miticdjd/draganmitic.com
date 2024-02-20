import React from 'react';
import Link from "next/link";

export interface LogoProps {
    width?: string;
    height?: string;
    fill?: string;
}

export const Logo = ({ width = '34.52px', height = '60px', fill = 'black' }: LogoProps) => {
    return (
        <Link href="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                fill={fill}
                viewBox="0 0 116 200"
            >
                <path d="M0 200V0H51.7808C64.7489 0 75.8904 2.46575 85.2055 7.39726C94.7032 12.3288 102.009 19.2694 107.123 28.2192C112.42 37.1689 115.068 47.7626 115.068 60V139.726C115.068 151.963 112.42 162.648 107.123 171.781C102.009 180.731 94.7032 187.671 85.2055 192.603C75.8904 197.534 64.7489 200 51.7808 200H0ZM24.6575 178.082H51.7808C63.8356 178.082 73.242 174.703 80 167.945C86.9406 161.187 90.411 151.781 90.411 139.726V60C90.411 48.1278 86.9406 38.8128 80 32.0548C73.242 25.2968 63.8356 21.9178 51.7808 21.9178H24.6575V178.082Z" />
            </svg>
        </Link>
    );
};
