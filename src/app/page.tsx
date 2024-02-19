'use client';
import styled from "styled-components";
import Image from "next/image";
import {ArrowRound} from "@/components/Icons/ArrowRound";

export default function Home() {
  return (
    <div className="flex grow flex-col lg:flex-row gap-3 lg:gap-0 p-8">
      <Welcome className="w-full lg:w-3/6">
        <Message>
            <H1> Welcome to Dragan Mitić’s Digital Hub!</H1>
            <p>Welcome to my corner of the web! I'm Dragan Mitić, a seasoned software engineer with over a decade of hands-on experience. Currently calling the historic city of Niš, Serbia, my home.</p>
            <p>As the CEO of Hefes Technology Group, I lead a passionate team dedicated to empowering digital landscapes through cutting-edge software solutions. Our journey is fueled by a relentless pursuit of excellence, and we take pride in crafting digital experiences that transcend expectations.</p>
            <p>I invite you to check out my latest projects and feel free to contact me if you require any assistance. I am confident I can provide you with the help you need.</p>
            <div className="flex justify-center">
                <CTA className="flex w-full lg:w-48">
                    send a message <ArrowRound />
                </CTA>
            </div>
        </Message>
      </Welcome>
        <Photo className="w-full lg:w-3/6 flex justify-center lg:justify-end items-center grow">
            <Image
                src="/dragan.webp"
                alt="Dragan Mitić"
                loading="lazy"
                width={600}
                height={600}
            />
        </Photo>
    </div>
  );
}

const Welcome = styled.div`
    display: flex;
    padding: 10px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Message = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: var(--font-poppins);
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

const H1 = styled.h1`
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: var(--font-ibm-plex-mono);
`;

const Photo = styled.div`
    position: relative;
`;

const CTA = styled.button`
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.75em;
    padding: 0.5em;
    border-radius: 0.75em;
    background-color: var(--navy-100);
    color: var(--white-100);
    font-family: var(--font-syncopate);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;