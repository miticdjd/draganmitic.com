'use client';
import {Header} from "@/components/Sections/Header";
import {Purpose} from "@/components/Sections/Purpose";
import {HowItHelps} from "@/components/Sections/HowItHelps";
import {Ally} from "@/components/Sections/Ally";
import {About} from "@/components/Sections/About";
import {CTA} from "@/components/Sections/CTA";
import {Newsletter} from "@/components/Sections/Newsletter";

export default function Home() {
    return (
            <>
                <Header />
                <Purpose />
                <HowItHelps />
                <Ally />
                <About />
                <CTA />
                <Newsletter />
            </>
    );
}