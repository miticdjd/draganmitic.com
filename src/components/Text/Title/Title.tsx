import React, {ReactNode} from 'react';
import styled, {css} from "styled-components";

interface Props {
   children: ReactNode;
   color?: string;
   uppercase?: boolean;
}

export const Title = (props: Props) => {
   const {
      children,
      color = '--brown-solid',
      uppercase = true
   } = props;

   return <Container
       color={color}
       uppercase={uppercase}
   >
      {children}
   </Container>;
}

const Container = styled.div<{color: string, uppercase: boolean}>`
   color: var(${({ color }) => color});
   text-align: center;
   font-family: var(--font-inter);
   font-size: 32px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;

   ${({ uppercase }) => uppercase && css`
      letter-spacing: 1.6px;
      text-transform: uppercase;
   `}
`;
