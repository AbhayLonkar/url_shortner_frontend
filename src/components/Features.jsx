import React from 'react'
import Card from "./Card.jsx";
import {CgWebsite} from "react-icons/cg";
import {IoEarth} from "react-icons/io5";
import {MdEventNote} from "react-icons/md";

const Features = () => {
    const cards = [
        {
            icon: <CgWebsite size={40} /> ,
            title: "Custom Landing Page",
            subtitle: "Create a custom landing page to promote your product or service on forefront and engage the user in your marketing.",
        },
        {
            icon: <IoEarth size={40} /> ,
            title: "Branded Domains Name",
            subtitle: "Easily add yours own domain name to short your links and take control of your brand name and your user's trust.",
        },
        {
            icon: <MdEventNote size={40} /> ,
            title: "Event Tracking",
            subtitle: "Add your custom pixel from providers such as Facebook and track events right when they are happening.",
        },
    ]
    return (
        <div className={'bg-white -mt-14 flex justify-around items-center flex-col border p-2 py-4 rounded-lg shadow-[4px_4px_0_#000] h-min  md:max-w-4xl w-[80%]'}>
            <p className={'text-eerie-black text-3xl font-bold text-center  md:min-w-72 '}>
                More features than asked for:
            </p>
            <div className={'flex  flex-wrap items-center justify-center gap-5 mt-5'}>
                {cards.map((card,index) => <Card key={index} icon={card.icon} title={card.title} subtitle={card.subtitle} /> )}
            </div>
        </div>
    )
}
export default Features
