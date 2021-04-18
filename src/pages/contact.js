import React from 'react';
import Layout from "../components/core/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/core/Footer";
import Contact from "../components/Contact";

const GalleryPage = () => {
    return (
        <Layout pageTitle="Kipso | Contact">
            <NavOne />
            <PageHeader title="Contact" />
            <Contact />
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
