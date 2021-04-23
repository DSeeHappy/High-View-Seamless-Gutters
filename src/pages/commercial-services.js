import React from "react";
import Layout from "../components/core/Layout";
import NavThree from "../components/core/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/core/Footer";
import BecomeTeacher from "../components/CommercialCTA";
import TeamTab from "../components/TeamTab";
import CourseCatThree from "../components/CourseCatThree";

const CommercialPage = () => {
  return (
    <Layout pageTitle="High View's Seamless Gutters | Commercial">
      <NavThree />
      <PageHeader title="Commercial Services" section="Commercial Services"/>
      <BecomeTeacher />
      <CourseCatThree />
      <Footer />
    </Layout>
  );
};

export default CommercialPage;
