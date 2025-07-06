import React from 'react'
import {GiHumanTarget} from "react-icons/gi";

const Card = () => {
    return (
        <div
            className={'border flex flex-col gap-2 py-6 px-3 md:w-60 max-w-60 h-60 rounded-lg shadow-[4px_4px_0_#000] '}>
            <GiHumanTarget size={40}/>
            <p className={'font-bold text-eerie-black text-lg'}>Smart Targeting</p>
            <p className={'text-sm text-eerie-black-600'}>
                Target your customers to increase your reach and redirect them to relevant page. Add a pixel to retarget
                them to your social media and campaign to capture them.
            </p>
        </div>
    )
}
export default Card
