import React from 'react'
import IntegrationCard from "../components/IntegrationCard.jsx";
import wordpress from "../integration-images/wordpress.svg";
import bing from "../integration-images/bing.svg";
import facebook from "../integration-images/facebook.svg";
import googleAnalytics from "../integration-images/google-analytics.svg";
import instagram from "../integration-images/instagram.svg";
import linkedin from "../integration-images/linkedin.svg";
import reddit from "../integration-images/reddit.svg";
import snapchat from "../integration-images/snapchat.svg";
import x from "../integration-images/x.svg";


export const IntegrationSection = () => {

    const integrations = [
        {
            image: wordpress,
            name: "Wordpress",
        },
        {
            image: bing,
            name: "Bing",
        },
        {
            image: facebook,
            name: "Facebook",
        },
        {
            image: googleAnalytics,
            name: "Google Analytics",
        },
        {
            image: instagram,
            name: "Instagram",
        },
        {
            image: linkedin,
            name: "Linkedin",
        },
        {
            image: reddit,
            name: "Reddit",
        },
        {
            image: snapchat,
            name: "Snapchat",
        },
        {
            image: x,
            name: "X (Twitter)",
        },

    ]

    return <>
        <h1 className={'mt-14 text-5xl font-bold text-eerie-black text-center'}>Integration</h1>
        <p className={'text-eerie-black-600 my-5 text-center'}>Connect with popular tools and boost your productivity</p>
        <div className={'flex flex-wrap justify-center items-center  max-w-4xl p-10 gap-4'}>
            {integrations.map((item, index) => (
                <IntegrationCard key={index} image={item.image} name={item.name} />
            ))}
        </div>
    </>
}
