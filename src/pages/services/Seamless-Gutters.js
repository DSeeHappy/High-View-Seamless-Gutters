import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import SeamlessGuttersCTA from "../../components/SeamlessGuttersCTA";
import TopBar from "../../components/ServicesBar";
import SeamlessGutter2 from "../../components/SeamlessGutter2";
import CTAGutterInfo from "../../components/CTAGutterInfo";
import CourseOne from "../../components/Pricing";
import GutterFaq from "../../components/GutterFaq";
import NavThree from "../../components/core/NavThree";

const SeamlessGutters = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | Seamless Gutters">
        <NavThree />
        <PageHeader title="Seamless Gutters" section="Services"/>
        <TopBar/>
        <SeamlessGuttersCTA/>
        <CTAGutterInfo/>
        <CourseOne/>
        <Footer />
      </Layout>
    </>
  );
};

export default SeamlessGutters;
