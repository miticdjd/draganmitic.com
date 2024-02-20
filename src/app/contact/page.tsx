'use client';
import styled from "styled-components";
import Image from "next/image";
import {motion} from 'framer-motion';
import {H1} from "@/components/Text/H1";
import {Paragraph} from "@/components/Text/Paragraph";
import {Button} from "@/components/Button";
import {Text} from "@/components/Input/Text";
import {Textarea} from "@/components/Input/Textarea";
import {useState} from "react";
import {H2} from "@/components/Text/H2";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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
            <div className="flex flex-col justify-start items-center w-full lg:w-3/6 p-8">
                <div className="flex flex-col gap-4">
                    <H1>Contact</H1>
                    <Paragraph>Have a question, suggestion, or just want to say hello? I'd love to hear from you! Feel free to reach out to me. I always like to meet new people and chat with them. Please contact me if I can help you in any way. I will respond to your email as soon as possible.</Paragraph>
                </div>
            </div>
            {!isSubmitted && (
                <div className="w-full lg:w-3/6 flex flex-col justify-start p-8 gap-4">
                    <Text
                        label="Name"
                        placeholder="Enter your name"
                    />
                    <Text
                        label="E-mail address"
                        placeholder="Enter your e-mail address"
                    />
                    <Textarea
                        label="Message"
                        placeholder="Enter your message"
                    />
                    <Button onClick={() => { setIsSubmitted(true) }}>
                        send
                    </Button>
                </div>
            )}
            {isSubmitted && (
                    <motion.div className="w-full lg:w-3/6 flex flex-col justify-start grow p-8 gap-4" initial="hidden" animate="visible"
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
                                }}
                        >
                        <H2>Thanks</H2>
                        <Paragraph>Thank you for taking the time to reach out to me. I genuinely appreciate your interest and value the opportunity to connect. I will do my best to reply to you as soon as possible.</Paragraph>
                        <div className="flex flex-col grow justify-center items-center">
                            <Image
                                src="/robot.jpg"
                                alt="Thank you"
                                loading="lazy"
                                width={210}
                                height={260}
                            />
                        </div>
                    </motion.div>
            )}
        </motion.div>
    );
}

const Photo = styled.div`
    position: relative;
`;