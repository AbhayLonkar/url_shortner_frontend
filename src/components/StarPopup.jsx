import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const StarPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // const hasDismissed = localStorage.getItem('githubStarPromptDismissed');

    // if (!hasDismissed) {
    const showTimer = setTimeout(() => setShowPopup(true), 4000); // show after 4s
    const autoHideTimer = setTimeout(() => {
      setShowPopup(false);
      // localStorage.setItem('githubStarPromptDismissed', 'true');
    }, 14000); // auto hide after 14s (4s delay + 10s visible)

    return () => {
      clearTimeout(showTimer);
      clearTimeout(autoHideTimer);
    };
    // }
  }, []);

  const handleDismiss = () => {
    setShowPopup(false);
    // localStorage.setItem('githubStarPromptDismissed', 'true');
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-black shadow-xl p-4 rounded-xl flex items-center gap-3 z-50 animate-fade-in transition-opacity">
      <FaGithub size={24} className="text-black" />
      <div className="flex-1">
        <p className="text-sm font-semibold text-black">Enjoying LinkIT?</p>
        <p className="text-xs text-gray-600">Give us a ⭐ on GitHub!</p>
      </div>
      <button
        onClick={() => {
          handleDismiss();
          window.open("https://github.com/AbhayLonkar/url_shortner_frontend", "_blank")
        }
        }
        className="bg-black text-white cursor-pointer text-xs px-3 py-1 rounded-md hover:bg-gray-800 transition"
      >
        Star
      </button>
      <button onClick={handleDismiss} className="ml-1 text-gray-500 hover:text-black">
        <IoClose size={18} />
      </button>
    </div>
  );
};

export default StarPopup;
