
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from "@tanstack/react-router";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-saffron text-eerie-black w-full pt-4 border-t-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-2 text-center">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-1">LinkIT</h3>
                        <p className="text-eerie-black-600 hover:text-eerie-black">
                            Made with ❤️ by Abhay Lonkar
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="#home" className="text-eerie-black-600 hover:text-eerie-black transition-colors">Home</Link></li>
                            <li><Link to="#about" className="text-eerie-black-600 hover:text-eerie-black transition-colors">About</Link></li>
                            <li><Link to="#services" className="text-eerie-black-600 hover:text-eerie-black transition-colors">Services</Link></li>
                            <li><Link to="#contact" className="text-eerie-black-600 hover:text-eerie-black transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4 items-center justify-center">
                            <a href="https://github.com/abhaylonkar" target='_blank' className="text-eerie-black-600 hover:text-eerie-black transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://linkedin.com/in/abhaylonkar" target='_blank' className="text-eerie-black-600 hover:text-eerie-black transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 my-2 py-4 text-center text-eerie-black font-bold">
                    <p>&copy; {currentYear} LinkIT. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;