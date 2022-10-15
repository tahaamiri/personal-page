import { useEffect } from 'react';
import { Resume } from '../resume/resume.index';


export const Education = () => {

    return (
        <div>
            <div className='flex flex-col mx-auto px-6 max-w-5xl'>
                <h3 className='mb-10 text-white text-xl font-semibold border-b-2 border-[#0099e5] w-fit md:justify-center md:items-center'>Education</h3>
                <Resume startAndEnd='2017 - 2021' organization='K. N. Toosi University Of Technology' title="Bachelor's Degree, Computer Engineering" discription={["Thesis: Emotion recognition using deep learning"]} />
            </div>
        </div>
    )
}
