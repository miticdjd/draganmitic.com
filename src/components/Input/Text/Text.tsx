'use client';
import React, {ChangeEvent} from 'react';
import styled, {css} from 'styled-components';

interface TextProps {
    field: string;
    label: string;
    placeholder: string;
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.ChangeEvent<any>) => void;
    value: string;
    error: string | undefined;
    touched: boolean | undefined;
}

export const Text = (props: TextProps) => {
    const { field, label, placeholder, handleChange, handleBlur, value, error, touched } = props;

    const isValid = !!(touched && !!error);

   return (
       <Container>
           <Label>{label}</Label>
           <Input
               id={field}
               name={field}
               placeholder={placeholder}
               onChange={handleChange}
               onBlur={handleBlur}
               value={value}
               $isValid={!isValid}
           ></Input>
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

const Input = styled.input<{ $isValid: boolean }>`
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
    
    &:focus-visible {
        outline-color: var(--navy-100);
    }
    
    ${({ $isValid }) => 
        !$isValid && css`
            border: 1px solid var(--error-0);
        `
    }
`;