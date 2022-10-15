import { ResumeProps } from "./resume.interface"
import { ReactComponent as Cerfificate } from '../../assets/icons/certificate.svg';


export const Resume = ({ startAndEnd, organization, title, discription, certificate }: ResumeProps) => {
    return (
        <div className='flex justify-center items-center w-full max-w-2xl mx-auto'>
            <div className='relative w-full pl-5 flex flex-col md:grid md:grid-cols-2'>
                <div className='pb-10  w-[70%]'>
                    <h5 className='text-white text-sm font-semibold'> {startAndEnd} </h5>
                    <span className='text-gray-400 text-xs font-medium'> {organization} </span>
                </div>
                <div className='relative pb-10'>
                    <div className='divider w-[1px] absolute top-0 left-0 md:-left-10 bottom-0 bg-[#666]'>
                        <div className='absolute top-2 -left-2 h-[15px] w-[15px] bg-[#222222] border-2 border-[#0099e5] rounded-full'></div>
                    </div>
                    <h4 className='text-white text-lg font-medium pr-4'> {title} </h4>
                    <div>
                        {discription && discription.map((item, index) => (
                            <ul className='list-disc pl-4 mt-2'>
                                <li>
                                    <p className='text-[#d5d5d5] text-[.92em]' > {item} </p>
                                </li>
                            </ul>
                        ))}
                        {certificate && (
                            <Cerfificate className="mt-5 fill-[#0099e5] w-20 cursor-pointer transition ease-in-out delay-75 hover:translate-x-0 hover:scale-110 duration-300 hover:drop-shadow-2xl" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
