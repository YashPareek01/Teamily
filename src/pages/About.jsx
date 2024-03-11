import React from 'react'
import teamilyImg_1 from '../image/2 1.png';
import teamilyImg_2 from '../image/Mobile.png';
import Attendence from '../image/5145700 1-1.png';
import BreakTime from '../image/Breack 2.png';
import Vacation from '../image/Leave  1-1.png';
import Expenses from '../image/4365180 1.png';
import chatImg from '../image/937819 1.png';
import ManageTask from '../image/3286768 1.png';


function About() {
  return (
    <div className='md:-mt-16 p-4'>
      <section> {/*first section of the about page */}
        <div className='flex flex-col-reverse justify-center items-center md:flex-row min-h-screen  md:mt-0 md:pt-0 '>
          <div className=' flex-1 flex items-center justify-center p-6 pt-6'>
            <img src={teamilyImg_1} alt="" className='w-82 h-auto' />
          </div>
          <div className='flex-1'>
            <span className='text-yellow-400 text-4xl'>
              What Does
            </span>
            <h2 className='text-5xl font-semibold'>TEAMILY OFFER?</h2>
            <span className='text-xm opacity-65 leading-4 block'>
              Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energiscally scale future-proof core competenices.
            </span>
            <div className='flex flex-row pt-2'>
              <div className='flex-1  border-r-2 pl-2 '>
                <div className='flex flex-1 flex-col'>
                  <div className='flex flex-col'>
                    <div className='flex'>
                      <img src={Attendence} alt="" />
                      <h3 className='relative top-4 pl-4  pt-2'>Attendence</h3>
                    </div>
                    <span className='leading-4 block opacity-75 text-xs pl-16'>
                      organically grow the holistic world view of disruptive workplace.
                    </span>
                  </div>
                </div>
                <div className='flex flex-1 flex-col'>
                  <div className='flex flex-col'>
                    <div className='flex'>
                      <img src={Vacation} alt="" />
                      <h3 className='relative top-4 pl-4'>Vacation</h3>
                    </div>
                    <span className='leading-4 block opacity-75 text-xs pl-16'>
                      organically grow the holistic world view of disruptive workplace.
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex-1 pl-4'>
                <div className='flex flex-1 flex-col '>
                  <div className='flex flex-col'>
                    <div className='flex'>
                      <img src={BreakTime} alt="" />
                      <h3 className='relative top-4 pl-4 pt-2'>Break Time</h3>
                    </div>
                    <span className='leading-4 block opacity-75 text-xs pl-16'>
                      organically grow the holistic world view of disruptive workplace.
                    </span>
                  </div>
                </div>
                <div className='flex flex-1 flex-col'>
                  <div className='flex flex-col'>
                    <div className='flex'>
                      <img src={Expenses} alt="" />
                      <h3 className='relative top-4 pl-4 pt-2'>Expenses</h3>
                    </div>
                    <span className='leading-4 block opacity-75 text-xs pl-16'>
                      organically grow the holistic world view of disruptive workplace.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='md:relative md:-top-32'>  {/* second section the about page */}
        <div className='flex flex-col justify-center items-center md:flex-row min-h-screen md:mt-0 md:pt-0 md:relative md:top-4'>
          <div className='flex-1 p-4'>
            <span className='text-yellow-400 text-4xl'>
              What Does
            </span>
            <h2 className='text-5xl font-semibold'>TEAMILY OFFER?</h2>
            <span className='text-xm opacity-65 leading-4 block'>
              Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energiscally scale future-proof core competenices.
            </span>
            <div className='flex-1 flex-col pt-4'>
              <div className='flex flex-1 flex-col'>
                <div className='flex flex-col '>
                  <div className='flex'>
                    <img src={Expenses} alt="" />
                    <h3 className='relative top-4 pl-4 pt-2'>Expenses</h3>
                  </div>
                  <span className='leading-4 block opacity-75 text-xs pl-16'>
                    organically grow the holistic world view of disruptive workplace.
                  </span>
                </div>
              </div>
              <div className='flex flex-1 flex-col'>
                <div className='flex flex-col '>
                  <div className='flex'>
                    <img src={Vacation} alt="" />
                    <h3 className='relative top-4 pl-4 '>Track Vacation</h3>
                  </div>
                  <span className='leading-4 block opacity-75 text-xs pl-16'>
                    organically grow the holistic world view of disruptive workplace.
                  </span>
                </div>
              </div>
              <div className='flex flex-1 flex-col'>
                <div className='flex flex-col '>
                  <div className='flex'>
                    <img src={Attendence} alt="" />
                    <h3 className='relative top-4 pl-4 pt-2'>Attendance</h3>
                  </div>
                  <span className='leading-4 block opacity-75 text-xs pl-16'>
                    organically grow the holistic world view of disruptive workplace.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex-1 flex items-center justify-center p-6 pt-6'>
            <img src={teamilyImg_2} alt="" className='w-86 h-auto' />
          </div>
        </div>
      </section>
      <section className='  md:relative md:-top-32 '> {/*third section of the about */}
        <div className='flex flex-col-reverse justify-center items-center md:flex-row min-h-screen md:relative md:-top-20'>
          <div className='flex-1'>
            <img src={teamilyImg_2} alt="" className='w-86 h-auto md:pt-0' />
          </div>
          <div className='flex-1 p-4'>
            <span className='text-yellow-400 text-3xl'>
              What Does
            </span>
            <h2 className='text-4xl font-semibold'>TEAMILY OFFER?</h2>
            <span className='text-xs opacity-65 leading-4 block'>
              Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energiscally scale future-proof core competenices.
            </span>
            <div className='flex-1 flex-col pt-4'>
              <div className='flex flex-1 flex-col'>
                <div className='flex flex-col '>
                  <div className='flex'>
                    <img src={chatImg} alt="" />
                    <h3 className='relative top-4 pl-6'>Chat With Employee</h3>
                  </div>
                  <span className='leading-4 block opacity-75 text-xs pl-16'>
                    organically grow the holistic world view of disruptive workplace.
                  </span>
                </div>
                <div className='flex flex-col '>
                  <div className='flex'>
                    <img src={ManageTask} alt="" />
                    <h3 className='relative top-4 pl-6'>Chat With Employee</h3>
                  </div>
                  <span className='leading-4 block opacity-75 text-xs pl-16'>
                    organically grow the holistic world view of disruptive workplace.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
