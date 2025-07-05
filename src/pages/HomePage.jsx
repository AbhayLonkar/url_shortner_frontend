import React from 'react'
import {HiOutlineClipboardDocumentList} from "react-icons/hi2";
import {MdAdsClick} from "react-icons/md";
import {IoMdHappy} from "react-icons/io";

const HomePage = () => {
    return (
        <div className={'h-full w-full'}>
            <section id={'home'}
                     className={'bg-saffron-800 md:h-[91vh] '}>
                <div className={'flex justify-center items-center md:flex-row flex-col h-full md:gap-5 gap-1 px-5'}>
                    <div
                        className={'flex justify-center items-center flex-col gap-2 md:w-lg max-w-lg w-[90%] h-100 p-3'}>
                    <span
                        className={'self-start text-red-700 font-semibold bg-red-200 rounded-full px-3 py-2 text-center text-xs shadow-[3px_3px_0_0_#000]'}>Easy link shortening</span>
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

            <section id={'about'} className={'bg-white w-full relative h-[90vh] flex justify-center'}>
                <div
                    className={'bg-white flex justify-around items-center md:flex-row flex-col border p-2 py-4 rounded-lg shadow-[4px_4px_0_#000] h-min  md:max-w-4xl w-[80%]'}>
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
                <h2>One short link, infinite possibility</h2>
                <p>A short link is powerful marketing tool when you use it carefully. It is not just a link but a medium
                    between your customer and their destination.
                </p>
            </section>
        </div>
    )
}
export default HomePage
