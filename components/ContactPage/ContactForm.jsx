"use client";
import React, { useRef } from 'react';

// libraries
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Heading from "../CoreComponents/Heading";

const ContactForm = () => {
    const form = useRef();

    const initialValues = {
        uName: "",
        uEmail: "",
        uMessage: ""
    }

    const validationSchema = Yup.object().shape({
        uName: Yup.string()
            .min(3, 'Too Short')
            .max(70, 'Too Long')
            .required('Required'),
        uEmail: Yup.string()
            .email('Invalid email')
            .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email")
            .required('Required'),
        uMessage: Yup.string()
            .required('Required'),
    });

    const onSubmit = (values, actions) => {
        emailjs
        .sendForm('service_dve2wtn', 'template_ifa07vi', form.current, {
            publicKey: 't6k50RZti9gU6EtFm',
        })
        .then(
            () => {
                    toast.success('Form successfully submitted!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    actions.resetForm()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Error occured in form submission', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                },
            );
    }


    return (
        <section className='bg-white'>
            <div className='container mx-auto py-20 px-6 lg:px-28'>
                <div className='my-20 py-16 px-8 lg:px-20 bg-aboutBg bg-no-repeat bg-fill mx-auto rounded-2xl'>
                    <Heading
                        color="text-white"
                        text="Contact Form"
                    />
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form ref={form}>
                                <div className='flex flex-col gap-y-12 xl:w-[80%] 2xl:w-[70%] 3xl:w-[60%] mx-auto pt-20'>
                                    <div className='flex flex-col'>
                                        <Field
                                            name="uName"
                                            placeholder="Name"
                                            className={`py-6 px-7 mb-2 rounded-2xl bg-white font-lora text-[#BB371A] focus:outline-none ${errors.uName ? "focus:border-red focus:ring-4 focus:ring-red text-red" : "border-orange focus:ring-4 focus:ring-orange"}`}
                                        />
                                        {errors.uName && touched.uName ? (
                                            <div className='text-red font-lora font-bold text-sm mt-2'>{errors.uName}</div>
                                        ) : null}
                                    </div>

                                    <div className='flex flex-col'>
                                        <Field
                                            name="uEmail"
                                            type="email"
                                            placeholder="Email"
                                            className={`py-6 px-7 mb-2 rounded-2xl bg-white font-lora text-[#BB371A] focus:outline-none ${errors.uEmail ? "focus:border-red focus:ring-4 focus:ring-red text-red" : "border-orange focus:ring-4 focus:ring-orange"}`}
                                        />
                                        {errors.uEmail && touched.uEmail ? (
                                            <div className='text-red font-lora font-bold text-sm mt-2'>{errors.uEmail}</div>
                                        ) : null}
                                    </div>

                                    <div className='flex flex-col'>
                                        <Field
                                            name="uMessage"
                                            as="textarea"
                                            rows="5"
                                            placeholder="Foodie Message"
                                            className={`py-6 px-7 mb-2 rounded-2xl bg-white font-lora text-[#BB371A] focus:outline-none ${errors.uMessage ? "focus:border-red focus:ring-4 focus:ring-red text-red" : "border-orange focus:ring-4 focus:ring-orange"}`}
                                        />
                                        {errors.uMessage && touched.uMessage ? (
                                            <div className='text-red font-lora font-bold text-sm mt-2'>{errors.uMessage}</div>
                                        ) : null}
                                    </div>
                                    
                                    <div id='dButton' className='mx-auto'>
                                        <button type="submit" className="insideButton w-[220px] h-[73px] bg-orange text-white font-lora font-medium text-2xl rounded-xl">
                                            Send Message
                                        </button>
                                        <div className="duhliciousButtonIcon"></div>
                                    </div>
                                    
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            
        </section>
    )
}

export default ContactForm