import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin-in.svg';
import { ReactComponent as Telegram } from '../../assets/icons/telegram-plane.svg';

export const Intro = () => {
    return (
        <div className='relative p-5 md:px-20 xl:px-60 mt-20 flex flex-col items-start w-full mb-52 overflow-hidden'>
            <h4 className='text-[#0099e5] text-3xl'>I Am Taha Amiri</h4>
            <div className="flex flex-col mt-2">
                <h1 className='text-2xl text-white md:text-8xl'>Front End</h1>
                <h1 className='text-2xl text-white md:text-8xl'>Developer</h1>
            </div>
            <div className='mt-2 flex flex-col justify-start items-start border-l-2 pl-2 text-[#949191]'>
                <span>Iran</span>
                <span>Tehran</span>
            </div>
            <div className='flex justify-center py-5 space-x-2'>
                <Github className='fill-[#0099e5] w-12 h-auto' />
                <Instagram className='fill-[#0099e5] w-11 h-auto' />
                <LinkedIn className='fill-[#0099e5] w-11 h-auto' />
                <Telegram className='fill-[#0099e5] w-11 h-auto' />
            </div>
        </div>
    )
}
