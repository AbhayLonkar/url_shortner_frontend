import React from 'react'
import {HiOutlineClipboardDocumentList} from "react-icons/hi2";
import {MdAdsClick} from "react-icons/md";
import {IoMdHappy} from "react-icons/io";
import CardContainer from "../components/CardContainer.jsx";

const AboutSection = () => {
    return (
        <section id={'about'}
                 className={'bg-white w-full relative md:min-h-[90vh] flex items-center flex-col border-b-4'}>
            <div className={'bg-white -mt-14 flex justify-around items-center md:flex-row flex-col border p-2 py-4 rounded-lg shadow-[4px_4px_0_#000] h-min  md:max-w-4xl w-[80%]'}>
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
            <h2 className={'mt-16 text-5xl text-eerie-black font-bold text-center p-1'}>One short link, infinite
                possibility</h2>
            <p className={'font-semibold md:w-2xl text-center mt-5 text-eerie-black-700 p-1'}>
                A short link is powerful marketing tool when you use it carefully. It is not just a link but a
                medium between your customer and their destination.
            </p>

            <CardContainer />
        </section>
    )
}
export default AboutSection
