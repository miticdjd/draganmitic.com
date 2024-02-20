import React, {ReactNode} from 'react';

interface Props {
   children: ReactNode;
}

export const H2 = (props: Props) => {
   const { children } = props;

   return <h2>{children}</h2>;
}
