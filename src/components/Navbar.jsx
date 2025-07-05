import React from 'react';
import {Link} from '@tanstack/react-router';
import {useSelector} from "react-redux";
import {IoMdHome} from "react-icons/io";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {
    const {isAuthenticated} = useSelector((state) => state.auth);

    return (
        <nav
            className="w-full bg-saffron border-b-4 border-black px-14 py-2 flex items-center justify-between ">
            {/* Left: Brand Name */}
            <span className="text-2xl font-extrabold text-black tracking-tight select-none">
      ⁂ LinkIT
        </span>
            {/* Center: Main Links */}
            {isAuthenticated && <div className="flex-1 flex justify-center gap-4">
                <Link
                    to="/dashboard"
                    className="px-4 py-2 font-bold border-2 border-black rounded-md bg-white text-black shadow-[2px_2px_0_0_#000] hover:bg-blue-200 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow"
                >
                    Dashboard
                </Link>
            </div>
            }

            {/* Right: Auth Links & GitHub */}
            <div className="flex gap-2 items-center">
                {!isAuthenticated &&
                    <Link
                        to="/auth?mode=login"
                        className="px-4 py-2 font-bold border-2 border-black rounded-md bg-white text-black shadow-[2px_2px_0_0_#000] hover:bg-pink-200 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow">
                        Login
                    </Link>
                }
                <a
                    href="https://github.com/" // Change to your repo or about page
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-black shadow-[2px_2px_0_0_#000] rounded-md px-4 py-2 font-bold text-black hover:bg-pink-300 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow"
                >
                    <FaGithub size={22}/>
                </a>
                <Link
                    to="/"
                    className="px-2 py-2 font-bold border-2 border-black rounded-md bg-saffron-900 text-black shadow-[2px_2px_0_0_#000] hover:bg-cyan-100 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow"
                >
                    <IoMdHome size={22}/>
                </Link>
            </div>
        </nav>
    )
};

export default Navbar;
