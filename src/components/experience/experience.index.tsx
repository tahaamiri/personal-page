import React from 'react'
import { Header } from '../header/header.index'
import { Resume } from '../resume/resume.index'

export const Experience = () => {
    return (
        <div className='mt-12'>
            <div className='flex flex-col mx-auto px-6 max-w-5xl'>
                <h3 className='mb-10 text-white text-xl font-semibold border-b-2 border-[#0099e5] w-fit md:justify-center md:items-center'>Experience</h3>
                <Resume startAndEnd='Jul 2021 - Present' organization='Mobin Tadbir Sharif' title='Frontend Developer' discription={['Thesis: Emotion recognition using deep learning']} />
                <Resume startAndEnd='May 2022 - Aug 2022' organization='Mobin Tadbir Sharif' title='Software Application Developer' discription={['Developing MCI cloud software application', 'Use electron + react + tailwind css', 'Sync user local files and cloud storage', 'Executable file for windwos and linux using electron-builder']} />
                <Resume startAndEnd='Jun 2021 - Aug 2021' organization='Mobin Tadbir Sharif' title='Frontend Developer Intern' discription={['start learnig frontend fundamentals', 'HTML + CSS + Js']} />
                <Resume startAndEnd='May 2019 - May 2020' organization='K. N. Toosi University Of Technology' title='Secretary General Of Section' discription={['Thesis: Emotion recognition using deep learning']} />
            </div>
        </div>
    )
}
