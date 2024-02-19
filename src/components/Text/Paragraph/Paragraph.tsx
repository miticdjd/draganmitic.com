import React, {ReactNode} from 'react';
import styled from "styled-components";

interface Props {
   children: ReactNode;
}

export const Paragraph = (props: Props) => {
   const { children } = props;

   return <Text>{children}</Text>;
}

const Text = styled.p`
   font-family: var(--font-poppins);
   font-style: normal;
   font-weight: 300;
   line-height: normal;
`;
