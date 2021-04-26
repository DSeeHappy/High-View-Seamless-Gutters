import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import Gallery from "../../components/Gallery";
import NavThree from "../../components/core/NavThree";
import TopBar from "../../components/ServicesBar";
import VideoCTA from "../../components/GutterGuardVideoCTA";
import Expectations from "../../components/Pricing";
import GutterGuardCTA2 from "../../components/GutterGuardCTA2";

const GutterGuards = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | Gutter Guards">
        <NavThree />
        <PageHeader title="Gutter Guards" section="Services"/>
        <TopBar/>
        <VideoCTA/>
        <GutterGuardCTA2/>
        <Expectations/>
        <Footer />
      </Layout>{" "}
    </>
  );
};

export default GutterGuards;
