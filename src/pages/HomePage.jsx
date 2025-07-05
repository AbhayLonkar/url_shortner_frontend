import React from 'react'

const HomePage = () => {
    return (
        <div className={'t'}>
            <section id={'home'} className={'flex flex-wrap justify-center items-center md:flex-row flex-col gap-5'}>
                <div className={'flex justify-center items-center flex-col gap-2 md:w-lg w-[90%] h-100 p-3'}>
                    <span
                        className={'self-start text-red-700 font-semibold bg-red-200 rounded-full px-3 py-2 text-center text-xs shadow-[3px_3px_0_0_#000]'}>Easy link shortening</span>
                    <h1 className={'font-bold text-eerie-black text-4xl mt-2'}>
                        LinkIT short URL & QR code generator
                    </h1>
                    <p className={'my-3 text-jet-300 font-medium'}>
                        A short link allows you to collect so much data about syour consumers & their behaviours.
                    </p>
                    <div className={'flex justify-center items-center w-full relative'}>
                        <input type={'url'} placeholder={'Paste a link to shorten it'}
                               className={'p-3 py-4 bg-white rounded-lg w-full shadow-[4px_4px_0_0_#000] outline-0'}/>
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

                <div className={'flex justify-center items-center flex-col gap-2 bg-yellow-300  md:w-lg  h-100 p-3'}>
                    <img src={''} alt={'Linkit'}/>
                </div>
            </section>
        </div>
    )
}
export default HomePage
