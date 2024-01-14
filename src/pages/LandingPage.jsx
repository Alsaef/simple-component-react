import React from 'react';
import Header from '../Components/header';
import Banner from '../Components/banner';

const LandingPage = () => {
    return (
        <div className='bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]'>
          <Header></Header>
          <Banner></Banner>
        </div>
    );
};

export default LandingPage;