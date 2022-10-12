import { Header } from '../header/header.index'
import React from '../../assets/skills/react.png';
import Tailwind from '../../assets/skills/tailwind.png';
import Git from '../../assets/skills/Git.png';
import JavaScript from '../../assets/skills/JavaScript.png';
import Typescript from '../../assets/skills/Typescript.png';
import Electron from '../../assets/skills/Electron.png';
import Python from '../../assets/skills/Python.png';
import Redux from '../../assets/skills/Redux.png';
import Bootstrap from '../../assets/skills/Bootstrap.png';
import Next from '../../assets/skills/Next.png';

export const Skils = () => {

    const skils = [
        {
            img: React,
            title: "React"
        },
        {
            img: Tailwind,
            title: "Tailwind"
        },
        {
            img: Git,
            title: "Git"
        },
        {
            img: JavaScript,
            title: "JavaScript"
        },
        {
            img: Typescript,
            title: "Typescript"
        },
        {
            img: Electron,
            title: "Electron"
        },
        {
            img: Python,
            title: "Python"
        },
        {
            img: Redux,
            title: "Redux"
        },
        {
            img: Bootstrap,
            title: "Bootstrap"
        },
        {
            img: Next,
            title: "Next js"
        },
    ];



    return (
        <div className='mt-52'>
            <Header title='Skils' />
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center max-w-7xl'>
                    {
                        skils.map((skil) => (
                            <div className='flex flex-col items-center transition ease-in-out delay-75 hover:translate-x-0 hover:scale-110 duration-300'>
                                <div className='relative w-24 h-24'>
                                    <div className='absolute top-0 w-20 h-20 bg-[#0099e5] rounded-lg'></div>
                                    <div className='flex justify-center items-center absolute top-3 left-2 w-20 h-20 backdrop-blur-xl rounded-lg'>
                                        <img src={skil.img} className='w-16 h-auto rounded-xl' />
                                    </div>
                                </div>
                                <span className='text-white text-base font-semibold'> {skil.title} </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
