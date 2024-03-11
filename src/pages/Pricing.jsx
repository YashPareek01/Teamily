import React, { useState } from 'react';
import userImg from '../image/1077063 1.png';
import monthImg from '../image/1077063 2.png';
import totalImg from '../image/Rupess 1.png';
import revImg from '../image/x.webp';

export default function Pricing() {
  const [selectedImage, setSelectedImage] = useState(1);
  // const images = [monthImg, revImg, totalImg];
  const images = [revImg, revImg, revImg];

  const userList = () => {
    const user_numbers = []; 
    for (let i = 0; i <= 1000; i += 100) {
      user_numbers.push(i === 0 ? 1 : i);
    }
    return user_numbers; 
  };
  const user_numbers = userList();

  const monthList = () => {
    const month_numbers = []; 
    for (let i = 1; i <= 12; i += 1) {
      month_numbers.push(i);
    }
    return month_numbers; 
  };
  const month_numbers = monthList();
  return (
    <div>
      <div id="Pricing" className='md:relative md:-top-32 p-4'>
        <div className="flex flex-col justify-center items-center">
          <strong className='text-3xl'>SIMPLE PRICING</strong>
          <p className='text-xs p-4'>Choose extensions that match your business needs</p>
          <div className="flex justify-center items-center gap-2 text-xs">
            <button className='flex flex-col bg-yellow-400 rounded-sm justify-center items-center p-2 hover:p-4 hover:shadow-2xl focus:outline-none focus:ring focus:ring-black'>
              <strong>Monthly</strong>
              <p>5$/- User Per Month</p>
            </button>
            <button className='flex flex-col bg-black rounded-sm text-white justify-center items-center p-2 hover:p-4 hover:shadow-2xl focus:outline-none focus:ring focus:ring-yellow-400'>
              <strong>Yearly</strong>
              <p>4$/- User Per Month</p>
            </button>
          </div>
          <div className='flex gap-2 pt-4'>
            <p className='text-xs'>Choose number of users</p>
            <input type="number" name="" className='h-5 w-7 border border-gray-500' />
          </div>
          <div className='flex flex-col justify-center items-center pt-2'>
            <input type="range" name="" className='w-11/12 sm:w-11/12 md:w-11/12' />
            <ul className='flex  justify-center items-center gap-1 sm:gap-4 md:gap-6 lg:gap-10'>
              {user_numbers.map((number) => (
                <li key={number}>{number}</li>
              ))}
            </ul>
          </div>
          <div className='flex justify-center items-center gap-2 pt-4'>
            <p className='text-xs'>Choose number of Month</p>
            <input type="number" name="" className='h-5 w-7 border border-gray-500' />
          </div>
          <div className='flex flex-col justify-center items-center pt-2'>
            <input type="range" name="" className='w-11/12 sm:w-11/12 md:w-11/12' />
            <ul className='flex  justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-12    '>
              {month_numbers.map((number) => (
                <li key={number}>{number}</li>
              ))}
            </ul>
          </div>
          <div className='flex mt-6'>
            <div className='flex-1 flex flex-col'>
              <div className='flex flex-col justify-center items-center border border-0 p-4 text-xm  shadow-2xl gap-4 sm:flex-row md:justify-center md:items-center'>
                <div className='flex flex-1 gap-6  justify-center items-center border-b-2 border-r-0 md:border-b-0 md:border-r-4'>
                  <img src={userImg} alt="" className='size-5 relative top-[-22px]' />
                  <div className='flex flex-col gap-4'>
                    <span className='font-semibold'>Number of Users</span>
                    <span className='text-yellow-600'>100</span>
                  </div>
                </div>
                <div className='flex flex-1 gap-6 justify-center items-center border-b-2 border-r-0 md:border-b-0 md:border-r-4'>
                  <img src={monthImg} alt="" className='size-5 relative top-[-22px]' />
                  <div className='flex flex-col gap-6'>
                    <span className='font-semibold'>Number of Months</span>
                    <span className='text-yellow-600'>02</span>
                  </div>
                </div>
                <div className='flex flex-1 gap-4 justify-center items-center  '>
                  <img src={totalImg} alt="" className='size-5  relative top-[-22px]' />
                  <div className='flex flex-col gap-6'>
                    <span className='font-semibold'>Total</span>
                    <span className='text-yellow-600'>$1000</span>
                  </div>
                </div>
              </div>
              <div>
                <button>Demo</button>
              </div>
              <div className='flex flex-col mt-12 justify-center items-center md:mt-20'>
                <strong className='text-yellow-400 text-4xl'>REVIEWS</strong>
                <span className='text-4xl font-semibold'>WHAT THEY SAYS</span>
                <div className='relative'>
                  <div className='flex border border-2 border-2-200'>
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt=""
                        className={`border transition-opacity ease-in-out duration-500 ${selectedImage === index ? 'border-2 border-2-200 opacity-1' : 'opacity-0'}`}
                        style={{ display: selectedImage === index ? 'block' : 'none' }}
                      />
                    ))}
                  </div>
                  <div className="flex  gap-4 mt-4 absolute bottom-[33px] left-[110px] sm:left-[110px] md:left-[132px]">
                    {images.map((_, index) => (
                      <p
                        key={index}
                        className={`w-8 h-1 border border-gray-200 ${selectedImage === index ? 'bg-gray-500' : 'bg-white'}`}
                        onClick={() => setSelectedImage(index)}
                      ></p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
