import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Github } from '../../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../../assets/icons/linkedin-in.svg';
import { ReactComponent as Telegram } from '../../../assets/icons/telegram-plane.svg';
import { ReactComponent as Background } from '../../../assets/icons/frontenddeveloper.svg';
import { ReactComponent as Menu } from '../../../assets/icons/menu.svg';
import { AboutMe } from '../../../components/aboutMe/AboutMe.index';
import { Experience } from '../../../components/experience/experience.index';
import { Education } from '../../../components/education/education.index';
import { NavLink } from 'react-router-dom';
import { Certifications } from '../../../components/certifications/certifications.index';
import { Header } from '../../../components/header/header.index';
import { Skils } from '../../../components/skils/skils.index';



export const HomePage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


    return (
        <div>
            <div className='p-5 md:px-20 lg:px-60'>
                <Menu
                    className='fill-white md:hidden'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                {
                    isMenuOpen && (
                        <ul className='absolute top-16 left-0 rounded-md w-full flex flex-col justify-center items-center text-xl font-bold text-[#949191] bg-[#222222] space-y-5 py-16 mb-[100rem]'>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>About me</li>
                            <li className='cursor-pointer'>My Resume</li>
                            <li className='cursor-pointer'>Skills</li>
                            <li className='cursor-pointer'>Portofilio</li>
                            <li className='cursor-pointer'>Blog</li>
                            <li className='cursor-pointer'>Contact me</li>
                        </ul>
                    )
                }
                <ul className='hidden md:flex w-full justify-evenly items-center text-lg font-bold text-[#949191] bg-transparent py-16'>
                    <NavLink to={'home'} className='cursor-pointer'>Home</NavLink>
                    <NavLink to={'home'} className='cursor-pointer'>About me</NavLink>
                    <NavLink to={'home'} className='cursor-pointer'>My Resume</NavLink>
                    <NavLink to={'home'} className='cursor-pointer'>Skills</NavLink>
                    <NavLink to={'home'} className='cursor-pointer'>Portofilio</NavLink>
                    <NavLink to={'home'} className='cursor-pointer'>Blog</NavLink>
                    <NavLink to={'home'} className='cursor-pointer'>Contact me</NavLink>
                </ul>
            </div>

            {/* <Background className='absolute top-0 right-0' /> */}
            {/* <div className='absolute top-80 left-20'>
                <div className=' flex flex-col justify-center'>
                    <Instagram />
                    <LinkedIn />
                    <Telegram />
                    <Github />
                </div>
            </div> */}


            {/* <div className='px-48 mt-36 flex flex-col justify-center items-start'>
                <h4 className='text-[#00D6FF] text-4xl ml-3'>I Am Taha Amiri</h4>
                <h1 className='text-[165px] text-white'>Front End</h1>
                <h1 className='text-[165px] -mt-28 text-white'>Developer</h1>
                <div className='ml-3 flex flex-col justify-start items-start border-l-2 pl-2 text-[#949191]'>
                    <span>Iran</span>
                    <span>Tehran</span>
                </div>
            </div> */}

            <div className='md:px-20 lg:px-60 my-20'>
                <AboutMe />
                <Header title='My Resume' />
                <Education />
                <Experience />
                <Certifications />
                <Skils />
            </div>

        </div>
    )
}
