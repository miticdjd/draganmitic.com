'use client';
import styled from "styled-components";
import Image from "next/image";
import {ArrowRound} from "@/components/Icons/ArrowRound";
import {motion} from 'framer-motion';

export default function Home() {
    return (
        <motion.div className="flex grow flex-col lg:flex-row gap-3 lg:gap-0 p-8" initial="hidden" animate="visible"
                    variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .1
                            }
                        }
                    }}>
            <div className="flex flex-col justify-center items-center w-full lg:w-3/6 p-8">
                <Message className="flex flex-col gap-4">
                    <h1> Welcome to Dragan Mitić’s Digital Hub!</h1>
                    <p>Welcome to my corner of the web! I'm Dragan Mitić, a seasoned software engineer with over a
                        decade
                        of
                        hands-on experience. Currently calling the historic city of Niš, Serbia, my home.</p>
                    <p>As the CEO of Hefes Technology Group, I lead a passionate team dedicated to empowering
                        digital
                        landscapes through cutting-edge software solutions. Our journey is fueled by a relentless
                        pursuit
                        of
                        excellence, and we take pride in crafting digital experiences that transcend
                        expectations.</p>
                    <p>I invite you to check out my latest projects and feel free to contact me if you require any
                        assistance.
                        I am confident I can provide you with the help you need.</p>
                    <div className="flex justify-center">
                        <CTA className="flex w-full lg:w-48">
                            send a message <ArrowRound/>
                        </CTA>
                    </div>
                </Message>
            </div>
            <Photo className="w-full lg:w-3/6 flex justify-center lg:justify-end items-center grow">
                <Image
                    src="/dragan.webp"
                    alt="Dragan Mitić"
                    loading="lazy"
                    width={600}
                    height={600}
                />
            </Photo>
        </motion.div>
    );
}

const Message = styled.div`
    font-family: var(--font-poppins);
    font-style: normal;
    font-weight: 300;
    line-height: normal;
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