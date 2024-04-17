'use client';
import React, {ChangeEvent} from 'react';
import styled, {css} from 'styled-components';

interface TextProps {
    field: string;
    placeholder: string;
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.ChangeEvent<any>) => void;
    value: string;
    error: string | undefined;
    touched: boolean | undefined;
}

export const Text = (props: TextProps) => {
    const { field, placeholder, handleChange, handleBlur, value, error, touched } = props;

    const isValid = !!(touched && !!error);

   return (
       <Container>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.75em;
`;

const Input = styled.input<{ $isValid: boolean }>`
    border-radius: 4px;
    width: 100%;
    background-color: var(--white);
    padding: 0 8px;
    font-family: var(--font-ubuntu);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 48px;
    min-width: 200px;
    min-height: 48px;
    border: 1px solid var(--brown-light);
    text-align: center;
    
    &::placeholder {
        font-family: var(--font-ubuntu);
        font-size: 14px;
        font-style: normal;
        color: var(--brown-solid);
        text-transform: uppercase;
    }
    
    
    &:focus-visible {
        outline-color: var(--brown-dark);
    }
    
    ${({ $isValid }) => 
        !$isValid && css`
            border: 1px solid var(--error);
        `
    }
`;