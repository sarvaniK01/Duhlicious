import React from "react";
import "../app/globals.css"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Contact from "../components/ContactPage/Contact";

const contact = () => {
    return (
        <>
            <Contact />
            <ToastContainer />
        </>
    )
}

export default contact;