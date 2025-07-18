// NotFoundPage.jsx (or whatever file you choose to place this component)
import React from 'react';
import {Link} from "@tanstack/react-router";

// This is the standalone NotFoundPage component
const NotFoundPage = () => {
    return (
        <div
            className=" bg-saffron-800 w-full flex  justify-center p-4 font-inter bg-[url(/images/bg.png)] bg-center">
            {/* Container for the Not Found content */}
            <div
                className="bg-saffron border-2 shadow-[4px_4px_0_0_#000] mt-3 p-8 md:p-12 max-w-lg h-min w-full text-center rounded-lg">
                {/* 404 Heading */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-black mb-4 leading-none">
                    404
                </h1>
                {/* Subtitle/Message */}
                <p className="text-2xl md:text-3xl font-bold text-black mb-4">
                    Page Not Found
                </p>
                {/* Descriptive Text */}
                <p className="text-lg text-black mb-8">
                    Oops! It looks like you've ventured into uncharted digital territory.
                    The page you're looking for doesn't exist.
                </p>
                {/* Go Home Button */}
                <Link
                    to="/" // Link to the home page
                    className="inline-block bg-red-600  font-bold py-3 px-8 rounded-lg border-2 shadow-[3px_3px_0_#000]
                     hover:bg-red-700 active:shadow active:translate-1 transition-all duration-100 ease-in-out"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
