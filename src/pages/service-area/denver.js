import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import Gallery from "../../components/Cities";
import NavThree from "../../components/core/NavThree";

const Denver = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | Gallery">
        <NavThree />
        <PageHeader title="Denver" />
        <Gallery />
        <Footer />
      </Layout>{" "}
    </>
  );
};

export default Denver;
