import React, {useState} from 'react'
import Tag from "../components/Tag.jsx";
import {MdKeyboardArrowRight} from "react-icons/md";
import ComingSoonModal from "../components/ComingSoonModal.jsx";

const QrSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <section
            className={'bg-saffron-800 bg-[url(/images/bg.png)] bg-center  flex justify-center items-center py-10 md:min-h-[90vh] border-b-4'}>
            <div className={'flex justify-center items-center gap-2 md:flex-row flex-col  px-3'}>
                <div
                    className={'flex md:justify-center items-center flex-col md:w-1/2 max-w-lg w-[95%] h-100 p-3'}>
                    <img src={'/images/qr.png'} alt={'link-it'} className={'h-full object-cover'}/>
                </div>
                <div className={'flex flex-col p-3 justify-center gap-2 md:w-1/3 w-[70%] '}>
                    <Tag text={'QR Codes'}/>
                    <h2 className={'text-eerie-black text-5xl font-bold'}>QR Code</h2>
                    <p className={'font-semibold  my-5 text-eerie-black-500 '}>
                        Easy to use dynamic, customizable QR codes for your marketing campaigns. Analyze statistics
                        and optimize your marketing strategy and increase engagement.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={"my-2 border-2 bg-saffron rounded-lg px-5 py-2 w-max flex justify-center items-center font-bold text-sm shadow-[2px_2px_0_#000] active:shadow active:translate-1 transition-all cursor-pointer"}>
                        Get Started <MdKeyboardArrowRight size={20}/>
                    </button>
                    <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
                </div>
            </div>
        </section>
    )
}
export default QrSection
