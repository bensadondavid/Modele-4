import { useContext } from 'react';
import { Context} from '../Context';
import Musique from '../Components/Musique'
import Mairie from './Mairie'
import Henne from './Henne'
import Houppa from './Houppa'
import BeachParty from './BeachParty';
import Chabat from './Chabat';
import Response from './Response';

function Home(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="home">
            <p className='bsd'>בס"ד</p>
            <img src="logo-y-l.png" className='logo-home' />
            <img src="fleurs-separation.png" className='fleurs-separation' />
            <Musique />
            <Mairie />
            <img src="fleurs-separation.png" className='fleurs-separation' />
            <Henne />
            <img src="fleurs-separation.png" className='fleurs-separation' />
            <Houppa />
            <img src="fleurs-separation.png" className='fleurs-separation' />
            <Chabat />
            <img src="fleurs-separation.png" className='fleurs-separation' />
            <Response />
            <img src="fleurs-vertes-bas.png" className='fleurs-bas' />
        </div>

    )
}

export default Home