import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import ServiceAreaSection from "../../components/ServiceAreaSection";
import NavThree from "../../components/core/NavThree";

const ServiceArea = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | Gallery">
        <NavThree />
        <PageHeader title="Service Area" />
        <ServiceAreaSection />
        <Footer />
      </Layout>{" "}
    </>
  );
};

export default ServiceArea;
