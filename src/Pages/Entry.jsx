import CountDown from '../Components/CountDown'
import { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

function Entry(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="entry">
            <p className="bsd">בס"ד</p>
            <div className="logo-entry">
                <img src="logo-y-l.png" className='logo-y-l-entry' />
                <p className='entry-date'>03 . 06 . 2024</p>
            </div>
            <p className="entry-noms">Yael <span className='and'>&</span> Levy</p>
            <CountDown />
            <Link to='/home' className='invit-link'>Voir l'invitation</Link>
            <div className="fleurs-entry">
                <img src="fleur-entry-gauche.png" className='fleur-entry-gauche' />
                <img src="fleur-entry-droite.png" className='fleur-entry-droite' />
            </div>
        </div>

    )
}

export default Entry