import React from "react";
import Layout from "../../components/core/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import FinancingDetails from "../../components/FinancingDetails";
import NavThree from "../../components/core/NavThree";

const FinancingPage = () => {
  return (
    <Layout pageTitle="High View's Seamless Gutters | Financing">
      <NavThree />
      <PageHeader title="138 Month's Extended Financing" />
      <FinancingDetails />
      <Footer />
    </Layout>
  );
};

export default FinancingPage;
