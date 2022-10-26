
import { Header } from '../header/header.index';
import { Resume } from '../resume/resume.index';

export const Certifications = () => {
    return (
        <div className='mt-52'>
            <Header title='Certifications' />
            <div className='px-6'>
                <Resume startAndEnd='May 2019 - May 2020' organization='Iran Society Of Cryptology K.N.T.U Student Branch' title="Secretary General Of Section" certificate={"Cerfificate"} />
                <Resume startAndEnd='Aug 2022 - Sep2022' organization='Madresesino' title="Data Analysing And Aapplications" certificate={"Cerfificate"} />
            </div>
        </div>
    )
}
