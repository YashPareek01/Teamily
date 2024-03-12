import React, { useEffect, useState } from 'react';
import About from './About';
import sliderImage from '../image/Slider-IMages 1.png';
import Pricing from './Pricing';
import Footer from '../components/footer';
import showErrorMessage from '../pages/utils';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % 3)
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, []);


  return (
    <>
      <div id="Home" className='p-4'>
        <div className='flex md:flex-row flex-col justify-center items-center min-h-screen'>
          <div className='flex-1 flex-col items-center justify-center'>
            <div className='flex flex  items-center justify-center p-6 mt-5'>
              {currentSection === 0 && (
                <section className='flex flex-col items-center justify-center'>
                  <div className='flex flex-col'>
                    <h1 className='text-yellow-400 text-xl font-bold'>
                      ATTENDANCE
                    </h1>
                    <strong className='text-3xl'>
                      MONITER EMPLOYEE WORL  HARD AND BALANCE THEM WITH THIS FEATURE EXTENSION
                    </strong>
                    <span className='text-xs mt-4 opacity-85'>
                      A complete attendance management system that allow employee check-in and check-out with useful reports.
                    </span>
                    <div className='rounded text-white text-xs bg-yellow-400 w-fit p-1 mt-2 '>
                      <button onClick={()=> showErrorMessage('Demo page is under Development')}>REQUEST A DEMO</button>
                    </div>
                  </div>
                </section>
              )}
              {currentSection === 1 && (
                <section className='flex flex-col items-center justify-center'>
                  <div className='flex flex-col'>
                    <h1 className='text-yellow-400 text-xl font-bold'>
                      ATTENDANCE 2
                    </h1>
                    <strong className='text-3xl'>
                      MONITER EMPLOYEE WORL  HARD AND BALANCE THEM WITH THIS FEATURE EXTENSION
                    </strong>
                    <span className='text-xs mt-4 opacity-85'>
                      A complete attendance management system that allow employee check-in and check-out with useful reports.
                    </span>
                    <div className='rounded text-white text-xs bg-yellow-400 w-fit p-1 mt-2 '>
                      <button onClick={()=> showErrorMessage('Demo page is under Development')}>REQUEST A DEMO</button>
                    </div>
                  </div>
                </section>
              )}
              {currentSection === 2 && (
                <section className='flex flex-col items-center justify-center'>
                  <div className='flex flex-col'>
                    <h1 className='text-yellow-400 text-xl font-bold'>
                      ATTENDANCE 3
                    </h1>
                    <strong className='text-3xl'>
                      MONITER EMPLOYEE WORL  HARD AND BALANCE THEM WITH THIS FEATURE EXTENSION
                    </strong>
                    <div className='text-xs mt-4 opacity'>
                      A complete attendance management system that allow employee check-in and check-out with useful reports.
                    </div>
                    <div className='rounded text-white text-xs bg-yellow-400 w-fit p-1 mt-2 '>
                      <button onClick={()=> showErrorMessage('Demo page is under Development')}>REQUEST A DEMO</button>
                    </div>
                  </div>
                </section>
              )}
            </div>
            <div>
              <input type="radio" checked={currentSection === 0} readOnly />
              <input type="radio" checked={currentSection === 1} readOnly />
              <input type="radio" checked={currentSection === 2} readOnly />
            </div>
          </div>
          <div className='flex-1 flex items-center justify-center p-6 pt-6'>
            <img src={sliderImage} alt="" className='max-h-full max-w-full' />
          </div>
        </div>
      </div>
      <div className=' ' id='About'>
        <div className=''>
          <About />
        </div>
      </div>
      <div className=' ' id='Pricing'>
        <div className=''>
          <Pricing />
        </div>
      </div>
      <Footer />
    </>
  )
}

