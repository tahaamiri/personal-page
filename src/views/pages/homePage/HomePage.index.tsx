import {    useState } from 'react'
import { ReactComponent as Background } from '../../../assets/icons/frontenddeveloper.svg';
import { ReactComponent as Menu } from '../../../assets/icons/menu.svg';
import { AboutMe } from '../../../components/aboutMe/AboutMe.index';
import { Experience } from '../../../components/experience/experience.index';
import { Education } from '../../../components/education/education.index';
import { NavLink } from 'react-router-dom';
import { Certifications } from '../../../components/certifications/certifications.index';
import { Header } from '../../../components/header/header.index';
import { Skils } from '../../../components/skils/skils.index';
import { ContactMe } from '../../../components/contactMe/contactMe.index';
import { Intro } from '../../../components/intro/intro.index';



export const HomePage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


    return (
        <div>
            <Background className='absolute top-0 right-0 -z-10' />
            <div className='h-screen overflow-x-hidden'>
                <div className='p-5 md:px-20 xl:px-60 z-10'>
                    <Menu
                        className='fill-white md:hidden'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    {
                        isMenuOpen && (
                            <ul className='absolute top-16 left-0 rounded-md w-full flex flex-col justify-center items-center text-xl font-bold text-[#949191] bg-[#333333] space-y-5 py-16 z-10'>
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
                <Intro />
            </div>

            <div className='md:px-20 lg:px-60 my-20'>
                <AboutMe />
                <Header title='My Resume' />
                <Education />
                <Experience />
                <Certifications />
                <Skils />
                <ContactMe />
            </div>

        </div>
    )
}
