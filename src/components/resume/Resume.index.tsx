import { ReactComponent as KNTU} from '../../assets/education/kntu.svg';
import { ReactComponent as Location} from '../../assets/icons/location-on.svg';


export const Resume = () => {


    return (
        <div className='mt-72'>
            <div className='flex flex-col mb-14 justify-center items-center space-y-5'>
                <h1 className='font-bold text-white text-5xl'>My Resume</h1>
                <div className='flex space-x-2'>
                    <div className='w-[50px] h-[3px] bg-[#707070] rounded-md'></div>
                    <div className='w-[50px] h-[3px] bg-[#00D6FF] rounded-md'></div>
                    <div className='w-[50px] h-[3px] bg-[#707070] rounded-md'></div>
                </div>
            </div>
            
            <div>
                <div className='inline-flex flex-col'>
                    <span className='text-white text-[40px] font-bold'>Education</span>
                    <div className='w-full h-[3px] bg-[#00D6FF] rounded-md'></div>
                </div>

                <div className='flex items-center justify-between'>
                    <KNTU />
                    <div className='relative flex border-l-2 p-5'>
                        <div className='absolute -left-3 h-[25px] w-[25px] bg-[#26252A] border-2 border-[#00D6FF] rounded-full'></div>
                        <span className='text-white text-lg font-medium mx-10'>2017 - 2021</span>
                        <div className='flex flex-col space-y-3'>
                            <span className='text-white text-lg font-medium'>K. N. Toosi University Of Technology</span>
                            <span className='text-white text-lg font-medium'>Bachelor's Degree, Computer Engineering</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <Location />
                        <span className='text-white text-lg font-medium'>Tehran - Iran</span>
                    </div>
                </div>

            </div>

        </div>
    )
}
