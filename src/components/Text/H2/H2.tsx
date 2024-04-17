import React, {ReactNode} from 'react';
import styled from "styled-components";

interface Props {
   children: ReactNode;
}

export const H2 = (props: Props) => {
   const { children } = props;

   return <StyledH2>{children}</StyledH2>;
}

const StyledH2 = styled.h1`
   color: var(--brown-solid);
   text-align: center;
   font-family: var(--font-inter);
   font-size: 32px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   letter-spacing: 1.6px;
   text-transform: uppercase;
`;
