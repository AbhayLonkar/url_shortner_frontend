import {Link, useNavigate} from '@tanstack/react-router';
import {useDispatch, useSelector} from "react-redux";
import {IoMdHome} from "react-icons/io";
import {FaGithub, FaRegStar} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {logout} from '../../store/slice/authSlice.js';
import {logoutUser} from '../api/user.api.js';
import {useQueryClient} from '@tanstack/react-query';
import Button from './Button.jsx';
import GithubBtn from './GithubBtn.jsx';
import LinkBtn from './LinkBtn.jsx';
import {useState} from 'react';

const Navbar = () => {
    const {isAuthenticated} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = async () => {
        setIsOpen(false)
        try {
            await logoutUser();
            queryClient.removeQueries(['currentUser']);
            dispatch(logout());
            navigate({to: "/auth"});
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };


    return (
        <>
            <nav className="w-full bg-saffron border-b-4 px-6 md:px-14 py-3 flex items-center justify-between">
                {/* Brand */}
                <span
                    className="text-2xl font-extrabold text-eerie-black tracking-tight select-none flex gap-1.5 items-center justify-center">
                    <img src={'/link.png'} className={'h-7'} alt={'logo'}/> LinkIT
                </span>

                {/* Desktop Menu */}
                <div className="md:flex gap-2 items-center hidden">
                    <LinkBtn to={'/'} text={<IoMdHome size={22}/>} path='/'/>

                    {!isAuthenticated && <LinkBtn to={'/auth'} text={'Login'} path={'/auth'}/>}
                    {isAuthenticated && <LinkBtn to={'/dashboard'} text={'Dashboard'} path={'/dashboard'}/>}
                    {isAuthenticated && <Button text={"Logout"} onclick={handleLogout}/>}

                    <GithubBtn
                        text={<FaRegStar size={22}/>}
                        onclick={() => window.open("https://github.com/AbhayLonkar/url_shortner_frontend", "_blank")}
                        path='/git'
                    />
                </div>

                {/* Mobile Toggle */}
                <div className='md:hidden flex gap-3 items-center justify-center'>
                    <GithubBtn
                        text={<FaRegStar size={22}/>}
                        onclick={() => window.open("https://github.com/AbhayLonkar/url_shortner_frontend", "_blank")}
                        path='/git'
                    />
                    <button className="md:hidden flex text-eerie-black" onClick={() => setIsOpen(prev => !prev)}>
                        <GiHamburgerMenu size={24}/>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden flex flex-col w-full  bg-saffron transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "border-b-4 max-h-screen py-3 px-6" : "max-h-0 py-0 px-0"}`}>
                <Link to='/' onClick={() => setIsOpen(false)}>
                    <div className='py-2 border-b border-black text-eerie-black font-semibold text-center'>Home</div>
                </Link>

                {!isAuthenticated && (
                    <Link to='/auth' onClick={() => setIsOpen(false)}>
                        <div className='py-2 border-b border-black text-eerie-black font-semibold text-center'>Login
                        </div>
                    </Link>
                )}

                {isAuthenticated && (
                    <>
                        <Link to='/dashboard' onClick={() => setIsOpen(false)}>
                            <div
                                className='py-2 border-b border-black text-eerie-black font-semibold text-center'>Dashboard
                            </div>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="py-2 border-black text-eerie-black font-semibold text-center"
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

export default Navbar;
