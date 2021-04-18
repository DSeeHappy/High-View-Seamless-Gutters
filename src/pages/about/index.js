import React from 'react';
import Layout from "../../components/core/Layout";
import NavOne from "../../components/core/NavThree";
import PageHeader from "../../components/PageHeader";
import AboutOne from "../../components/AboutOne";
import Footer from "../../components/core/Footer";
import TeamOne from "../../components/TeamOne";
import VideoOne from "../../components/VideoOne";
import BrandsTwo from "../../components/BrandsTwo";
import TestimonialOne from "../../components/TestimonialOne";
import CallToActionOne from "../../components/CallToActionOne";

const AboutPage = () => {
    return (
        <Layout pageTitle="High View's Seamless Gutters | About">
            <NavOne />
            <PageHeader title="About" />
            <AboutOne />
            <TeamOne />
            <TestimonialOne />
            <CallToActionOne />
            <Footer />
        </Layout>
    );
};

export default AboutPage;
