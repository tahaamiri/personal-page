import Personal from '../../assets/images/personal.jpg'

export const AboutMe = () => {
    return (
        <div className='my-52'>
            <div className='flex flex-col mb-14 justify-center items-center space-y-5'>
                <h1 className='font-bold text-white text-5xl'>About Me</h1>
                <div className='flex space-x-2'>
                    <div className='w-[50px] h-[3px] bg-[#707070] rounded-md'></div>
                    <div className='w-[50px] h-[3px] bg-[#00D6FF] rounded-md'></div>
                    <div className='w-[50px] h-[3px] bg-[#707070] rounded-md'></div>
                </div>
            </div>
            <div className='flex flex-col-reverse items-center justify-evenly md:flex-row'>
                <div className='max-w-3xl flex flex-col mt-10 px-6'>
                    <div className='flex flex-col mb-5'>
                        <span className='text-[30px] text-white'>HI</span>
                        <div>
                            <span className='text-3xl text-white'>I Am </span>
                            <span className='text-4xl font-semibold text-white'>Taha Amiri</span>
                        </div>
                    </div>
                    <p className='text-sm font-normal text-white text-left'>
                        I Am A Web Application Developer And Software Developer, Currently Living In Tehran, Iran.
                        I Have A Bachelor Of Computer Engineering From K. N. Toosi University Of Technology ,
                        And My Primary Focus And Inspiration For My Studies Is Web Development. In My Free Time,
                        I Love To Study And Play Video Games. I Am Both Driven And Self-Motivated,
                        And I Am Constantly Experimenting With New Technologies And Techniques.
                        I Love Data Science And Trying To Work On It's Roudmap .
                    </p>
                    <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-[1em] font-medium bg-transparent border border-[#0099e5] self-start mt-5 text-white rounded-md px-4 py-3'>Download CV</button>
                </div>
                <img src={Personal} className=" w-full max-w-3xl max-h-[400px] object-cover rounded-sm" alt="hi there, its me" />
            </div>
        </div>
    )
}
