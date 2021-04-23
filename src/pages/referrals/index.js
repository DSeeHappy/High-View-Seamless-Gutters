import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import Promo2 from "../../components/Promo2";
import NavThree from "../../components/core/NavThree";
import CTAReferrals from "./../../components/CTAReferrals";

const Referrals = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | Referrals">
        <NavThree />

        <PageHeader title="Referrals" section="Referrals"/>
        <CTAReferrals />
        <Promo2 />
        <Footer />
      </Layout>{" "}
    </>
  );
};

export default Referrals;
