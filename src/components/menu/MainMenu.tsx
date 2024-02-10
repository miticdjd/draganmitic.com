'use client';
import React from 'react';
import styled from 'styled-components';
import {Logo} from "@/components/logo";

export const MainMenu = () => {

   return (
       <Container>
            About | Contact
       </Container>
   );
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
`;
