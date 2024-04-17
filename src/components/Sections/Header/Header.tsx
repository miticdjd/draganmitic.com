'use client';
import React from 'react';
import styled from 'styled-components';
import Image from "next/image";
import {H1} from "@/components/Text/H1";
import {Paragraph} from "@/components/Text/Paragraph";
import {Button} from "@/components/Button";
import {Instagram} from "@/components/Icons/Social/Instagram";

export const Header = () => {

   return (
       <Container className="flex flex-row justify-center items-center h-dvh w-full px-8">
           <DecorationTopLeft />
           <DecorationTopRight />
           <DecorationBottomLeft />
           <DecorationBottomRight />
           <div className="flex flex-col lg:w-3/6 z-10">
               <ImageHolder>
                   <Image
                       src="/planner/overview.svg"
                       alt="Marketing Planer"
                       loading="lazy"
                       fill={true}
                   />
               </ImageHolder>
           </div>
           <div className="flex flex-col lg:w-3/6 gap-12 z-10">
               <H1>Tvoj ključ ka produktivnosti je stigao!</H1>
               <Paragraph>
                   Da li te stresira marketing na društvenim mrežama?<br />
                   Da li žuriš da svakodnevno objaviš nešto, ne razmišljajući o angažmanu ili kvalitetu?
               </Paragraph>
               <Paragraph>
                   ONDA JE MARKETING MASTER PLANER ZA <strong>TEBE!</strong>
               </Paragraph>
               <CTA className="flex flex-row w-full gap-8">
                   <Button>
                       PREUZMI OVDE
                   </Button>
                   <Instagram width="49px" height="49px" fill="var(--brown-dark)" />
               </CTA>
           </div>
       </Container>
   );
}

const Container = styled.section`
    position: relative;
    background-color: var(--brown-light);
`;

const ImageHolder = styled.div`
    height: 600px;
    position: relative;
`;

const CTA = styled.div`
    border-top: 2px solid var(--brown-dark);
    padding: 32px 0;
`;

const DecorationTopLeft = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("/decorations/heart-top-left.svg");
    background-repeat: no-repeat;
    width: 430px;
    height: 200px;
`;

const DecorationTopRight = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-image: url("/decorations/heart-top-right.svg");
    background-repeat: no-repeat;
    width: 200px;
    height: 250px;
`;

const DecorationBottomLeft = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url("/decorations/heart-bottom-left.svg");
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
`;

const DecorationBottomRight = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url("/decorations/heart-and-avatar-bottom-right.png");
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
`;
