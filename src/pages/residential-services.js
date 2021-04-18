import React from "react";
import Layout from "../components/core/Layout";
import NavThree from "../components/core/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/core/Footer";
import Pricing from "../components/Pricing";
import CallToActionOne from "../components/CallToActionOne";
import CourseCatThree from "../components/CourseCatThree";
import ResidentialCTA from './../components/ResidentialCTA';
const ResidentialPage = () => {
  return (
    <Layout pageTitle="High View's Seamless Gutters | Residential">
      <NavThree />
      <PageHeader title="Residential" />
      <ResidentialCTA/>
      <Pricing />
      <CourseCatThree />
      <CallToActionOne />
      <Footer />
    </Layout>
  );
};

export default ResidentialPage;
