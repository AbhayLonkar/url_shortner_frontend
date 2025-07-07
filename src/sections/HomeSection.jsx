import React, {useState} from 'react'
import Tag from "../components/Tag.jsx";
import {createShortUrl} from "../api/shortUrl.api.js";
import Loading from "../components/Loading.jsx";

const HomeSection = () => {

    const [input, setInput] = useState("");
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const handleOnChange = (e) => {
        setError(null);
        setInput(e.target.value);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const url = await createShortUrl(input);
            if(url) setData(url);
        } catch(err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const handleCopy = async () => {
        if(data) {
           await navigator.clipboard.writeText(data);
        }
        setCopied(true);
        setTimeout(() => setCopied(false),2000)
    }

    return (
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
                    <form className={'flex justify-center items-center w-full relative'} onSubmit={handleClick}>
                        <input type={'url'} placeholder={'Paste a link to shorten it'}
                               onChange={(e) => handleOnChange(e)}
                               value={input}
                               className={'p-3 py-4 border bg-white rounded-lg w-full shadow-[4px_4px_0_0_#000] outline-0'}/>
                        <button  type={'submit'}
                            className={'absolute border right-3 py-2.5 w-25 h-11 rounded-lg bg-saffron text-eerie-black font-bold shadow-[3px_3px_0_0_#000] cursor-pointer transition-all active:translate-y-1 active:translate-x-1 active:shadow'}>
                            {loading? <Loading/> : 'Shorten'}
                        </button>
                    </form>
                    {/*For Generated URL*/}
                    {data && !loading &&
                        <div className={'flex justify-center items-center w-full relative md:flex-row flex-col gap-2'}>
                            <input type={'text'} value={data} readOnly={true}
                                   className={'p-3 py-4 bg-white rounded-lg w-full shadow-[4px_4px_0_0_#000] outline-0'}/>
                            <button
                                onClick={handleCopy}
                                className={`md:absolute border right-3 py-2.5 md:w-25 w-full rounded-lg  text-eerie-black font-bold shadow-[3px_3px_0_0_#000] cursor-pointer transition-all duration-150 active:translate-y-1 active:translate-x-1 active:shadow ${copied ? 'bg-emerald-300': 'bg-blue-300'}`}>
                                {copied ? "Copied" : "Copy"}
                            </button>
                        </div>
                    }

                    {error && !loading &&
                        <div
                            className={'p-3 py-4 bg-red-100 text-red-600 border-2 border-red-400 rounded-lg w-full shadow-[4px_4px_0_0_#000] font-medium'}>
                            {error}
                        </div>
                    }

                </div>

                <div
                    className={'flex md:justify-center items-center flex-col gap-2  md:w-lg max-w-lg w-[95%] h-100 p-3'}>
                    <img src={'/images/home-section.png'} alt={'link-it'} className={'h-full'}/>
                </div>
            </div>
        </section>
    )
}
export default HomeSection
