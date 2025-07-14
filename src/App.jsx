import Navbar from './components/Navbar';
import { Outlet } from '@tanstack/react-router';
import Footer from "./components/Footer.jsx";
import StarPopup from './components/StarPopup.jsx';

const App = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-start ">
            <Navbar />
            <Outlet />
            <Footer />
            <StarPopup />
        </div>
    );
};

export default App;
