import { useRef, useState } from 'react'
import { ReactComponent as Background } from '../../../assets/icons/frontenddeveloper.svg';
import { ReactComponent as Menu } from '../../../assets/icons/menu.svg';
import { AboutMe } from '../../../components/aboutMe/AboutMe.index';
import { Experience } from '../../../components/experience/experience.index';
import { Education } from '../../../components/education/education.index';
import { Certifications } from '../../../components/certifications/certifications.index';
import { Header } from '../../../components/header/header.index';
import { Skils } from '../../../components/skils/skils.index';
import { ContactMe } from '../../../components/contactMe/contactMe.index';
import { Intro } from '../../../components/intro/intro.index';
import { Portofilio } from '../../../components/portofilio/portofilio.index';



export const HomePage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const myResume = useRef<any>();
    const certifications = useRef<any>();
    const skills = useRef<any>();
    const contactMe = useRef<any>();
    const aboutMe = useRef<any>();

    return (
        <div className='bg-[#e6dfdf] dark:bg-[#222222]'>
            <Background className='absolute top-10 right-0 -z-10' />
            <div className='h-screen overflow-x-hidden'>
                <div className='p-5 md:px-20 xl:px-60  shadow-sm z-10'>
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
                    <ul className='hidden md:flex w-full justify-between items-center text-lg font-bold text-[#949191] bg-transparent py-16'>
                        {/* <button className='cursor-pointer'>Home</button> */}
                        <button className='cursor-pointer' onClick={() => {aboutMe.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}} >About me</button>
                        <button className='cursor-pointer' onClick={() => {myResume.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}}>My Resume</button>
                        <button className='cursor-pointer' onClick={() => {skills.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}} >Skills</button>
                        <button className='cursor-pointer' >Portofilio</button>
                        <button className='cursor-pointer' onClick={() => {contactMe.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}} >Contact me</button>
                    </ul>
                </div>
                <Intro />
            </div>

            <div className='md:px-20 lg:px-60 mt-20'>
                <div ref={aboutMe}></div>
                <AboutMe />
                <div ref={myResume}></div>
                <Header title='My Resume'/>
                <Education/>
                <Experience />
                <div ref={certifications}></div>
                <Certifications />
                <div ref={skills}></div>
                <Skils />
                <Portofilio />
                <div ref={contactMe}></div>
                <ContactMe />
            </div>
        </div>
    )
}
