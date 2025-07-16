import React from 'react'
import Tag from "../components/Tag.jsx";
import {AiFillThunderbolt} from "react-icons/ai";
import {BsGraphUpArrow} from "react-icons/bs";
import {FaLink, FaUserCircle} from "react-icons/fa";
import {MdKeyboardArrowRight, MdOutlineDashboardCustomize, MdOutlinePrivacyTip} from "react-icons/md";

const ServicesSection = () => {
    return <>
        <section id={'services'}
                 className={'bg-saffron-800 flex justify-center items-center py-10 md:min-h-[90vh] border-b-4 bg-[url(/images/bg.png)] bg-center '}>
            <div className={'flex justify-center items-center gap-2 md:flex-row flex-col  px-3'}>
                <div
                    className={'flex md:justify-center items-center flex-col md:w-1/2 max-w-lg w-[95%] h-100 p-3'}>
                    <img src={'/images/analytic.png'} alt={'link-it'} className={'h-full object-cover'}/>
                </div>
                <div className={'flex flex-col p-3 justify-center gap-2 md:w-1/3 w-[70%] '}>
                    <Tag text={'Sales & Marketing'}/>
                    <h2 className={'text-eerie-black text-5xl font-bold'}>Perfect for Sales & Marketing </h2>
                    <p className={'font-semibold  my-5 text-eerie-black-500 '}>
                        Understanding your users and customers will help you increase your conversion. Our system
                        allow you to track everything. Whether it is the amount of clicks,the country of the
                        referer, the data is there for you to analyze it.
                    </p>
                    <div className={'flex flex-col gap-1 '}>
                        <span
                            className={'flex justify-around w-44 items-center p-0.5 h-8 border rounded-lg shadow-[2px_2px_0_#000]  bg-saffron-600'}>
                            <AiFillThunderbolt size={20}/>  Redirection Tools
                        </span>
                        <span
                            className={'flex justify-around w-44 h-8 items-center p-0.5 border rounded-lg shadow-[2px_2px_0_#000] bg-saffron-600'}>
                            <BsGraphUpArrow size={20}/>  Powerful Statistics
                        </span> <span
                        className={'flex justify-around w-44 h-8 items-center p-0.5 border rounded-lg shadow-[2px_2px_0_#000] bg-saffron-600'}>
                            <FaUserCircle size={20}/>  Beautiful Profiles
                        </span>
                    </div>
                </div>
            </div>
        </section>


        <section className={'bg-white flex justify-center items-center py-10 md:min-h-[90vh] border-b-4'}>
            <div className={'flex justify-center items-center gap-2 md:flex-row flex-col  px-3'}>
                <div
                    className={'flex flex-col p-3 justify-center gap-2 md:w-1/3 w-[70%] '}>
                    <Tag text={'Sales & Marketing'}/>
                    <h2 className={'text-eerie-black text-5xl font-bold'}>Powerful tools that work </h2>
                    <p className={'font-semibold  my-5 text-eerie-black-700 '}>
                        Our product let you target your users to better understand their behavior and provide them a
                        better overall experience through smart re-targeting. We provide you many powerful tools to
                        reach them better.
                    </p>
                    <div className={'flex flex-col gap-1 '}>
                        <span
                            className={'flex justify-around w-48 items-center p-0.5 h-8 border rounded-lg shadow-[2px_2px_0_#000]  bg-saffron-600'}>
                            <FaLink size={20}/>  Link Management
                        </span>
                        <span
                            className={'flex justify-around w-48 items-center p-0.5 h-8 border rounded-lg shadow-[2px_2px_0_#000]  bg-saffron-600'}>
                            <MdOutlinePrivacyTip size={20}/>  Privacy Control
                        </span> <span
                        className={'flex justify-around w-48 items-center p-0.5 h-8 border rounded-lg shadow-[2px_2px_0_#000]  bg-saffron-600'}>
                            <MdOutlineDashboardCustomize size={20}/>  Powerful Dashboard
                        </span>
                    </div>
                </div>

                <div
                    className={'flex md:justify-center items-center flex-col md:w-1/2 max-w-lg w-[95%] h-100 p-3'}>
                    <img src={'/images/security.png'} alt={'link-it'} className={'h-auto object-cover'}/>
                </div>
            </div>
        </section>


    </>
}
export default ServicesSection
