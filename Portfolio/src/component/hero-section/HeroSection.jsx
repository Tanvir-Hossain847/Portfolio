import React from 'react';

const HeroSection = () => {
    return (
        <div className='flex items-center justify-between py-20 w-3/4 mx-auto text-white'>
            <div className="text w-[40%]">
                <h1 className='text-4xl font-bold pb-5 primary'>DESIGNING YOUR BRAND IDENTITY FOT THE MORDERN WORLD</h1>
                <p className='primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam atque ad vel mollitia.</p>
                <button className='primary bg-gray-800 hover:scale-[1.05] transition-all duration-200 text-[#EF6351] px-6 py-3 rounded-md mt-5'>ALL PROJECTS</button>
            </div>
            <div className="IMG">
                <img className='w-180 h-100 object-cover rounded-lg' src="/bg-2.webp" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;