import React from 'react';
import logo from '../assets/lws-logo-en.svg';
const Header = () => {
    return (
        <section className='py-3 mx-auto w-[98%]'>

            <div className=' flex items-center justify-between'>
                <div>
                    <img className='h-[40px]' src={logo} alt="" />
                </div>
                <div>
                    <button className='px-5 py-2 bg-[#172227] rounded-[44px] text-white'>
                      Get Admition
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Header;