import React from 'react'

const Tag = ({text}) => {
    return (
        <span
            className={'self-start text-red-700 font-semibold bg-red-200 rounded-full px-3 py-2 text-center text-xs shadow-[3px_3px_0_0_#000]'}>
            {text}
        </span>
    )
}
export default Tag
