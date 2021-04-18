import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import Gallery from "../../components/Gallery";
import NavThree from "../../components/core/NavThree";

const Services = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | Services">
        <NavThree />
        <PageHeader title="Services" />
        <Footer />
      </Layout>{" "}
    </>
  );
};

export default Services;
