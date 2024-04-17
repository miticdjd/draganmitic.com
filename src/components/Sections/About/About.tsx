'use client';
import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import Image from "next/image";
import {Title} from "@/components/Text/Title";
import {Paragraph} from "@/components/Text/Paragraph";
import {Button} from "@/components/Button";
import {Play} from "@/components/Icons/Play";

export const About = () => {
   return (
       <Container className="flex flex-row justify-center items-center w-full px-32 gap-16">
        <AboutMe>
            <Title color="--brown-solid">
                UPOZNAJ OSOBU IZA MARKETING MASTER PLANERA!
            </Title>
            <Bio>
                <Paragraph>
                    Zdravo! Ja sam Anastasia Nikolaidou Mitić, strastvena zaljubljenica u marketing i edukaciju digitalnog marketinga.
                </Paragraph>
                <Paragraph>
                    Nakon završenog ekonomskog fakulteta, posvetila sam poslednjih 7 godina svog života marketingu, a protekle 3 godine se intenzivno bavim edukacijom digitalnog marketinga.
                </Paragraph>
                <Paragraph>
                    Moja priča počinje kao studentkinja ekonomije koja je otkrila strast prema marketingu još tokom fakulteta. Tokom godina, sticala sam iskustvo i znanje koje sada delim sa zajednicom kroz svoj rad i edukativne projekte.
                </Paragraph>
                <Paragraph>
                    Kao osnivač instagram profila Klika.digital i Marketing Master Planera, moj cilj je da pomognem malim biznisima da ostvare svoje ciljeve putem efikasnog i pristupačnog digitalnog marketinga.
                </Paragraph>
                <Paragraph>
                    Verujem da je ključ uspeha u kontinuiranom učenju i prilagođavanju, i zato se trudim da svoje znanje prenesem na što jednostavniji i praktičniji način.
                </Paragraph>
                <Paragraph>
                    Svojim planerom, želim da ti olakšam proces planiranja i praćenja marketing aktivnosti, pružajući ti alat koji će ti pomoći da organizuješ svoje ideje, postaviš ciljeve i ostvariš svoje marketinške snove.
                </Paragraph>
            </Bio>
        </AboutMe>
           <Photo>
               <AnastasiaImage
                   src="/anastasia.jpg"
                   alt="Anastasia Nikolaidou Mitić"
                   loading="lazy"
                   fill={true}
               />
           </Photo>
       </Container>
   );
}

const Container = styled.section`
    background-color: var(--brown-light);
    height: 800px;
`;

const AboutMe = styled.div`
    display: flex;
    padding: 32px 0;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    flex: 1 0 0;
`;

const Bio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

const Photo = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
    position: relative;
`;

const AnastasiaImage = styled(Image)`
    object-fit: cover;
`;