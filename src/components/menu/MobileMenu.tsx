'use client';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Hamburger} from "@/components/Icons/Hamburger";
import {Logo} from "@/components/logo";
import {Footer} from "@/components/footer";
import Link from "next/link";

export const MobileMenu = () => {

    const [activate, setActivated] = useState<boolean>(false);

   return (
       <Container className="flex md:hidden" onClick={() => setActivated(!activate)}>
            <Hamburger />

           {activate &&
               <Menu className="px-8">
                   <Header>
                       <Logo fill={'white'} />
                       <Hamburger fill={'white'} />
                   </Header>
                   <Actions>
                       <Link href="/">
                           <Action>About</Action>
                       </Link>
                       <Link href="/">
                           <Action>Contact</Action>
                       </Link>
                   </Actions>
                   <Footer dark={true} />
               </Menu>
           }
       </Container>
   );
}

const Container = styled.div`
    display: flex;
    
    &:hover {
        cursor: pointer;
    }
`;

const Menu  = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--navy-100);
    z-index: 99;
`;

const Header = styled.div`
    display: flex;
    padding: 20px 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100px;
`;

const Actions = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

const Action = styled.button`
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--white-100);
    font-family: var(--font-syncopate);
`;
