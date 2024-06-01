import { Link } from 'react-router-dom';
import MaxWidthLayout from '../../Layouts/MaxWidthLayout';
import audiophile from '../../assets/audiophile.png';
import { FaTwitter, FaInstagram, FaFacebookSquare } from "react-icons/fa";




const Footer = () => {
    return (
        <footer className='p-5 bg-primary-black mt-5'>
            <MaxWidthLayout>
                <div>

                    <div className='lg:flex lg:items-center lg:justify-between'>
                        <img src={audiophile} alt="Audiophille logo" className='mt-10 max-w-fit mx-auto md:mx-0 lg:m-0' />

                        <nav className='text-white flex flex-col items-center gap-4 my-10
                        md:flex-row md:items-center'>
                            <Link to={'#'} className='hover:text-primary-brown'>HOME</Link>
                            <Link to={'#'} className='hover:text-primary-brown'>HEADPHONES</Link>
                            <Link to={'#'} className='hover:text-primary-brown'>SPEAKERS</Link>
                            <Link to={'#'} className='hover:text-primary-brown'>EARPHONES</Link>
                        </nav>
                    </div>


                    <p className='text-slate-500 text-center md:text-left lg:max-w-xl'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

                    <div className='mt-12 md:flex md:justify-between md:items-center lg:p-0 lg:h-[100px] lg:mt-2'>
                        <p className='text-slate-500 text-sm text-center lg:mt-auto'>Copyright 2021. All Rights Reserved</p>
                        <div className='flex justify-center my-7 gap-3 lg:mb-auto lg:m-0'>
                            <FaTwitter className='text-white hover:text-primary-brown cursor-pointer' size={25} />
                            <FaInstagram className='text-white hover:text-primary-brown cursor-pointer' size={25} />
                            <FaFacebookSquare className='text-white hover:text-primary-brown cursor-pointer' size={25} />
                        </div>
                    </div>
                </div>
            </MaxWidthLayout>
        </footer>
    )
}

export default Footer
