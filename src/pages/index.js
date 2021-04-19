import React from "react";
import Layout from "../components/core/Layout";
import SliderOne from "../components/SliderOne";
import Footer from "../components/core/Footer";
import AboutTwo from "../components/AboutTwo";
import Promo from "../components/Promo";
import SubscribeOne from "../components/SubscribeOne";
import NavThree from "../components/core/NavThree";
import CallToActionOne from "./../components/CallToActionOne";
import CallToActionTwo from "./../components/CallToActionTwo";
import CourseCatThree from "./../components/CourseCatThree";

const HomePage = () => (
  <Layout pageTitle="High View's Seamless Gutters || Colorado Ready Quality Seamless Gutters">
    <NavThree />
    <SliderOne />
    <AboutTwo />
    <CallToActionOne />
    <Promo />
    <CourseCatThree />
    <CallToActionTwo />

    <SubscribeOne />
    <Footer />
  </Layout>
);

export default HomePage;
