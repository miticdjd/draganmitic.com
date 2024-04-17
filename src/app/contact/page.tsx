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
import {useFormik} from "formik";
import * as Yup from 'yup';
import {Spinner} from "@/components/Spinner";
import { useReCaptcha } from "next-recaptcha-v3";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const { executeRecaptcha } = useReCaptcha();

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().required('Required'),
        }),
        onSubmit: async values => {
            const token = await executeRecaptcha("contact_form");

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...values, token})
            });

            if (response.status === 200) {
                setIsSubmitted(true);
            }
        },
    });

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
                <div className="w-full lg:w-3/6 flex flex-col justify-start p-8">
                    <form onSubmit={form.handleSubmit} className="flex flex-col gap-4">
                        <Text
                            field="name"
                            label="Name"
                            placeholder="Enter your name"
                            handleChange={form.handleChange}
                            handleBlur={form.handleBlur}
                            value={form.values.name}
                            error={form.errors.name}
                            touched={form.touched.name}
                        />
                        <Text
                            field="email"
                            label="E-mail address"
                            placeholder="Enter your e-mail address"
                            handleChange={form.handleChange}
                            handleBlur={form.handleBlur}
                            value={form.values.email}
                            error={form.errors.email}
                            touched={form.touched.email}
                        />
                        <Textarea
                            field="message"
                            label="Message"
                            placeholder="Enter your message"
                            handleChange={form.handleChange}
                            handleBlur={form.handleBlur}
                            value={form.values.message}
                            error={form.errors.message}
                            touched={form.touched.message}
                        />
                        <Button type="submit" disabled={form.isSubmitting}>
                            send
                            {form.isSubmitting && (
                                <Spinner />
                            )}
                        </Button>
                    </form>
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