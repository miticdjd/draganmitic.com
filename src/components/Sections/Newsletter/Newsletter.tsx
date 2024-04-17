'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import {Title} from "@/components/Text/Title";
import {Text} from "@/components/Input/Text";
import {useFormik} from "formik";
import * as Yup from 'yup';
import { useReCaptcha } from "next-recaptcha-v3";
import {Button} from "@/components/Button";
import {Spinner} from "@/components/Spinner";

export const Newsletter = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const { executeRecaptcha } = useReCaptcha();

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: async values => {
            const token = await executeRecaptcha("contact_form");

            const response = await fetch('/api/download', {
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
       <Container className="flex flex-col justify-center items-center w-full px-8 py-16 gap-8">
          <TitleContainer>
              <Title color="--brown-solid" uppercase={false}>
                  Prijavi se sada i preuzmi besplatan Marketing Master Planer koji će unaprediti tvoj biznis!
              </Title>
          </TitleContainer>
           <Form onSubmit={form.handleSubmit}>
               <Text
                   field="name"
                   placeholder="Ime"
                   handleChange={form.handleChange}
                   handleBlur={form.handleBlur}
                   value={form.values.name}
                   error={form.errors.name}
                   touched={form.touched.name}
               />
               <Text
                   field="email"
                   placeholder="E-mail"
                   handleChange={form.handleChange}
                   handleBlur={form.handleBlur}
                   value={form.values.email}
                   error={form.errors.email}
                   touched={form.touched.email}
               />
               <Button type="submit" disabled={form.isSubmitting}>
                   PREUZMI OVDE
                   {form.isSubmitting && (
                       <Spinner />
                   )}
               </Button>
           </Form>
       </Container>
   );
}

const Container = styled.section`
    background-color: var(--white);
    border-top: 0.5px solid #BEBEBE;
`;

const TitleContainer = styled.div`
    max-width: 579px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
`;