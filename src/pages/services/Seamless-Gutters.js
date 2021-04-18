import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import Gallery from "../../components/Gallery";
import NavThree from "../../components/core/NavThree";

const SeamlessGutters = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | Seamless Gutters">
        <NavThree />
        <PageHeader title="Seamless Gutters" />
        <Footer />
      </Layout>{" "}
    </>
  );
};

export default SeamlessGutters;
