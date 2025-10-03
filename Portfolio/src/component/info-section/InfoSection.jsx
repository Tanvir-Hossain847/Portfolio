import React from 'react';

const InfoSection = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <h4 className='text-white font-bold primary py-3 text-lg'>FEATURED PROJECTS</h4>
            <div className="flex items-center gap-35">
            <div className="">
                <img className='w-130 h-80 object-cover rounded-md' src="/bg-3.png" alt="" />
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between flex-1">
                <div className="text-white border-x-1 border-gray-700 px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </div>
                <div className="text-white border-x-1 border-gray-700 px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
                   
                </div>
                <div className="text-white border-x-1 border-gray-700 px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cog-icon lucide-cog"><path d="M11 10.27 7 3.34"/><path d="m11 13.73-4 6.93"/><path d="M12 22v-2"/><path d="M12 2v2"/><path d="M14 12h8"/><path d="m17 20.66-1-1.73"/><path d="m17 3.34-1 1.73"/><path d="M2 12h2"/><path d="m20.66 17-1.73-1"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m3.34 7 1.73 1"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="8"/></svg>
        
                </div>
            </div>
            <div className="flex justify-between text-white px-2 pt-6 primary font-bold">
                <div className="">
                    <h3>UI/UX DESIGN</h3>
                </div>
                <div className="">
                    <h3>BRAND STRATEGY</h3>
                </div>
                <div className="">
                    <h3>PROTOTYPING</h3>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default InfoSection;