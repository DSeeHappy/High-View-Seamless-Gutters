import React from "react";
import Layout from "../../components/core/Layout";
import NavThree from "../../components/core/NavThree";
import PageHeader from "../../components/PageHeader";
import AboutOne from "../../components/AboutOne";
import Footer from "../../components/core/Footer";
import TeamTab from "../../components/TeamTab";
import TestimonialOne from "../../components/TestimonialOne";
import SamAboutCTA from "../../components/SamAboutCTA";
import SamContactAbout from './../../components/SamContactAbout';

const AboutPage = () => {
  return (
    <Layout pageTitle="Sam Avila || High View's Seamless Gutters || About">
      <NavThree />
      <PageHeader title="Sam Avila" section="About"/>
      <SamAboutCTA />
      <SamContactAbout />
      <TestimonialOne />
      <Footer />
    </Layout>
  );
};

export default AboutPage;
