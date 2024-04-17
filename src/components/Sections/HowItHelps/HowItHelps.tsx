'use client';
import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import Image from "next/image";
import {Title} from "@/components/Text/Title";
import {Paragraph} from "@/components/Text/Paragraph";
import {Button} from "@/components/Button";
import {Play} from "@/components/Icons/Play";

export const HowItHelps = () => {
    return (
        <Container className="flex flex-col justify-center items-center w-full px-8 py-16 gap-14">
            <Title color="--black">
                kako ti može pomoći marketing master planer?
            </Title>
            <Screens>
                <Item>
                    <Image
                        src="/howItHelps/1.svg"
                        alt="SMART ciljevi"
                        loading="lazy"
                        width={229}
                        height={307}
                    />
                    <Paragraph>
                        <strong>Postavi SMART ciljeve:</strong> Planiraj i prati svoje ciljeve na mesečnom i kvartalnom nivou kako bi se fokusirao na ostvarivanje uspeha.
                    </Paragraph>
                </Item>

                <Item>
                    <Image
                        src="/howItHelps/2.svg"
                        alt="Analiziraj svoje tržište"
                        loading="lazy"
                        width={229}
                        height={307}
                    />
                    <Paragraph>
                        <strong>Analiziraj svoje tržište:</strong> Duboko zaroni u svoju industriju kroz SWOT analizu i analizu konkurencije kako bi bolje razumeo svoje pozicioniranje i mogućnosti za rast.
                    </Paragraph>
                </Item>

                <Item>
                    <Image
                        src="/howItHelps/3.svg"
                        alt="Kreiraj brend koji se ističe"
                        loading="lazy"
                        width={229}
                        height={307}
                    />
                    <Paragraph>
                        <strong>Kreiraj brend koji se ističe:</strong> Definiši boje, fontove i obećanje brenda koje ćeš koristiti kako bi izgradio prepoznatljivu online prisutnost.
                    </Paragraph>
                </Item>

                <Item>
                    <Image
                        src="/howItHelps/4.svg"
                        alt="Planiraj svoj sadržaj na Instagramu, TikToku, Facebooku, LinkedInu i YouTube-u"
                        loading="lazy"
                        width={229}
                        height={307}
                    />
                    <Paragraph>
                        <strong>Planiraj svoj sadržaj na Instagramu, TikToku, Facebooku, LinkedInu i YouTube-u:</strong> Organizuj svoj sadržaj, istražuj ključne reči, prati svoje konkurente i optimizuj svoje strategije za postizanje ciljeva.
                    </Paragraph>
                </Item>

                <Item>
                    <Image
                        src="/howItHelps/5.svg"
                        alt="Prati svoj napredak"
                        loading="lazy"
                        width={229}
                        height={307}
                    />
                    <Paragraph>
                        <strong>Prati svoj napredak:</strong> Koristi statističke podatke i analize kako bi pratio svoj rast na društvenim mrežama i prilagodio svoje strategije za postizanje maksimalnih rezultata.
                    </Paragraph>
                </Item>

                <Item>
                    <Image
                        src="/howItHelps/6.svg"
                        alt="Upravljanje finansijama"
                        loading="lazy"
                        width={229}
                        height={307}
                    />
                    <Paragraph>
                        <strong>Upravljanje finansijama:</strong> Prati mesečne budžete, godišnje troškove, prihode i rashode kako bi imao jasan pregled svojih finansija i bolje planirao investicije.
                    </Paragraph>
                </Item>
            </Screens>
        </Container>
    );
}

const Container = styled.section`
    background-color: var(--brown-light);
    flex-direction: column;
    align-items: center;
    gap: 48px;
    align-self: stretch;
`;

const Screens = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    row-gap: 56px;
    align-self: stretch;
    flex-wrap: wrap;
`;

const Item = styled.div`
    display: flex;
    width: 450px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;