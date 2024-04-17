'use client';
import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import Image from "next/image";
import {Title} from "@/components/Text/Title";
import {Paragraph} from "@/components/Text/Paragraph";
import {Button} from "@/components/Button";
import {Play} from "@/components/Icons/Play";

export const Purpose = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            videoRef.current?.play();
        } else {
            setIsPlaying(false);
            videoRef.current?.pause();
        }
    };

    return (
        <Container className="flex flex-col justify-center items-center w-full px-8 py-16 gap-14">
            <Title>
                PLANER JE STVOREN SA NAMEROM DA POMOGNE MALIM BIZNISIMA POPUP TVOG DA POSTIGNU SVOJE CILJEVE NA DRUŠTVENIM MREŽAMA.
            </Title>
            <VideoContainer>
                <VideoHolder className='flex flex-col gap-4 px-10 justify-center items-center' onClick={togglePlay}>
                    {!isPlaying && (
                        <PlayButton>
                            <Play width="128px" height="128px" fill="#B48B78" />
                        </PlayButton>
                    )}
                    <Video ref={videoRef} autoPlay={false} loop muted playsInline>
                        <source src="/videos/planner-full.mov" type="video/mp4"/>
                    </Video>
                </VideoHolder>
                <HrContainer>
                    <Hr />
                </HrContainer>
            </VideoContainer>
        </Container>
    );
}

const Container = styled.section`
    background-color: var(--white);
`;

const VideoContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
`;

const VideoHolder = styled.div`
    width: 1048px;
    height: 800px;
    background-image: url("/ipad.svg");
    background-repeat: no-repeat;
    position: relative;
    cursor: pointer;
`;

const Video = styled.video`
    width: 100%;
    height: auto;
`;

const PlayButton = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const HrContainer = styled.div`
    display: flex;
    width: 100%;
    height: 54px;
    align-items: center;
`;

const Hr = styled.hr`
    border-top: 2px solid var(--brown-light);
    width: 100%;
    
    &:after {
        content: url( '/hearth.svg' );
        left: 50%;
        position: absolute;
        transform: translateY(-50%) translateX(-50%);
        padding: 20px;
        background: #fff;
    }
`;