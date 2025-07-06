import React from 'react'
import {HiOutlineClipboardDocumentList} from "react-icons/hi2";
import {MdAdsClick, MdKeyboardArrowRight, MdOutlineDashboardCustomize, MdOutlinePrivacyTip} from "react-icons/md";
import {IoMdHappy} from "react-icons/io";
import Card from "../components/Card.jsx";
import Tag from "../components/Tag.jsx";
import {AiFillThunderbolt} from "react-icons/ai";
import {BsGraphUpArrow} from "react-icons/bs";
import {FaLink, FaUserCircle} from "react-icons/fa";

const HomePage = () => {
    return (
        <div className={'h-full w-full'}>
            <section id={'home'}
                     className={'bg-saffron-800 md:h-[91vh] border-b-4'}>
                <div className={'flex justify-center items-center md:flex-row flex-col h-full md:gap-5 gap-1 px-5'}>
                    <div
                        className={'flex justify-center items-center flex-col gap-2 md:w-lg max-w-lg w-[90%] h-100 p-3'}>
                        <Tag text={'Easy link shortening'}/>
                        <h1 className={'font-bold text-eerie-black text-4xl mt-2'}>
                            LinkIT short URL & QR code generator
                        </h1>
                        <p className={'my-3 text-jet-300 font-medium'}>
                            A short link allows you to collect so much data about your consumers & their behaviours.
                        </p>
                        <div className={'flex justify-center items-center w-full relative'}>
                            <input type={'url'} placeholder={'Paste a link to shorten it'}
                                   className={'p-3 py-4 border bg-white rounded-lg w-full shadow-[4px_4px_0_0_#000] outline-0'}/>
                            <button
                                className={'absolute border right-3 py-2.5 w-25 rounded-lg bg-saffron text-eerie-black font-bold shadow-[3px_3px_0_0_#000] cursor-pointer transition-all active:translate-y-1 active:translate-x-1 active:shadow'}>Shorten
                            </button>
                        </div>
                        {/* For Generated URL */}
                        {/*<div className={'flex justify-center items-center w-full relative'}>*/}
                        {/*    <input type={'url'} value={'http://localhost:3000/Sdbla2'}*/}
                        {/*           className={'p-3 py-4 bg-white rounded-lg w-full shadow-[4px_4px_0_0_#000] outline-0'}/>*/}
                        {/*    <button*/}
                        {/*        className={'absolute border right-3 py-2.5 w-25 rounded-lg bg-blue-300 text-eerie-black font-bold shadow-[3px_3px_0_0_#000] cursor-pointer transition-all active:translate-y-1 active:translate-x-1 active:shadow'}>Copy*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>

                    <div
                        className={'flex md:justify-center items-center flex-col gap-2  md:w-lg max-w-lg w-[95%] h-100 p-3'}>
                        <img src={'/images/home-section.png'} alt={'link-it'} className={'h-full'}/>
                    </div>
                </div>
            </section>

            <section id={'about'}
                     className={'bg-white w-full relative md:min-h-[90vh] flex items-center flex-col border-b-4'}>
                <div
                    className={'bg-white -mt-14 flex justify-around items-center md:flex-row flex-col border p-2 py-4 rounded-lg shadow-[4px_4px_0_#000] h-min  md:max-w-4xl w-[80%]'}>
                    <p className={'text-eerie-black text-3xl font-bold text-center md:w-1/3 md:min-w-72 '}>
                        We have a great achievement to show
                    </p>
                    <div className={'flex  flex-wrap items-center justify-center'}>
                        <div className={'flex p-3 justify-center items-center gap-2'}>
                            <HiOutlineClipboardDocumentList size={32}/>
                            <div className={'text-center'}>
                                <p className={'text-2xl font-bold'}>30+</p>
                                <p className={'text-sm  font-semibold'}>Powering Links</p>
                            </div>
                        </div>
                        <div className={'flex  p-3 justify-center items-center gap-2'}>
                            <MdAdsClick size={32}/>
                            <div className={'text-center'}>
                                <p className={'text-2xl font-bold'}>2M+</p>
                                <p className={'text-sm font-semibold'}>Service Clicks</p>
                            </div>
                        </div>
                        <div className={'flex p-3 justify-center items-center gap-2 '}>
                            <IoMdHappy size={32}/>
                            <div className={'text-center'}>
                                <p className={'text-2xl font-bold'}>20K+</p>
                                <p className={'text-sm  font-semibold'}>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className={'mt-16 text-4xl text-eerie-black font-bold text-center p-1'}>One short link, infinite
                    possibility</h2>
                <p className={'font-semibold md:w-2xl text-center mt-5 text-eerie-black-700 p-1'}>
                    A short link is powerful marketing tool when you use it carefully. It is not just a link but a
                    medium between your customer and their destination.
                </p>
                <div className={'mt-10 flex p-3 justify-center items-center gap-2 flex-wrap '}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>

            <section id={'third'}
                     className={'bg-saffron-800 flex justify-center items-center py-10 md:min-h-[90vh] border-b-4'}>
                <div className={'flex justify-center items-center gap-2 md:flex-row flex-col  px-3'}>
                    <div
                        className={'flex md:justify-center items-center flex-col md:w-1/2 max-w-lg w-[95%] h-100 p-3'}>
                        <img src={'/images/analytic.png'} alt={'link-it'} className={'h-full'}/>
                    </div>
                    <div className={'flex flex-col p-3 justify-center gap-2 md:w-1/3 w-[70%] '}>
                        <Tag text={'Sales & Marketing'}/>
                        <h2 className={'text-eerie-black text-3xl font-bold'}>Perfect for Sales & Marketing </h2>
                        <p className={'font-semibold  my-5 text-eerie-black-700 '}>
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


            <section id={'fourth'}
                     className={'bg-white flex justify-center items-center py-10 md:min-h-[90vh] border-b-4'}>
                <div className={'flex justify-center items-center gap-2 md:flex-row flex-col  px-3'}>
                    <div
                        className={'flex flex-col p-3 justify-center gap-2 md:w-1/3 w-[70%] '}>
                        <Tag text={'Sales & Marketing'}/>
                        <h2 className={'text-eerie-black text-3xl font-bold'}>Powerful tools that work </h2>
                        <p className={'font-semibold  my-5 text-eerie-black-700 '}>
                            Our product let you target your users to better understand their behavior and provide them a
                            better overall experience through smart re-targeting. We provide you many powerful tools to
                            reach them better.
                        </p>
                        <div className={'flex flex-col gap-1 '}>
                            <span
                                className={'flex justify-around w-44 items-center p-0.5 h-8 border rounded-lg shadow-[2px_2px_0_#000]  bg-saffron-600'}>
                                <FaLink size={20}/>  Link Management
                            </span>
                            <span
                                className={'flex justify-around w-44 h-8 items-center p-0.5 border rounded-lg shadow-[2px_2px_0_#000] bg-saffron-600'}>
                                <MdOutlinePrivacyTip size={20}/>  Privacy Control
                            </span> <span
                            className={'flex justify-around w-44 h-8 items-center p-0.5 border rounded-lg shadow-[2px_2px_0_#000] bg-saffron-600'}>
                                <MdOutlineDashboardCustomize size={20}/>  Powerful Dashboard
                            </span>
                        </div>
                    </div>

                    <div
                        className={'flex md:justify-center items-center flex-col md:w-1/2 max-w-lg w-[95%] h-100 p-3'}>
                        <img src={'/images/security.png'} alt={'link-it'} className={'h-auto'}/>
                    </div>
                </div>
            </section>

            <section id={'fifth'}
                     className={'bg-saffron-800 flex justify-center items-center py-10 md:min-h-[90vh] border-b-4'}>
                <div className={'flex justify-center items-center gap-2 md:flex-row flex-col  px-3'}>
                    <div
                        className={'flex md:justify-center items-center flex-col md:w-1/2 max-w-lg w-[95%] h-100 p-3'}>
                        <img src={'/images/qr.png'} alt={'link-it'} className={'h-full'}/>
                    </div>
                    <div className={'flex flex-col p-3 justify-center gap-2 md:w-1/3 w-[70%] '}>
                        <Tag text={'QR Codes'}/>
                        <h2 className={'text-eerie-black text-3xl font-bold'}>QR Code</h2>
                        <p className={'font-semibold  my-5 text-eerie-black-700 '}>
                            Easy to use dynamic, customizable QR codes for your marketing campaigns. Analyze statistics
                            and optimize your marketing strategy and increase engagement.
                        </p>
                        <button
                            className={"mt-2 border-2 bg-saffron rounded-lg px-5 py-2 w-max flex justify-center items-center font-bold text-sm shadow-[2px_2px_0_#000] active:shadow active:translate-1 transition-all cursor-pointer"}>
                            Get Started <MdKeyboardArrowRight size={20}/>
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default HomePage
