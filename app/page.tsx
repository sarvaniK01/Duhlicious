import React from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Navbar from "@/components/CoreComponents/Navbar";
import Hero from "../components/Homepage/Hero";
import AboutUs from "../components/Homepage/About";
import Categories from "../components/Homepage/Categories"
import Recipes from "../components/Homepage/Recipes";
import Newsletter from "../components/Homepage/Newsletter";
import Testimonials from "../components/Homepage/Testimonials";
import ContactUs from "../components/Homepage/ContactUs"

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <Categories />
      <Recipes />
      <Newsletter />
      <Testimonials />
      <ContactUs />

      <ToastContainer />
    </main>
  );
}
