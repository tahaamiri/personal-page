import React from 'react'

export const AboutMe = () => {
    return (
        <div className='mt-72'>
            <div className='flex flex-col mb-14 justify-center items-center space-y-5'>
                <h1 className='font-bold text-white text-5xl'>About Me</h1>
                <div className='flex space-x-2'>
                    <div className='w-[50px] h-[3px] bg-[#707070] rounded-md'></div>
                    <div className='w-[50px] h-[3px] bg-[#00D6FF] rounded-md'></div>
                    <div className='w-[50px] h-[3px] bg-[#707070] rounded-md'></div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='max-w-xl flex flex-col'>
                    <div className='flex flex-col mb-5'>
                        <span className='text-[30px] text-white'>HI</span>
                        <div>
                            <span className='text-[30px] text-white'>I Am </span>
                            <span className='text-[40px] text-white'>Taha Amiri</span>
                        </div>
                    </div>
                    <p className='text-xl text-white'>
                        I Am A Web Application Developer And Software Developer, Currently Living In Tehran, Iran.
                        I Have A Bachelor Of Computer Engineering From K. N. Toosi University Of Technology ,
                        And My Primary Focus And Inspiration For My Studies Is Web Development. In My Free Time,
                        I Love To Study And Play Video Games. I Am Both Driven And Self-Motivated,
                        And I Am Constantly Experimenting With New Technologies And Techniques.
                        I Love Data Science And Trying To Work On It's Roudmap .
                    </p>
                    <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-2xl self-start mt-5 text-[#26252A] bg-white rounded-md px-4 py-3'>Download CV</button>
                </div>
                <div className='h-[488px] w-[488px] border-2 border-[#00D6FF] rounded-full'></div>
            </div>
        </div>
    )
}
