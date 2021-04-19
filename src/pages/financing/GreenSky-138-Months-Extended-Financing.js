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
      <PageHeader title="138-Month's Extended Financing" />
      <FinancingDetails
        title="138-Month's Extended Financing"
        financeURL="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81078210&dealerplan=1389&channel=External-Button-03"
        financeLinkURL="/financing/GreenSky-6-Months-No-Interest-Financing"
        financeLink="6-Months No-Interest Financing"
        financeLink2URL="/financing/GreenSky-12-Months-No-Interest-Financing"
        financeLink2="12-Months No-Interest Financing"
        financeInfo="Subject to credit approval. Subject to credit approval. Fixed interest rate of 9.99% for 138 months. Payment example assumes one time $10,000 purchase on approval date (APR 10.07%) with 1 payment of $161.15 followed by 137 amortized payments of $122.15. Payments assume Account Activation charge of $39 applies and is due with first required payment."
      />
      <Footer />
    </Layout>
  );
};

export default FinancingPage;
