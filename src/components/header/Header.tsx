'use client';
import React from 'react';
import styled from 'styled-components';
import { Logo } from "@/components/logo";
import { MainMenu } from "@/components/menu";

export const Header = () => {

   return (
       <Container>
            <Logo />
           <MainMenu />
       </Container>
   );
}

const Container = styled.div`
    background-color: white;
    width: 100%;
    height: 100px;
    display: flex;
    padding: 20px 50px;
    justify-content: space-between;
    align-items: center;
`;
