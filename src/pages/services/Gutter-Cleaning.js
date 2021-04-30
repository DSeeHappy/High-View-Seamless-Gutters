import React from "react";
import Layout from "../../components/core/Layout";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/core/Footer";
import NavThree from "../../components/core/NavThree";
import TopBar from "../../components/ServicesBar";
import CallToActionFive from './../../components/GutterCleanCTA';
import CallToActionThree from './../../components/GutterCleaningAbout';
import CourseDetails from './../../components/CleaningDetails';

const GutterCleaning = () => {
  return (
    <>
      <Layout pageTitle="High View's Seamless Gutters | Gutter Cleaning">
        <NavThree />
        <PageHeader title="Gutter Cleaning" section="Services"/>
        <TopBar/>
        <CallToActionFive/>
        <CallToActionThree/>
        <CourseDetails/>
        <Footer />
      </Layout>{" "}
    </>
  );
};

export default GutterCleaning;
