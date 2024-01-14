import React from 'react';
import hero from '../assets/hero-graphics.svg';
const Banner = () => {
    return (
        <section>
            <div className='flex items-center justify-around gap-6'>


<div>
    <h1 className='text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8 text-white text'>The Future of <br /> Learning  starts  <br /> with students <br /> at  the center</h1>
    <a className='px-5 py-2.5 bg-[#038C61] rounded-[44px] text-white' href="">Learn More</a>
</div>

<div>
    <img className='md:order-2 object-cover ml-auto animate-updown' src={hero}alt="" />
</div>


            </div>
        </section>
    );
};

export default Banner;