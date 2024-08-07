"use client"

import { useState } from 'react';

// libraries
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Heading from "../CoreComponents/Heading";
import OrangeDivider from "../CoreComponents/OrangeDivider";

// images
import rightArrow from "../../public/icons/newsletterRightArrow.svg"
import Image from 'next/image';


const Newsletter = () => {
    const initialValues = {
        email: "",
    }

    const [submit, setSubmit] = useState(false)

    const validationSchema = Yup.object(
        {
            email: Yup.string().email('Invalid Email').required('Email is required')
        }
    )

    const handleSubmit = (e) => {
        toast.success("Successfully submitted your email!", {
            position: "top-center"
        });
        setSubmit(true);
        
        e.email = '';
    }

    return (
        <section>
            <div className=''>
                <div className="lg:hidden bg-newsletterBg md:bg-newsletterBg2 md:w-[80%] md:rounded-2xl md:my-10 bg-no-repeat container mx-auto py-28 px-6">
                    <div className="flex flex-col justify-center content-center h-full mx-auto">
                        <Heading text="Let's keep in touch" color="text-white" />
                        <p className="text-center pt-14 font-lora text-xl text-white mx-auto">
                            Get fresh recipes and new tips when you sign up for our emails. *Spam free*
                        </p>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className='mx-2 mt-10 flex flex-row justify-center content-center relative md:w-[70%] md:mx-auto'>
                                    <div className='w-full'>
                                        <Field type="email" name="email" className="w-full py-2.5 px-5 font-lora text-xl mt-[1px] rounded-2xl focus:outline-none" placeholder='Email' />
                                        <ErrorMessage name="email" component="div" className='text-red font-lora' />
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className='bg-orange hover:scale-105 rounded-2xl my-auto py-3 px-4 absolute -right-2 cursor-pointer'>
                                        <Image src={rightArrow} alt='right-arrow-icon' />
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                {/* Desktop */}
                <div className="hidden lg:block bg-white py-20">
                    <div className="lg:w-[80%] 2xl:w-[82%] 3xl:w-[70%] min-[2000px]:w-[50%] rounded-2xl bg-newsletterBg2 bg-no-repeat h-[582px] container mx-auto px-6 py-20 lg:py-28 lg:px-24">
                        <div className="w-[80%] flex flex-col justify-center content-center h-full mx-auto">
                            <Heading text="Let's keep in touch" color="text-white" />
                            <p className="text-center pt-5 font-lora text-xl text-white lg:w-[80%] xl:w-[60%] 2xl:w-[45%] mx-auto">
                                Get fresh recipes and new tips when you sign up for our emails. *Spam free*
                            </p>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form className='mx-auto mt-8 w-[80%] xl:w-[70%] 2xl:w-[60%] flex flex-row justify-center content-center relative'>
                                        <div className='w-full'>
                                            <Field type="email" name="email" className="w-full py-2 px-5 font-lora text-xl rounded-2xl mb-1 focus:outline-none" placeholder='Email' />
                                            <ErrorMessage name="email" component="div" className='text-red font-lora' />
                                        </div>

                                        <button type="submit" disabled={isSubmitting} className='bg-orange hover:scale-105 rounded-2xl my-auto py-2.5 px-4 absolute -right-5 cursor-pointer'>
                                            <Image src={rightArrow} alt='right-arrow-icon' />
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            
            <OrangeDivider oClass="hidden lg:block"/>
        </section>
        
    )
}

export default Newsletter