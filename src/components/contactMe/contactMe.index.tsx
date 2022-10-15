import { Header } from '../header/header.index'
import { ReactComponent as Phone } from '../../assets/icons/phone_icon.svg';
import { ReactComponent as Email } from '../../assets/icons/email.svg';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import { ReactComponent as Available } from '../../assets/icons/success.svg';

export const ContactMe = () => {
    return (
        <div className='mt-52'>
            <Header title='Contact Me' />
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 justify-items-center max-w-7xl'>
                    <div className='min-w-[225px] flex flex-col justify-center items-center bg-[#333333] p-5 rounded-md transition ease-in-out delay-75 hover:translate-x-0 hover:scale-110 duration-300 hover:drop-shadow-2xl'>
                        <Phone className='mb-5 w-20 h-20 fill-gray-400 '/>
                        <span className='text-white font-semibold text-base'>+98 918 580 7399</span>
                    </div>
                    <div className='min-w-[225px] flex flex-col justify-center items-center bg-[#333333] p-5 rounded-md transition ease-in-out delay-75 hover:translate-x-0 hover:scale-110 duration-300 hover:drop-shadow-2xl'>
                        <Email className='mb-5 w-20 h-20 fill-gray-400 '/>
                        <span className='text-white font-semibold text-base'>amiri.taha.98@gmail.com</span>
                    </div>
                    <div className='min-w-[225px] flex flex-col justify-center items-center bg-[#333333] p-5 rounded-md transition ease-in-out delay-75 hover:translate-x-0 hover:scale-110 duration-300 hover:drop-shadow-2xl'>
                        <Location className='mb-5 w-20 h-20 fill-gray-400 '/>
                        <span className='text-white font-semibold text-base'>Tehran - Iran</span>
                    </div>
                    <div className='min-w-[225px] flex flex-col justify-center items-center bg-[#333333] p-5 rounded-md transition ease-in-out delay-75 hover:translate-x-0 hover:scale-110 duration-300 hover:drop-shadow-2xl'>
                        <Available className='mb-5 w-20 h-20 stroke-gray-400 '/>
                        <span className='text-white font-semibold text-base'>Freelance Available</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
