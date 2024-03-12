import React, { useState, useEffect } from 'react';
import './navbar.css';
import NavImg from '../image/logo.png';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import showErrorMessage from '../pages/utils';

export default function NavBar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        const updateMenuVisibility = () => {
            setMenuVisible(window.innerWidth > 768);
        };

        updateMenuVisibility();
        window.addEventListener('resize', updateMenuVisibility);
        return () => {
            window.removeEventListener('resize', updateMenuVisibility);
        };
    }, []);

    return (
        <>
            <div className='fixed top-0 left-0 right-0  bg-white z-auto z-[10] md:z-[10]'>
                <nav className='flex md:justify-around md:justify-center md:items-center md:m-2 md:pl-20 '>
                    <div className='  max-h-full drop-shadow-md rounded-md m-auto z-auto z-[20] '>
                        <Link to='Home' spy={true} smooth={true} offset={-100} duration={500} >
                            <img src={NavImg} alt="logo" className='md:size-22 lg:size-22' />
                        </Link>
                    </div>
                    <div className='flex flex-col p-2 sm:p-0 md:flex-row bg-white absolute md:items-center  md:p-0 py-0 pl-15 sm:py-0  pb-15 md:justify-end md:static z-auto z-[20] left-0  w-full lg:mx-40 md:transition-all duration-500 ease-in text-1xl pl-6 md:text-xs md:pr-10 md:gap-4 lg:text-xl md:visible'>
                        <button className='absolute right-4 top-2 cursor-pointer md:hidden' onClick={toggleMenu}>
                            {menuVisible ? <ImCross /> : <FaBars />}
                        </button>
                        <div className={`${menuVisible ? '' : 'hidden'} flex flex-col md:flex-row gap-2 md:text-xs md:justify-center md:items-center `}>
                            <ul className='flex flex-col lg:flex-row gap-4 md:flex-row sm:t-20 md:gap-4'>
                                <li className='nav-item cursor-pointer'>
                                    <Link to='Home' spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
                                </li>
                                <li className='nav-item cursor-pointer'>
                                    <Link to='About' spy={true} smooth={true} offset={-100} duration={500} >About Us</Link>
                                </li>
                                <li className=' nav-item cursor-pointer'>
                                    <Link to='Pricing' spy={true} smooth={true} offset={-100} duration={500} >Pricing</Link>
                                </li >
                                <li className=' nav-item cursor-pointer'>
                                    <Link to='/Demo' onClick={()=> showErrorMessage('Please try After Some Time')}>Demo</Link>
                                </li>
                                <li className=' nav-item cursor-pointer'>
                                    <Link to='/Blogs' onClick={()=> showErrorMessage('Please try After Some Time')}>Blogs</Link>
                                </li>
                                <li className=' nav-item cursor-pointer'>
                                    <Link to='/ContactUs' onClick={()=> showErrorMessage('Please try After Some Time')}>Contact Us</Link>
                                </li>
                            </ul>
                            <div className='border w-fit rounded-lg p-2 pl-5 pr-5 bg-yellow-400 lg:ml-10  cursor-pointer'>
                                <Link to='/signUp'>Sign up</Link> / <Link to='/signIn'>Sign in</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <hr className='border-t border-gray-200 mx-5 shadow ' />
            </div>
            <Outlet />
        </>
    );
}
