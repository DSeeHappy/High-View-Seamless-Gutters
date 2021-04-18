import React from 'react';
import Layout from "../components/core/Layout";
import NavOne from "../components/core/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/core/Footer";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
    return (
        <Layout pageTitle="Kipso | Gallery">
            <NavOne />
            <PageHeader title="Gallery" />
            <Gallery />
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
