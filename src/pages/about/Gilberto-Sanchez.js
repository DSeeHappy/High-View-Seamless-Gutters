import React from "react";
import Layout from "../../components/core/Layout";
import NavThree from "../../components/core/NavThree";
import PageHeader from "../../components/PageHeader";
import AboutOne from "../../components/AboutOne";
import Footer from "../../components/core/Footer";
import TeamTab from "../../components/TeamTab";
import TestimonialOne from "../../components/TestimonialOne";
import GilbertoAboutCTA from "../../components/GilbertoAboutCTA";
import GilbertoContactAbout from '../../components/GilbertoContactAbout';

const AboutPage = () => {
  return (
    <Layout pageTitle="Gilberto Sanchez || High View's Seamless Gutters || About">
      <NavThree />
      <PageHeader title="Gilberto Sanchez" section="About"/>
      <GilbertoAboutCTA />
      <GilbertoContactAbout />
      <TestimonialOne />
      <Footer />
    </Layout>
  );
};

export default AboutPage;
