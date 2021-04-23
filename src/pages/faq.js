import React from 'react';
import Layout from "../components/core/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/core/Footer";
import Faq from "../components/Faq";

const FaqPage = () => {
    return (
        <Layout pageTitle="High View's Seamless Gutters | FAQ">
            <NavOne />
            <PageHeader title="FAQ" section="FAQ"/>
            <Faq />
            <Footer />
        </Layout>
    );
};

export default FaqPage;
