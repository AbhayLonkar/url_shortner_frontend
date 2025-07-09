import React from 'react'

const ErrorBox = ({error}) => {
    return (
        <div className="text-red-600 bg-white border-2 border-red-400 rounded-lg px-4 py-2 text-center font-semibold shadow-sm animate-fade-in">
            {error}
        </div>
    )
}
export default ErrorBox
