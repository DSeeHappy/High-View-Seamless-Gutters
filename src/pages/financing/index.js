import React from "react";
import Layout from "../../components/core/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import FinanceSelect from "../../components/FinanceSelects";
import NavThree from "../../components/core/NavThree";

const FinancingPage = () => {
  return (
    <Layout pageTitle="High View's Seamless Gutters | Financing">
      <NavThree />
      <PageHeader title="Financing" />
      <FinanceSelect />
      <Footer />
    </Layout>
  );
};

export default FinancingPage;
