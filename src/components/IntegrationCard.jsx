import React from 'react'

const IntegrationCard = ({image, name}) => {
    return (
        <div className={'border p-6 h-45 w-45 flex justify-center items-center flex-col gap-5 rounded-lg shadow-[2px_2px_0_#000] cursor-pointer hover:scale-110 transition-all active:scale-110'}>
            <img src={image} alt={'WordPress'} width={'50px'} />
            <p className={'text-center font-semibold text-eerie-black'}>{name}</p>
        </div>
    )
}
export default IntegrationCard
