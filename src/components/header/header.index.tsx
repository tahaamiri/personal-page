import { HeaderProps } from "./header.interface"


export const Header = ({title}: HeaderProps) => {
    return (
        <div className='flex flex-col mb-14 justify-center items-center space-y-5'>
            <h1 className='font-bold text-white text-3xl'> {title} </h1>
            <div className='flex space-x-2'>
                <div className='w-[50px] h-[3px] bg-[#707070] rounded-md'></div>
                <div className='w-[50px] h-[3px] bg-[#0099e5] rounded-md'></div>
                <div className='w-[50px] h-[3px] bg-[#707070] rounded-md'></div>
            </div>
        </div>
    )
}
