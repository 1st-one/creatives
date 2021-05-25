import React from 'react';
import Header from '@/components/Header/Header';
import Intro from '@/components/Intro/Intro';
import Section from '@/components/Section/Section';
import Article from '@/components/Article/Article';
import BlogFooter from '@/components/BlogFooter/BlogFooter';
import Requirements from '@/components/Requirements/Requirements';
import Footer from '@/components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Intro />
            <Section num={'w'} />
            <Article />
            <Section num={'b'} />
            <BlogFooter />
            <Requirements />
            <Section num={'t'} />
            <Section num={'c'} />
            <Footer />
        </>
    );
};

export default Home;