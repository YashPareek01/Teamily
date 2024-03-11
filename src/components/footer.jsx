import React from 'react'
import footer_logo from '../image/Group 5.png';
import instaLogo from '../image/Vector-1.png';
import youtubeLogo from '../image/XMLID_822_.png';
import fbLogo from '../image/XMLID_834_.png';
import pinLogo from '../image/Vector.png';
import callLogo from '../image/Call.png';
import msgLogo from '../image/Group.png';
import locaLogo from '../image/Group-1.png';

export default function footer() {
    return (
        <div>
            <div className=' w-100 text-white bottom-0 bg-slate-950  md:rounded-tr-full md:pr-10 md:pl-20  mt-6'>
                <div className='flex flex-col'>
                    <div className='flex p-6 flex-col justify-center items-center md:flex-row md:justify-center md:items-center gap-4'>
                        <div className='flex flex-1 flex-col'>
                            <img src={footer_logo} alt="" />
                            <span>Objectively intregrate enterprise wide strategic theme areas with functionalized infrastructures. interactively productize premium mobile technologies.......</span>
                            <strong className='text-2xl'>Follow Us</strong>
                            <div className='flex gap-4 pl-6'>
                                <img src={instaLogo} alt="" className='border-r-2 p-2 object-none' />
                                <img src={youtubeLogo} alt="" className='border-r-2 p-2 object-none' />
                                <img src={fbLogo} alt="" className='border-r-2 p-2 object-none' />
                                <img src={pinLogo} alt="" className='p-2 object-none' />
                            </div>
                        </div>
                        <div className='flex flex-1 justify-center items-center flex-col'>
                            <strong className='text-2xl'>Applications</strong>
                            <ul className='list-disc'>
                                <li>Our Products</li>
                                <li>News & Updates</li>
                                <li>Try For Free</li>
                                <li>Features</li>
                                <li>Pricelist</li>
                            </ul>
                        </div>
                        <div className=' flex flex-1 justify-center items-center flex-col'>
                            <strong className='text-2xl'>Teamily</strong>
                            <ul className='list-disc'>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Location</li>
                                <li>Jobs @ Codiqa</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className='flex flex-1 justify-center items-start flex-col'>
                            <strong className='text-2xl'>Get IN Touch</strong>
                            <div className='flex-1 flex'>
                                <img src={callLogo} alt="" className='object-none pr-1' />
                                <p>+1 587 203 69</p>
                            </div>
                            <div className='flex-1 flex'>
                                <img src={msgLogo} alt="" className='object-none pr-1' />
                                <p>support@gmail.com</p>
                            </div>
                            <div className='flex-1 flex'>
                                <img src={locaLogo} alt="" className='object-none top-0 pr-1' />
                                <span>Repairon Tower,250 Halderman Rd,west Alexandeia,Oh,458</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col text-xs sm:text-base md:flex-row md:justify-between  '>
                            <p>Copyright ©2024 <span className='text-orange-400 '>TEAMILY</span> All Right Reserved</p>
                            <p>Design By <span className='text-orange-400 '>YUGATECH</span> and Develop By <span className='text-orange-400 '>YASH PAREEK</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
