import React, {ReactNode} from 'react';
import styled from "styled-components";

interface Props {
   children: ReactNode;
}

export const H1 = (props: Props) => {
   const { children } = props;

   return <StyledH1>{children}</StyledH1>;
}

const StyledH1 = styled.h1`
   color: var(--black);
   font-family: var(--font-inter);
   font-size: 32px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
`;
