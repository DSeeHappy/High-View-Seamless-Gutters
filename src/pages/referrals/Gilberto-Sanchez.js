import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import NavThree from "../../components/core/NavThree";
import GilbertoAboutCTA from "../../components/GilbertoAboutCTA";
import Promo5Off from "../../components/Promo5Off";

const GilbertoSanchezReferrals = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | Referrals">
        <NavThree />
        <PageHeader title="Referrals" />
        <GilbertoAboutCTA/>
        <Promo5Off/>
        <Footer />
      </Layout>{" "}
    </>
  );
};

export default GilbertoSanchezReferrals;
