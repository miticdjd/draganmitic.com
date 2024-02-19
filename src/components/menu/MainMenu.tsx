'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {Arrow} from "@/components/Icons/Arrow";
import {MobileMenu} from "@/components/menu/MobileMenu";

export const MainMenu = () => {

    const [ctaHover, setCtaHover] = useState<boolean>(false);

   return (
       <Container className="flex max-md:hidden">
           <Links>
               <Link  href="/" passHref>
                   <MenuLink>About</MenuLink>
               </Link>
               <Link
                   href="/"
                   passHref
                   onMouseEnter={() => setCtaHover(true)}
                   onMouseLeave={() => setCtaHover(false)}
               >
                   <CTA>Contact <Arrow fill={ctaHover ? 'white' : 'black'} /></CTA>
               </Link>
           </Links>
       </Container>
   );
}

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Links = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
    color: var(--dark-100);
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: var(--font-syncopate);
`;

const MenuLink = styled.span`
    position: relative;

    &:hover {
        &::before {
            opacity: 1;
            transform: translate3d(0, 5px, 0);
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
`;

const CTA = styled.button`
    border-radius: 12px;
    border: 1px solid var(--dark-100);
    padding: 18px 32px 14px 32px;
    display: flex;
    gap: 12px;
    line-height: 28px;
    
    svg {
        margin-top: -5px;
    }
    
    &:hover {
        background-color: var(--navy-100);
        color: var(--white-100);
        transition: background-color 300ms ease-in-out;
    }
`;
