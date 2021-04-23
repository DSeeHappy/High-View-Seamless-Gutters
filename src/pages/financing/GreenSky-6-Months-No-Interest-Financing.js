import React from "react";
import Layout from "../../components/core/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import FinancingDetails from "../../components/FinancingDetails";
import NavThree from "../../components/core/NavThree";

const FinancingPage = () => {
  return (
    <Layout pageTitle="GreenSky 6-Months No-Interest Financing | High View's Seamless Gutters | Financing">
      <NavThree />
      <PageHeader title="6-Months No-Interest" section="Financing" />
      <FinancingDetails
        title="6-Months No-Interest Financing"
        financeURL="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81078210&dealerplan=3068&channel=External-Button-03"
        financeLinkURL="/financing/GreenSky-12-Months-No-Interest-Financing"
        financeLink="12-Months No-Interest Financing"
        financeLink2URL="/financing/GreenSky-138-Months-Extended-Financing"
        financeLink2="138-Months Extended-Financing"
        financeInfo="Subject to credit approval. Subject to credit approval. Interest is billed during the promotional period but all interest is waived if the purchase amount is paid in full within 6 months. There are no required minimum monthly payments during the promotional period."
      />
      <Footer />
    </Layout>
  );
};

export default FinancingPage;
