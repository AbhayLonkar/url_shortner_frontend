import React from 'react';

const ComingSoonModal = ({isOpen, onClose}) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
            <div className="bg-white rounded-lg border shadow-[3px_3px_0_#000] w-[90%] max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl font-bold cursor-pointer"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold text-center mb-2 text-yellow-600">🚧 Coming Soon!</h2>
                <p className="text-center text-gray-700 mb-4">
                    This QR Code feature is under construction. We're cooking something cool for you!
                </p>
                <div className="text-center">
                    <button
                        onClick={onClose}
                        className="bg-yellow-500  border shadow-[3px_3px_0_#000] text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition active:shadow active:translate-1 cursor-pointer"
                    >
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonModal;
