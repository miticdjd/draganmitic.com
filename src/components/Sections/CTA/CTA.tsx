'use client';
import React from 'react';
import styled from 'styled-components';
import {Title} from "@/components/Text/Title";
import Image from "next/image";

export const CTA = () => {
   return (
       <Container className="flex flex-col justify-center items-center w-full px-8 py-16 gap-3">
           <Title color="--brown-dark">
               POČNI SADA I OLAKŠAJ SEBI ŽIVOT!
           </Title>
           <Image
               src="/ctaSubtitle.svg"
               alt="Počni sada"
               loading="lazy"
               width={799}
               height={33}
               sizes="(max-width: 1920px) 799px, 799px"
           />
       </Container>
   );
}

const Container = styled.section`
    background-color: var(--white);
`;

const ImageHolder = styled.div`
    position: relative;
`;