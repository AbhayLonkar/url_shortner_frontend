import React from 'react'
import {HiOutlineClipboardDocumentList} from "react-icons/hi2";
import {MdAdsClick, MdKeyboardArrowRight, MdOutlineDashboardCustomize, MdOutlinePrivacyTip} from "react-icons/md";
import {IoMdHappy} from "react-icons/io";
import Card from "../components/Card.jsx";
import Tag from "../components/Tag.jsx";
import {AiFillThunderbolt} from "react-icons/ai";
import {BsGraphUpArrow} from "react-icons/bs";
import {FaLink, FaUserCircle} from "react-icons/fa";
import IntegrationCard from "../components/IntegrationCard.jsx";
import ContactSection from "../sections/ContactSession.jsx";
import HomeSection from "../sections/HomeSection.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import Features from "../components/Features.jsx";
import {IntegrationSection} from "../sections/IntegrationSection.jsx";
import QrSection from "../sections/QrSection.jsx";

const HomePage = () => {
    return (
        <div className={'h-full w-full'}>

            {/* Home Section */}
            <HomeSection/>

            {/* About Section */}
            <AboutSection/>

            {/* Service Section */}
            <ServicesSection/>

            {/*QR Code Generator Section*/}
            <QrSection/>

            {/* Features & Integration Section */}
            <section className={'flex items-center flex-col  border-b-4'}>
                <Features/>
                <IntegrationSection/>
            </section>

            {/* Contact Section*/}
            <ContactSection/>

        </div>
    )
}
export default HomePage
