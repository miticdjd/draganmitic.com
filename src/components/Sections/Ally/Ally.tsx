'use client';
import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import Image from "next/image";
import {Title} from "@/components/Text/Title";
import {Paragraph} from "@/components/Text/Paragraph";
import {Button} from "@/components/Button";
import {Play} from "@/components/Icons/Play";

export const Ally = () => {
   return (
       <Container className="flex flex-col justify-center items-center w-full px-8 py-16 gap-14">
            <TitleContainer>
                <Title color="--black" uppercase={false}>
                    Tvoj najbolji saveznik za uspešan marketing.
                </Title>
                <Paragraph align="center">
                    Naš Planer nije samo alat za vođenje marketinških aktivnosti. <br />
                    To je moćan saveznik koji ti pomaže da napraviš značajne promene u svom marketinškom pristupu.
                </Paragraph>
            </TitleContainer>
            <Points>
                <Item>
                    <Image
                        src="/ally/1.svg"
                        alt="Povećaj fokus"
                        loading="lazy"
                        width={150}
                        height={150}
                    />
                    <ItemTitle>
                        Povećaj fokus
                    </ItemTitle>
                    <Paragraph align="center">
                        Planiranje marketinških strategija pomaže ti da razjasniš zamršene ideje i koncentrišeš se na ključne ciljeve.
                    </Paragraph>
                </Item>

                <Item>
                    <Image
                        src="/ally/2.svg"
                        alt="Oseti motivaciju"
                        loading="lazy"
                        width={150}
                        height={150}
                    />
                    <ItemTitle>
                        Oseti motivaciju
                    </ItemTitle>
                    <Paragraph align="center">
                        Postavljanjem prioriteta i planiranjem marketinških aktivnosti, osećaćeš se sigurnije i motivisanije u svojim marketinškim naporima.
                    </Paragraph>
                </Item>

                <Item>
                    <Image
                        src="/ally/3.svg"
                        alt="Povećaj produktivnost"
                        loading="lazy"
                        width={150}
                        height={150}
                    />
                    <ItemTitle>
                        Povećaj produktivnost
                    </ItemTitle>
                    <Paragraph align="center">
                        Naučno je dokazano da si 52% više sklon ostvarivanju svojih marketinških ciljeva kada ih jasno definišeš i zapišeš.
                    </Paragraph>
                </Item>

                <Item>
                    <Image
                        src="/ally/4.svg"
                        alt="Manje stresa, više uspeha"
                        loading="lazy"
                        width={150}
                        height={150}
                    />
                    <ItemTitle>
                        Manje stresa, više uspeha
                    </ItemTitle>
                    <Paragraph align="center">
                        Zapisivanje svojih marketinških strategija i ideja smanjuje stres i anksioznost, oslobađajući tvoj um za kreativno razmišljanje i efikasno delovanje.
                    </Paragraph>
                </Item>
            </Points>
       </Container>
   );
}

const Container = styled.section`
    background-color: var(--white);
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

const Points = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    row-gap: 120px;
    align-self: stretch;
    flex-wrap: wrap;
`;

const Item = styled.div`
    display: flex;
    width: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

const ItemTitle = styled.div`
    color: var(--black);
    text-align: center;
    font-family: var(--font-inter);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.7px;
    text-transform: uppercase;
`;