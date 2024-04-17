import React, {ReactNode} from 'react';
import styled from "styled-components";

interface Props {
   children: ReactNode;
   onClick?: () => void;
   type?: "button" | "submit" | "reset";
   disabled?: boolean;
}

export const Button = (props: Props) => {
   const {
       children,
       onClick,
       type = 'button',
       disabled = false
   } = props;

   return <Container
       className="flex w-full lg:w-64"
       onClick={() => onClick && onClick()}
       type={type}
       disabled={disabled}
      >
      {children}
   </Container>;
}

const Container = styled.button`
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 4px;
    background-color: var(--brown-dark);
    color: var(--white);
    font-family: var(--font-ubuntu);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
