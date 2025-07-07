import React from 'react'
import {GiHumanTarget} from "react-icons/gi";

const Card = ({icon, title, subtitle}) => {
    return (
        <div
            className={'border flex flex-col gap-2 py-6 px-3 md:w-60 max-w-60 h-60 rounded-lg shadow-[4px_4px_0_#000] '}>
            {icon}
            <p className={'font-bold text-eerie-black text-lg'}>{title}</p>
            <p className={'text-sm text-eerie-black-600'}>
                {subtitle}
            </p>
        </div>
    )
}
export default Card
