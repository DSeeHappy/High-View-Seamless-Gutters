import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import SamAboutCTA from "../../components/SamAboutCTA";
import Promo5Off from "../../components/Promo5Off";
import NavThree from "../../components/core/NavThree";

const SamAvilaReferrals = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | Referrals">
        <NavThree />
        <PageHeader title="Referrals" />
        <SamAboutCTA/>
        <Promo5Off title="Sam"/>
        <Footer />
      </Layout>{" "}
    </>
  );
};

export default SamAvilaReferrals;
