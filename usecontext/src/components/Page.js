import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const Page = () => {
    return (
        <div className='page'>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default Page;