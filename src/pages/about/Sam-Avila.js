import React from "react";
import Layout from "../../components/core/Layout";
import NavThree from "../../components/core/NavThree";
import PageHeader from "../../components/PageHeader";
import AboutOne from "../../components/AboutOne";
import Footer from "../../components/core/Footer";
import TeamTab from "../../components/TeamTab";
import TestimonialOne from "../../components/TestimonialOne";
import CallToActionOne from "../../components/SamAboutCTA";
import Contact from './../../components/SamContactAbout';

const AboutPage = () => {
  return (
    <Layout pageTitle="Sam Avila || High View's Seamless Gutters || About">
      <NavThree />
      <PageHeader title="Sam Avila" />
      <CallToActionOne />
      <Contact />
      <TestimonialOne />
      <Footer />
    </Layout>
  );
};

export default AboutPage;
