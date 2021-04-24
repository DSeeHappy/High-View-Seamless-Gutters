import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import Gallery from "../../components/Gallery";
import NavThree from "../../components/core/NavThree";
import TopBar from "../../components/ServicesBar";

const FasciaSoffit = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | Fascia &amp; Soffit">
        <NavThree />
        <PageHeader title="Fascia &amp; Soffit" section="Services"/>
        <TopBar/>
        <Footer />
      </Layout>{" "}
    </>
  );
};

export default FasciaSoffit;
