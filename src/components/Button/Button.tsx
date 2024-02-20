import React, {ReactNode} from 'react';
import styled from "styled-components";

interface Props {
   children: ReactNode;
   onClick?: any;
}

export const Button = (props: Props) => {
   const { children, onClick } = props;

   return <Container
       className="flex w-full lg:w-48"
       onClick={() => onClick && onClick()}
      >
      {children}
   </Container>;
}

const Container = styled.button`
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.75em;
    padding: 0.5em;
    border-radius: 0.75em;
    background-color: var(--navy-100);
    color: var(--white-100);
    font-family: var(--font-syncopate);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
