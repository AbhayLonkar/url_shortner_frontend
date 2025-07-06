
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-saffron text-eerie-black w-full pt-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
                            <li><a href="/" className="text-eerie-black-600 hover:text-eerie-black transition-colors">Home</a></li>
                            <li><a href="/about" className="text-eerie-black-600 hover:text-eerie-black transition-colors">About</a></li>
                            <li><a href="/services" className="text-eerie-black-600 hover:text-eerie-black transition-colors">Services</a></li>
                            <li><a href="/contact" className="text-eerie-black-600 hover:text-eerie-black transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4 items-center justify-center">
                            <a href="https://github.com" className="text-eerie-black-600 hover:text-eerie-black transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://linkedin.com" className="text-eerie-black-600 hover:text-eerie-black transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-eerie-black-600 hover:text-eerie-black transition-colors">
                                <FaTwitter size={24} />
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