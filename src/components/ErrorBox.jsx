import React from 'react'

const ErrorBox = ({error}) => {
    return (
        <div
            className="text-red-600 bg-white border-2 border-red-400 rounded-lg px-4 max-w-xs self-center py-2 text-center font-semibold shadow-sm transition-all animate-fade-in">
            {error}
        </div>
    )
}
export default ErrorBox
