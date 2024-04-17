import React, {ReactNode} from 'react';
import styled from "styled-components";

interface Props {
   children: ReactNode;
   align?: 'left'|'center'|'right';
}

export const Paragraph = (props: Props) => {
   const { children, align = 'left' } = props;

   return <StyledParagraph className={`text-${align}`} >{children}</StyledParagraph>;
}

const StyledParagraph = styled.p`
   color: var(--black);
   font-family: var(--font-inter);
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
`;
