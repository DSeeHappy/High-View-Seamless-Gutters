import React from "react";
import Layout from "../components/core/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import Footer from "../components/core/Footer";
import AboutTwo from "../components/AboutTwo";
import CourseOne from "../components/CourseOne";
import VideoTwo from "../components/VideoTwo";
import Promo from "../components/Promo";
import CourseCatOne from "../components/CourseCatOne";
import CallToActionThree from "../components/CallToActionThree";
import BrandsTwo from "../components/BrandsTwo";
import BlogTwo from "../components/BlogTwo";
import CallToActionFour from "../components/CallToActionFour";
import SubscribeOne from "../components/SubscribeOne";
import NavThree from "../components/core/NavThree";
import CallToActionOne from "./../components/CallToActionOne";
import CallToActionTwo from "./../components/CallToActionTwo";
import CourseCatTwo from "./../components/CourseCatTwo";
import CourseCatThree from "./../components/CourseCatThree";
import CallToActionSix from "./../components/CallToActionSix";
import CallToActionFive from './../components/CallToActionFive';

const HomePage = () => (
  <Layout pageTitle="High View's Seamless Gutters || Quality Seamless Gutters">
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
