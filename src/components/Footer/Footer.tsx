'use client';
import React from 'react';
import styled, {css} from 'styled-components';
import Link from "next/link";
import {Heart} from "@/components/Icons/Heart";
import {GitHub} from "@/components/Icons/Social/GitHub";
import {Linkedin} from "@/components/Icons/Social/Linkedin";
import {Instagram} from "@/components/Icons/Social/Instagram";
import {Facebook} from "@/components/Icons/Social/Facebook";

interface FooterProps {
    dark: boolean;
}

export const Footer = (props: FooterProps) => {
    const { dark } = props;

   return (
       <Container dark={dark ? 1 : 0} className="flex flex-col md:flex-row gap-3 md:gap-0">
            <Copyright className="text-center md:text-left">
                Made with <Heart /> by <Link href="https://hefesgroup.com">HTG</Link>. All rights reserved Dragan Mitić.
            </Copyright>
           <div className="flex justify-center md:justify-end gap-4">
               <Link href="https://github.com"><GitHub fill={dark ? 'white' : 'black'} /></Link>
               <Link href="https://linkedin.com"><Linkedin fill={dark ? 'white' : 'black'} /></Link>
               <Link href="https://instagram.com"><Instagram fill={dark ? 'white' : 'black'} /></Link>
               <Link href="https://facebook.com"><Facebook fill={dark ? 'white' : 'black'} /></Link>
           </div>
       </Container>
   );
}

const Container = styled.div<{ dark: number }>`
    width: 100%;
    padding: 37px 32px;
    color: ${({ dark }) => dark ? 'var(--white-100)' : 'var(--dark-100)'}
`;

const Copyright = styled.div`
    width: 100%;
    
    a {
        position: relative;
        
        &:hover {
            &::before {
                opacity: 1;
                transform: translate3d(0, 3px, 0);
            }
        }

        &::before {
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            bottom: -1px;
            left: 0;
            background-color: var(--dark-100);
            opacity: 0;
            transition: opacity 300ms ease-in-out, transform 300ms;
        }
    }
`;
