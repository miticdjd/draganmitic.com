import React, {ReactNode} from 'react';

interface Props {
   children: ReactNode;
}

export const H1 = (props: Props) => {
   const { children } = props;

   return <h1>{children}</h1>;
}
