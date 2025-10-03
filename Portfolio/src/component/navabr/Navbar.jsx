import React from 'react';

const Navbar = () => {
    return (
        <div className="pt-5">
       <div class="navbar bg-gray-800 text-[#EF6351] shadow-sm mx-auto px-10 w-3/4 rounded-md border-1 border-gray-500">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul tabindex="0"
       class="menu menu-sm dropdown-content bg-gray-800  text-[#EF6351] rounded-box z-1 mt-3 w-52 p-2 shadow primary text-lg">
      <li><a>Home</a></li>
      <li><a>Projects</a></li>
      <li><a>Contact Me</a></li>
      </ul>
    </div>
    <a class="text-2xl secondery">TANVIR</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 primary text-[#EF6351] text-lg gap-3">
      <li className='hover:text-white hover:border-x-1 hover:border-white'><a>Home</a></li>
      <li className='hover:text-white hover:border-x-1 hover:border-white'><a>Projects</a></li>
      <li className='hover:text-white hover:border-x-1 hover:border-white'><a>Contact Me</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class=" bg-white text-[#EF6351] rounded-md px-4 py-1.5 hover:px-15 hover:border-1 hover:border-[#EF6351] hover:bg-gray-800 duration-700 transition-all primary font-bold text-lg">Book-Now</a>
  </div>
</div>
</div>
    );
};

export default Navbar;