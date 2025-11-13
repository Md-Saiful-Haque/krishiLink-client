import React from 'react';
import logo from '../assets/logo.png'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router';
//mport footerImg from '../assets/footer.png' 

const Footer = () => {


    return (
        <div className='bg-[#334b35] '>
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center pt-5 pl-2.5'>
                <div className='md:w-1/3'>
                    <div className='flex items-center'>
                        <img src={logo} alt="" className='w-20 h-20' />
                        <h2 className='text-xl font-bold text-white'>Krishi</h2>
                    </div>
                    <p className='mb-8 text-[#b3c5b5]'>KrishiLink is a modern web application that connects people in the agricultural sector such as farmers, traders, and consumers in one digital space.</p>
                    <hr className="separator" />
                    {/* Contact Details Section */}
                    <div className="contact-details text-white mt-8">

                        {/* Phone Number */}
                        <div className="contact-item flex items-center gap-1.5">
                            <FaPhone className="icon text-[#f1cf69]" />
                            <span className="info-text">+92 666 888 0000</span>
                        </div>

                        {/* Email Address */}
                        <div className="contact-item flex my-2 items-center gap-1.5">
                            <FaEnvelope className="icon text-[#f1cf69]" />
                            <span className="info-text">needhelp@company.com</span>
                        </div>

                        {/* Address */}
                        <div className="contact-item flex items-center gap-1.5">
                            <FaMapMarkerAlt className="icon text-[#f1cf69]" />
                            <span className="info-text">666 road, Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col list-none mr-70 md:mr-0 mb-3 md:mb-0 gap-4 mt-4 md:mt-0'>
                    <h2 className='text-2xl text-white font-semibold'>Explore</h2>
                    <li><Link className='text-[#b3c5b5]'>New Projects</Link></li>
                    <li><Link className='text-[#b3c5b5]'>Our services</Link></li>
                    <li><Link className='text-[#b3c5b5]'>About Us</Link></li>
                    <li><Link className='text-[#b3c5b5]'>Get In Touch</Link></li>
                    <li><Link className='text-[#b3c5b5]'>Farmers</Link></li>
                </div>
                <div>
                    <h2 className='text-2xl text-white font-semibold'>Newletter</h2>
                    <p className='mt-4 text-[#b3c5b5]'>Sign up now to get daily latest news & updates from us</p>
                    <div className='mt-8 relative'>
                        <input type="email" name="" id="" placeholder='Your Email' className='bg-[#263c28] py-5 pl-4 pr-14 text-[#b3c5b5] outline-none border-none rounded-full' />
                        <div className='absolute top-1 left-50'>
                            <button className='bg-[#f1cf69] rounded-full p-4'>
                                Go
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#6d8c54]'>
                <div className='max-w-[1200px] mx-auto flex justify-between items-center mt-10'>
                    <p className='text-[#ffffff] mt-8 font-semibold mb-8 p-0.5 md:p-0'>© Copyright 2025 by Krishi</p>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;