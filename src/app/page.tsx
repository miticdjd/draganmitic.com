'use client';
import styled from "styled-components";
import Image from "next/image";
import {ArrowRound} from "@/components/Icons/ArrowRound";
import {motion} from 'framer-motion';
import {H1} from "@/components/Text/H1";
import {Paragraph} from "@/components/Text/Paragraph";
import {Button} from "@/components/Button";
import Link from "next/link";

export default function Home() {
    return (
        <motion.div className="flex grow flex-col lg:flex-row gap-3 lg:gap-0" initial="hidden" animate="visible"
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
                <div className="flex flex-col gap-4">
                    <H1>Welcome to Dragan Mitić’s Digital Hub!</H1>
                    <Paragraph>Welcome to my corner of the web! I'm Dragan Mitić, a seasoned software engineer with over a decade of hands-on experience. Currently calling the historic city of Niš, Serbia, my home.</Paragraph>
                    <Paragraph>As the CEO of Hefes Technology Group, I lead a passionate team dedicated to empowering digital landscapes through cutting-edge software solutions. Our journey is fueled by a relentless pursuit of  excellence, and we take pride in crafting digital experiences that transcend expectations.</Paragraph>
                    <Paragraph>I invite you to check out my latest projects and feel free to contact me if you require any assistance. I am confident I can provide you with the help you need.</Paragraph>
                    <div className="flex justify-center">
                        <Link href="/contact">
                            <Button>
                                send a message <ArrowRound/>
                            </Button>
                        </Link>
                    </div>
                </div>
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

const Photo = styled.div`
    position: relative;
`;