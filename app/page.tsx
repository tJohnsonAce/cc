'use client';

import AboutMe from '@/components/AboutMe';
import Hero from '@/components/Hero'
import MyWork from '@/components/MyWork';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/Faq';
import React from 'react'

const page = () => {
  return (
    <>
    <Hero />
    <AboutMe />
    <MyWork />
    <Services />
    <Testimonials />
    <FAQ />
    </>
  )
}

export default page;