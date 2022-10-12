
import { Header } from '../header/header.index';
import { Resume } from '../resume/resume.index';

export const Certifications = () => {
    return (
        <div className='mt-52'>
            <Header title='Certifications' />
            <Resume startAndEnd='May 2019 - May 2020' organization='Iran Society of Cryptology K.N.T.U student branch' title="Secretary General Of Section" certificate={"Cerfificate"} />       
        </div>
    )
}
