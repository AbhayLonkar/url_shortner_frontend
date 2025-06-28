import React from 'react';

const Navbar = () => (
  <nav className="w-full bg-blue-300 border-b-4 border-black  px-14 py-2 flex items-center justify-between mb-8">
    <span className="text-2xl font-extrabold text-black tracking-tight select-none">
      ⁂ LinkIT
    </span>
    <a
      href="https://github.com/" // Change to your repo or about page
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-400 border-2 border-black  shadow-[2px_2px_0_0_#000] rounded-md px-4 py-2 font-bold text-black  hover:bg-pink-300 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow"
    >
      GitHub
    </a>
  </nav>
  // shadow-[2px_2px_0_0_#000]
);

export default Navbar;
