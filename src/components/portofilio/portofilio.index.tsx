import { Header } from "../header/header.index"
import Hamrahi from '../../assets/projects/Hamrahi/Login-desktop.png';
import Personal from '../../assets/projects/Personal/personal.png';
import { useState } from "react";

export const Portofilio = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);


    return (
        <>
            <div className='mt-52'>
                <Header title='Portofilio' />
                <div className='flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 px-6'>
                    <img src={Hamrahi} alt="" className="h-72 w-60 rounded-md object-cover border-2 shadow-2xl transition ease-in-out hover:translate-x-0 hover:scale-110 duration-300 hover:drop-shadow-2xl border-[#0099e5]" onClick={() => setIsOpen(true)} />
                    <img src={Personal} alt="" className="h-72 w-60 rounded-md object-cover border-2 shadow-2xl transition ease-in-out hover:translate-x-0 hover:scale-110 duration-300 hover:drop-shadow-2xl border-[#0099e5]" onClick={() => setIsOpen(true)} />
                </div>
            </div>

        </>
    )
}
