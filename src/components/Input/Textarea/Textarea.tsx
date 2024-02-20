'use client';
import React from 'react';
import styled from 'styled-components';

interface TextProps {
    label: string;
    placeholder: string;
}

export const Textarea = (props: TextProps) => {
    const { label, placeholder } = props;

   return (
       <Container>
           <Label>{label}</Label>
           <Input placeholder={placeholder}></Input>
       </Container>
   );
}

const Container = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.75em;
`;

const Label = styled.label`
    font-family: var(--font-poppins);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: var(--dark-100);
`;

const Input = styled.textarea`
    border: 0;
    border-radius: 0.75em;
    width: 100%;
    background-color: var(--white-100);
    padding: 0.75em;
    font-family: var(--font-poppins);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    min-height: 300px;
    
    &:focus-visible {
        outline-color: var(--navy-100);
    }
`;