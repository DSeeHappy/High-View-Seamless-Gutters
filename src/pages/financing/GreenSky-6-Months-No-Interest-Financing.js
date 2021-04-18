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
      <PageHeader title="6 Months No Interest" />
      <FinancingDetails
        title="6 Months No Interest Financing"
        financeURL="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81078210&dealerplan=3068&channel=External-Button-03"
      />
      <Footer />
    </Layout>
  );
};

export default FinancingPage;
