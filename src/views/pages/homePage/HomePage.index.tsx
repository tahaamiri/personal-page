import { useEffect, useRef } from 'react'
import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Github } from '../../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../../assets/icons/linkedin-in.svg';
import { ReactComponent as Telegram } from '../../../assets/icons/telegram-plane.svg';
import { ReactComponent as Background } from '../../../assets/icons/frontenddeveloper.svg';
import { AboutMe } from '../../../components/aboutMe/AboutMe.index';
import { Resume } from '../../../components/resume/Resume.index';



export const HomePage = () => {



    return (
        <div>
            <ul className='flex justify-center items-center text-xl font-bold text-[#949191] space-x-12 py-16'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About me</li>
                <li className='cursor-pointer'>My Resume</li>
                <li className='cursor-pointer'>Skills</li>
                <li className='cursor-pointer'>Portofilio</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>Contact me</li>
            </ul>

            <Background className='absolute top-0 right-0' />

            <div className='absolute top-80 left-20'>
                <div className=' flex flex-col justify-center'>
                    <Instagram />
                    <LinkedIn />
                    <Telegram />
                    <Github />
                </div>
            </div>


            <div className='px-48 mt-36 flex flex-col justify-center items-start'>
                <h4 className='text-[#00D6FF] text-4xl ml-3'>I Am Taha Amiri</h4>
                <h1 className='text-[165px] text-white'>Front End</h1>
                <h1 className='text-[165px] -mt-28 text-white'>Developer</h1>
                <div className='ml-3 flex flex-col justify-start items-start border-l-2 pl-2 text-[#949191]'>
                    <span>Iran</span>
                    <span>Tehran</span>
                </div>
            </div>

            <div className='px-96'>
                <AboutMe />
                <Resume />
            </div>

        </div>
    )
}
