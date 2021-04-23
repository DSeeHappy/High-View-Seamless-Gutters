import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import Gallery from "../../components/Gallery";
import NavThree from "../../components/core/NavThree";

const FrenchDrains = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | French Drains">
        <NavThree />
        <PageHeader title="French Drains" section="Services"/>
        <Footer />
      </Layout>{" "}
    </>
  );
};

export default FrenchDrains;
