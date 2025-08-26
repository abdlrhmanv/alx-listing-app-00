import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center">
      <div className='w-full h-7 bg-primary'></div>
      <div className='flex flex-col justify-between items-center w-full px-40  bg-footer'>
        <div className='flex flex-row justify-between w-full pb-28 py-10 border-b border-b-neutral-700'>
          <div className='flex flex-col justify-between gap-8 w-1/2 h-full'>
            <img src="/assets/logo-white.png" alt="logo" className='w-[60px] h-8' />
            <p className='font-quicksand font-light text-base w-2xl text-footer'>ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</p>
          </div>
          <div className='flex flex-row justify-between items-start w-1/2 gap-10 h-full'>
            <div className='flex flex-col justify-between gap-8'>
              <h3 className='font-quicksand font-normal text-2xl text-footer'>Explore</h3>
              <ul className='flex flex-col justify-between gap-4'>
                <li className='flex flex-row justify-between items-center gap-4'>
                  <a href="#" className='font-quicksand font-light text-base text-footer'>Apartments in Dubai</a>
                </li>
                <li className='flex flex-row justify-between items-center gap-4'>
                  <a href="#" className='font-quicksand font-light text-base text-footer'>Hotels in New York</a>
                </li>
                <li className='flex flex-row justify-between items-center gap-4'>
                  <a href="#" className='font-quicksand font-light text-base text-footer'>Mansion in Indonesia</a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col justify-between gap-8'>
              <h3 className='font-quicksand font-normal text-2xl text-footer'>Company</h3>
              <ul className='flex flex-col justify-between gap-4'>
                <li className='flex flex-row justify-between items-center gap-4'>
                  <a href="#" className='font-quicksand font-light text-base text-footer'>About Us</a>
                </li>
                <li className='flex flex-row justify-between items-center gap-4'>
                  <a href="#" className='font-quicksand font-light text-base text-footer'>Blog</a>
                </li>
                <li className='flex flex-row justify-between items-center gap-4'>
                  <a href="#" className='font-quicksand font-light text-base text-footer'>Career</a>
                </li>
                <li className='flex flex-row justify-between items-center gap-4'>
                  <a href="#" className='font-quicksand font-light text-base text-footer'>Customers</a>
                </li>
                <li className='flex flex-row justify-between items-center gap-4'>
                  <a href="#" className='font-quicksand font-light text-base text-footer'>Brand</a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col justify-between gap-8'>
              <h3 className='font-quicksand font-normal text-2xl text-footer'>Help</h3>
              <ul className='flex flex-col justify-between gap-4'>
                <li className='flex flex-row justify-between items-center gap-4'>
                  <a href="#" className='font-quicksand font-light text-base text-footer'>Support</a>
                </li>
                <li className='flex flex-row justify-between items-center gap-4'>
                  <a href="#" className='font-quicksand font-light text-base text-footer'>Cancel booking</a>
                </li>
                <li className='flex flex-row justify-between items-center gap-4'>
                  <a href="#" className='font-quicksand font-light text-base text-footer'>Refunds Process</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between items-center w-full bg-footer py-5'>
          <div className='flex flex-row justify-between items-center w-full'>
            <p className='font-quicksand font-normal text-base text-footer whitespace-nowrap'>Some hotel requires you to cancel more than 24 hours before check-in. Details <span className='text-footer-link'> <a href="#">here</a></span></p>
            <div className='flex flex-row justify-between items-center gap-4 text-footer'>
              <a href="#" className='font-quicksand font-normal text-footer'>Terms of Service</a>
              <a href="#" className='font-quicksand font-normal text-footer'>Privacy Policy</a>
              <a href="#" className='font-quicksand font-normal text-footer'>Cookies Policy</a>
              <a href="#" className='font-quicksand font-normal text-footer'>Partners</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;